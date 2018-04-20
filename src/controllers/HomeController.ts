import { Route, HttpGet } from "../core/decorators/Route";
import Controller from "../core/components/controller/Controller";

@Route
export default class HomeController extends Controller {
  property = "property";
  hello: string;
  constructor(m: string) {
    super();
    this.hello = m;
  }

  @HttpGet("/")
  public IndexAction() {
    console.log("method indexaction called");
    return { name: "have a nice day" };
  }
}
