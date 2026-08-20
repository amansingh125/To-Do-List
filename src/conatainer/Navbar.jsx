import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-2'>
      <div className='logo'>
        <span className='flex gap-8 mx-9'>iTask</span>

      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all font-bold'>Your task✨</li>
      </ul>
     
     </nav>
     
  )
}

export default navbar
