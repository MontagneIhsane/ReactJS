import { createStore } from "redux";

// État initial
const initialState = {
  theme: "light", // Mode par défaut
};

// Reducer pour gérer le thème
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
    case "TOGGLE_THEME":
        return { theme: state.theme === "light" ? "dark" : "light" };
    default:
        return state;
  }
};

// Créer le store
const store = createStore(themeReducer);

export default store;
