export const initialState = {
  lang: "en",
  viewType: "grid",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setLang":
      return {
        ...state,
        lang: action.item,
      };
    case "setViewType":
      return {
        ...state,
        viewType: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
