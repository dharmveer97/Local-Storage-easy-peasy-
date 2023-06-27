import { useState } from 'react';

export const useQuantity = (initialQuantity = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const handleUpdateQuantity = (type) => {
    if (type === 'remove' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'add') {
      setQuantity(quantity + 1);
    }
  };
  return [quantity, handleUpdateQuantity];
};
