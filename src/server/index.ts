import { server } from "./src/config/server";

server.startServer();

import "./src/views-module/app/bootstrap";
import "./src/user-management-module/app/bootstrap";
import "./src/playlist-module/app/bootstrap";
import "./src/dashboard-module/app/bootstrap";
import "./src/schedule-module/bootstrap";
import "./src/error-module/app/routes/errorHandler";
