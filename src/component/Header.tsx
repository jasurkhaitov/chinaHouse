import { PhoneCall } from "../assets/icons";
import { useState } from "react";
import { images } from "../assets/images";
import Button from "./ui/Button";
import { isModalOpen } from "./Modal";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = isModalOpen();

  const navBar = [
    {
      page: 'О компании',
      link: '#about'
    },
    {
      page: 'Проекты',
      link: '#project'
    },
    {
      page: 'Планировки',
      link: '#plan'
    },
    {
      page: 'Акции',
      link: '#discount'
    },
    {
      page: 'Контакты',
      link: '#contact'
    },
  ];

  const smoothScroll = (e, targetId) => {
    e.preventDefault(); 

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const yOffset = -100;
      const yPosition = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="w-full m-auto flex items-center justify-between px-4 py-3 xl:w-[1080px]">
      
      <a href="" className="block h-12 lg:h-16 w-12 lg:w-16">
        <img className="w-full" src={images.logo} alt="Logo" />
      </a>

      <nav className="hidden lg:flex gap-x-9">
        {navBar.map((item, idx) => (
          <a 
            key={idx} 
            className="text-[15px] leading-[20px] font-normal" 
            href={item.link} 
            onClick={(e) => smoothScroll(e, item.link)} // Use the smooth scroll function here
          >
            {item.page}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-x-[15px]">
        
        <div className="hidden sm:flex items-center gap-x-[15px] cursor-pointer">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-400/60">
            <PhoneCall />
          </div>
          <p>+998 71 200 05 45</p>
        </div>

        <div className="flex items-center gap-x-[10px]">
          <select className="hidden sm:flex lg:text-xs xl:text-base 2xl:text-lg bg-transparent focus:outline-none cursor-pointer" name="" id="">
            <option value="">RU</option>
            <option value="">UZ</option>
            <option value="">EN</option>
          </select>

          <Button
            className="rounded-[5px] small:flex hidden bg-[#FF5F65] active:scale-95 px-[15px] py-[8px] text-[15px] text-white"
            title="Заказать звонок"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden ml-auto p-2 rounded-md focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="p-2 focus:outline-none absolute top-4 right-4"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <nav className="mt-16 flex flex-col items-start gap-y-6 pl-6">
          {navBar.map((item, idx) => (
            <a 
              key={idx} 
              className="text-lg font-medium" 
              href={item.link} 
              onClick={(e) => smoothScroll(e, item.link)}
            >
              {item.page}
            </a>
          ))}

          <div className="pt-5 flex items-center gap-x-3 cursor-pointer border-t border-gray-500">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-400/60">
              <PhoneCall />
            </div>
            <p className="text-lg">+998 71 200 05 45</p>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <select className="w-[90%] p-2 bg-gray-100 border rounded-md focus:outline-none">
              <option value="">RU</option>
              <option value="">UZ</option>
              <option value="">EN</option>
            </select>

            <Button
              className="rounded-[5px] w-[90%] text-center flex small:hidden bg-[#FF5F65] active:scale-95 px-[15px] py-[8px] text-[15px] text-white"
              title="Заказать звонок"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
};
