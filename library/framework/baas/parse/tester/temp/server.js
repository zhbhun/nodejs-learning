var express = require("express");
var ParseServer = require("parse-server").ParseServer;
var ParseDashboard = require("parse-dashboard");

var options = { allowInsecureHTTP: false };

var server = new ParseServer({
  appId: "myAppId",
  masterKey: "myMasterKey",
  serverURL: "http://localhost:4040/parse",
  databaseURI: "mongodb://127.0.0.1:27017/demo",
});

var dashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: "http://localhost:4040/parse",
        appId: "myAppId",
        masterKey: "myMasterKey",
        appName: "MyApp",
      },
    ],
  },
  options
);

server
  .start()
  .then(() => {
    var app = express();

    app.use(express.json());
    app.use(express.static("public"));

    // make the Parse Server available at /parse
    app.use("/parse", server.app);

    // make the Parse Dashboard available at /dashboard
    app.use("/dashboard", dashboard);

    app.post("/api/login", function (req, res) {
      var username = req.body.username;
      var password = req.body.password;

      // 调用 Parse.User.logIn() 方法登录
      Parse.User.logIn(username, password)
        .then(function (user) {
          res.json(user.toJSON()); // 返回用户对象的 JSON 数据
        })
        .catch(function (error) {
          console.error("Error logging in:", error);
          res.status(401).send("Invalid username or password");
        });
    });

    app.post("/api/signup", function (req, res) {
      var username = req.body.username;
      var password = req.body.password;

      console.log(username, password);

      // 调用 Parse.User.logIn() 方法登录
      Parse.User.signUp(username, password)
        .then(function (user) {
          res.json(user.toJSON()); // 返回用户对象的 JSON 数据
        })
        .catch(function (error) {
          console.error("Error logging in:", error);
          res.status(401).send("Invalid username or password");
        });
    });

    var httpServer = require("http").createServer(app);
    httpServer.listen(4040);
  })
  .catch((error) => {
    console.log(error);
  });
