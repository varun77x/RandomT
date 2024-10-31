import { useState } from 'react'
import Header from './components/Header'
import RecipeForm from './components/RecipeForm'


function App() {
  const [recipe, setRecipe] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateRecipe = async ({ ingredients, cuisine, mealType }) => {
    setIsGenerating(true);
    setRecipe('');
    try {
      const response = await fetch('http://localhost:3000/generate-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients, cuisine, type: mealType }),
      });
      const data = await response.json();
      setRecipe(data.recipe);
    } catch (error) {
      console.error('Error generating recipe:', error);
      setRecipe('Failed to generate recipe. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Header />
      <RecipeForm onGenerate={handleGenerateRecipe} isGenerating={isGenerating} />
      {recipe}
    </>
  )
}

export default App
