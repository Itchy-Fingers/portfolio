
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved. Sospeter O.
            </p>
            <p className="text-xs mt-2">
            Follow us on 
            <a href="https://twitter.com" className="text-blue-400 ml-1">Twitter</a>, 
            <a href="https://www.facebook.com/profile.php?id=100081894076234" className="text-blue-400 ml-1">Facebook</a>, 
            <a href="https://www.instagram.com/sospeter1086?igsh=YzljYTk1ODg3Zg==" className="text-blue-400 ml-1">Instagram</a>
            <a href="https://www.linkedin.com/in/sospeter-owino-06185434b" className="text-blue-400 ml-1">LinkedIn</a>
            </p>
        </div>
        </footer>
    );
    }

export default Footer;