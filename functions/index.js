const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");
const { request, response } = require("express");
('sk_test_51K03G5SG08j4bTQQ5wUekYZJeCPffkO7TtV6DivyCRMDGMzKGH14YDEW7VjjGobryH8FwmatKfccmtigviOrzqWf00QXXJxdui')
//api

//App configure
const app = express();

//middleware
app.use(cors({origin: true}));
app.use(express.json());
//api routes
app.get('/', (request, response) => response.status(200).send('namaste world'));
//listen command
exports.api = functions.https.onRequest(app);