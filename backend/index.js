const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config(); 

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


app.use(cors());

app.use(express.json());

// Route for recipe generation
app.post('/generate-recipe', async (req, res) => {
  const { ingredients, cuisine, type } = req.body;

  
  const prompt = `Generate a recipe using these ingredients: ${ingredients}. The cuisine is ${cuisine}, and the meal type is ${type}. Please provide the recipe with each step numbered clearly, like "Step 1", "Step 2", etc., and ensure that each step appears on a separate line. Avoid markdown and any special formatting.`;

  // From Gemini API docs and some of my twitches
  try {
    // Get the generative model instance
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Generate content stream from the model
    const result = await model.generateContentStream([prompt]);

    let recipe = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      recipe += chunkText;
    }

    // Ensure the steps are separated correctly and formatted
    const formattedRecipe = formatSteps(recipe);

    // Sending the desired response back to frontend
    res.json({ recipe: formattedRecipe });
  } catch (error) {
    console.error('Error generating recipe from Gemini API:', error);
    res.status(500).json({ recipe: 'Error generating recipe.', error: error.message });
  }
});

// Function to ensure each step is on a new line- Clean excessive spaces and remove extra lines
function formatSteps(recipeText) {
  
  let cleanedText = recipeText.replace(/\n+/g, '\n').trim();

  
  const steps = cleanedText.split(/\n(?=Step \d+)/); 
  
  
  let formattedRecipe = '';
  steps.forEach((step) => {
    formattedRecipe += step.trim() + '\n\n'; 
  });
console.log(formattedRecipe.trim());
  return formattedRecipe.trim();
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
