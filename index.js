import express from 'express';
import routes from './src/routes/backendRoutes';

const app = express();
const PORT = 3000

routes(app);

app.get('/', (req, res) => {
    res.send(`Server listening on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})