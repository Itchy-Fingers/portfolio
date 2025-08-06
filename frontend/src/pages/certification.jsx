import React from 'react';
import { Button } from '../components/ui/button';
import { Alert } from '../components/ui/alert'; 

const certificates = [
  {
    title: "Bachelor's Degree in Physics and Materials Science",
    file: "/certificates/academic.pdf",
  },
  {
    title: "Full Stack Web Development",
    file: "/certificates/cert.pdf",
  },
  {
    title: "Certification in Biogas project",
    file: "/certificates/certificate.pdf",
  },
];

const Certification = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-2xl text-center font-bold mb-4">My Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <div className="flex gap-3">
             <Button> <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline">
                View
              </a>
            </Button>

            <Button>
              <a
                href={cert.file}
                download
                className="text-blue-600 underline"
                onClick={() => Alert({ type: 'success', message: 'Downloaded' })}>
                Download
              </a>
            </Button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Certification;
