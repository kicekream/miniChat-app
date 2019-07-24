const express = require("express");
const path = require("path");
const publicPath = path.join(__dirname, "../public");

const app = express();
app.use(express.json());
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
