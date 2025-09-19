import {
    addNewTestimonial, deleteTestimonial,
    getTestimonials,
    getTestimonialWithId,
    updateTestimonial
} from '../controllers/backendController';

const routes = (app) => {
    app.route('/testimonial')
        .get(getTestimonials)

        .post(addNewTestimonial);

    app.route('/testimonial/:testimonialId')
        .get(getTestimonialWithId)

        .put(updateTestimonial)

        .delete(deleteTestimonial)
}

export default routes;