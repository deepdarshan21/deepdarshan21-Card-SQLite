const express = require("express");
const cardRoutes = require("./../Controllers/controllers");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.get("/all", cardRoutes.cardAll);
router.put("/getSpecific", cardRoutes.cardSpecific);
router.post("/create", cardRoutes.cardNew);
router.put("/delete", cardRoutes.cardRemove);

module.exports = router;
