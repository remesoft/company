import Navbar from "./Navbar";
// import Technologies from "./Technologies";

export default function Header({ children }) {
  return (
    <header className="header-gradient relative text-white">
      <Navbar />
      {children}
    </header>
  );
}
