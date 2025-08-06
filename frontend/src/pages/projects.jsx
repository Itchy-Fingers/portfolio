import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50 py-10 px-4">
        <div className="text-center mb-8 grid md:grid-cols-1 max-w-6xl mx-auto p-6 rounded-lg shadow-md bg-white">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <p className="text-gray-700 mb-4">
                Here are some of the projects I have worked on that showcase my skills and experience in web development.
            </p>

            <ul className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <li>
                    <strong>BlogNest:</strong>
                    <p>This project is a fullStack application for blogs posting.</p>
                </li>
                <li>
                    <strong>SmartStudy:</strong> 
                    <p>A responsive edu-Tech for learners in Kenya.</p>
                </li>
                <li>
                    <strong>Student Record Database:</strong> 
                    <p>A MySQL file that show school records of students</p>
                </li>
                <li>
                    <strong>E-Commmerce Database</strong>
                    <p>A MySql file showing how users to manage their shopping experience, from product browsing to checkout.</p>
                </li>
            </ul>
            </div>
           <br />
           <div className="text-center">
              <Button className="mt-4" bgColor="blue-600" textColor="white" hoverBgColor="blue-700">
                <a href="https://github.com/Itchy-Fingers" target="_blank" rel="noopener noreferrer">Github Profile</a>
              </Button>
            </div>
        </div>
    );
}


export default Projects;