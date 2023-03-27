import React from 'react';

//Internal imports
import Style from '../styles/NFT-details.module.css';
import { Category,Brand,Button } from '@/components/componentsindex';
import { Banner } from '@/collectionPage/collectionIndex';
import NFTDetailsPage from '@/NFTDetailsPage/NFTDetailsPage';

const NFTDetails = () => {
  return (
    <div>
        <NFTDetailsPage/>
        <Category/>
        <Brand/>
    </div>
  )
}

export default NFTDetails;