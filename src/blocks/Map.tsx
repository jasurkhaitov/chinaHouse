import { LocationPin, PhoneCall } from "../assets/icons";

export const Map = () => {
  return (
    <div id="contact">
    <div className="relative w-[98%] m-auto xl:w-[1200px] z-10 my-5 pb-20">
      <div className="sm:absolute sm:left-0 sm:top-0 h-screen sm:h-full w-full opacity-55">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1571456.5653484615!2d66.92864!3d39.7115392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1728145370826!5m2!1sru!2s"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          allowFullScreen={true}
          className="h-full w-full rounded-xl grayscale"
          loading="lazy"
        ></iframe>
      </div>

      <div className="hidden sm:flex flex-col p-10 relative z-10">
        <div className="text-4xl font-bold text-neutral-700">КОНТАКТЫ</div>
        <div className="ml-auto rounded-md bg-white p-6 pb-20">
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
    </div>

    <div className="flex sm:hidden flex-col w-[300px] m-auto">
        <div className="ml-auto rounded-md bg-white p-3">
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

    </div>
  );
};
