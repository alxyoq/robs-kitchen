import Layout from "@/components/layout/Layout";
import FeaturedSections from "@/components/ui/FeaturedSections";
import Hero from "@/components/ui/Hero";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <FeaturedSections />
    </Layout>
  );
}
