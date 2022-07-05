import { server } from "../../config/server";
import { authAdminRouter } from "./routes/authAdminRouter";
import { playlistAdminRouter } from "./routes/playlistAdminRouter";
import { videoAdminRouter } from "./routes/videoAdminRouter";

const app = server.app;

app.use("/admin/playlist", playlistAdminRouter);
app.use("/admin/video", videoAdminRouter);
app.use("/admin/auth", authAdminRouter);
