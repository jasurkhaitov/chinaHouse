import { useEffect } from "react";
import { images } from "../assets/images";
import { IoCalendarOutline } from "react-icons/io5";
import Aos from 'aos'
import 'aos/dist/aos.css'

const promotionsData = [
  {
    title: "ИПОТЕКА ПО ВЫГОДНЫМ ПРОЦЕНТАМ",
    description: "Возьмите квартиру на ипотеку и платите 3% каждый месяц",
    date: "01.10.2024",
    image: images.promo02,
    type: 'right'
  },
  {
    title: "Возьмите квартиру в ипотеку и выйграйте IPHONE 16 PRO MAX",
    description: "Примите участие в розыше и выиграйте IPHONE",
    date: "01.10.2024",
    image: images.promo01,
    type: 'left'
  },
];

export const Promotion = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <div id="discount" className="mt-12 px-4 w-[98%] m-auto xl:w-[1200px]">
      <p className="text-4xl font-bold text-black text-center md:text-left">АКЦИИ</p>
      <div className="grid gap-4 py-6 grid-cols-1
       md:grid-cols-2">
        {promotionsData.map((promo, index) => (
          <article data-aos={`fade-${promo.type}`} key={index} className="relative rounded-lg bg-white p-3 shadow-lg z-10">
            <div className="mb-36 flex smallx:flex-row flex-col items-start smallx:gap-3 gap-[60px]">
              <div className="p-0 lgxx:pr-[80px]">
                <h2 className="text-xl font-semibold text-neutral-700">
                  <span>{promo.title}</span>
                </h2>
                <p className="text-stone-500">{promo.description}</p>
              </div>

              <div className="ml-auto flex items-center rounded-md bg-zinc-100 px-2 py-1 text-neutral-600">
                <IoCalendarOutline />
                <span className="pl-2">{promo.date}</span>
              </div>
            </div>
            <button className="rounded-md bg-red-400 px-3 py-2 text-white">
              Уточнить детали
            </button>
            <div className="absolute bottom-0 right-0 smallx:h-full md:w-1/2 -z-10 block">
              <img
                className="h-full object-contain object-bottom"
                src={promo.image}
                alt={promo.title}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};