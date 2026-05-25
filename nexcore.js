// Thus is a super fast background remover by Nex Core. It's using 4 api that's why It's response in 1-2 seconds. If It's really useful for you, Than just Follow me on githun & Instagram & Give me a star on this repository. ☣️Dont change the author name, If you change it than you got banned permanently from this.☣️ 

const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");

// Load config
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const API_KEYS = config.api_keys;

const app = express();
const upload = multer({ dest: "uploads/" });

let keyIndex = 0;

function getApiKey() {
  const key = API_KEYS[keyIndex];
  keyIndex = (keyIndex + 1) % API_KEYS.length;
  return key;
}

// Ensure uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.use(express.static("public"));
app.use(express.json({ limit: '10mb' }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "nex.html"));
});

app.post("/remove-bg", upload.single("image"), async (req, res) => {
  let filePath = null;
  
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded"
      });
    }

    filePath = req.file.path;

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", fs.createReadStream(filePath));

    const response = await axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,
      responseType: "arraybuffer",
      headers: {
        ...formData.getHeaders(),
        "X-Api-Key": getApiKey()
      },
      timeout: 30000
    });

    // Clean up temp file
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.setHeader("Content-Type", "image/png");
    res.send(response.data);

  } catch (err) {
    console.error("Error:", err.response?.data || err.message);

    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.status(500).json({
      success: false,
      message: "Failed to remove background. Please try again."
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NEX-RBG Server running on Port ${PORT}`);
  console.log(`Nex Core Background Removal Tool`);
});
