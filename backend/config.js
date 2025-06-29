const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://23pa1a4553:kusuma@cluster0.7eyyzyo.mongodb.net/details?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
