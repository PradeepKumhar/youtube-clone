import React from 'react';

function Button({ name }) {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 text-sm py-3 px-6 rounded-full whitespace-nowrap text-center">
      {name}
    </button>
  );
}

export default Button;
