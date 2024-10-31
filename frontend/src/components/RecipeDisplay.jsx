import React from 'react';

function RecipeDisplay({ recipe }) {
  return (
    <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Recipe:</h2>
      <pre className="whitespace-pre-wrap text-gray-800">{recipe}</pre>
    </div>
  );
}

export default RecipeDisplay;
