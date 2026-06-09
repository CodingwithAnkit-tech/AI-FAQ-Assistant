"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
  `${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
  { question }
);

      setAnswer(res.data.answer);
    } catch (error) {
      setAnswer("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-5xl font-bold text-center mb-2">
          🤖 AI FAQ Assistant
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Ask anything and get AI-powered answers instantly
        </p>

        <textarea
          rows={5}
          placeholder="Ask your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {answer && (
          <div className="mt-8 bg-gray-50 border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              AI Response
            </h2>

            <div className="whitespace-pre-wrap leading-8 text-gray-700">
              {answer}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}