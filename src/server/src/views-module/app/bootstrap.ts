import { server } from "../../config/server";
import { viewsRouter } from "./routes/viewsRouter";

const app = server.app;

app.use(viewsRouter);
