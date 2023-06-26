import shortid from "shortid";
// 초기값
const initialState2 = [
  {
    content: "내용",
  },
];

// 리듀서
const reviews = (state = initialState2, action) => {
  switch (action.payload) {
    case "ADD_CONTENT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reviews;
