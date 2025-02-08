import axios from "axios";
import { defineRoutes } from "momentum-trail";
import routes from "./routes.json";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

defineRoutes(routes);
