import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { routes } from './routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!!',
  });
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  }
);

app.listen(PORT, () => {
  console.log('Server start on PORT');
});
