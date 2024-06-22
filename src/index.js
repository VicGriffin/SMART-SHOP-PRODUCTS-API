import express from 'express';
import Prouter from './routes/products.routes.js'

const app = express();

app.get('/', Prouter)

app.get('/:id', Prouter)

app.patch('/:id', Prouter)

app.delete('/:id', Prouter)

app.post('/', Prouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000.....');
});
