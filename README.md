![frontend](frontend/src/assets/fav-icon.png)

# RecipeGenAi

An AI-powered recipe generation web application that helps users create customized recipes based on ingredients, cuisine, and meal type. This project demonstrates the use of React for the frontend, Node.js/Express for the backend, and Google Generative AI for recipe generation.

---

## Features

- **Dynamic Recipe Generation**: Generate recipes based on user-input ingredients, cuisine, and meal type (breakfast, lunch, dinner, or snacks).
- **User-Friendly Interface**: Clean and responsive UI built with React and Tailwind CSS.
- **Download Recipes as PDF**: Easily download the generated recipe in PDF format.

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.

### Backend
- **Node.js/Express**: For handling API requests.
- **Google Generative AI**: For generating recipes.

---

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/varun77x/RecipeGenAi.git
cd RecipeGenAi
```

### Backend Setup
1. Navigate to the `backend` directory.
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the server directory and add your API key:
   ```env
   API_KEY=your-google-generative-ai-api-key
   ```
4. Start the server:
   ```bash
   nodemon server.js
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

