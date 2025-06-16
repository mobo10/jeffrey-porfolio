import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Jeffrey Muogboh
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a <span className="text-blue-500">Full-Stack Developer</span> which specializes in <span className="text-blue-500">Frontend development</span> with a passion for crafting clean, scalable web applications that 
            deliver exceptional performance and a seamless user experience. Beyond coding, 
            I’m also a <span className="text-blue-500">content creator on TikTok</span>, where I’ve built an audience of over <span className="text-blue-500">35,000 followers </span> 
            and generated more than <span className="text-blue-500"> 15 million views</span> in the last 8 months — combining tech with creativity 
            to share insights and connect with a global community.

            I’m always open to using my platform to support the goals of any company or individual I work 
            with — merging technical expertise with real-world engagement.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
