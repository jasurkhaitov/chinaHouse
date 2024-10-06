import { useEffect } from "react";
import PlansBox from "../component/PlansBox";
import { Checkbox } from "antd";

import Aos from 'aos'
import 'aos/dist/aos.css'
export const Plans = () => {

 useEffect(() => {
    Aos.init({duration: 1500});
  }, [])


  return (
    <div id="plan" className="p-4 md:p-8 lg:p-10">
      <p className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        ПЛАНИРОВКИ
      </p>
      <div className="mt-4 flex flex-col items-start sm:items-end sm:flex-row sm:justify-start sm:gap-x-4">
      <div className="flex flex-col text-white mb-4 sm:mb-0 w-[250px]">
        <label htmlFor="complex-select" className="mb-1 text-lg font-medium">
          Выберите комплекс
        </label>
        <select
          name="complex"
          id="complex-select"
          className="h-10 w-full max-w-[300px] bg-neutral-700 border border-neutral-600 rounded px-2 transition duration-200 focus:outline-none focus:border-transparent"
        >
          <option value="new">Yangi O’zbekiston</option>
        </select>
      </div>

      <div className="flex flex-col text-white mb-4 sm:mb-0">
        <label htmlFor="room-select" className="mb-1 text-lg font-medium">
          Кол-во комнат
        </label>
        <select
          name="rooms"
          id="room-select"
          className="h-10 w-full max-w-[300px] bg-neutral-700 border border-neutral-600 rounded px-2 transition duration-200 focus:outline-none focus:border-transparent"
        >
          <option value="3">3</option>
        </select>
      </div>

      <div className="mt-2 md:mt-0 flex items-center">
        <Checkbox className="text-white">
          <span className="text-lg">Отделка</span>
        </Checkbox>
      </div>
    </div>
      <div data-aos='fade-up' className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PlansBox />
        <PlansBox />
        <PlansBox />
        <PlansBox />
        <PlansBox />
        <PlansBox />
        <PlansBox />
        <PlansBox />
        <PlansBox />
      </div>
    </div>
  );
};