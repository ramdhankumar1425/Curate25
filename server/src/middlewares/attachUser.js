const axios = require("axios");

const attachUser = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];

        const response = await axios.get(
            `${process.env.AUTH0_ISSUER}/userinfo`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        req.user = response.data;

        next();
    } catch (error) {
        console.error("Error in attaching user:", error);

        next(error);
    }
};

module.exports = { attachUser };
