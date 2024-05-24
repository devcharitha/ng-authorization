"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = exports.validatePassword = exports.validateEmail = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.validateEmail = validateEmail;
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}
exports.validatePassword = validatePassword;
function createJWT(payload) {
    const secretKey = 'nextgen';
    const options = {
        expiresIn: '120s'
    };
    return jsonwebtoken_1.default.sign(payload, secretKey, options);
}
exports.createJWT = createJWT;
//# sourceMappingURL=request-validator.js.map