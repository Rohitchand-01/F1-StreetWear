import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onDecrease(item.id)} 
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="font-medium w-6 text-center">{item.quantity}</span>
          <button 
            onClick={() => onIncrease(item.id)} 
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>

        <button 
          onClick={() => onRemove(item.id)} 
          className="text-red-500 hover:text-red-700 font-semibold transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;