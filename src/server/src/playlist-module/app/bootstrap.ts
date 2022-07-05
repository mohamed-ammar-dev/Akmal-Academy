import { server } from "../../config/server";
import { playlistRouter } from "./routes/playlistRouter";

const app = server.app;

app.use("/playlist", playlistRouter);
