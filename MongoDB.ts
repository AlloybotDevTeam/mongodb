import { default as Alloybot, Type, Util } from '../../Alloybot';
import { MongoClient } from 'mongodb';

export default class MongoDB implements Type.IConnection {
  public readonly name: string = 'MongoDB';
  public readonly dependencies: string[] = [];
  public readonly dependants: Type.IPlugin[] = Alloybot.getDependants(this.name);
  public connection: any;

  constructor(uri: string) {
    this.connection = new MongoClient(uri);
  }
}

Alloybot.registerConnection(new MongoDB(process.env['MONGODB.URI']));
