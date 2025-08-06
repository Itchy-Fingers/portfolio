import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
                <Link to="/">My Portfolio</Link> 
            </div>
            <ul className="flex space-x-6">
                <li>
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                </li>
                <li>
                    <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
                </li>
                <li>
                    <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                </li>
                <li>
                    <Link to="/testimonials" className= "text-gray-700:text-blue-600">Testimonials</Link> 
                </li>
            </ul>
        </nav>
    )};

export default Navbar;