// import chat from "../assets/chat.jpg";
// import library from "../assets/library.jpg";
// import cart from "../assets/cart.jpg";
// function Projects() {
//   return (
//     <div className="pt-32 py-64">
//       <h3 className="text-center text-4xl font-bold mb-16 w-full">Projects</h3>
//       <div className="flex justify-between w-full  overflow-clip h-56 ">
//         <div className="relative ">
//           <img className=" h-56 rounded-xl" src={chat} alt="" />
//           <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
//           <h3 className="text-xl font-semibold absolute top-6 pl-4 ">
//             Real-Time Chat Application
//           </h3>
//           <p className="absolute top-12 px-4 pt-3 text-lg ">
//             Enables instant communication using Socket.IO, with live message
//             updates and typing indicators.
//           </p>
//         </div>
//         <div className="relative">
//           <img className=" w-80 rounded-xl " src={library} alt="" />
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <h3 className="text-xl font-semibold absolute top-6 pl-4 ">
//             Library- Redux
//           </h3>
//           <p className="absolute top-12 px-4 pt-3 text-lg">
//             Developed a Library Management System using React and Tailwind CSS
//             for a responsive user interface.
//           </p>
//         </div>
//         <div className="relative">
//           <img className=" w-80 rounded-xl" src={cart} alt="" />
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <h3 className="text-xl font-semibold absolute top-6 pl-4 ">
//             E-Commerce
//           </h3>
//           <p className="absolute top-12 px-4 pt-3 text-lg">
//             {" "}
//             Displays a responsive list of products with filtering options by
//             category, price range, and ratings. Uses Redux for state management
//             to handle product data.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;
// eslint-disable-next-line no-unused-vars
import React from "react";
import chat from "../assets/chat.jpg";
import library from "../assets/library.jpg";
import cart from "../assets/cart.jpg";

function Projects() {
  return (
    <div className="pb-16 px-4 my-64  ">
      <h3 className="text-center text-4xl font-bold mb-28 w-full ">Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1: Real-Time Chat Application */}
        <div className="relative group cursor-pointer">
          <img
            className="h-56 w-full rounded-xl object-cover"
            src={chat}
            alt="Real-Time Chat Application"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">
              Real-Time Chat Application
            </h3>
            <p className="text-lg text-white mt-2">
              Enables instant communication using Socket.IO, with live message
              updates and typing indicators.
            </p>
          </div>
        </div>

        {/* Project 2: Library Management System */}
        <div className="relative group cursor-pointer">
          <img
            className="h-56 w-full rounded-xl object-cover"
            src={library}
            alt="Library Management System"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">
              Library - Redux
            </h3>
            <p className="text-lg text-white mt-2">
              Developed a Library Management System using React and Tailwind CSS
              for a responsive user interface.
            </p>
          </div>
        </div>

        {/* Project 3: E-Commerce */}
        <div className="relative group cursor-pointer">
          <img
            className="h-56 w-full rounded-xl object-cover"
            src={cart}
            alt="E-Commerce"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">E-Commerce</h3>
            <p className="text-lg text-white mt-2">
              Displays a responsive list of products with filtering options by
              category, price range, and ratings. Uses Redux for state
              management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
