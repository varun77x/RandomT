import { useState } from 'react'
import Header from './components/Header'
import RecipeForm from './components/RecipeForm'


function App() {
  handleGenerateRecipe()
  isGenerating()

  return (
    <>
      <Header />
      <RecipeForm onGenerate={handleGenerateRecipe} isGenerating={isGenerating} />
    </>
  )
}

export default App
