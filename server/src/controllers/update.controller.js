const handleUpdate = async (req, res) => {
    console.log("Request received on update route");

    const { body } = req;
    console.log("Request body:", body);

    const { user, data } = body;

    try {
        const result = await update(user, data);
        console.log("Result from update:", result);

        res.send(result);
    } catch (error) {
        console.error("Error from update:", error);

        res.status(500).send("Error updating data");
    }
};

module.exports = { handleUpdate };
