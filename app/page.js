"use client";
import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import image from "../public/images/default_home.png"


const spline = 'https://prod.spline.design/Q9wi1vGNJPuwMNLI/scene.splinecode'
export default function Home() {
  return (
    <div className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <div className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-12 relative overflow-hidden">
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col w-full items-center lg:items-start">
            <h1 className="text-6xl font-normal text-primary">GPTGenius</h1>
            <p className="py-6 text-lg leading-loose text-center lg:text-start">
              GPTGenius: Your AI language companion. Powered by OpenAI, it
              enhances your conversations, content creation, and more!
            </p>
            <Link href="/chat" className="btn btn-secondary w-1/2 ">
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
          
          {/* <Image
            src={image}
            width={900}
            height={900}
            alt="Picture of the author"
          /> */}
          <Spline
            className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[1] items-center justify-center "
            scene={spline}
          />
        </div>
      </div>
    </div>
  );
}
