import React from 'react'
import {Github , Linkedin, Mail} from 'lucide-react'

const socialLinks = [
  {
    href: "https://github.com/Nivedika-sharma",
    icon: <Github className="h-6 w-6" />, 
    label: "GitHub"
  },
  {
    href: "http://www.linkedin.com/in/nivedika-sharma-7541512a5",
    icon: <Linkedin className="h-6 w-6" />, 
    label: "LinkedIn"
  },
  {
    href: "nivedika9719sharma@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    label: "Email"
  }
];

 const Footer = () => {


  return (
    <footer className="bg-card bg-opacity-50 p-8 rounded-2xl shadow-md shadow-primary/20 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg rounded-lg">
          &copy; {new Date().getFullYear()} Nivedika Sharma. All rights reserved.
        </p>
        <div className="flex justify-center space-x-8 mt-6">
          {socialLinks.map((link) => {
            // For email, use Gmail compose link
            const isEmail = link.label === "Email";
            const href = isEmail
              ? `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(link.href)}`
              : link.href;
            return (
              <a
                key={link.label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-12 h-12 rounded-full bg-white/10 dark:bg-gray flex items-center justify-center"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#home" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition">
                About
              </a>
            </li>
            
            <li>
              <a href="#experience" className="hover:text-primary transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
