import {
    addNewTestimonial, deleteTestimonial,
    getTestimonials,
    getTestimonialWithId,
    updateTestimonial
} from '../controllers/testimonialController';
import {
    addNewProject,
    deleteProject,
    getProjects,
    getProjectWithId,
    updateProject
} from "../controllers/projectController";
import {addNewSkill, deleteSkill, getSkills, getSkillWithId, updateSkill} from "../controllers/skillsController";

const routes = (app) => {
    app.route('/testimonial')
        .get(getTestimonials)

        .post(addNewTestimonial);

    app.route('/testimonial/:testimonialId')
        .get(getTestimonialWithId)

        .put(updateTestimonial)

        .delete(deleteTestimonial)

    app.route('/project')
        .get(getProjects)

        .post(addNewProject);

    app.route('/project/:projectId')
        .get(getProjectWithId)

        .put(updateProject)

        .delete(deleteProject);

    app.route('/skill')
        .get(getSkills)

        .post(addNewSkill);

    app.route('/skill/:skillId')
        .get(getSkillWithId)

        .put(updateSkill)

        .delete(deleteSkill);
}

export default routes;