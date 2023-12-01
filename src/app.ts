import express from 'express';
import mongoose from 'mongoose';

const app = express();

const port = 8743;
const url = 'mongodb://localhost/playingDB';

app.listen(port, () => {
  mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB...........');
    console.log(`Listening on port ${port}`);

    // Additional event listeners for Mongoose connection
    mongoose.connection.on('error', (err) => {
      console.error('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose default connection disconnected');
    });
  }).catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  });
});

