import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AITools from "./components/AITools/AITools";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex flex-col gap-1 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <q>Make it work, make it right, make it fast.</q>
              <span className="text-sm text-zinc-400">Kent Beck</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi, I'm Samuel Oral Robert V" disabled={false} speed={3} className="custom-class" />
            </h1>
            <BlurText
              text="Computer Science graduate specializing in Python, SQL, and applied AI, building backend systems and data-driven pipelines."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="https://linkedin.com/in/samuel-oral-robert-v-4226813a4"
                target="_blank"
                rel="noreferrer"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Connect on LinkedIn" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Samuel Oral Robert V"
              title="Data Analytics & AI Engineer"
              handle="leumaslarotrebor"
              status="Open to work"
              contactText="Contact Me"
              avatarUrl="/assets/avatar.webp"
              miniAvatarUrl="/assets/avatar-mini.webp"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </div>
        {/* about */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="Computer Science Engineering graduate (Sathyabama Institute of Science and Technology, July 2026), working across backend systems, DevOps/SRE tooling, and applied AI. I build with Python, FastAPI, Node.js, and PostgreSQL, and freelance on React front-ends and API integrations for international clients. Published at IEEE ICIPCN 2026 for SmartFarmX, an IoT precision-agriculture project. Drawn to the kaizen philosophy of continuous improvement."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      13<span className="text-violet-500">+</span>
                    </h1>
                    <p>Public Projects</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2024<span className="text-violet-500">-</span>
                    </h1>
                    <p>Freelancing Since (Fiverr)</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      IEEE<span className="text-violet-500">'26</span>
                    </h1>
                    <p>Published Researcher</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, building with precision."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My day-to-day stack across backend, DevOps/SRE, data analytics, and applied AI</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                  className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300">
                    <Icon size={30} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <div className="truncate">
                      <ShinyText
                        text={tool.nama}
                        disabled={false}
                        speed={3}
                        className="text-lg font-semibold block"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* about */}

        {/* AI Tools */}
        <div className="ai-tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">AI Tools</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Hover a logo to see how I use it in my work</p>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <AITools />
          </div>
        </div>
        {/* AI Tools */}

        {/* Projects */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">A selection of backend, SRE/DevOps, and applied-AI projects. Click a card for details and source.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Projects */}


        {/* Contact */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Get In Touch
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Open to backend, SRE, data engineering, and AI-engineering roles, and freelance work.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-zinc-800 p-6 rounded-md flex flex-col justify-center gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <a href="mailto:samueloralrobert1234@gmail.com" className="flex items-center gap-3 text-lg hover:text-violet-400 transition-colors">
                📧 samueloralrobert1234@gmail.com
              </a>
              <a href="https://github.com/leumaslarotrebor" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg hover:text-violet-400 transition-colors">
                💻 GitHub
              </a>
              <a href="https://linkedin.com/in/samuel-oral-robert-v-4226813a4" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg hover:text-violet-400 transition-colors">
                🔗 LinkedIn
              </a>
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/samueloralrobert1234@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Contact */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
