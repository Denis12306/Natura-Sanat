import HeroSection from "../../components/home/HeroSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import FeaturedCoursesSection from "../../components/home/FeaturedCoursesSection";
import FeaturedArticlesSection from "../../components/home/FeaturedArticlesSection";
import FeaturedProfessionalsSection from "../../components/home/FeaturedProfessionalsSection";
import CtaSection from "../../components/home/CtaSection";
import FeaturedStorySection from "../../components/home/FeaturedStorySection";

// Page principale avec les features ci dessous
export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "120px",
      }}
    >
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <FeaturedArticlesSection />
      <FeaturedProfessionalsSection />
      <CtaSection />
      <FeaturedStorySection/>
    </div>
  );
}
