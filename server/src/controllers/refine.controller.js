const handleRefine = (req, res) => {
    console.log("Request received on refine route");

    const { body } = req;
    console.log("Request body:", body);

    res.send("This is a refine response from server");
};

module.exports = { handleRefine };
