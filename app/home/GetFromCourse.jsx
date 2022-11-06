export default function GetFromCourse() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 items-center grid-cols-1 md:gap-40 gap-16">
        <div className="relative">
          <img
            src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-recommendation.37afecb9.jpg&w=640&q=75"
            alt=""
            className=" bg-no-repeat "
            width={"100%"}
            height={"100%"}
          />

          <img
            src="https://designdrastic.com/images/tutorials/shape-animation-morphing-anime-js/shape2.png"
            alt=""
            width={"100%"}
            height={"100%"}
            srcset="https://designdrastic.com/images/tutorials/shape-animation-morphing-anime-js/shape2.png"
            className="absolute contrast-200  top-0 bg-no-repeat mix-blend-overlay bg-center"
          />
          <div className="absolute animate-bounce bottom-36 left-5 w-10 h-10 bg-sky-600 rounded-full border-0"></div>
          <div className="absolute animate-ping bottom-52 md:bottom-48 right-36 w-8 h-8 bg-sky-600 rounded-full border-0"></div>

          <div className="absolute animate-bounce  bottom-10 right-5 w-10 h-10 bg-purple-600 rounded-full border-0"></div>
        </div>
        <div className="text-center leading-8">
          <p className=" text-black font-bold text-xl md:text-3xl ">
            <span className="text-purple-600"> Job recommendation </span> letter
            if you do well in the course
          </p>
          <br />
          <p>
            We will write a job recommendation letter to those who will score
            well in various quizzes, assignments and tests of the course and get
            at least 70% marks overall . This course cannot guarantee a job to
            anyone because no course can. But proper guidance will ensure
            hardworking and dedicated learners and help them perform well in job
            interviews with confidence.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center grid-cols-1 md:gap-40 gap-16">
        <div className="text-center leading-8 order-2 md:order-1">
          <p className=" text-black font-bold text-xl md:text-3xl ">
            <span className="text-purple-600"> Job recommendation </span> letter
            if you do well in the course
          </p>
          <br />
          <p>
            We will write a job recommendation letter to those who will score
            well in various quizzes, assignments and tests of the course and get
            at least 70% marks overall . This course cannot guarantee a job to
            anyone because no course can. But proper guidance will ensure
            hardworking and dedicated learners and help them perform well in job
            interviews with confidence.
          </p>
        </div>
        <div className="relative order-1 md:order-2">
          <img
            src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-recommendation.37afecb9.jpg&w=640&q=75"
            alt=""
            className=" bg-no-repeat"
            width={"100%"}
            height={"100%"}
          />

          <img
            src="https://designdrastic.com/images/tutorials/shape-animation-morphing-anime-js/shape2.png"
            alt=""
            width={"100%"}
            height={"100%"}
            srcset="https://designdrastic.com/images/tutorials/shape-animation-morphing-anime-js/shape2.png"
            className="absolute top-0 bg-no-repeat mix-blend-overlay bg-center"
          />
          <div className="absolute animate-bounce bottom-36 left-5 w-10 h-10 bg-sky-600 rounded-full border-0"></div>
          <div className="absolute animate-ping bottom-52 md:bottom-48 right-36 w-8 h-8 bg-sky-600 rounded-full border-0"></div>

          <div className="absolute animate-bounce  bottom-10 right-5 w-10 h-10 bg-purple-600 rounded-full border-0"></div>
        </div>
      </div>
    </div>
  );
}
