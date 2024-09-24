const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

server.patch("/items/:id/done", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const db = router.db;

    const item = db.get("items").find({ id }).value();

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }

    db.get("items")
        .find({ id })
        .assign({ isDone: true, finishedAt: Date.now() })
        .write();

    res.json(db.get("items").find({ id }).value());
});

server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
