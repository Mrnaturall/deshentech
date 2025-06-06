
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    name: "Software Development",
    slug: "software-development",
    description:
      "Learn to build applications from scratch using programming languages, frameworks, and design patterns. Master full-stack development including frontend and backend technologies. Collaborate on real-world projects and gain hands-on experience. Understand data structures and algorithms. Build scalable and maintainable codebases.",
   image: "/images/photoshop.png",
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description:
      "Create compelling visuals using typography, color theory, and layout principles. Use tools like Photoshop, Illustrator, and Figma. Design branding assets such as logos, posters, and social media graphics. Understand UX principles and visual storytelling. Build a strong portfolio to showcase your creativity.",
      image: "/images/photoshop.png",
  },
  {
    name: "Motion Design",
    slug: "motion-design",
    description:
      "Bring designs to life with animation and visual effects. Use tools like After Effects to animate text, shapes, and objects. Learn timing, pacing, and transitions. Understand keyframes, easing, and rendering. Create dynamic content for advertising, videos, and interfaces.",
        image: "/images/photoshop.png",
  },
  {
    name: "Video Editing",
    slug: "video-editing",
    description:
      "Edit videos using tools like Adobe Premiere Pro or DaVinci Resolve. Learn cutting, trimming, and sequencing footage for clarity and flow. Add transitions, audio, and effects to enhance viewer engagement. Understand storytelling and pacing. Export videos for different platforms.",
        image: "/images/photoshop.png",
  },
];



  
const SkillsIHave = () => {
  return (
    <section className={`px-6 py-4 sm:w-[600px] md:w-[1000px] lg:w-[1100px] mx-auto font-sans`}>
      <h1 className="font-bold text-2xl mb-4">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {skills.map((skill) => (
          <article
            key={skill.slug}
            className="bg-gradient-to-r hover:bg-[#eeee] text-white rounded-lg shadow-md p-4 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
          >
            <div className="">
              <Image
                src={skill.image || "/images/default.jpg"}
                alt={skill.name}
                width={400}
                height={50}
                className="rounded mb-3 w-full"
              />
            </div>
            <div className=" text-black">
               <div>
              <h2 className="text-lg font-bold mb-2">{skill.name}</h2>
              <p className="text-sm text-gray-600">
                {skill.description.slice(0, 150)}...
              </p>
            </div>
            <Link
              href={`/skill/${skill.slug}`}
              className="mt-4 inline-block text-sm text-white bg-[#d71e24] hover:bg-red-500 px-3 py-1 rounded w-[100px]"
            >
              Show More
            </Link>
            </div>
           
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsIHave;
