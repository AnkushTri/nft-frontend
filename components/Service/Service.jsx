import React from 'react';
import Image from 'next/image';

//Internal imports 
import Style from './Service.module.css';
import images from '../../img';


const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image src={images.service1} alt="Filter and Discover" width={100} height={100}/>
          <p className={Style.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Filter and Discover</h3>
          <p>
            Connect with wallet, discover , buy NFTs, sell your NFts and earn money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image src={images.service2} alt="Filter and Discover" />
          <p className={Style.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Filter and Discover</h3>
          <p>
            Connect with wallet, discover , buy NFTs, sell your NFts and earn money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image src={images.service3} alt="Connect Wallet" />
          <p className={Style.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Connect wallet</h3>
          <p>
            Connect with wallet, discover , buy NFTs, sell your NFts and earn money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image src={images.service4} alt="Start trading" />
          <p className={Style.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover , buy NFTs, sell your NFts and earn money
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service;