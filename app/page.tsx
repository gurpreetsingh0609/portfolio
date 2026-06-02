import VideoIntro from "../components/VideoIntro/VideoIntro";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <VideoIntro />

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
          
          {/* Glassmorphism Card */}
          <div className="relative glass-card rounded-[2rem] p-8 md:p-16 overflow-hidden">
            
            {/* Background Number '01' watermark */}
            <div 
              className="absolute right-4 md:right-10 top-0 text-[120px] md:text-[180px] font-black text-transparent pointer-events-none select-none" 
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}
            >
              01
            </div>

            {/* Small Header */}
            <h3 className="text-[#d4884f] text-xs font-bold tracking-[0.2em] uppercase mb-4 relative z-10">
              About · Profile
            </h3>

            {/* Glowing Title */}
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-glow text-white tracking-tight relative z-10">
              WHO I AM
            </h2>

            {/* Highlighted Text Paragraph */}
            <p className="text-base md:text-lg leading-loose text-gray-300 max-w-4xl mb-12 relative z-10 font-light">
              Experienced Data Analyst with <span className="text-[#d4884f] font-semibold">4.6+ years</span> of experience in data analytics, business intelligence, and automation. Skilled in <span className="text-[#d4884f] font-semibold">SQL, Python, Tableau</span> and <span className="text-[#d4884f] font-semibold"> Power BI</span> for analyzing complex datasets and delivering actionable insights. Experienced in risk-oriented data analysis, anomaly detection, and process automation to improve operational efficiency and support data-driven decision-making. Experienced in supporting stakeholders with reporting, insights, and data-driven recommendations in fast-paced environments.
            </p>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {['DATA MODELING', 'BUSINESS INTELLIGENCE', 'DATA VISUALIZATION', 'PROBLEM SOLVER'].map((tag) => (
                <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-[10px] md:text-xs font-semibold text-gray-400 bg-white/5 cursor-default uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* PROJECTS SECTION */}
<section id="projects" className="py-24 relative">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    <div className="mb-16">
      <h3 className="text-[#d4884f] text-xs font-bold tracking-[0.2em] uppercase mb-2">
        Portfolio
      </h3>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
        Projects
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
            {/* PROJECT 3 */}
      <div className="glass-card p-10 rounded-3xl hover:border-white/20 transition-all duration-300 group">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d4884f] transition-colors">
          AI-Powered Tableau Analytics Dashboard | Tableau, SQL, Vertex AI
        </h3>

        <p className="text-gray-400 font-light leading-relaxed">
          Developed an intelligent Tableau analytics solution integrated with 
          Google Vertex AI to deliver automated, AI-generated insights from over 7 
          million records. Enabled dynamic filtering, real-time exploration, and simplified 
          data storytelling for business stakeholders.
        </p>
      </div>

      {/* PROJECT 1 */}
      <div className="glass-card p-10 rounded-3xl hover:border-white/20 transition-all duration-300 group">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d4884f] transition-colors">
          Netflix Content Analytics Dashboard
        </h3>

        <p className="text-gray-400 font-light leading-relaxed">
          Developed an interactive Power BI dashboard analyzing Netflix content
          across genres, countries, ratings, and release trends to uncover
          viewer-focused insights and content distribution patterns.
        </p>
      </div>

      {/* PROJECT 2 */}
      <div className="glass-card p-10 rounded-3xl hover:border-white/20 transition-all duration-300 group">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d4884f] transition-colors">
          Sales Performance Dashboard
        </h3>

        <p className="text-gray-400 font-light leading-relaxed">
          Built a dynamic sales analytics solution featuring KPI tracking,
          revenue analysis, regional performance monitoring, and executive
          reporting to support data-driven business decisions.
        </p>
      </div>



      {/* PROJECT 4 */}
      <div className="glass-card p-10 rounded-3xl hover:border-white/20 transition-all duration-300 group">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d4884f] transition-colors">
          SQL Data Analysis & Optimization
        </h3>

        <p className="text-gray-400 font-light leading-relaxed">
          Performed advanced SQL analysis using complex joins, CTEs, window
          functions, and query optimization techniques to improve reporting
          efficiency and support large-scale business datasets.
        </p>
      </div>

    </div>
  </div>
</section>

{/* EXPERIENCE SECTION */}
<section id="experience" className="py-24 bg-gradient-to-b from-[#050505] to-black">
  <div className="max-w-4xl mx-auto px-6 md:px-10">

    <div className="mb-16 text-center">
      <h3 className="text-[#d4884f] text-xs font-bold tracking-[0.2em] uppercase mb-2">
        Professional Journey
      </h3>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-glow text-white">
        Experience
      </h2>
    </div>

    <div className="space-y-8">

      {/* ROLE 1 - WIPRO */}
      <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center hover:border-white/20 transition-all duration-300">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">
              Assistant Manager – Data Analytics
            </h3>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#d4884f]"></span>
          </div>

          <p className="text-[#d4884f] mt-1 text-sm uppercase tracking-widest font-medium">
            Wipro Limited • Google Operations
          </p>
          <p className="text-[#d4884f] mt-1 text-sm uppercase tracking-widest font-medium">
            SQL • ETL • Analytics
          </p>

          <p className="text-gray-400 text-sm mt-3 font-light max-w-2xl leading-relaxed">
            Supporting large-scale analytics operations for enterprise clients through
            advanced SQL, ETL workflows, dashboard solutions, and business reporting.
            Collaborating with cross-functional stakeholders to deliver accurate
            insights, process optimization, and data-driven decision making.
          </p>
        </div>

        <span className="mt-4 md:mt-0 px-4 py-1 border border-white/10 rounded-full text-xs text-gray-400 shrink-0 font-medium whitespace-nowrap bg-white/5">
          May 2026 - Present
        </span>
      </div>

      {/* ROLE 2 - ANNALLECT */}
      <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center hover:border-white/20 transition-all duration-300">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">
              Senior Associate – Data Analyst
            </h3>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gray-600"></span>
          </div>

          <p className="text-[#d4884f] mt-1 text-sm uppercase tracking-widest font-medium">
            Annalect India (Omnicom Group) 
          </p>
          <p className="text-[#d4884f] mt-1 text-sm uppercase tracking-widest font-medium">
            Power BI • Tableau • SQL
          </p>

          <p className="text-gray-400 text-sm mt-3 font-light max-w-2xl leading-relaxed">
            Developed business intelligence solutions and reporting frameworks while
            ensuring high standards of data quality. Created dashboards, optimized
            reporting processes, and translated stakeholder requirements into
            actionable analytical insights.
          </p>
        </div>

        <span className="mt-4 md:mt-0 px-4 py-1 border border-white/10 rounded-full text-xs text-gray-400 shrink-0 font-medium whitespace-nowrap">
          Dec 2025 - Apr 2026
        </span>
      </div>

      {/* ROLE 3 - TCS */}
      <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center hover:border-white/20 transition-all duration-300">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">
              Data Analyst
            </h3>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gray-600"></span>
          </div>

          <p className="text-[#d4884f] mt-1 text-sm uppercase tracking-widest font-medium">
            Tata Consultancy Services (TCS) • SQL • Power BI • Excel Automation
          </p>

          <p className="text-gray-400 text-sm mt-3 font-light max-w-2xl leading-relaxed">
            Built and maintained reporting solutions, automated recurring reporting
            tasks, performed data validation, and supported business teams through
            operational analysis. Contributed to process improvement initiatives,
            reporting accuracy, and data governance practices.
          </p>
        </div>

        <span className="mt-4 md:mt-0 px-4 py-1 border border-white/10 rounded-full text-xs text-gray-400 shrink-0 font-medium whitespace-nowrap">
          Sep 2021 - Dec 2025
        </span>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
      <section className="min-h-[40vh] flex flex-col justify-center items-center py-24 border-t border-white/5">
        <h3 className="text-[#d4884f] text-xs font-bold tracking-[0.2em] uppercase mb-4">Let's Connect</h3>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-glow">Get In Touch</h2>
        <a href="mailto:gurpreet.singh06091@gmail.com" className="text-xl md:text-2xl text-gray-300 mb-6 hover:text-[#d4884f] transition-colors relative group">
          gurpreet.singh06091@gmail.com
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4884f] transition-all group-hover:w-full"></span>
        </a>
        <p className="text-gray-500 text-sm tracking-wider uppercase">Available for opportunities and collaborations</p>
      </section>
    </main>
  );
}