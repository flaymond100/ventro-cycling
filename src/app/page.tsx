// components
import { Footer } from "@/components";

// sections
import Home from "./home";
import Faq from "./faq";
import OurServices from "@/components/our-services";

export default function Campaign() {
  return (
    <>
      <Home />
      <OurServices />
      <Faq />
      <Footer />
    </>
  );
}
