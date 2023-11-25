import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
  return (
    <div className="home">
      <Header />
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={3}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "hsl(240, 3%, 12%)"
        }}
        outerStyle={{
          border: "3px solid hsl(240, 3%, 12%)"
        }}
      /> */}
      <HeroSection />
    </div>
  );
};

export default Home;
