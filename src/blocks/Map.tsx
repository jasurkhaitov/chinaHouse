import { LocationPin, PhoneCall } from "../assets/icons";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Map = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])


  return (
    <div id="contact">
      <div className="relative w-[98%] m-auto xl:w-[1200px] z-10 my-5 pb-10">
        <div className="h-[500px] w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.4514775666526!2d69.22250407536718!3d41.320795000124235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1e79fe7e4d%3A0x4dca996e6bb6dcb!2sMetro!5e0!3m2!1sen!2s!4v1728209358433!5m2!1sen!2s" style={{ border: 0 }} className="h-full w-full rounded-xl grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="absolute top-0 right-0 hidden sm:flex flex-col p-10">
          <div data-aos='fade-left' className="ml-auto rounded-md bg-white p-6 pb-20">
            <div className="text-4xl font-bold text-neutral-700">КОНТАКТЫ</div>
            <div className="pb-5 text-sm">Наши контакты для связи с нами</div>
            <div className="mb-4 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-400/60">
                <PhoneCall />
              </div>
              <div className="pl-2 text-neutral-700">
                <p className="text-sm">Телефон для связи:</p>
                <p className="text-lg font-semibold">+998 71 200 05 45</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-400/60">
                <LocationPin />
              </div>
              <div className="pl-2 text-neutral-700">
                <p className="text-sm">Местоположение:</p>
                <p className="text-lg font-semibold">Ориентир метро Ташкент</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-10 text-4xl hidden sm:block font-bold text-black">КОНТАКТЫ</div>
      </div>

      <div data-aos='fade-left' className="flex sm:hidden flex-col w-[95%] small:w-[300px] m-auto">
        <div className="rounded-md bg-transparent p-3">
          <div className="text-4xl font-bold text-neutral-700">КОНТАКТЫ</div>
          <div className="pb-5 text-sm">Наши контакты для связи с нами</div>
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-400/60">
              <PhoneCall />
            </div>
            <div className="pl-2 text-neutral-700">
              <p className="text-sm">Телефон для связи:</p>
              <p className="text-md font-semibold">+998 71 200 05 45</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-400/60">
              <LocationPin />
            </div>
            <div className="pl-2 text-neutral-700">
              <p className="text-sm">Местоположение:</p>
              <p className="text-md font-semibold">Ориентир метро Ташкент</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};