import { Suspense } from "react";
import CourseInstructor from "./home/CourseInstructor";
import CouseGallery from "./home/CouseGallery";
import GetFromCourse from "./home/GetFromCourse";
import NeedCourse from "./home/NeedCourse";

export default function page() {
  return (
    <div>
      <div className="backGroundGrid border-b relative">
        <div className="container">
          <div className="flex justify-center h-full flex-col lg:flex-row gap-10 lg:gap-28 items-center">
            <div className="text-center lg:text-start basis-1/2">
              <p className="primary-highlighter text-lg font-semibold  pt-4">
                Bangla React-Redux Course
              </p>

              <p className="text-3xl font-bold md:text-5xl">
                Think in a <span className="primary-highlighter ">redux</span>{" "}
                way
              </p>
              <p className=" font-bold">Redux Toolkit, RTK Quarry and Thang</p>
              <p>
                We believe that the project-based teaching approach of this
                course will help you become a competent Redux programmer, along
                with understanding the fundamentals and essentials of Redux.
              </p>
            </div>
            <div className="basis-1/2 ">
              <img
                src="https://i.ibb.co/P6P2YbS/Untitled-design-1-removebg-preview.png"
                alt=""
                srcset=""
                className="contrast-125"
              />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="my-14">
          <div className="flex flex-col gap-2 items-center">
            <div data-aos="fade-up" data-aos-duration="1000">
              <img
                src={
                  "https://learnwithsumit.com/_next/static/media/peep1.f4841716.svg"
                }
                width={125}
                height={125}
                data-aos="zoom-in"
              ></img>
            </div>
            <p className="lg:text-4xl text-3xl font-bold">
              Our redux course at a glance
            </p>
            <p className="text-md font-medium text-gray-600">
              Everything in this course
            </p>
          </div>
        </div>
        <div className="container my-14 border shadow-2xl rounded-md">
          <div className=" grid lg:grid-cols-3 text-center leading-8 ">
            <div className="border-b lg:border-r border-r-0 p-8 ">
              <p className="font-medium">135+ videos in 12 modules</p>
              <p>
                The entire course is divided into 12 modules and 135+ videos so
                that you can learn step by step.
              </p>
            </div>
            <div className="border-b md:border-r border-r-0 p-8">
              <p>135+ videos in 12 modules</p>
              <p>
                The entire course is divided into 12 modules and 135+ videos so
                that you can learn step by step.
              </p>
            </div>
            <div className="border-b md:border-r border-r-0 p-8">
              <p>135+ videos in 12 modules</p>
              <p>
                The entire course is divided into 12 modules and 135+ videos so
                that you can learn step by step.
              </p>
            </div>
            <div className="border-b md:border-r border-r-0 p-8">
              <p>135+ videos in 12 modules</p>
              <p>
                The entire course is divided into 12 modules and 135+ videos so
                that you can learn step by step.
              </p>
            </div>
            <div className="border-b md:border-r border-r-0 p-8">
              <p>135+ videos in 12 modules</p>
              <p>
                The entire course is divided into 12 modules and 135+ videos so
                that you can learn step by step.
              </p>
            </div>
            <div className="border-b md:border-r border-r-0 p-8">
              <p>135+ videos in 12 modules</p>
              <p>
                The entire course is divided into 12 modules and 135+ videos so
                that you can learn step by step.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Suspense
        fallback={
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <CouseGallery />
      </Suspense>
      <GetFromCourse />
      <NeedCourse />
      <CourseInstructor />
    </div>
  );
}
