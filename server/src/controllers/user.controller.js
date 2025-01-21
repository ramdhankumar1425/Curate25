const handleUser = async (req, res) => {
    console.log("Request received on user route");

    const { data } = req.body;

    const csv = new ObjectsToCsv(data);

    await csv.toDisk("./data.csv");

    res.download("./data.csv", "data.csv");
};

module.exports = { handleUser };
