const routes = (app) => {
    app.route('/contact')
        .get((req, res) => {
            res.send("GET request");
        })

        .post((req, res) => {
            res.send("POST request");
        })

    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send("PUT request");
        })

        .delete((req, res) => {
            res.send("DELETE request");
        })
}

export default routes;