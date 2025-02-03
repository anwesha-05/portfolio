export default function Projects() {
    return (
      <div className="min-h-screen  bg-[#ff59bf] relative">
      {/* Navbar */}
      <nav className="w-full bg-[#ff59bf] p-4 pl-8 flex justify-start gap-8 text-lg font-mono fixed top-0 left-0 right-0" style={{ fontFamily: "'VT323', monospace", color: "white" }}>
        <a href="/" className="hover:underline">Home</a>
        <a href="/projects" className="hover:underline">Projects</a>
        <a href="/about" className="hover:underline">About Me</a>
        <a href="/resume" className="hover:underline">Resume</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      
      {/* Content */}
      <main className="p-8 pt-20">
        <h1 style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '2rem',
          marginBottom: '1rem',
        }}>CONTACT PAGE</h1>
      </main>
    </div>
    );
  }
  