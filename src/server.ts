import express from 'express';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!!',
  });
});

app.listen(PORT, () => {
  console.log('Server start on PORT');
});
