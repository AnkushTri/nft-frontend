import React from 'react';
import { SearchBar } from '@/SearchPage/searchBarIndex';

//INternal Imports
import Style from '../styles/searchPage.module.css';

import { Slider, Brand } from '@/components/componentsindex';
// import { SearchBar } from '../searchBarIndex';
import { Filter } from '@/components/componentsindex';
import { Banner, NFTCardTwo } from '@/collectionPage/collectionIndex';
import images from '../img';

const searchPage = () => {

  const collectionArray =[
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];


  return (
    <div className={Style.searchPage}>
     <Banner bannerImage={images.creatorbackground3}/>
     <SearchBar />
     <Filter/>
     <NFTCardTwo NFTData={collectionArray} />
     <Slider/>
     <Brand/>
    </div>
  )
}

export default searchPage;