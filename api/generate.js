import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/generate", async (req, res) => {
  const { keyword, category } = req.body;

  if (!keyword) return res.status(400).json({ error: "Keyword required" });

  try {
    const prompt = `Generate 1 short, professional capstone project title for "${keyword}"${
      category ? ` in ${category}` : ""
    }. Also provide:
- Tools needed
- Programming language/platform
- Estimated duration (weeks)
- Simple Gantt chart steps in JSON (task: start week, end week)
- Step-by-step guide on how to build the system

Respond **ONLY** in strict JSON format, no extra text, no markdown.
Example format:
{
  "title": "...",
  "tools": "...",
  "language": "...",
  "duration": "...",
  "gantt": [
    { "task": "Task 1", "start": 1, "end": 2 },
    { "task": "Task 2", "start": 3, "end": 4 }
  ],
  "buildSteps": [
    "Step 1: ...",
    "Step 2: ...",
    "Step 3: ..."
  ]
}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 600,
      temperature: 0.7,
    });

    let content = response.choices[0].message.content.trim();
    content = content.replace(/```json|```/g, "").trim();

    let result;
    try {
      result = JSON.parse(content);
    } catch (e) {
      console.error("AI returned invalid JSON:", content, e);
      return res.status(500).json({
        error:
          "Failed to parse AI response as JSON. Check server logs for AI output.",
        aiResponse: content,
      });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate project" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
