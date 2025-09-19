import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/backendRoutes';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT;
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@portfolio-backend.jqwkh3w.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio-backend`, {
    useNewUrlParser: true,
});

// body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => {
    res.send(`Server listening on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})