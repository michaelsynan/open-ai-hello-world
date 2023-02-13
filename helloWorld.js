const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function main() {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Provide a python program that prints 'Hello, World!'",
    temperature: 0,
    max_tokens: 100,
  });

const generatedText = response.data.choices[0].text;
console.log(generatedText);

}

main();
