import { IConnection, Alloybot, DependantList } from '../../../Alloybot';
import { MongoClient } from 'mongodb';

export default class MongoDB implements IConnection {
  public readonly name: string = 'MongoDB';
  public readonly dependencies: string[] = [];
  public readonly dependants: DependantList = Alloybot.getDependants(this.name);
  public connection: any;

  constructor(uri: string) {
    this.connection = new MongoClient(uri);
  }
}

Alloybot.registerConnection(new MongoDB(process.env['MONGODB.URI']));
