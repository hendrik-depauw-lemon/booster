import { ResolverBuilder, TargetTypesMap } from './common'
import { GraphQLTypeInformer } from './graphql-type-informer'
import { GraphQLObjectType } from 'graphql'
import { GraphQLHandledFieldsGenerator } from './query-helpers/graphql-handled-fields-generator'

export class GraphQLMutationGenerator {
  public constructor(
    private readonly targetTypes: TargetTypesMap,
    private readonly typeInformer: GraphQLTypeInformer,
    private readonly mutationResolver: ResolverBuilder
  ) {}

  public generate(): GraphQLObjectType | undefined {
    const graphqlGenerateHandledFields = new GraphQLHandledFieldsGenerator(
      this.targetTypes,
      this.typeInformer,
      this.mutationResolver
    )
    const mutations = graphqlGenerateHandledFields.generateFields()
    if (Object.keys(mutations).length === 0) {
      return undefined
    }
    return new GraphQLObjectType({
      name: 'Mutation',
      fields: mutations,
    })
  }
}
