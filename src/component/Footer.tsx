import { images } from "../assets/images";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 py-5">
        <div className="flex flex-col md:flex-row items-start justify-start">
        <div className="w-20">
          <img className="w-full" src={images.logoWhite} />
        </div>

        <div className="flex flex-1 gap-16 md:px-10 py-2">
          <div className="grid gap-8 text-white">
            <a href="#">О компании</a>
            <a href="#">Проекты</a>
            <a href="#">Планировки</a>
          </div>
          <div className="grid gap-8 text-white">
            <a href="#">Акции</a>
            <a href="#">Контакты</a>
            <a href="#">Оставить заявку</a>
          </div>
        </div>
        </div>

        <div className="ml-auto flex items-start gap-2">
          <a className="rounded-md bg-red-400 p-2" href="#">
            <FaTelegram size={25} className="text-white" />
          </a>
          <a className="rounded-md bg-red-400 p-2" href="#">
            <FaInstagram size={25} className="text-white" />
          </a>
          <a className="rounded-md bg-red-400 p-2" href="#">
            <FaFacebook size={25} className="text-white" />
          </a>
        </div>
      </div>
      
      <div className="my-4 h-[1px] w-full bg-white/30"></div>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
        <div className="grid gap-2">
          <span className="text-white/50">Наш адрес:</span>
          <span className="text-lg text-white">
            г. Ташкент, Юнусабадский район, ул. Абдулла Кадыри, 7
          </span>
        </div>
        <div className="grid gap-2">
          <span className="text-white/50">По вопросам сотрудничества:</span>
          <span className="text-lg text-white">chinahouse@gmail.ru</span>
        </div>
      </div>
    </>
  );
};
