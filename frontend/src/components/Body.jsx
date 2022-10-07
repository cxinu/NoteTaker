import React from "react";

const Body = () => {
  return (
    <>
    <div>
      <div className="flex justify-center bg-black">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-white">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold ">
              NoteTaker
            </h1>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Contact</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Services</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">About</a>
              </li>
              {/* <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                    href="#"></a></li> */}
            </ul>
            {/* <div className="text-white text-center text-base pr-5  inline-flex"> <a href="#"
                                                                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i
                                                                    className="fa fa-twitter"></i></a> <a href="#"
                                                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                    className="fa fa-instagram"></i></a> <a href="#"
                                                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                    className="fa fa-facebook"></i></a> <a href="#"
                                                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                    className="fa fa-google"></i></a> <a href="#"
                                                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                    className="fa fa-linkedin"></i></a> </div> */}
          </div>
        </nav>
      </div>
      <div className="flex justify-center bg-black p-8 my-20">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
            <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
              <div className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 ">NoteTaker </div>
              <div className="text-lg uppercase md:text-3xl   ">
                Interactive Notes
              </div>
              <div className="text-xl md:text-3xl   "></div>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4">
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?books"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/200x400/?fountain"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?pen"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?book"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?fountain"
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </div>
           
          </div>
          <div className="justify-centre text-white mx-14 my-40 text-align-center items-center">
            <button>Create Notes</button>
          </div>
          
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      
    </div>
    
          </>
          
  );
};

export default Body;
