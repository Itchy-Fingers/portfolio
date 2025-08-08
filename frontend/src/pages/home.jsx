import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50 py-10 px-4">
            <div className="text-center mb-8 grid md:grid-cols-1 max-w-6xl mx-auto p-6 rounded-lg shadow-md bg-white">
               
              <div className="flex justify-center items-center mb-4">
                  <img src="/images/sos.jpg" alt="Profile" className="rounded-full w-32 h-32 mb-4 " />
              </div>
              <h1 className="text-4xl  font-bold mb-6">Hello</h1>
               <h2 className="font-bold text-2xl mb-4">My name is Sospeter.</h2>

               <p className="text-gray-700 mb-4">
                A web developer with a passion for creating dynamic and responsive web applications.
                Explore my work and learn more about my skills and experiences.
               </p>
         </div>

            <div className="text-center mb-6">
               <Button className="bg-blue-600 text-white hover:bg-blue-700">
                   <Link to="/projects">View Projects</Link>
               </Button>

               <Button className="bg-blue-600 text-white hover:bg-blue-700 ml-4">
                   <Link to="/contact">Contact Me!</Link>
               </Button>
            </div>

        </div>
    );
}

export default Home;