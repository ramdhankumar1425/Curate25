const handleDownload = async (req, res) => {
    console.log("Request received on download route");

    const { data } = req.body;

    const csv = new ObjectsToCsv(data);

    await csv.toDisk("./data.csv");

    res.download("./data.csv", "data.csv");
};

module.exports = { handleDownload };
