/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const server = require('./server/server');

exports.server = onRequest((req, res) => {
    server.emit('request', req, res);
});

// API – поправено
exports.api = onRequest(async (req, res) => {
    const { default: apiApp } = await import("./api/src/index.js");
    return apiApp(req, res);
});

setGlobalOptions({ maxInstances: 1 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
