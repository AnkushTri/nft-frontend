import React , {useState,useEffect} from 'react';
//internal imports
import Style from "../styles/author.module.css";
import { Banner,NFTCardTwo } from '@/collectionPage/collectionIndex';
import { Brand,Title } from '@/components/componentsindex';
import images from '../img';
import { AuthorNFTCardBox,AuthorProfileCard,AuthorTaps } from '@/authorPage/componentIndex';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';

const author = () => {
  const followerArray = [
    {
      background: images.creatorbackground2,
      user: images.user2,
      name: "Ankush Kumar",
      price: 16.202
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      name: "Karina",
      price: 23.132
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      name: "Srishti",
      price: 11.322
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      name: "Ankit Nirala",
      price: 12.437
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      name: "Manish Kumar",
      price: 15.180
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      name: "Shivani",
      price: 21.134
    },
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2}/>
      <AuthorProfileCard/>
      <AuthorTaps 
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

        <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        />
        <div className={Style.m}></div>

        <Title heading="Popular Creators" paragraph="Click on NFT music icon and enjoy NFT music or audio"/>
        {/* {
          popularArray.map((el,i)=>(
            <FollowerTabCard key={i+1} el={el} i={i}/>
          ))
        } */}
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
        <Brand/>
        
    </div>
  )
}

export default author;