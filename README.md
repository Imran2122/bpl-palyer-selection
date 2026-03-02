# 🏏 Player Selection Web Application

A simple and interactive Player Selection web application built with **React JS**, **Tailwind CSS**, and **DaisyUI**.

This project allows users to select players within a limited coin balance and manage their selected team efficiently.

---

## 🚀 Live Features

- 🔹 Two Tabs System:
  - **Players Tab** – View all available players.
  - **Selected Tab** – View selected players.

- 💰 Coin Balance System:
  - Each player has a specific price.
  - When a player is selected, coins are deducted from the navbar balance.
  - If the balance is insufficient, selection is prevented.

- 👥 Player Selection Rules:
  - Maximum **6 players** can be selected.
  - Duplicate player selection is not allowed.
  - Selected players are disabled from being selected again.

- 🗑 Remove Player:
  - Players can be removed from the Selected tab.
  - When removed, the coin balance is refunded.
  - Removed players become selectable again.

---

## 🛠 Technologies Used

- ⚛️ React JS
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔥 React Hot Toast (for notifications)

---

## 📂 Project Structure

- `PlayerCart.jsx` – Displays individual player cards.
- `SelectedPlayers.jsx` – Shows selected players list.
- `Navbar.jsx` – Displays current coin balance.
- `App.jsx` – Manages global state (balance, selected players, tab control).

---

## 🧠 Application Logic

1. User starts with a fixed coin balance.
2. Selecting a player:
   - Deducts coins.
   - Adds player to Selected tab.
   - Disables selection button.
3. Removing a player:
   - Refunds coins.
   - Removes player from selection list.
4. The system prevents:
   - Selecting more than 6 players.
   - Selecting players without enough coins.
   - Selecting duplicate players.

---

## 📸 UI Design

The UI is built using Tailwind CSS and DaisyUI components to provide:

- Responsive layout
- Clean card design
- Smooth button interactions
- Modern tab interface

---

## 📌 Future Improvements

- Add player search functionality
- Add filtering by role (Batsman, Bowler, All-Rounder)
- Add local storage support
- Improve animations and transitions

---

## 📖 Conclusion

This is a beginner-friendly React project demonstrating:

- State management
- Conditional rendering
- Event handling
- Component-based architecture
- Business logic implementation

---

### 👨‍💻 Developed By
Imran Hossain
netlify Link:cheery-narwhal-75ec8c.netlify.app
