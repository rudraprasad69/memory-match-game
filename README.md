# Memory Match: A Card Matching Game

<img width="953" height="540" alt="{0164A8BD-75FF-4260-A276-CF4A5CBA7532}" src="https://github.com/user-attachments/assets/32dbaf46-b72a-4574-8512-27d80817d064" />


<p align="center">
  <img src="https://img.shields.io/github/license/rudraprasad69/Store-Rating-Platform" alt="License">
  <img src="https://img.shields.io/github/stars/rudraprasad69/Store-Rating-Platform" alt="Stars">
  <img src="https://img.shields.io/github/forks/rudraprasad69/Store-Rating-Platform" alt="Forks">
  <img src="https://img.shields.io/github/issues/rudraprasad69/Store-Rating-Platform" alt="Issues">
</p>

> A traditional memory game involving playing cards. The objective is to locate pairs of cards that have matching images or symbols, built with a modern frontend stack that includes React, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Live Demo

Play the live version of the game here:
[memory-match-app.netlify.app/](https://memory-match-app.netlify.app/)

---

## 📸 Preview  

<div align="center">

  <!-- Carousel container -->
  <div style="max-width: 900px; border: 2px solid #333; border-radius: 10px; padding: 10px; overflow: hidden;">

    <div id="slide1">
      <img src="https://github.com/user-attachments/assets/438d4f94-0f57-4321-a693-77f2bb844229" width="900" />
    </div>
    <div id="slide2" style="display:none;">
      <img src="https://github.com/user-attachments/assets/5c079264-47b0-4c49-a738-432e1fde6b85" width="900" />
    </div>
    <div id="slide3" style="display:none;">
      <img src="https://github.com/user-attachments/assets/98e5285e-e103-41df-b44c-e6a78891af91" width="900" />
    </div>
    <div id="slide4" style="display:none;">
      <img src="https://github.com/user-attachments/assets/1b6b151d-540f-4888-a0e7-3f0e3bf0e794" width="900" />
    </div>

    <p>
      <a href="#slide1">⬅️</a> 
      <a href="#slide2">➡️</a>
      <a href="#slide3">➡️</a>
      <a href="#slide4">➡️</a>
    </p>
  </div>

</div>

---

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

---

## 🛠️ Tech Stack

<div align="left" style="display: flex; flex-direction: column; align-items: flex-start; gap: 20px;">

  <!-- React -->
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer" style="text-align: left;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="50" height="50"/>
  </a>
  <br>

  <!-- Vite -->
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer" style="text-align: left;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="vite" width="50" height="50"/>
  </a>
  <br>

  <!-- Framer Motion -->
  <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer" style="text-align: left;">
    <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framermotion" width="50" height="50" style="filter: invert(1);" />
  </a>
  <br>

  <!-- TailwindCSS -->
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" style="text-align: left;">
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwindcss" width="50" height="50"/>
  </a>

</div>
<br>

-   **Core:** React (via Vite) 
-   **Styling:** Tailwind CSS 
-   **Animations:** Framer Motion or GSAP 

---

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

---

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

5.  Open [http://localhost:5173](http://localhost:5173) (for Vite) with your browser to see the result.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
