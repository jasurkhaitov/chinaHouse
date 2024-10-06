import { Next } from "../assets/icons";
import { ButtonWithIcon } from "../component/ui/ButtonWithIcon";

export const FormRequest = () => {
  return (
    <>
      <div className="text-white text-center sm:text-left">
        <div className="text-4xl font-bold w-full uppercase">ОСТАВИТЬ ЗАЯВКУ</div>
        <div className="py-3">
          Оставьте заявку и мы свяжемся c вами в ближайшее время
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-start w-full lg:items-end gap-4 py-4">
        <label className="grid w-full gap-1 text-white">
          <span>Имя</span>
          <input
            className="rounded-md w-full bg-neutral-700 p-4"
            placeholder="Андрей"
          />
        </label>
        <label className="grid w-full gap-1 text-white">
          <span>Номер телефона</span>
          <input className="rounded-md bg-neutral-700 p-4" placeholder="+998" />
        </label>

        <div className="flex sm:w-auto w-full justify-center md:justify-start">
          <ButtonWithIcon
            title="Посмотреть планировки"
            className="flex justify-center sm:w-auto w-full items-center mt-2 lg:mt-0 gap-x-2 rounded-lg bg-purple p-3 text-md sm:text-xl font-bold text-white"
            icon={<Next />}
          />
        </div>
      </div>
    </>
  );
};