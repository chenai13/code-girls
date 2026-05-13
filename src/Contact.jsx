import "./App.css";
import Hero from "./HomeFolder/Hero";
import heart from "./assets/heart.png";
import { IoMailOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import profile from "./assets/profile.jpg";

function Contact() {
  return (
    <>
      <Hero
        titleBeforeIcon={
          <>
            I'd love to hear from you
            <span className="inline-flex items-center gap-2 pl-2">
              <img src={heart} className="h-8 items-center" alt="Heart" />
            </span>
          </>
        }
        subtitle="Im happy to answer any questions you may have, and I’ll try to respond within a few hours."
      />
      <section className="-mt-48 min-w-50 pt-12 grid grid-cols-1 md:grid-cols-2 mx-auto gap-3">
         <div className="flex-1">
        <div className="flex flex-col h-full rounded-lg bg-white shadow-2xl transition hover:scale-[1.01]">
          <div className="flex flex-row items-start border-b border-gray-200 px-8 pt-8 pb-4">
            <div>
              <img
                src={profile}
                className=" h-12 w-12 min-w-12 min-h-12 object-cover rounded-full"
              ></img>
            </div>

            <div className="flex flex-col pl-5 text-left">
              <p className="text-sm text-gray-500">Send me a DM on LinkedIn</p>
              <h1 className="font-semibold text-gray-900 leading-tight">
                Chenai Lamarque
              </h1>
            </div>
          </div>
          <div className="pt-4 px-10 pb-6">
            <a href="https://www.linkedin.com/in/chenai-lamarque-090802214/">
            <button className="hover:ring-1 hover:ring-gray-300 duration-100 text-left text-sm font-medium p-2 border border-gray-300 shadow-sm rounded-xl">
              Send DM
              
              <div className="inline-flex items-center justify-center ml-2">
                <FaArrowRightLong className="block translate-y-px" />
              </div>
            </button>
            </a>
          </div>
        </div>
        </div>
        <div className="flex h-full flex-col rounded-lg bg-white shadow-2xl transition hover:scale-[1.01] overflow-hidden">
           <div className="flex-1">
          <div className="flex flex-row items-start border-b border-gray-200 px-8 pt-8 pb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200">
              <IoMailOutline className="text-2xl text-gray-700" />
            </div>

            <div className="flex flex-col pl-5 text-left min-w-0">
              <p className="text-sm text-gray-500">Send me an email</p>
              <h1 className="text-sm font-semibold text-gray-900 leading-tight wrap-break-word">
                chenailamarque1@gmail.com
              </h1>
            </div>
          </div>
          <div className="pt-4 px-10 pb-6">
            <a href="mailto:chenailamarque1@gmail.com">
            <button className="hover:ring-1 hover:ring-gray-300 duration-100 text-left text-sm font-medium p-2 border border-gray-300 shadow-sm rounded-xl">
              Send Email
             
              <div className="inline-flex items-center justify-center ml-2">
                <FaArrowRightLong className="block translate-y-px" />
              </div>
            </button>
             </a>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
