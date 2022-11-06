async function getImagesGallery() {
  const data = await fetch(`http://localhost:3000/api/galleryimage`, {
    cache: "no-store",
  });
  return data.json();
}

export default async function CouseGallery(id) {
  const { fristsectiongallery, secendsectiongallery } =
    await getImagesGallery();
  const { gallerysecendpath, galleryfastpath } = fristsectiongallery;
  const { secendgalleryfastpath, secendgallerysecendpath } =
    secendsectiongallery;

  return (
    <div className="container z-20">
      <div className="my-14 flex flex-col items-center ">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <img
            src="https://learnwithsumit.com/_next/static/media/peep3.51bcb0bc.svg"
            alt=""
            width={125}
            height={125}
          />
        </div>
        <p className="text-4xl text-center font-bold">
          <span className=" text-purple-600">The projects</span> that will be
          done in the course
        </p>
        <p className="text-gray-700  font-bold">
          We will do ten projects together
        </p>
      </div>

      <div className="my-14">
        <div
          className="grid grid-cols-1 grid-rows-2  md:grid-rows-1 md:grid-cols-2 gap-5"
          data-aos="fade-right"
        >
          <div className="overflow-hidden">
            <img
              src={galleryfastpath}
              alt=""
              srcset=""
              className="rounded-xl transition ease-in-out delay-150 duration-300 transform hover:scale-105"
            />
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-5">
            {gallerysecendpath?.map((data) => (
              <div key={data}>
                <img
                  src={data}
                  alt=""
                  srcset=""
                  className="rounded-xl transition ease-in-out delay-150 duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex md:flex-row flex-col gap-5 my-3"
          data-aos="fade-left"
        >
          <div className="grid grid-rows-2 grid-cols-2 gap-5 basis-1/2">
            {secendgallerysecendpath.map((data) => (
              <div>
                <img
                  src={data}
                  alt=""
                  srcset=""
                  className="rounded-xl transition ease-in-out delay-150 duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="overflow-hidden  basis-1/2">
            <img
              src={secendgalleryfastpath}
              alt=""
              srcset=""
              className="rounded-xl transition ease-in-out delay-150 duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
