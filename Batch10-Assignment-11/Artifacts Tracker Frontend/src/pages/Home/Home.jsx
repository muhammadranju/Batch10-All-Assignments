import { Helmet } from "react-helmet";
import ArtifactCards from "../../components/ArtifactCards/ArtifactCards";
import HeroSection from "../../components/HeroSection/HeroSection";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeroSectionBottom } from "../../components/HeroSection/HeroSectionBottom";
import { Newsletter } from "../../components/HeroSection/Newsletter";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <title>Home Page | Historical Artifacts</title>
      </Helmet>
      {/* Navbar */}

      <HeroSection />
      <ArtifactCards />

      {/* Join Community Section */}
      <div className="mb-20">
        <HeroSectionBottom />
      </div>
      <section className="bg-gradient-to-r from-yellow-100 via-pink-50 to-yellow-100 pb-10">
        <Newsletter />
      </section>
    </>
  );
};

export default Home;
