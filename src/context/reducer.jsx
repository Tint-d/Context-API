const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD-TO_CART":
      const newCart = action.payload;
        const isExistedInCart = state.cart.find(
          (cartItem) => cartItem.id === newCart.id
        );
        if (isExistedInCart) {
          return {
            ...state,
            cart: state.cart.map((insideCart) =>
              insideCart.id === newCart.id ? { ...newCart} : { ...insideCart } 
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...newCart }],
          };
        }
        case "REMOVE_FROM_CART":
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            // ...state,
            // cart : state.cart.reduce((aa, bb) => aa+bb,0)
          };
        case "CART_EMPTY":
          return{...state,cart: (state.cart = [])}
    default:
      return state;
  }
};

export default reducer;
