// const { expressjwt } = require("express-jwt");
// const jwks = require("jwks-rsa");

// const authGuard = expressjwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`,
//     }),
//     audience: process.env.AUTH0_AUDIENCE,
//     issuer: process.env.AUTH0_ISSUER,
//     algorithms: ["RS256"],
// });

const { auth } = require("express-oauth2-jwt-bearer");

const authGuard = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER,
    tokenSigningAlg: "RS256",
});

module.exports = authGuard;
