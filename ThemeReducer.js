export const ThemeReducer = (prevState = initialStateThemeReducer, action) => {
    const { type, payload } = action;
    switch (type) {
      case CHANGE_THEME_MODE:
        return {
          ...prevState,
          darkMode: payload.darkMode,
          tailwind: payload.darkMode
            ? (value) => tailwindDark(value) : (value) => tailwindLight(value),
          getColor: payload.darkMode
            ? (value) => getColorDark(value) : (value) => getColorLight(value),
        };
      case CHANGE_PREFERENCES_THEME_USER:
        return {
          ...prevState,
          userPreferencesThemeMode: payload.newPreferences,
          darkMode: payload.darkMode,
          tailwind: payload.darkMode
            ? (value) => tailwindDark(value) : (value) => tailwindLight(value),
          getColor: payload.darkMode
            ? (value) => getColorDark(value) : (value) => getColorLight(value),
        };
      case RESTORE_THEME_MODE:
        return {
          ...prevState,
          isLoading: false,
          userPreferencesThemeMode: payload.savedTheme,
          darkMode: payload.darkMode,
          tailwind: payload.darkMode
            ? (value) => tailwindDark(value) : (value) => tailwindLight(value),
          getColor: payload.darkMode
            ? (value) => getColorDark(value) : (value) => getColorLight(value),
        };
      default:
        return prevState;
    }
  };