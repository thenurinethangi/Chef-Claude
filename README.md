# Chef Claude 🍳 | AI-Driven Recipe Generator

**Chef Claude** is a modern, intelligent web application that helps you transform a handful of ingredients into a delicious recipe. Powered by state-of-the-art AI (Mistral 7B & Claude 3), it takes the guesswork out of cooking by suggesting creative meals based on what you already have in your pantry.

---

## 📸 Project Screenshots

<div align="center">
  <h3>Landing & Interaction</h3>
  <img src="src/assets/project_screenshots/Screenshot (1227).png" width="45%" alt="Landing Page" />
  <img src="src/assets/project_screenshots/Screenshot (1228).png" width="45%" alt="Ingredient Input" />
  <br />
  <img src="src/assets/project_screenshots/Screenshot (1229).png" width="45%" alt="Ingredient List" />
  <img src="src/assets/project_screenshots/Screenshot (1230).png" width="45%" alt="Recipe Generation" />
  <br />
  <h3>AI Generated Results</h3>
  <img src="src/assets/project_screenshots/Screenshot (1231).png" width="45%" alt="Recipe Result 1" />
  <img src="src/assets/project_screenshots/Screenshot (1232).png" width="45%" alt="Recipe Result 2" />
</div>

---

## ✨ Features

- 🧠 **AI Intelligence:** Integrated with **Anthropic (Claude 3 Haiku)** and **Hugging Face (Mistral 7B Instruct)** to generate high-quality, diverse recipes.
- 📝 **Markdown Rendering:** Beautifully formatted recipes with clear instructions, ingredients, and titles.
- ⚡ **Real-time Interaction:** Fast and responsive ingredient entry system.
- 🎨 **Modern UI/UX:** Built with a focus on clean aesthetics, featuring smooth transitions and a premium feel.
- 📱 **Fully Responsive:** Works perfectly on desktops, tablets, and mobile devices.
- ⏳ **Loading states:** Visual feedback while the AI "cooks up" your recipe.
- 📜 **Auto-Scroll:** Automatically scrolls to show you the generated recipe once it's ready.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **AI Models:** 
  - [Mistral 7B](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2) via Hugging Face Inference
  - [Claude 3 Haiku](https://www.anthropic.com/claude) via Anthropic SDK
- **Styling:** Custom CSS & [Bootstrap 5](https://getbootstrap.com/)
- **Markdown:** [react-markdown](https://github.com/remarkjs/react-markdown) for elegant recipe display.
- **Routing:** [React Router 7](https://reactrouter.com/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/thenurinethangi/Chef-Claude-React.git
cd react-project-two
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your API keys:
```env
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
VITE_HF_TOKEN=your_huggingface_token_here
```

### 4. Run the development server
```bash
npm run dev
```

---

## 💡 How it Works

1. **Input Ingredients:** Add at least 4 ingredients to the list.
2. **Generate:** Click on the "Get a Recipe" button.
3. **Enjoy:** The AI analyzes your ingredients and provides a step-by-step markdown-formatted recipe.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by Nurine Thangi</p>
