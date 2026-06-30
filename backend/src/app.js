const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use("/api/users", userRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Natura Sanat API is running"
  });
});

app.use("/api/auth", authRoutes);

module.exports = app;

const courseRoutes = require("./routes/course.routes");

app.use("/api/courses", courseRoutes);

const articleRoutes = require("./routes/article.routes");

app.use("/api/articles", articleRoutes);

const professionalRoutes = require(
  "./routes/professional.routes"
);

app.use(
  "/api/professionals",
  professionalRoutes
);

const commentRoutes = require("./routes/comment.routes");

app.use("/api/comments", commentRoutes);
