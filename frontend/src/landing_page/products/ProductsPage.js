import React from "react";
import NavBar from "../NavBar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <LeftSection
        image={"media/images/left-1.png"}
        title={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        anchor_first={"Try Demo"}
        anchor_second={"Learn More"}
      />
      <RightSection
        image={"media/images/right-1.png"}
        title={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        anchor={"Learn More"}
      />
      <LeftSection
        image={"media/images/left-2.png"}
        title={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        anchor_first={"Coin"}
        anchor_second={""}
      />
      <RightSection
        image={"media/images/right-2.png"}
        title={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        anchor={"Kite Connect"}
      />
      <LeftSection
        image={"media/images/left-3.png"}
        title={"Varsity mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        anchor_first={""}
        anchor_second={""}
      />
      <Universe />
      <Footer />
    </>
  );
}

export default ProductsPage;
