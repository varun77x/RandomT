import React, { useState } from 'react';

function RecipeForm({ onGenerate, isGenerating }) {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [mealType, setMealType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ ingredients, cuisine, mealType }); // function to hit enpoints
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (e.g., chicken, garlic)"
        className="border rounded-md w-full p-2"
      />

      <input
        type="text"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter cuisine (e.g., Italian)"
        className="border rounded-md w-full p-2"
      />

      <select
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        className="border rounded-md w-full p-2 bg-white"
      >
        <option value="" disabled>
          Select meal type
        </option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>

      <button
        type="submit"
        className={`w-full p-2 rounded-md text-white font-semibold ${
          isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={isGenerating}
      >
        {isGenerating ? 'Generating...' : 'Generate Recipe'}
      </button>
    </form>
  );
}

export default RecipeForm;
