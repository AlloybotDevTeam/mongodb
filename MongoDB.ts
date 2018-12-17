import { default as Alloybot, Type, Util, ConfigBuilder } from '../../Alloybot';
import { MongoClient } from 'mongodb';

export default class MongoDB implements Type.IConnection {
  public readonly name: string = 'MongoDB';
  public readonly dependencies: string[] = [];
  public readonly dependants: Type.IPlugin[] = Alloybot.getDependants(this.name);
  public connection: MongoClient;
  public config;

  constructor() {
    let Config: ConfigBuilder = new ConfigBuilder('MongoDB', require('./package.json').version);
    Config.addOption('uri', ['string'], 'Documentation Link Here!');
    Config.close();
    this.config = Config.getConfig();
  }

  public connect(): MongoDB {
    this.connection = new MongoClient(this.config.uri);
    return this;
  }
}

Alloybot.registerConnection(new MongoDB().connect());
