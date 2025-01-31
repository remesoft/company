import Marquee from "react-fast-marquee";
import logo01 from "../assets/icons/logo-01.jpg";
import logo02 from "../assets/icons/logo-02.jpg";

const Technologies = () => {
  const logos = [
    logo01,
    logo02,
    logo01,
    logo01,
    logo01,
    logo01,
    logo01,
    logo02,
    logo01,
    logo01,
    logo01,
    logo01,
  ];

  return (
    <div className="mt-20 py-4">
      <Marquee speed={50}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index}`}
            className="mx-6 h-16 rounded-md"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Technologies;
