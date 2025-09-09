import { Request, Response, NextFunction } from 'express';

/**
 * Validates that the request body contains a non-empty 'user_prompt'.
 */
export const validatePrompt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_prompt } = req.body;

  if (
    !user_prompt ||
    typeof user_prompt !== 'string' ||
    user_prompt.trim() === ''
  ) {
    return res
      .status(400)
      .json({ error: 'A non-empty user_prompt is required.' });
  }

  // If validation passes, proceed to the next middleware or controller
  next();
};
