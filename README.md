# Photo Gallery Web App

A high-performance, responsive image gallery built with **React 19**, **Vite**, and **Tailwind CSS**. This project demonstrates advanced React patterns for data fetching, state management, and performance optimization.

## 🚀 Key Features
* **Custom Hooks:** Business logic extracted into `useFetchPhotos` (API lifecycle) and `useFavourites` (state logic).
* **State Management:** Utilizes the `useReducer` hook for complex "favourites" logic, providing more predictable state transitions than `useState`.
* **Real-time Search:** A local filter that allows users to search by author name instantly without additional API overhead.
* **Persistent Storage:** Favorites are saved to `localStorage`, ensuring data persists even after a page refresh.
* **Performance Optimized:** * `useMemo` handles the filtering logic to prevent expensive re-calculations on every render.
    * `useCallback` stabilizes event handlers to prevent unnecessary component re-renders.
* **Responsive Grid:** A fluid Tailwind-powered layout (4 columns on Desktop, 2 on Tablet, 1 on Mobile).

## 🛠️ Technical Stack
* **Framework:** React 19 (Vite)
* **Styling:** Tailwind CSS (Zero external UI libraries used)
* **API:** [Lorem Picsum](https://picsum.photos/)
* **State:** useReducer + useContext (optional) + localStorage

## 📦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
2. **Run the development server**:

   ```Bash
   npm run dev

3. **Build for production**:

   ```Bash
   npm run build
