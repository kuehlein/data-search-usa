const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
// const { db } = require('./db')
const app = express();
const api = require("./api");

const createApp = new Promise(() => {
  // logging middleware
  app.use(morgan("dev"));

  // body parsing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // route to api
  app.use("/api", api);

  // staticly serve styles
  app.use(
    express.static(path.join(__dirname, "..", "client/", "src/", "main.css"))
  );

  // Express only serves static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.use("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "..", "client/", "build/", "index.html")
      );
    });
  } else {
    // static file-serving middleware
    app.use(express.static(path.join(__dirname, "..", "client/", "public")));

    // sends index.html
    app.use("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "..", "client/", "public/", "index.html")
      );
    });
  }

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
});

const startListening = () => {
  app.listen(PORT, () => console.log(`Gettin down and dirty on port ${PORT}`));
};

// const syncDb = () => db.sync();

// This evaluates as true when this file is run directly from the command line,
// It will evaluate false when this module is required by another module - ( etc. test spec)
if (require.main === module) {
  // syncDb();
  createApp.then(startListening());
} else {
  createApp();
}

module.exports = app;
