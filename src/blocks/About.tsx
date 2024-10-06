import { useEffect } from "react";
import { images } from "../assets/images";
import Aos from 'aos'
import 'aos/dist/aos.css'

import Blur from '../assets/images/blur.png'

export const About = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <div id="about" className="mt-12 z-10">
      <p className="text-zinc-800F text-4xl pl-5 font-bold text-center md:text-left">О КОМПАНИИ</p>

      <div className="flex flex-col lg:flex-row gap-5 small:gap-10 items-start lg:items-center">
        <div data-aos='fade-right' className="w-[80%] lg:w-1/2 relative">
          <img className="w-full mt-0" src={images.aboutBlock} alt="About Block" />

          <img src={Blur} className=" absolute -bottom-10 small:-bottom-20 left-0" alt=""/>
        </div>

        <div data-aos='fade-left' className="mt-8 lg:mt-0 w-full lg:w-1/2 px-[20px] lg:px-0">
          <p className="text-2xl lg:text-2xl font-bold uppercase text-purple text-center lg:text-left">
            Задаем новые стандарты для рынка труда
          </p>
          <p className="mb-10 mt-3 text-base text-stone-500 text-center lg:text-left">
            Концепция жилого квартала разработана известным бюро Ink Architects.
            Современная архитектура, оригинальные и смелые дизайнерские решения,
            продуманное функциональное зонирование двора.
          </p>

          <div>
            <div className="flex items-center flex-wrap lg:items-start gap-5 justify-center lg:justify-start">
              <article className="rounded-md border border-neutral-700 p-4 text-center">
                <h1 className="text-[40px] text-zinc-800">№1</h1>
                <p className="text-[16px] text-[#676767]">В своем деле</p>
              </article>
              <article className="rounded-md border border-neutral-700 p-4 text-center">
                <h1 className="text-[40px]">20+</h1>
                <p className="text-[16px] text-[#676767]">Лет на рынке</p>
              </article>
              <article className="rounded-md border border-neutral-700 p-4 text-center">
                <h1 className="text-[40px]">30+</h1>
                <p className="text-[16px] text-[#676767]">Комплексов</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};