import React from 'react';
import { jsPDF } from 'jspdf';

function RecipeDisplay({ recipe }) {
  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("Generated Recipe", 10, 10); // Title
    doc.setFontSize(12);

    // Split recipe text into lines to fit the page width
    const lines = doc.splitTextToSize(recipe, 180); 
    doc.text(lines, 10, 20); 

    doc.save("recipe.pdf");
  };

  return (
    <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Recipe:</h2>
      <pre className="whitespace-pre-wrap text-gray-800">{recipe}</pre>
      <button
        onClick={handleDownloadPDF}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
}

export default RecipeDisplay;
