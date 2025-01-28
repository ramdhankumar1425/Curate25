const { auth } = require("express-oauth2-jwt-bearer");

const authGuard = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER,
    tokenSigningAlg: "RS256",
});

module.exports = authGuard;
