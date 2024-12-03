"use client"
import BannerSection from "@/components/BannerSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FullWidthBanner from "@/components/FullWidthBanner";
import Header from "@/components/Header";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import ProductSection from "@/components/ProductSection";
import { useEffect } from "react";
import Slider from "@/components/Slider";
import { useState } from "react";
import FeedbackForm from "@/components/Feedback";


export default function Home() {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.gold-api.com/price/XAU');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGoldPrice(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);
  console.log(goldPrice)
  return (
    
    <>
    <Header/>
    <main>
      <Slider/>
      <BannerSection/>
      <ProductSection title="Featured Products" />
      <FullWidthBanner/>
      <ProductSection title="Bestselling Products" />
      <BlogSection />
      <InstagramSection/>
      <NewsletterSection/>
      <FeedbackForm/>
    </main>
    <Footer/>
    </>
  );
}
