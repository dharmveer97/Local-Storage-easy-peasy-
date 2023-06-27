import { useStoreState } from 'easy-peasy';

export const getCartItems = () => {
  const cartItems = useStoreState(
    (state) => state.cart && state.cart.items && state.cart.items,
  );
  const length = cartItems ? cartItems.length : 0;
  return { length };
};
