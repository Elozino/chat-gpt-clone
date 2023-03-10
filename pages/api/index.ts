import { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-1HZ2rofgie6e7gyc2ZTt6O66",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// API HANDLER
type Data = {
  msg?: string;
};

type CreateCompletionResponse = {
  [x: string]: any;
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message } = req.body;
  console.log({ message });
  if (req.method === "POST") {
    try {
      const response: AxiosResponse<CreateCompletionResponse> = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 3000,
        temperature: 0.5,
        frequency_penalty: 0.5,
        top_p: 1,
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
