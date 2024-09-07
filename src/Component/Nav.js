
import { Link } from 'react-router-dom'; 


export  const Nav = () => {

  return (
    <div class="bg-red-100 h-14" >
        <ul class="flex px-72 mx-auto container justify-between h-full  items-center w-auto text-xl font-bold  ">
          <li class="hover:text-blue-400">
                <Link  to='/'>Home</Link>
          </li>
          <li class="hover:text-blue-400">
                <Link  to='/product'>Shop</Link>
          </li>
          <li class="hover:text-blue-400">
                <Link  to='/blog'>Blog</Link>
          </li>
          <li class="hover:text-blue-400">
                <Link to='/about'>About</Link>
          </li>
          <li class="hover:text-blue-400">
                <Link to='/contact'>Contact</Link>
          </li>
        </ul>
    </div>
  );
};
export default Nav;