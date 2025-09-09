import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();


// ADD THIS LINE FOR DEBUGGING
// console.log("Attempting to use API Key:", process.env.GEMINI_API_KEY);

// Initialize the Gemini Model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

/**
 * Handles the logic for generating a response from the Gemini API.
 */

export const generateResponse = async (req: Request, res: Response) => {
  try {
    const { user_prompt } = req.body;

    // A default prompt to set the context or personality for the AI
    const default_prompt =
      "You are a helpful and professional assistant specializing in technology. Answer the user's question clearly and concisely. write explanation in one line";

    const full_prompt = `${default_prompt}\n\nUser Question: ${user_prompt}`;

    const result = await model.generateContent(full_prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Error in Gemini controller:', error);
    res
      .status(500)
      .json({ error: 'Failed to generate a response from the AI.' });
  }
};
