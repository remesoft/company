import Navbar from "./Navbar";
// import Technologies from "./Technologies";

export default function Header({ children, darkMode, handleDarkMode }) {
  return (
    <header className="header-gradient relative text-white">
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      {children}
    </header>
  );
}
