import{ FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
   <header className='bg-slate-200 shadow-md'> 
    <div className='flex justify-between items-center max-w-6xl p-3'><div/>
      <Link to='/'>
    <h1 className='font-blod text-sm sm:text-sl flex flex-wrap'>
        <span className='text-slate-700'> Real </span>
        <span className='text-slate-900'> Estate </span>
    </h1>
      </Link>
    <form className='bg-slate-100 p-3 rounded-lg flex items-centre'>
        <input type='text' placeholder='search...' 
         className='bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className='text-slate-600'/>
    </form>

    <ul> 
      <Link to ='/home'>
      <li className='hidden sm:inline text-slate-700 hover:underline'> Home</li>
      </Link>
      <Link to ='/about'>
      <li className='hidden sm:inline text-slate-700 hover:underline'> About</li>
      </Link>
      <Link to ='/sign-in'>
      <li className= 'text-slate-700 hover:underline'> Sign in</li>
      </Link>
    </ul>
    
     </div>
   </header>
  )
}
