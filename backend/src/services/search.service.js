const Article = require("../models/Article");
const Course = require("../models/Course");

const search = async (keyword) => {

    if (!keyword) {
        return {
            articles: [],
            courses: [],
        };
    }

    const regex = new RegExp(keyword, "i");

    const articles = await Article.find({
        $or: [
            { title: regex },
            { content: regex },
        ],
    }).limit(5);

    const courses = await Course.find({
        $or: [
            { title: regex },
            { description: regex },
        ],
    }).limit(5);

    return {
        articles,
        courses,
    };
};

module.exports = {
    search,
};
