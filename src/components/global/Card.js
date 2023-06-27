import React from 'react';

const Card = ({ data, handleAddToCart, removeFromCart }) => {
  if (!data) return null;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      {data.image && (
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
      )}
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{data.title}</h2>
          <p className="dark:text-gray-100">{data.description}</p>
        </div>
        {handleAddToCart && (
          <button
            onClick={() => {
              handleAddToCart(data);
            }}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
            Add to cart
          </button>
        )}
        {removeFromCart && (
          <button
            onClick={removeFromCart}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
            REMOVE ITEM
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
