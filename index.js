const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// GET request
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST request
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    res.json({
      is_success: true,
      user_id: "ravi_kumar_24072005",
      email: "2236959.cse.cec@cgc.edu.in",
      roll_number: "2236959",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet,
    });
  } catch (error) {
    res.status(500).json({ is_success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
