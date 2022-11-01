export default function CourseInstructor() {
  return (
    <div className="bg-blue-600 py-20">
      <div className="container text-white">
        <div>
          <p className=" text-3xl text-center font-bold my-10">
            Course Instructor
          </p>
          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex items-center justify-center basis-1/2 relative my-9 lg:border-r-4  border-yellow-300">
              <div className=" relative top-0 md:w-72 md:h-96 h-72 w-56 rounded-lg left-5 border-4 bg-violet-500"></div>
              <img
                src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=640&q=75"
                alt=""
                className=" -rotate-12  rounded-lg border-4 h-72 w-56 md:w-72 absolute md:h-96 bg-cover bg-center bg-no-repeat "
              />
            </div>
            <div className="flex items-center justify-center  basis-1/2">
              <div>
                {" "}
                <p>
                  Sumit Saha is a technology entrepreneur. In 2008, while
                  studying computer science and engineering at BUET, he founded
                  Bangladesh's first digital agency - Analyze. Out of his love
                  for programming and passion for teaching people, he founded
                  the Learn with Sumit platform in 2020 which has around 350+
                  programming related video tutorials. More than 100,000 people
                  are learning free programming from the Learn with Sumit
                  YouTube channel and public Facebook group. He himself is a
                  full stack web developer and software architect and has been
                  involved in the web development and software profession for
                  over 14 years.
                </p>
                <p>Sumit Saha</p>
                <p>
                  Founder - Learn with Sumit & Co-Founder, Analyze Bangladesh
                  Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
