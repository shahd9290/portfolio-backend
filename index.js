import express from 'express';

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Server listening on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})