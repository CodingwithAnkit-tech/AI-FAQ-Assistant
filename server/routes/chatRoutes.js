const express = require("express");
const router = express.Router();

const { chatWithAI } = require("../controllers/chatController");
const { getConversations } = require("../controllers/conversationController");

router.post("/chat", chatWithAI);
router.get("/conversations", getConversations);

module.exports = router;