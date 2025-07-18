import React from 'react';

const Navbar = () => {
  return (
    <div className='fixed backdrop-blur-2xl z-50 w-full text-white bg-gray/50'>
      <div className='max-w-7xl mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <div className='relative h-8 w-8 rounded-full'>
            {/* Spinning border */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 animate-spin [mask-image:linear-gradient(transparent,white)]'>
              {/* Inner black circle to cover center */}
              <div className='absolute inset-[2px] bg-black rounded-full'></div>
            </div>

            {/* Static centered text */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
                R
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
