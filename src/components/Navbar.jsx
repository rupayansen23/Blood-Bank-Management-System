import {Link} from 'react-router'

export default function Navbar() {
    return(
        <div className="flex flex-wrap justify-between p-5 bg-gradient-to-r from-red-900 to-red-700">
            <div className="flex items-center">
                <div className="">
                    <h1 className="font-bold text-white text-2xl">Blood Bank</h1>
                </div>
                <ul className="flex pl-5">
                    <li className=" ml-3 text-red-400 hover:text-white cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" ml-3 text-red-400 hover:text-white cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className=" ml-3 text-red-400 hover:text-white cursor-pointer">
                        <Link to="/guidelines">Guidelines</Link>
                    </li>
                    <li className=" ml-3 text-red-400 hover:text-white cursor-pointer">Services</li>
                    <li className=" ml-3 text-red-400 hover:text-white cursor-pointer"><Link to="/contactus">Contact Us</Link></li>
                        
                </ul>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="mr-5 text-red-400 hover:text-white cursor-pointer">Check Blood</li>
                    <li className="mr-5 text-red-400 hover:text-white cursor-pointer">Doner Form</li>
                    <li className="mr-5 text-red-400 hover:text-white cursor-pointer">Doner Details</li>
                    <li className="mr-5 text-red-400 hover:text-white cursor-pointer">
                        <Link to="/login">Admin Login</Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}