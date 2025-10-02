import logo from "../assets/logo.png"
import Addnotes from './Addnotes'


const Navbar = () => {


  return (
    <div>
      <div className='w-full bg-white-100 shadow-md flex items-center justify-between px-10 '>
        <div className="logo w-18"><img src={logo} alt="" /></div>
        <div className="relative menu text-4xl">
          <button className='px-5 py-2 bg-red-500 text-lg rounded-xl'>Login</button>
        </div>
      </div>
      <Addnotes />

    </div>
  )
}

export default Navbar