require("dotenv").config();
const OpenAI = require("openai");
const Conversation = require("../models/Conversation");

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

const chatWithAI = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer =
      completion.choices[0].message.content;

    await Conversation.create({
      question,
      answer,
    });

    res.status(200).json({
      answer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI Error",
    });
  }
};

module.exports = {
  chatWithAI,
};
