import Image from "next/image";
import { UserHead } from "./user-head";
import { Avatar } from "@nextui-org/react";
import { ChatLine } from "./chatLine";
import { Chatlog } from "./chat_log";

export const Chatlist = () => {
  return (
    <section className="flex flex-col flex-none overflow-auto w-24   lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
      <div className="header p-4 flex flex-row justify-between items-center flex-none">
         
          <div className="flex flex-row items-center">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
             
              <span className="font-semibold pl-3">ArNold</span>
        
           
        </div>
        <p className="text-md font-bold hidden md:block group-hover:block">
          Messages
        </p>
        <a
          href="#"
          className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
          </svg>
        </a>
      </div>
      <div className="search-box p-4 flex-none">
        <form>
          <div className="relative">
            <label>
              <input
                className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                type="text"
                value=""
                placeholder="Search Messenger"
              />
              <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="#bbb"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </form>
      </div>

      <div className="contacts pl-2 flex-1 overflow-y-scroll">

         <ChatLine/>
         <ChatLine/>
         <ChatLine/>
         <ChatLine/>
         <ChatLine/>
         <ChatLine/>
         <ChatLine/>
       
        
      </div>
    </section>
  );
};
