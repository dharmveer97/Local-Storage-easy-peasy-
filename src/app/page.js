'use client';

import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import useAddToCart from '../hooks/useAddToCart';
import Card from '../components/global/Card';
import { Heading } from '../components/atoms';

const testData = [
  {
    id: 1,
    title: 'ONE ',
    description: 'Test test test test',
    image: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    id: 2,
    title: 'TWO ',
    description: 'Test2 test2 test2 test2',
    image: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    id: 3,
    title: 'THREE ',
    description: 'Test3 test3 test3 test3',
    image: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    id: 4,
    title: 'FOUR ',
    description: 'Test4 test4 test4 test4',
    image: 'https://source.unsplash.com/random/300x300/?2',
  },
];

export default function Page() {
  const handleAddToCart = useAddToCart();
  const removeFromCart = useStoreActions((actions) => actions.cart.remove);
  const cartItems = useStoreState((state) => state.cart.items);
  return (
    <div className="container  mx-auto">
      <Heading className="my-7">Cart Items</Heading>
      <div className="grid grid-cols-4 gap-6 border p-6">
        {testData &&
          testData.map((element) => {
            return (
              <Card
                data={element}
                key={element.title}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
      </div>
      {/* // add to cart after scenario */}
      <Heading className="my-6">Cart LIST After Add to cart (/Cart)</Heading>
      <div className="grid grid-cols-4 gap-6 border p-6">
        {cartItems?.length > 0 &&
          cartItems.map((item, i) => (
            <div>
              <Card data={item} removeFromCart={() => removeFromCart(i)} />
            </div>
          ))}
      </div>
    </div>
  );
}
