# Memory Match: A Card Matching Game

<img width="953" height="540" alt="{0164A8BD-75FF-4260-A276-CF4A5CBA7532}" src="https://github.com/user-attachments/assets/32dbaf46-b72a-4574-8512-27d80817d064" />


<p align="center">
  <img src="https://img.shields.io/github/license/rudraprasad69/Store-Rating-Platform" alt="License">
  <img src="https://img.shields.io/github/stars/rudraprasad69/Store-Rating-Platform" alt="Stars">
  <img src="https://img.shields.io/github/forks/rudraprasad69/Store-Rating-Platform" alt="Forks">
  <img src="https://img.shields.io/github/issues/rudraprasad69/Store-Rating-Platform" alt="Issues">
</p>

> A traditional memory game involving playing cards. The objective is to locate pairs of cards that have matching images or symbols—built with a modern frontend stack including React, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Live Demo

Play the live version of the game here:
[memory-match-app.netlify.app/](https://memory-match-app.netlify.app/)

## ✨ Features

### Gameplay Loop
-   **Clear Start & Endpoints:** The game features a distinct starting point and explicit conditions for both victory and defeat.
-   **Restart Functionality:** A restart button is available, allowing players to quickly begin a new game at any time.
-   **Score Tracking:** A visible score display enables players to track their progress and performance.
-   **Dynamic Difficulty:** The game's difficulty dynamically adjusts and increases as the player successfully advances.

### User Interface (UI)
-   **Clean & Responsive Design:** The UI is clean, uncluttered, and fully responsive, adapting seamlessly to various screen sizes. 
-   **Engaging Micro-interactions:** Features subtle hover states, glowing elements, and sound effects to enhance the user experience. 
-   **Mobile-Friendly:** The design is optimized for mobile devices with careful consideration for touch interactions.

### Data & Optional Enhancements
-   **High Score Persistence:** The player's all-time highest score is persistently stored in the browser using `localStorage`. 
-   **JSON Leaderboard (Optional):** Includes a simulated JSON leaderboard to track and display high scores. 
-   **Pause/Resume (Optional):** A pause and resume function allows players to temporarily halt their progress. 

## 🛠️ Tech Stack

<p align="left">
  <!-- React -->
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>


  <!-- Next.js -->
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width="40" height="40" style="filter: brightness(0) invert(1);" />
  </a>


  <!-- Vite -->
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="vite" width="40" height="40"/>
  </a>


  <!-- Framer Motion -->
  <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framermotion" width="40" height="40" style="filter: invert(1);" />
  </a>


  <!-- TailwindCSS -->
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwindcss" width="40" height="40"/>
  </a>
</p>


-   **Core:** React (via Vite or Next.js) 
-   **Styling:** Tailwind CSS 
-   **Animations:** Framer Motion or GSAP 

  ## 🎮 How to Play

Getting started is simple! Follow these steps to play the game:

1.  **Flip a Card:**
    * Click on any card that is face down to reveal the image on it.

2.  **Find the Match:**
    * Now, click on another face-down card to see if it's a matching pair.

3.  **Check the Result:**
    * **If the cards match,** they will stay face-up. You're one step closer to winning!
    * **If they don't match,** both cards will flip back over. Try to remember their positions for your next turn!

4.  **Win the Game:**
    * Continue matching pairs until all the cards are face-up.
    * Try to finish with the fewest moves to achieve a new high score!

## ⚙️ Installation & Setup

To get a local copy up and running, follow these steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) (v18.17 or later) installed.

### Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Install dependencies:**
    ```bash
    npm install 
    ```
    *(or `pnpm install` / `yarn install`)*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    *(or `pnpm run dev` / `yarn dev`)*

5.  Open [http://localhost:5173](http://localhost:5173) (for Vite) or [http://localhost:3000](http://localhost:3000) (for Next.js) with your browser to see the result.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
