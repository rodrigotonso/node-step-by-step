import express from "express";
import CONSTANTS from "./config/constants";
const app = express();

app.listen(CONSTANTS.APP.PORT, () =>
    console.log("listening in port", CONSTANTS.APP.PORT)
);
