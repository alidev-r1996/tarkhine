import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
