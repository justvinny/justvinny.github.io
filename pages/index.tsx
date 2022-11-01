import { useEffect, useState } from "react";
import Layout from "../components/layout";
import GetInTouch from "./get-in-touch";
import HeroSection from "./hero-section";
import Projects from "./projects";
import Aos from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const [initAos] = useState(true);

  useEffect(() => {
    Aos.init();
  }, [initAos]);

  return (
    <Layout>
      <HeroSection />
      <Projects />
      <GetInTouch />
    </Layout>
  );
};

export default Index;
