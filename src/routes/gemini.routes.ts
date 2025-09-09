import { Router } from 'express';
import { generateResponse } from '../controllers/gemini.controller';
import { validatePrompt } from '../middlewares/validation.middleware';

const router = Router();

// Define the POST route for generating content
// The request first goes through the validatePrompt middleware,
// and if it passes, it's handled by the generateResponse controller.
router.post('/generate', validatePrompt, generateResponse);

export default router;
