import Search from './Search'
import logo from "../assets/logo.png"
import { MdMenu } from "react-icons/md";

const Navbar = () => {


  return (
    <div className='  '>
      <div className='w-full  bg-zinc-200 flex items-center justify-between py-2 px-20 '>
        <div className="logo w-18"><img src={logo} alt="" /></div>
        <div className="relative menu text-4xl">
          <button className='px-5 py-2 bg-red-500 text-lg rounded-xl'>Login</button>
        </div>
      </div>
      <Search />

    </div>
  )
}

export default Navbar