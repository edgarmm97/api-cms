import mongoose from "mongoose";
import { HOST, DB_NAME } from "./config";

const URL = `mongodb://${HOST}/${DB_NAME}`;

mongoose.connect(URL)
    .then(db => console.log('MongoDB is connedcted'))
    .catch(error => console.error(error));