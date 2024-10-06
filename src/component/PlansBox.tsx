import { images } from "../assets/images";

const PlansBox = () => {
  return (
    <div className="group w-full max-w-full cursor-pointer rounded-xl border p-4 transition-all hover:bg-neutral-700 md:max-w-sm lg:max-w-md">
      <div className="mb-2 flex justify-end">
        <div className="plans-box--label w-max rounded-md bg-white/5 px-2">
          <span className="text-white">С отделкой</span>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <img
          src={images.plan}
          alt="Plan"
          className="h-auto w-full max-h-40 object-cover rounded-md" // Responsive image
        />
      </div>
      <div className="mb-2 flex flex-col items-center text-lg text-white">
        <p>F3-Комнатная</p>
        <p>77 м²</p>
      </div>
      <div className="flex justify-end">
        <div className="w-max rounded-md bg-white/5 px-2 py-2 group-hover:bg-red-400 transition-colors">
          <span className="text-stone-500 group-hover:text-white">
            Уточнить детали
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlansBox;