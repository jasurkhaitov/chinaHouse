import InputMask from "react-input-mask";
import { ButtonWithIcon } from "./ui/ButtonWithIcon";
import { Next } from "../assets/icons";
import { Modal } from "antd";
import { createGlobalState } from "react-use";

export const isModalOpen = createGlobalState(false);

export const ModalForm = ({}) => {
  const [open, setOpen] = isModalOpen();

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      className="w-full max-w-[25rem] rounded-2xl"
      footer={null}
    >
      <p className="text-3xl font-medium uppercase text-neutral-700">
        Бесплатная консультация
      </p>
      <p className="leading-6 text-neutral-700">
        Отправьте заявку и мы свяжемся с вами в ближайшее время
      </p>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-stone-500">
          Имя:
        </label>
        <input
          type="text"
          className="h-10 rounded-md bg-bgCard px-5 text-neutral-700 outline-none"
        />
      </div>
      <div className="mt-3 flex flex-col">
        <label htmlFor="phone" className="text-stone-500">
          Номер телефона:
        </label>
        <InputMask
          mask="+998 99 999 99 99"
          placeholder="+998 _ _ _ _ _ _ _ _"
          className="h-11 rounded-md bg-bgCard px-5 text-neutral-700 outline-none"
        >
          {/* {(inputProps) => <input {...inputProps} type="tel" />} */}
        </InputMask>
      </div>
      <ButtonWithIcon
        title="Отправить заявку"
        className="mt-6 flex h-12 w-full justify-center items-center gap-x-6 rounded-lg border border-purple text-lg font-bold text-purple"
        icon={<Next color="#FF5F65" />}
      />
    </Modal>
  );
};
