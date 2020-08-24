const router = require("express").Router();
const bookRoutes = require("./books");
// const { route } = require("../index");

router.use("/books", bookRoutes);

module.exports = router;