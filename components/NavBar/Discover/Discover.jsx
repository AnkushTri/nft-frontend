import React from 'react';
import Link from 'next/link';

import Style from "./Discover.module.css";

const Discover = () => {
  //Discover navigation menu
const discover=
[
  {
    name:"collection",
    link:"collection"
  },
  {
    name:"Search",
    link:"searchPage"
  },
  {
    name:"Auther Profile",
    link:"author-profile"
  },
  {
    name:"NFT Details",
    link:"NFT-details"
  },
  {
    name: "Account Setting",
    link: "account"
  },
  {
    name: "Upload NFT",
    link: "uploadNFT"
  },
  {
    name:"Connect Wallet",
    link:"connectWallet"
  },
  {
    name:"Blog",
    link:"blog"
  }

];
  return (
    <div>
      {discover.map((el,i)=>(
        <div key={i+1} className={Style.discover}>
          <Link href={{pathname:`${el.link}`}}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Discover;