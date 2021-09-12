const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    return res.send("Hello, world from node-kubernetes");
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});
