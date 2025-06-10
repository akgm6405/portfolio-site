import '../styles/globals.css';
import Link from 'next/link';
import '../styles/project.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <video autoPlay muted loop id="bgVideo">
        <source src="/waves.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main className="main-content">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
