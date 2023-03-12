import { app, port } from './app';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI! || "mongodb://localhost:27017/note-api" , {
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
