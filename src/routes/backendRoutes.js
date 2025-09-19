import {addNewTestimonial, getTestimonials, getTestimonialWithId} from '../controllers/backendController';

const routes = (app) => {
    app.route('/testimonial')
        .get(getTestimonials)

        .post(addNewTestimonial);

    app.route('/testimonial/:testimonialId')
        .get(getTestimonialWithId)

        .put((req, res) => {
            res.send("PUT request");
        })

        .delete((req, res) => {
            res.send("DELETE request");
        })
}

export default routes;