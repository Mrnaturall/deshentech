// app/skill/[slug]/page.tsx

interface SkillProps {
  params: {
    slug: string;
  };
}

export default function SkillDetails({ params }: SkillProps) {
  const skills = [
    {
      name: "Software Development",
      slug: "software-development",
      description:
        "Learn to build applications from scratch using programming languages, frameworks, and design patterns. Master full-stack development including frontend and backend technologies. Collaborate on real-world projects and gain hands-on experience. Understand data structures and algorithms. Build scalable and maintainable codebases.",
    },
    {
      name: "Graphic Design",
      slug: "graphic-design",
      description:
        "Create compelling visuals using typography, color theory, and layout principles. Use tools like Photoshop, Illustrator, and Figma. Design branding assets such as logos, posters, and social media graphics. Understand UX principles and visual storytelling. Build a strong portfolio to showcase your creativity.",
    },
    {
      name: "Motion Design",
      slug: "motion-design",
      description:
        "Bring designs to life with animation and visual effects. Use tools like After Effects to animate text, shapes, and objects. Learn timing, pacing, and transitions. Understand keyframes, easing, and rendering. Create dynamic content for advertising, videos, and interfaces.",
    },
    {
      name: "Video Editing",
      slug: "video-editing",
      description:
        "Edit videos using tools like Adobe Premiere Pro or DaVinci Resolve. Learn cutting, trimming, and sequencing footage for clarity and flow. Add transitions, audio, and effects to enhance viewer engagement. Understand storytelling and pacing. Export videos for different platforms.",
    },
  ];

  const skill = skills.find((skill) => skill.slug === params.slug);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">{skill?.name}</h1>
      <p className="text-gray-700">{skill?.description}</p>
    </div>
  );
}