import Image from "next/image";
import RootLayout from "./layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { homePageContent } from "./data/content";


export default function Home() {
  return (
    <RootLayout>
      <Hero content={homePageContent.hero} />
      <Features content={homePageContent.features} />
      {/* Add other components as needed */}
    </RootLayout>
  );
}
