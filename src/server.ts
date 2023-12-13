import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import bodyParser, { json } from 'body-parser';
import cors from 'cors';
import { log } from 'detox';
import express from 'express';
import http from 'http';

import catchAllResolver from './catchAllResolver';
import resolvers from './resolvers';
import router from './routes';

//import { schema } from './schema';

interface MyContext {
  token?: string;
}

const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

const fs = require('fs');

const awsCustomScalers = `scalar AWSDate
scalar AWSTime
scalar AWSDateTime
scalar AWSEmail
scalar AWSJSON
scalar AWSURL
scalar AWSIPAddress
directive @aws_subscribe(mutations: [String!]!) on FIELD_DEFINITION`;

export const typeDefs =
  fs.readFileSync('./schema.graphql', 'utf8') + awsCustomScalers;

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: mergeResolvers([resolvers, catchAllResolver]),
  inheritResolversFromInterfaces: true,
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(url => {
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/json' })),
    app.use(bodyParser.json({ type: 'application/x-amz-json-1.1' })),
    app.use(router);
  app.use(router);
  app.use(
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        // console.log('context', req.headers);
        // req.headers.featureid = 'TRANSACTION_LIST'; // Add testid here for manual debugging
        // req.headers.scenarioid = 'DATA'; // Add scenarioId here for manual debugging
        return {
          token: req.headers.token,
          headers: req.headers,
        };
      },
    }),
  );
});

new Promise<void>(resolve => httpServer.listen({ port: 3000 }, resolve));

log.info('🚀 Server ready at http://localhost:3000');
