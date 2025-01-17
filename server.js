// server.js (using ES module import)
import express from 'express';
import fetch from 'node-fetch';  // Import fetch for making API requests
import path from 'path';
import { fileURLToPath } from 'url';

// Get the filename for path resolving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle text-to-speech request
app.post('/generate-speech', async (req, res) => {
    const { text, voiceId, style } = req.body;
  
    if (!text || !voiceId || !style) {
      return res.status(400).json({ error: "Text, voiceId, and style are required" });
    }
  
    const url = 'https://api.murf.ai/v1/speech/generate'; // Define the API endpoint
    const requestBody = {
      voiceId,
      style,
      text,
      rate: 0,
      pitch: 0,
      sampleRate: 48000,
      format: 'MP3',
      channelType: 'MONO',
      encodeAsBase64: false,
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'ap2_cb2178e7-927d-46ce-bce0-cc86b53f228b', // Replace with your actual API key
      },
      body: JSON.stringify(requestBody),
    };
  
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      if (data.audioFile) {
        res.json({ audioFileUrl: data.audioFile });
      } else {
        res.status(500).json({ error: "Failed to generate speech" });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Serve the static files (HTML, CSS, JS) from the 'public' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
