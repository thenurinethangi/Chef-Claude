# Chef Claude: AI-Powered Culinary Intelligence

Chef Claude is a sophisticated web application designed to bridge the gap between available household ingredients and high-quality culinary creation. By leveraging advanced large language models (LLMs), the platform provides an intuitive interface for users to generate detailed, structured recipes based on specific inventory constraints.

## Project Overview

The core objective of Chef Claude is to minimize food waste and enhance home cooking through intelligent automation. The system utilizes a multi-model approach, integrating specialized AI SDKs to process natural language inputs and return precisely formatted markdown recipes. This ensures that users receive not just a list of instructions, but a professional culinary guide tailored to their immediate needs.

## Visual Documentation

### Application Interface
The primary workspace provides a clean, minimalist environment for ingredient management and recipe generation.

![Application Dashboard](src/assets/project_screenshots/Screenshot%20(1227).png)

### Ingredient Management
Users can rapidly inventory their available items through a streamlined input system engineered for efficiency.

![Ingredient Input Interface](src/assets/project_screenshots/Screenshot%20(1228).png)

### Dynamic Inventory Tracking
The application maintains a real-time list of added ingredients, allowing for quick review before committing to the generation process.

![Inventory Tracking](src/assets/project_screenshots/Screenshot%20(1229).png)

### Automated Recipe Synthesis
Once the inventory requirements are met, the underlying AI engine synthesizes a unique recipe, optimizing for the provided ingredients.

![Generation Process](src/assets/project_screenshots/Screenshot%20(1230).png)

### Structural Output Analysis
The resulting output is rendered with high fidelity, providing clear hierarchy, preparation steps, and serving suggestions.

![Recipe Output Analysis 1](src/assets/project_screenshots/Screenshot%20(1231).png)

### Intelligent Variation
The system is designed to provide diverse culinary perspectives, ensuring that subsequent requests for the same ingredients yield different results.

![Recipe Output Analysis 2](src/assets/project_screenshots/Screenshot%20(1232).png)

## Technical Architecture

### Core Technologies
*   **Frontend Framework:** React 19 (utilizing functional components and modern Hooks API)
*   **Build Optimization:** Vite
*   **State Management:** Reactive state handling for inventory and asynchronous data fetching
*   **Typography & Styling:** Context-aware CSS with Bootstrap 5 integration

### Artificial Intelligence Integration
*   **Mistral AI:** Utilized via Hugging Face Inference for robust instruction-following and recipe logic.
*   **Claude 3 (Anthropic):** Implementation support for high-fidelity natural language processing.
*   **Markdown Processing:** `react-markdown` integration for semantic rendering of AI-generated content.

## Implementation Details

The application architecture follows a modular component-based design, ensuring separation of concerns between UI rendering, state logic, and API communication. The AI integration layer is abstracted to handle asynchronous requests efficiently, featuring smooth transitions and auto-scroll functionality for enhanced user experience.

## Deployment and Setup

### Prerequisites
*   Node.js (LTS version recommended)
*   NPM or Yarn package manager

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/thenurinethangi/Chef-Claude-React.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment Variables:
    Create a `.env` file in the root directory:
    ```env
    VITE_ANTHROPIC_API_KEY=your_api_key
    VITE_HF_TOKEN=your_api_token
    ```
4.  Execute Development Build:
    ```bash
    npm run dev
    ```
