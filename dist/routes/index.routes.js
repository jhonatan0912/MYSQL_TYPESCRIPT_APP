"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Controllers
const index_controller_1 = require("./../controllers/index.controller");
router.get('/', index_controller_1.indexWelcome);
exports.default = router;
