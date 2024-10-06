import { useEffect } from "react";
import { Next } from "../assets/icons";
import { images } from "../assets/images";
import { ButtonWithIcon } from "../component/ui/ButtonWithIcon";
import Title from "../component/ui/Title";
import Aos from 'aos'
import 'aos/dist/aos.css'

const projectData = [
  {
    title: "YANGI O’ZBEKISTON",
    description: [
      "Внутренний двор будет организован в виде большого парка, сформированного из разноцветных садов, образующих приватные дворовые пространства. Все сады (дворы) будут объединены прогулочным дорожками. Дворовое пространство комплекса будет разделено на несколько функциональных зон, предусмотренных для комфортного отдыха жителей всех возрастов.",
      "Новый современный жилой комплекс класса Бизнес, расположенный в экологически чистом районе города, на улице с развитой инфраструктурой и удобной транспортной доступностью. Рядом с комплексом находятся магазины, школы, детские сады, спортивные клубы и парки.",
    ],
    price: "От 11 000 000 UZS за м²",
    images: [images.project01, images.project02, images.project03, images.project04],
  },
  {
    title: "NAVRO’Z TJM",
    description: [
      "Внутренний двор будет организован в виде большого парка, сформированного из разноцветных садов, образующих приватные дворовые пространства. Все сады (дворы) будут объединены прогулочным дорожками.",
      "Новый современный жилой комплекс класса Бизнес, расположенный в экологически чистом районе города, на улице с развитой инфраструктурой и удобной транспортной доступностью. Рядом с комплексом находятся магазины, школы, детские сады, спортивные клубы и парки.",
    ],
    price: "От 11 000 000 UZS за м²",
    images: [images.project05, images.project06, images.project07, images.project08],
  },
  {
    title: "shoxsaroy/shanhai",
    description: [
      "Внутренний двор будет организован в виде большого парка, сформированного из разноцветных садов, образующих приватные дворовые пространства.",
      "Новый современный жилой комплекс класса Бизнес, расположенный в экологически чистом районе города, на улице с развитой инфраструктурой и удобной транспортной доступностью. Рядом с комплексом находятся магазины, школы, детские сады, спортивные клубы и парки.",
    ],
    price: "От 11 000 000 UZS за м²",
    images: [images.project09, images.project10, images.project11, images.project12],
  },
];

export const Project = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <div id="project">
      {projectData.map((project, index) => (
        <div key={index} data-aos='fade-up' className="wrapper w-[98%] m-auto xl:w-[1200px] relative z-20 my-8">
          <Title name={project.title} project="Проект" />
          <div className="mt-5">
            <div className="flex gap-3 [&_img]:object-cover">
              <img
                className="h-full max-h-[30rem] w-full rounded-2xl"
                src={project.images[0]}
              />
              <div className="flex-col gap-3 hidden lgxx:flex">
                {project.images.slice(1).map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    className="h-full max-h-40 w-full rounded-2xl"
                    src={imgSrc}
                  />
                ))}
              </div>
            </div>
            <p className="mt-6 text-2xl font-bold">
              Роскошный, современный жилой комплекс
            </p>
            <div className="mt-3 flex flex-col lg:flex-row gap-5">
              {project.description.map((desc, descIndex) => (
                <p key={descIndex} className="flex-1">
                  {desc}
                </p>
              ))}
            </div>
            <div className="m-5 flex flex-col items-center lg:flex-row justify-end gap-x-7">
              <p className="text-md sm:text-2xl font-bold">
                {project.price}
              </p>
              <ButtonWithIcon
                title="Посмотреть планировки"
                className="flex items-center gap-x-2 rounded-lg bg-purple px-4 py-4 text-sm sm:text-lg font-bold text-white"
                icon={<Next />}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};