import React from "react";
import MagicButton from "./MagicButton";
import { Button } from "./ui/MovingBorders";

const Career = () => {
  return (
    <section id="career" className="py-20 bg-black-100 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Careers at <span className="text-purple">MetaMad</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 md:max-w-xl mx-auto">
            Join our team and make a real impact! At MetaMad, we value
            creativity, innovation, and collaboration. Take your career to the
            next level with us.
          </p>
        </div>

        {/* Job Listings */}
        <div className="w-full mt-12 flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {/* Job Card 1 */}
          <Button
            key="frontend"
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-800 flex-1"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
              <h1 className="text-center text-xl md:text-2xl font-bold">
                Frontend Developer
              </h1>
              <p className="text-center text-white-100 font-semibold">
                Looking for a skilled frontend developer with experience in
                React and TailwindCSS.
              </p>
              <a href="#contact">
                <MagicButton
                  title="Apply Now"
                  icon={null}
                  position="center"
                  className="mt-4"
                />
              </a>
            </div>
          </Button>

          {/* Job Card 2 */}
          <Button
            key="designer"
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-800 flex-1"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
              <h1 className="text-center text-xl md:text-2xl font-bold">
                UI/UX Designer
              </h1>
              <p className="text-center text-white-100 font-semibold">
                Creative designer with experience in Figma and a passion for
                user-centered design.
              </p>
              <a href="#contact">
                <MagicButton
                  title="Apply Now"
                  icon={null}
                  position="center"
                  className="mt-4"
                />
              </a>
            </div>
          </Button>

          {/* Job Card 3 */}
          <Button
            key="backend"
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-800 flex-1"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
              <h1 className="text-center text-xl md:text-2xl font-bold">
                Backend Engineer
              </h1>
              <p className="text-center text-white-100 font-semibold">
                Seeking a backend engineer proficient in Node.js and RESTful API
                development.
              </p>
              <a href="#contact">
                <MagicButton
                  title="Apply Now"
                  icon={null}
                  position="center"
                  className="mt-4"
                />
              </a>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Career;
