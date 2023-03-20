import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from '../firebase/firbase';

const SignInWithGoogle = () => {
  return (
    <div className='flex flex-col w-full h-[100vh] justify-center items-center'>
      <button
        onClick={signInWithGoogle}
        className="bg-gray-100 text-slate-900 flex items-center h-8 w-60 px-1 my-4 text-sm font-semibold rounded-sm shadow-md shadow-black hover:bg-black hover:text-gray-300 transition-all duration-500  "
      >
        <GoogleIcon fontSize='small'
        className='mr-2 text-rose-500'/> Sign In With Google
      </button>

      <div className='flex flex-col w-80 items-center justify-center my-4 border-2 border-slate-800 bg-slate-700 p-10'>
        <h1 className='mb-1 flex items-center text-lg text-gray-300'>
        <span className="text-sm mr-2 font-['Oleo_Script'] text-gray-500">name: </span>{localStorage.getItem("name")}
        </h1>

        <h1 className='mb-1 flex items-center text-lg text-gray-300'>
        <span className="text-sm mr-2 font-['Oleo_Script'] text-gray-500">email: </span>{localStorage.getItem("email")}
        </h1>

        <img src={localStorage.getItem("profilePic")} alt="profilepic"
          className='my-2 w-40 rounded-full'
        />
      </div>
    </div>
  );
};

export default SignInWithGoogle;