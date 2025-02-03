import Link from "next/link";

export default function Projects() {
    return (
      <div className="min-h-screen  bg-[#ff59bf] relative">
        {/* Navbar */}
        <nav className="w-full bg-[#ff59bf] p-4 pl-8 flex justify-start gap-8 text-lg font-mono fixed top-0 left-0 right-0" style={{ fontFamily: "'VT323', monospace", color: "white" }}>
        <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        
        {/* Content */}
        <main className="p-8 pt-20">
          <h1 style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '2rem',
            marginBottom: '1rem',
          }}>PROJECTS PAGE</h1>
        </main>
      </div>
    );
}
