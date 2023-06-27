import { find } from 'lodash';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { generateRandomId } from '../lib/generateRandomId';
import { getPrice } from '../components/global/CurrencyFormat';

const useAddToCart = () => {
  const router = useRouter();
  const addToCart = useStoreActions((actions) => actions.cart.add);
  const cartItems = useStoreState((state) => state.cart.items);

  const handleAddToCart = (data, totalPrice, quantity) => {
    const randomId = generateRandomId(8);
    const price = getPrice(data.price);
    const totalVariantPrice = getPrice(totalPrice);

    const itemData = {
      itemId: randomId.toUpperCase(),
      id: data.id,
      title: data.title,
      price: totalVariantPrice || price,
      quantity: quantity || 1,
      description: data.description,
      totalVariantPrice,
    };
    const itemExists = !!find(cartItems, { id: itemData.id });

    if (itemExists) {
      Swal.fire({
        title: 'This item is already in your cart.',
        icon: 'info',
        timer: 1500, // 15 seconds
        timerProgressBar: true,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/');
        }
      });
    } else {
      addToCart(itemData);
    }
  };

  return handleAddToCart;
};

export default useAddToCart;
