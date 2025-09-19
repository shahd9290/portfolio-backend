import {addNewTestimonial} from '../controllers/backendController';

const routes = (app) => {
    app.route('/testimonial')
        .get((req, res, next) => {
                //  middleware
                console.log(`Received ${req.method} to ${req.originalUrl}`);
                console.log(`Request type ${req.method}`);
                next();
            },
            (req, res, next) => {
                res.send("GET request");

            })

        .post(addNewTestimonial);

    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send("PUT request");
        })

        .delete((req, res) => {
            res.send("DELETE request");
        })
}

export default routes;