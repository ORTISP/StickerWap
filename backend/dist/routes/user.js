"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const User = require("../models/user");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post("/signup", async function (req, res) {
    if (!req.body.name ||
        !req.body.email ||
        !req.body.password ||
        !req.body.region) {
        res.status(400).send({ error: "Campos incompletos" });
        return;
    }
    try {
        const user = new User(req.body);
        user._id = new mongoose_1.default.Types.ObjectId();
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({
            id: user._id,
            name: user.name,
            email: user.email,
            region: user.region,
            token: token,
            album: user.album,
        });
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ error: "Usuario ya existe" });
        }
        else if (error._message) {
            res.status(400).send({ error: "Email ya en uso" });
        }
        else {
            res.status(500).send({ error: "Algo salio mal" });
        }
    }
});
router.post("/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        if (!user) {
            return res
                .status(401)
                .send({ error: "Error de autenticación. Intenta de nuevo." });
        }
        const token = await user.generateAuthToken();
        res.send({
            id: user._id,
            name: user.name,
            email: user.email,
            region: user.region,
            token: token,
        });
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});
router.post("/logout", auth_1.default, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send({ message: "Logout exitoso" });
    }
    catch (e) {
        res.status(500).send();
    }
});
router.get("/me", auth_1.default, async (req, res) => {
    try {
        const user = req.user;
        res.send({
            id: user._id,
            name: user.name,
            email: user.email,
            region: user.region,
        });
    }
    catch (e) {
        res.status(500).send();
    }
});
router.get("/username/:id", auth_1.default, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.getUsernameById(userId);
        res.send({ user });
    }
    catch (e) {
        res.status(500).send();
    }
});
router.put("/me", auth_1.default, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "region"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: "Campos inválidos" });
    }
    try {
        const user = req.user;
        updates.forEach((update) => (user[update] = req.body[update]));
        await user.save();
        res.send({
            id: user._id,
            name: user.name,
            email: user.email,
            region: user.region,
        });
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map