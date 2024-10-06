import { Next } from "../assets/icons";
import { ButtonWithIcon } from "../component/ui/ButtonWithIcon";

export const FormRequest = () => {
  return (
    <>
      <div className="text-white text-center sm:text-left">
        <div className="text-4xl font-bold uppercase">ОСТАВИТЬ ЗАЯВКУ</div>
        <div className="py-3">
          Оставьте заявку и мы свяжемся с вами в ближайшее время
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-start w-full lg:items-end gap-4 py-4">
        <label className="grid w-full max-w-xs gap-1 text-white">
          <span>Имя</span>
          <input
            className="rounded-md bg-neutral-700 p-4 w-full"
            placeholder="Андрей"
          />
        </label>
        <label className="grid w-full max-w-xs gap-1 text-white">
          <span>Номер телефона</span>
          <input className="rounded-md bg-neutral-700 p-4" placeholder="+998" />
        </label>
        <div className="flex justify-center md:justify-start">
          <ButtonWithIcon
            title="Посмотреть планировки"
            className="flex items-center mt-2 lg:mt-0 gap-x-2 rounded-lg bg-purple p-3 text-lg sm:text-xl font-bold text-white"
            icon={<Next />}
          />
        </div>
      </div>
    </>
  );
};