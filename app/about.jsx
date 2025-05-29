
'use client';
import { useState } from  "react";
import { useEffect } from "react";
import { FiRefreshCw } from 'react-icons/fi';
import { FaCat } from 'react-icons/fa';

const Cat = () => {
    const [catUrl, setCatUrl] = useState('https://cataas.com/cat/says/hello?fontSize=50&fontColor=red');

     const loadCat = () => {
    const timestamp = new Date().getTime();
    setCatUrl(`https://cataas.com/cat/says/hello?fontSize=50&fontColor=red/cat?timestamp=${timestamp}`);
  };

  useEffect(() => {
    loadCat();
    
  }, []);

console.log("render")

  return (
       <main
      
          className="flex flex-col items-center justify-center min-h-screen  p-6"
         style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1635365737298-3a64d9459d83?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
      <h1 className="text-4xl font-bold mb-8">Random cat Generator</h1>
          <img
            src={catUrl}
            alt="Random Cat"
            className="w-96 h-auto rounded-2xl shadow-lg mb-8"
          />
      <button
            onClick={loadCat}
            className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white font-semibold rounded hover:bg-yellow-600 transition "
          >
            <FiRefreshCw size={20} />
             <FaCat size={40} color="orange" />
            Another Cat
      </button>
    </main>
  );
  
}

export default Cat
