import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="pt-10 overflow-hidden max-w-[1000px] mx-auto md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <div
              className="overflow-hidden h-[466px] md:h-[560px]"
              style={{ zIndex: 2 }}
            >
              <Image
                width={370}
                height={300}
                src={`${
                  process.env.NEXT_PUBLIC_BASE_URL ?? ""
                }/image/kosta-coach.webp`}
                className="animate-in slide-in-from-left duration-1000 "
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Kosta
            </h2>
            <h3 className="text-3xl font-bold leading-tight text-gray-800 dark:text-white sm:text-4xl lg:text-xl">
              Founder & Head Coach
            </h3>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              With over a decade of experience in high-performance endurance
              sports, I help cyclists unlock their full potential through
              structured, data-driven, and fully personalised coaching.
            </p>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              At Ventro we are aiming to understand the needs of the athelete,
              set your goals, adapting training to your life, and building a
              partnership based on trust, communication, and real progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
