import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vite",
    "TypeScript",
    "TailwindCSS",
    "Git & GitHub",
    "HTML, CSS & JS",
    "PHP",
  ];

  const backendSkills = ["Node.js", "Express.js", "Mongoose", "MongoDB", "MySQL", "RESTful API's"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science (GPA-4.29/5.0)</strong> - Veritas University
                  (2020-2024)
                </li>
                <li>
                  The Complete Full-stack Web development Bootcamp - [Udemy, Angela Yu]
                </li>
                <li>
                  Complete Web & Mobile designer: UI/UX, Figma - [Udemy, Andrei N & Daniel S]
                </li>
                <li>
                  Adobe Photoshop - Self-taught/Online Videos
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <span className="text-blue-500">Full-stack Developer(Freelance) </span>[Jan 2025-Present]{" "}
                  </h4>
                  <li>
                    Delivered features on-time and under-budget by implementing Agile project management principle
                  </li>
                  <li>
                    Developed a cryptocurrency exchange frontend web application using React, Ant Design, and Tailwind CSS. And integrated backend APIs
                  </li>
                  <li>
                    Defined and updated layouts to meet usability, performance, and accessibility requirements across desktop and mobile device.
                  </li>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <span className="text-blue-500">Full-Stack Developer at Vault-Win</span> [2023 - 2024]{" "}
                  </h4>
                  <li>
                    Worked with a team of 6 developers to build a payment gateway with microservice architecture making use of, Nestjs and typescript accurately met the product team's requirements.
                  </li>
                  <li>
                    Tutored intern developers on using Postman to run tests and debug backend systems.
                  </li>
                  <li>
                    Reviewed Merge requests by other team members
                  </li>
                  <li>
                    Generated Postgres database migrations and seeders with Sequelize to create and fill database tables
                  </li>
                  <li>
                    Built an admin dashboard for the payment gateway app with React and Ant design.
                  </li>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <span className="text-blue-500">Web dev Intern at Vault-Win</span>  [2023]{" "}
                  </h4>
                  <li>
                    Became the head frontend developer, being the lead in the frontend development of all websites
                  </li>
                  <li>
                    Made use of HTML, CSS, Javascript, and PHP to develop codes and create websites.
                  </li>
                  <li>
                    Collaborated with backend team and wrote API endpoints using NodeJs and MongoDB
                  </li>
                  <li>
                    Reduced website development timelines by 25%, by streamlining the process and delegating tasks more e!ectively amongst the team
                  </li>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <span className="text-blue-500">Intern at Cramp Group of Companies a DEF Startup</span> [2022]{" "}
                  </h4>
                  <li>
                    Learned How to work as a team on a single Project
                  </li>
                  <li>
                    Provided Support in developing the backend and admin 
                    dashboard of an ecommerce site 
                  </li>
                  <li>
                    Developed part of the Frontend of the ecommerce website 
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
