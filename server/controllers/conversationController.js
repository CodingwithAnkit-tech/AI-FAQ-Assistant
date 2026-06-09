const Conversation = require("../models/Conversation");

const getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find()
      .sort({ timestamp: -1 });

    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = { getConversations };