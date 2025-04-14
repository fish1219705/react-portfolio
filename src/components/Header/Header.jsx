import './header.css'

export default function Header() {
return (
  <>
    <header id="header">
      <nav>
        <a href="#work" className="link">WORK</a>
        <img src="/images/icon.png" alt="website icon" className="icon" />
        <a href="#about" className="link">ABOUT</a>
      </nav>
    </header>
  </>
  );
}