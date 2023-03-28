const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function generateResponse(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt,
    temperature: 0,
    max_tokens: 100,
  });

  const generatedText = response.data.choices[0].text;
  console.log(generatedText);
}

readline.question('Enter a prompt: ', (prompt) => {
  generateResponse(prompt)
    .then(() => readline.close())
    .catch((err) => console.error(err));
});
