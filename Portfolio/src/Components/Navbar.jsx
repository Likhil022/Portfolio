// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between bg-blue-950  text-white h-16 p-4 gap-1 border-b-2 px-[10%]">
      <div className="portfolio-name text-2xl font-semibold">
        Likhil Kosuru <code className=" px-2 py-1 rounded"> &lt;/&gt; </code>
      </div>
      <div>
        <ul className="flex justify-between gap-12 text-xl font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

// import React, { useState } from "react";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex justify-between items-center text-white h-16 p-4 gap-1">
//       <div className="portfolio-name text-2xl font-semibold">
//         Likhil Kosuru{" "}
//         <code className="px-2 py-1 rounded bg-gray-700"> &lt;/&gt; </code>
//       </div>

//       {/* Mobile Menu Toggle Button */}
//       <div className="block md:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="h-6 w-6 text-white"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Navbar Items */}
//       <div className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
//         <ul className="flex md:flex-row flex-col gap-8 md:gap-12 text-xl font-semibold">
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
