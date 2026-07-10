import HeroSection from "../../components/home/HeroSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import FeaturedCoursesSection from "../../components/home/FeaturedCoursesSection";
import FeaturedArticlesSection from "../../components/home/FeaturedArticlesSection";
import FeaturedProfessionalsSection from "../../components/home/FeaturedProfessionalsSection";
import CtaSection from "../../components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <FeaturedArticlesSection />
      <FeaturedProfessionalsSection />
      <CtaSection />
    </>
  );
}
