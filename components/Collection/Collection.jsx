import React ,{useState,useEffect}from 'react';
import { BsFillAlarmFill,BsFillCalendarDateFill,BsCalendar3, BsCalendarDateFill } from 'react-icons/bs';


//import internal
import Style from './Collection.module.css';
import DaysComponent from './DaysComponents/DaysComponents';
import images from '../../img';


const Collection = () => {

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const CardArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
            name: "Karina",
            price: 23.132
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
            name: "Ankush Kumar",
            price: 16.202

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
        {
            background: images.creatorbackground7,
            user: images.user7,
            name: "Suahni",
            price: 17.089
        },
        {
            background: images.creatorbackground8,
            user: images.user8,
            name: "parbh",
            price: 20.007

        },

    ];

    const FollowingArray = [
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

    const NewsArray = [
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
        {
            background: images.creatorbackground7,
            user: images.user7,
            name: "Suahni",
            price: 17.089
        },
        {
            background: images.creatorbackground8,
            user: images.user8,
            name: "parbh",
            price: 20.007

        },
    ];


    const openPopular =()=>{
        if(!popular){
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    }

    const openFollowers =()=>{
        if(!following){
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    }

    const openNews =()=>{
        if(!news){
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    }

    
  return (
    <div className={Style.collection}>
        <div className={Style.collection_title}>
            <h2>Top List Creators</h2>
            <div className={Style.collection_collections}>
                <div className={Style.collection_collections_btn}>
                    <button onClick={()=>openPopular()}>
                        <BsFillAlarmFill/> Last 24 hours
                    </button>
                    <button onClick={()=>openFollowers()}>
                        <BsCalendar3/> Last 7 days
                    </button>
                    <button onClick={()=>openNews()}>
                        <BsFillCalendarDateFill /> Last 30 days
                    </button>
                </div>
            </div>
        </div>
          {
              popular && (
                  <div className={Style.collection_box}>
                      {
                          CardArray.map((el, i) => (
                              <DaysComponent key={i + 1} i={i} el={el}/>
                          ))
                      }
                  </div>
              )
          }
        {
            following && (
                <div className={Style.collection_box}>
                    {
                        FollowingArray.map((el,i)=>(
                            <DaysComponent key={i + 1} i={i} el={el} />
                        ))
                    }
                </div>
            )
        }
        {
            news && (
                <div className={Style.collection_box}>
                    {
                        NewsArray.map((el,i)=>(
                            <DaysComponent key={i + 1} i={i} el={el} />
                        ))
                    }
                </div>
            )
        }
      
    </div>
  )
}

export default Collection;