import { HeroSection,Service,BigNFTSlider, Subscribe,Title,Category } from '@/components/componentsindex';
import React from 'react';

//internal import
import Style from "../styles/index.module.css";

const index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Subscribe/>
      <Title heading="Browse by Category" 
      paragraph="Explore the NFTs in the most featured categories."
      />
      <Category/>
    </div>
  )
}

export default index;
