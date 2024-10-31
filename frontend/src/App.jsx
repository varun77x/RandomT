// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';

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
    <div className="container mx-auto p-6 max-w-lg">
      <Header />
      <RecipeForm onGenerate={handleGenerateRecipe} isGenerating={isGenerating} />
      {recipe && <RecipeDisplay recipe={recipe} />}
    </div>
  );
}

export default App;
