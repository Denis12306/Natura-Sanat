const searchService = require("../services/search.service");

const search = async (req, res) => {

    try {

        const results = await searchService.search(
            req.query.q
        );

        res.json({
            success: true,
            data: results,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    search,
};
