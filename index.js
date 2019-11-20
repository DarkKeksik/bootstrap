let fs = require("fs"),
    express = require("express"),
    app = express(),
    server = require("http").createServer(app).listen(8000);

app.set("view engine", "ejs");

app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use("/jquery", express.static(`${__dirname}/node_modules/jquery/dist`));
app.use("/static", express.static(`${__dirname}/template`));

app.get("/", (req, res)=>{
    res.render(`${__dirname}/template/pages/main`);
});