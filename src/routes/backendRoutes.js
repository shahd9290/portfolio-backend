const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
                //  middleware
                console.log(`Received ${req.method} to ${req.originalUrl}`);
                console.log(`Request type ${req.method}`);
                next();
            },
            (req, res, next) => {
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