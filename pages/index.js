import { HeroSection,Service,BigNFTSlider, Subscribe,Title,Category,Filter,NFTCard, Collection, FollowerTab, AudioLive, Slider, Brand ,Video,} from '@/components/componentsindex';
import React from 'react';

//internal import
import Style from "../styles/index.module.css";

const index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Latest Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topocs of life."
      />
      <AudioLive/>
      <Title heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topocs of life."
      />
      <FollowerTab/>
      {/* <Title heading="Explore NFTs Video"
        paragraph="Discover the most outstanding NFTs in all topocs of life."
      /> */}
      <Slider />
      <Collection/>
      <Title heading="Featured NFTs"
        paragraph="Click on play icon and enjoy NFTs video"
      />
      <Filter />
      <NFTCard/>
      <Title heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category/>
      <Subscribe />
      <Brand/>
      <Video/>
    </div>
  )
}

export default index;
