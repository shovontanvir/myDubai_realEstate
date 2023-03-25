export const initialState = {
  lang: "en",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setLang":
      return {
        ...state,
        lang: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
