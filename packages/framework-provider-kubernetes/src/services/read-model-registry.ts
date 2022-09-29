import { BoosterConfig, ReadModelInterface, ReadModelEnvelope, UUID } from '@boostercloud/framework-types'
import { getLogger } from '@boostercloud/framework-common-helpers'
import fetch from 'node-fetch'
import { RedisAdapter } from './redis-adapter'

// TODO: Implement querying with filters properly
interface Filters {
  id: {
    eq: string
  }
}

export class ReadModelRegistry {
  private readonly redis: RedisAdapter

  constructor(readonly url: string) {
    this.redis = RedisAdapter.build()
  }

  public async search(
    config: BoosterConfig,
    readModelName: string,
    filters: Filters
  ): Promise<Array<ReadModelInterface>> {
    const logger = getLogger(config, 'ReadModelRegistry#search')
    if (filters.id) {
      // TODO: Allow complex filters in K8s provider. Currently we only allow filter by Id or get all entries
      const readModelId = filters.id.eq
      logger.debug(`Got id ${readModelId ?? 'UNDEFINED'}`)
      if (!readModelId) throw new Error('Only searching by ID is supported')
      const url = `${this.url}/v1.0/state/statestore/${this.readModelKey(readModelName, readModelId)}`
      logger.debug(`Performing a fetch to ${url}`)
      const response = await fetch(url)
      if (!response.ok) {
        logger.debug(`Error on performing GET from ${url}`)
      }
      logger.debug(`Got result ${JSON.stringify(response)}`)
      try {
        const body = await response.json()
        logger.debug(`Got JSON ${JSON.stringify(body)}`)
        // TODO: Remove unnecessary id setting from k8s read model registry
        if (body) {
          body.id = readModelId
        }
        return [body.value]
      } catch (err) {
        logger.debug(`Error ${JSON.stringify(err)}`)
        return []
      }
    } else {
      const keys = await this.redis.keys(config, ['rm', readModelName, '*'].join(RedisAdapter.keySeparator))
      logger.debug(`Obtainer following keys for query: ${keys}`)
      const results: ReadModelInterface[] = []
      await Promise.all(
        keys.map(async (k) => {
          const data = await this.redis.hget<ReadModelEnvelope>(k)
          if (data?.value) {
            results.push(data.value)
          }
        })
      )
      logger.debug(`Got ${results} envelopes, returning`)
      return results
    }
  }

  public async store(config: BoosterConfig, readModel: ReadModelEnvelope): Promise<void> {
    await this.redis.set(config, this.readModelEnvelopeKey(readModel), readModel)
  }

  public async fetch(
    config: BoosterConfig,
    readModelName: string,
    readModelID: UUID
  ): Promise<ReadModelInterface | undefined> {
    const logger = getLogger(config, 'ReadModelRegistry#fetch')
    const key: string = this.readModelKey(readModelName, readModelID)
    logger.debug('fetching key booster||', key)
    const envelope = await this.redis.hget<ReadModelEnvelope>(`booster||${key}`)
    logger.debug('envelope fetched ' + JSON.stringify(envelope))
    return envelope ? envelope.value : undefined
  }

  private readModelEnvelopeKey(readmodel: ReadModelEnvelope): string {
    return this.readModelKey(readmodel.typeName, readmodel.value.id)
  }

  private readModelKey(typeName: string, id: UUID): string {
    const keyParts = [
      'rm', //Read Model mark
      typeName, //readModel type name
      id, //readModel id
    ]
    return keyParts.join(RedisAdapter.keySeparator)
  }
}
