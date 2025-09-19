import {addNewTestimonial, getTestimonials} from '../controllers/backendController';

const routes = (app) => {
    app.route('/testimonial')
        .get(getTestimonials)

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