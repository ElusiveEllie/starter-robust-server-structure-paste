const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const pastesRouter = require("../pastes/pastes.router");

const controller = require("./users.controller");

router.use("/:userId/pastes", controller.userExists, pastesRouter);

router.route("/:userId").get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;