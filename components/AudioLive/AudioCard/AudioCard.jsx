import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

//Internal imports
import Style from './AudioCard.module.css';
import images from '../../../img';
// import { LikeProfile } from '@/components/componentsindex';

const AudioLive = () => {

  const [like, setLike] = useState(false);
  const [play, setplay] = useState(false);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      setplay(true);
    } else {
      setplay(false);
    }
  }

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like}
            onClick={() => likeNft()}>
            {
              like ? (
                <AiFillHeart className={Style.audioCard_box_like_icon} />
              ) :
                (
                  <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />
                )
            }
            <span>24</span>
          </div>
          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaing}>
              <small>Remaining time</small>
              <h5>3h : 15m : 20s</h5>
            </div>
          </div>
        </div>
        <div className={Style.audioCard_box_player}>
          <Image src={images.musiceWave} alt="music" width={200} />
          <div className={Style.audioCard_box_musicPlayer}
            onClick={() => playMusic()}>
            {
              play ? (
                <div className={Style.audioCard_box_musicPlayer_icon}>
                  <TbPlayerPause />
                </div>
              ) : (
                <div className={Style.audioCard_box_musicPlayer_icon}>
                  <TbPlayerPlay />
                </div>
              )
            }
          </div>
        </div>
        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>NFT Music #1123</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>$3,542.54 </p>
            </div>
          </div>
          <div className={Style.audioCard_box_details_info_stock}>
            <small>24 in stock</small>
          </div>
        </div>
        <div className={Style.audioCard_box_img}>
          <Image src={images.creatorbackground10} alt="background" height={300} width={290} />
        </div>
      </div>
    </div>
  )
}

export default AudioLive;