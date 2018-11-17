import { IConnection, Alloybot } from '../../../Alloybot';

export default class MongoDB implements IConnection {
  public readonly name: String = 'MongoDB';
  public readonly dependencies: String[] = [];
  public connection: any = {};

  constructor(
    host: String = 'localhost',
    port: Number = 27017,
    username?: String,
    password?: String
  ) {}
}

Alloybot.registerConnection(new MongoDB());
