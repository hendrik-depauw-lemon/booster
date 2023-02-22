import { Command, flags } from '@oclif/command'
import { Input } from '@oclif/parser'
import { ComponentContainer } from 'cli/src/common/component'
import { CloudProvider } from 'cli/src/services/cloud-provider'
import { GenericCloudProvider } from 'cli/src/services/cloud-provider/generic.impl'
import { DynamicImporter } from 'cli/src/services/dynamic-importer'
import { SimpleDynamicImporter } from 'cli/src/services/dynamic-importer/simple'
import { ErrorHandler } from 'cli/src/services/error-handler'
import { CliErrorHandler } from 'cli/src/services/error-handler/cli.impl'
import { FileGenerator } from 'cli/src/services/file-generator'
import { FileLogger } from 'cli/src/services/logger/file.impl'
import { Container, ContainerBuilder } from 'diod'
import { Level, Logger } from '@boostercloud/framework-types'
import { LocalFileGenerator } from 'cli/src/services/file-generator/local'
import { OraLogger } from 'cli/src/services/logger/ora.impl'
import { FileSystem } from 'cli/src/services/file-system'
import { LocalFileSystem } from 'cli/src/services/file-system/local.impl'
import { inferPackageManager } from 'cli/src/services/package-manager/factory'
import { PackageManager } from 'cli/src/services/package-manager'
import { UserInput } from 'cli/src/services/user-input'
import { ConsoleUserInput } from 'cli/src/services/user-input/console.impl'
import { Process } from 'cli/src/services/process'
import { LocalProcess } from 'cli/src/services/process/local.impl'
import { UserProject } from 'cli/src/services/user-project'
import { LocalUserProject } from 'cli/src/services/user-project/local.impl'

export type BaseFlags = {
  [key: string]: any
} & {
  [P in keyof typeof BaseCommand.baseFlags]: any
}

export abstract class BaseCommand<T extends typeof Command> extends Command {
  static baseFlags = {
    help: flags.help({ char: 'h' }),
    verbose: flags.boolean({
      description: 'show extra debugging information',
      default: false,
    }),
    silent: flags.boolean({
      description: 'log all output into ./errors.log',
      default: false,
    }),
    level: flags.string({
      description: 'log level',
      default: 'info',
    }),
  }

  protected flags!: BaseFlags
  protected logLevel!: Level
  protected container!: Container

  public async init(): Promise<void> {
    await super.init()
    const { flags } = await this.parse(this.ctor)
    const levelString = this.flags.level as keyof typeof Level
    this.logLevel = Level[levelString]
    this.flags = flags as BaseFlags
    await this.buildContainer()
  }

  private async buildContainer(): Promise<void> {
    const builder = new ContainerBuilder()

    // We register the logger first as its the minimum required to run the rest of the services
    if (this.flags.verbose) {
      this.logLevel = Level.debug
    }
    if (this.flags.silent) {
      builder.register(Logger).useFactory(() => new FileLogger(this.logLevel))
    } else {
      builder.register(Logger).useFactory(() => new OraLogger(this.logLevel))
    }

    // Now we register filesystem and process in order to run the package manager factory
    builder.register(FileSystem).use(LocalFileSystem)
    builder.register(Process).use(LocalProcess)

    // We build a container to run the package manager factory, this one will be discarded
    const InferredPackageManager = await inferPackageManager(builder.build())

    // We register the rest of the services
    builder.register(PackageManager).use(InferredPackageManager)
    builder.register(CloudProvider).use(GenericCloudProvider)
    builder.register(DynamicImporter).use(SimpleDynamicImporter)
    builder.register(ErrorHandler).use(CliErrorHandler)
    builder.register(FileGenerator).use(LocalFileGenerator)
    builder.register(UserInput).use(ConsoleUserInput)
    builder.register(UserProject).use(LocalUserProject)

    // This time we do save the container
    this.container = builder.build()
  }

  protected async catch(err: Error & { exitCode?: number }): Promise<any> {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err)
  }

  protected async finally(_: Error | undefined): Promise<any> {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(_)
  }
}
