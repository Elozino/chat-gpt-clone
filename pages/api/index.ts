import { METHODS } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-1HZ2rofgie6e7gyc2ZTt6O66",
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// API HANDLER
type Data = {
  name?: string;
  msg?: string;
  response?: {
    data: {
      choices: { text: string }[];
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message } = req.body;

  if (req.method === "POST") {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 0.5,
      });
      res.status(200).json(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Error, check console.",
      });
      res.end();
    }
  }
}
