import { Next } from "../assets/icons";
import { ButtonWithIcon } from "../component/ui/ButtonWithIcon";
import InputMask from "react-input-mask";
import Swipper from "./Swipper";

export const Banner = () => {
  return (
    <div className="xl:w-[1200px] w-[95%] m-auto relative z-10 pb-[100px] sm:pb-[150px]">
      <div className="mx-auto text-center lgx:text-start flex lgx:flex-row flex-col gap-10 lgx:gap-0 w-11/12 justify-between pt-20 sm:pt-28">
        <div className="w-full m-auto max-w-[32rem]">
          <p className="text-3xl sm:text-5xl font-bold text-white">YANGI O'ZBEKISTON</p>
          <p className="mb-4 sm:mb-8 mt-2 text-lg sm:text-2xl text-white">
            Комплекс премиум-класса
          </p>
          <p className="mb-12 text-md sm:text-lg text-white">
            Концепция жилого квартала разработана известным бюро Ink Architects.
            Современная архитектура, оригинальные и смелые дизайнерские решения,
            продуманное функциональное зонирование двора
          </p>
          <ButtonWithIcon
            title="Посмотреть планировки"
            className="flex items-center m-auto lgx:m-0 gap-x-5 sm:gap-x-6 rounded-lg bg-purple px-5 py-4 text-sm sm:text-lg font-bold text-white"
            icon={<Next />}
          />
        </div>

        <div className="h-full max-h-96 w-full m-auto max-w-[25rem] rounded-2xl bg-bgCard p-7">
          <p className="text-center text-2xl sm:text-3xl font-medium uppercase text-neutral-700">
            Консультация
          </p>
          <p className="text-center leading-6 text-neutral-700">
            Отправьте заявку и мы свяжемся c вами в ближайшее времчя
          </p>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-stone-500">
              Имя:
            </label>
            <input
              type="text"
              className="h-10 border-gray-300 border rounded-md px-5 text-neutral-700 outline-none"
            />
          </div>
          <div className="mt-3 flex flex-col">
            <label htmlFor="phone" className="text-stone-500">
              Номер телефона:
            </label>
            <InputMask
              mask="+998 99 999 99 99"
              placeholder="+998 _ _ _ _ _ _ _ _"
              className="h-11 border-gray-300 border rounded-md px-5 text-neutral-700 outline-none"
            >
            </InputMask>
          </div>
          <ButtonWithIcon
            title="Посмотреть планировки"
            className="mt-6 flex h-12 w-full m-auto items-center gap-x-3 sm:gap-x-6 rounded-lg border border-purple pl-5 text-sm sm:text-lg font-bold text-purple"
            icon={<Next color="#FF5F65" />}
          />
        </div>
      </div>

      <div className="absolute top-0 -z-[1] h-full w-full">
        <Swipper/>
      </div>
    </div>
  );
};
