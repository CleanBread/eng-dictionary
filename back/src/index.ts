import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { createServer } from 'http';

import schema from './schema';

const app = express();
const server = createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

mongoose.connect('mongodb://localhost:27017/dictionary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('open', () => {
  'connect bd';
});

app.get('/', (_: express.Request, res: express.Response) => {
  res.send('Hi');
});

server.listen('8080', () => {
  console.log('server');
});
