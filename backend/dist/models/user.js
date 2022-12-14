"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createStickers_1 = require("../scripts/createStickers");
let mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: { type: String, required: true },
    region: { type: String, required: true },
    album: { type: {}, default: (0, createStickers_1.buildAlbum)() },
    tokens: [],
});
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Email o contraseña incorrectos");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Contraseña incorrecta");
    }
    return user;
};
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
userSchema.statics.getUsernameById = async function (userId) {
    const user = await User.findById(userId);
    return user.name;
};
userSchema.statics.getRandomUser = async function (region, userId) {
    const user = await User.aggregate([
        { $match: { region, _id: { $ne: mongoose.Types.ObjectId(userId) } } },
        { $sample: { size: 1 } },
    ]);
    return user;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
//# sourceMappingURL=user.js.map