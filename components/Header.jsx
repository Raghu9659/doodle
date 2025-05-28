
"use client";
import {auth, signInWithGoogle } from '@/app/firebase.';
import { onAuthStateChanged ,signOut} from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const Header = () => {

  const [user, setUser] =useState (null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>setUser(user));
    return () => unsubscribe();

  },[]) 

  const handleLogout = async () => {
  await signOut(auth);


}




  return (
    <div className='mt-2 mx-8'>
      <nav className='flex justify-between items-center'>
        <h1>Logo</h1>
        {
        user ?  <div className='flex gap-2 items-center'>
          <img src={user?. photoURL} width={20} height={20} className='rounded-full' alt ='profile pic' />
            <span>
              {user ?.displayName}
            </span>
        
          <button
            className='bg-red-500 text-white border px-4 py-2 rounded'
            onClick={handleLogout}> Logout </button> </div>
          
           :
           
          <div className='flex gap-2 items-center'>
            <span>
              {user ?.displayName}
            </span>
        
          <button
            className=' bg-blue-600 text-white border px-4 py-2 rounded'
            onClick={signInWithGoogle}> Login </button>
          
            
          
          </div>
}
        
      </nav>
    </div>
  );
};

export default Header; 
