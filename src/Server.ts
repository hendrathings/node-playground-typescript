import * as hapi from "hapi";

export default class Server {
  public mapRoute = [];

  private static instance: Server;
  private hapiServer: hapi.Server;

  public static getInstance() {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  constructor() {
    this.hapiServer = new hapi.Server({
      host: "localhost",
      port: 8000
    });
  }

  public run(): void {
    // Create a server with a host and port
    this.mapRoute.forEach(route => {
      this.hapiServer.route({
        method: route.method,
        path: route.path,
        handler: route.handler
      });
    });

    try {
      this.hapiServer.start();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }

    console.log("Server running at:", this.hapiServer.info.uri);
  }
}
