import Server from "./Server";
import HomeController from "./controllers/HomeController";

const controller = new HomeController("hello");
controller.IndexAction();

const server = Server.getInstance();
server.run();
