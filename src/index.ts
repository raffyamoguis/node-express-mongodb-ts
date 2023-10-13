import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";

import router from "./router";
import {MONGO_URI, DATABASE} from "../config";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI, {
  dbName: DATABASE,
} as ConnectOptions);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
