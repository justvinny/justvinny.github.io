import Layout from "../components/layout";
import GetInTouch from "./get-in-touch";
import HeroSection from "./hero-section";
import Projects from "./projects";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Projects />
      <GetInTouch />
    </Layout>
  );
};

export default Index;
