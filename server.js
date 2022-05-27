import bodyParser from "body-parser";
import cors from "cors";
import express from "express"
//const db = require("./db");

const port = process.env.PORT || 9000;
const app = express();

import { resolvers } from './resolvers.js'
import { makeExecutableSchema } from 'graphql-tools'

import fs from 'fs'
import path from 'path'

const typeDefs = fs.readFileSync("./schema.graphql", { encoding: "utf-8" });

// Put together a schema
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

app.use(cors(), bodyParser.json());

import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
app.use("/graphql", graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(port, () => console.info(`Server started on port ${port}`));
