import React from 'react';


const Testimonials = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
            <p className="text-gray-700 mb-4">
                Here are some testimonials from my clients and colleagues.
            </p>
            <div className="space-y-4">
                <blockquote className="border-l-4 border-blue-600 pl-4 italic">
                    "This was the best experience I've ever had working with a developer!"
                    <footer className="mt-2 text-sm text-gray-600">— Getrude Jepkosgei, Public Relations Officer, SmartStudy Kenya</footer>
                </blockquote>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic">
                    "Highly professional and delivered on time. Highly recommend!"
                    <footer className="mt-2 text-sm text-gray-600">— Sospeter Owino, CEO & Founder SmartStudy Kenya</footer>
                </blockquote>
            </div>
        </div>
    );
}

export default Testimonials;