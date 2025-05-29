"use client";
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [characters, setcharacters] = useState ([]);

  useEffect(() => {

    const fetchData = async() => {

      const response = await fetch('https://www.swapi.tech/api/people');
      const data = await response.json();
      setcharacters(data.results);

    }
    fetchData();

  }, []);
  console.log (characters);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8  max-w-7xl mx-auto'>
      {
      characters.map((character,index) => (
        <div className='p-4 bg-gray-200 rounded' key={index}>
          {character.name}

        </div>

      ))
    }
    </div>
  )
}

export default Hero




























// "use client";

// import useCounterStore from "@/app/store/useCounterStore";





// const Hero = () => {
 
//  const {count,increase,decrease,reset} = useCounterStore();
  
 

  
//   return (
//     <div className=' max-w-7xl md:mx-auto mt-20 mx-8'>
//       <p className='text-4xl font-semibold'>{count}</p>

//       <button className='bg-green-700 text-white font=extrabold text-2xl px-8 py-2 rounded pointer' onClick={increase}>
//         +
//       </button>
       
//       <button className='bg-blue-700 text-white font=extrabold text-2xl px-8 py-2 rounded pointer' onClick={decrease}>
//         -
//       </button>

//       <button className='bg-red-700 text-white font=extrabold text-2xl px-8 py-2 rounded pointer' onClick={reset}>
//         R
//       </button>
//     </div>
//   )
// }

// export default Hero;

