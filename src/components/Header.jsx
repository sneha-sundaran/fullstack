import {FaSearch} from 'react-icons/fa';
import{Link } from 'react-router-dom'; 

export default function Header() {
  return (
    <header className='big-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl max-auto p-3'>
          <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-warp'>
        <span className='text-slate-500'>Choose  </span>
        <span className='text-slate-700'>   Your Plot</span>   
        </h1>   
        </Link>
        <form className='bg-slate-100 p -3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
              <FaSearch className='text-slate-500'/>
            </form>  
            <ul className='flex gap-4'>
              <Link to='/'></Link>
              <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
              <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
              <li className=' text-slate-700 hover:underline'>Sign in</li>
            </ul>
        </div>
    </header>
  );
}
