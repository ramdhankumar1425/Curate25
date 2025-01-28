const handleDownload = async (req, res) => {
    try {
        const { project } = req.body;

        if (!project) {
            return res.status(400).json({ message: "Project is required" });
        }
    } catch (error) {
        console.error("Error in download controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { handleDownload };
