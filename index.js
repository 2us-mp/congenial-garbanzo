// app.js or server.js
import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());

// Multer setup: accept ANY file type
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Update system record route
app.post("/updateBraceletTask", upload.any(), (req, res) => {
  const updateData = {
    maker: "Jasper Lee",
    bracelet: "White-Orange",
    size: "Extra Medium",
    status: "Accepted",
    system: "Seamus",
    timestamp: new Date().toISOString(),
  };

  console.log("✅ System Update:", updateData);
  console.log("📁 Uploaded files:", req.files?.map(f => f.originalname) || []);

  // You can integrate this with your database later if needed
  res.json({
    message: "System updated successfully.",
    update: updateData,
    filesReceived: req.files?.length || 0,
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
