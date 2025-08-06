import React from 'react';
import { Button } from '../components/ui/button';
import { Alert } from '../components/ui/alert'; 
import { Link } from 'react-router-dom';


const viewAndDownloadResume = () => {
    const resumeUrl = '/certificates/sospeter.pdf'; 
    window.open(resumeUrl, '_blank');
    downloadResume();
    Alert({ type: 'success', message: 'Downloaded!' });
};

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">

          <div className="grid md:grid-cols-1 max-w-6xl mx-auto p-6 rounded-lg shadow-md bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <p className="text-gray-700 mb-4">
                I am a passionate web developer with a focus on creating dynamic and responsive web applications.
                My journey in web development started several years ago, and I have since honed my skills in various technologies.
            </p>
            <p className="text-gray-700 mb-4">
                I enjoy working on projects that challenge me and allow me to grow as a developer. 
                My goal is to build applications that not only meet the needs of users but also provide an enjoyable experience.
            </p>

            <h1 className="text-3xl font-bold mb-6">Skills</h1>
            <ul className="list-disc list-inside mb-4">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS and Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>Version Control (Git)</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Agile Methodologies</li>
            </ul>


            <h1 className="text-3xl font-bold mb-6">Education</h1>
            <p className="text-gray-700 mb-4">
                I hold a Bachelor's degree in Physics and Materials Science from the University of Maseno
            </p>
            <p className="text-gray-700 mb-4">
                Besides my formal education, I have completed a course in Full Stack Web Development from Power Learn Project Africa, which has equipped me with the skills to build modern web applications.
            </p>
         </div>
            <div className="text-center mt-6">
                <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={viewAndDownloadResume}>
                Resume
            </Button>
            <br /> <br />
            <Button className ="bg-blue-600 text-white hover:text-underline">
                <Link to="/certification">Certification</Link>
                </Button>  
            </div>
            
        </div>
)}

export default About;