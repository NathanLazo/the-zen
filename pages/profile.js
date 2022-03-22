import React, { useEffect, useMemo, useState} from "react";
import { useWeb3 } from '@3rdweb/hooks';
import Link from "next/link";
import Header from "../components/Header";
import { client } from '../lib/sanityClient'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from 'react-icons/hi';
import Footer from "../components/Footer";

const style = {
    bannerImageContainer: `bg-[url('../assets/background.jpg')] h-[50vh] w-screen overflow-hidden flex justify-center items-center`,
    bannerImage: `w-full object-cover `,
    infoContainer: `w-screen sm:text-center px-4`,
    midRow: `w-full flex justify-center text-white`,
    endRow: `w-full flex justify-end text-white`,
    profileImg: ` w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
    socialIconsContainer: `sm:hidden md:flex text-3xl mb-[-2rem]`,
    socialIconsWrapper: `w-44`,
    socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2 `,
    socialIcon: `my-2 hover:text-[#6d3ff8]`,
    divider: `border-r-2`,
    title: `text-5xl font-bold mb-4`,
    createdBy: `text-lg mb-4`,
    statsContainer: `sm:w-[26rem] md:w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
    collectionStat: `w-1/4`,
    statValue: `text-3xl font-bold w-full flex items-center justify-center`,
    ethLogo: `h-6 mr-2`,
    statName: `text-lg w-full text-center mt-1`,
    description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
  };




const Profile = ()=>{

    const { address } = useWeb3();
    const [ userData, setUser ] =  useState({});
    const userId = address;


    const fetch =  async (SanityClient = client) => {
        const query = `*[_type == "users" && walletAddress == "${userId}"] {
            "name": userName,
            "address": walletAddress,
            "profileImg": profileImage.asset->url,
            "bannerImg": bannerImage.asset->url,
            "twitter": twitterHandle,
            "instagram": igHandle,
        }`;
        const userFromDB =  await SanityClient.fetch(query);
        await setUser(userFromDB)

    }
    useEffect(()=>{
      fetch()
    },[userId])
    
    const instagram = userData[0]?.instagram || "";
    const twitter = userData[0]?.twitter || "";

    return (
      <>
        <div className="overflow-hidden">
      <Header />
      <div className={style.bannerImageContainer}>
        <div
          className={style.bannerImage}
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <Link href={instagram} >
                    <a className={style.socialIcon} target="_blank">
                        <AiOutlineInstagram />
                    </a>
                </Link>
                <div className={style.divider} />
                <Link href={twitter} >
                <a className={style.socialIcon} target="_blank">
                  <AiOutlineTwitter />
                </a>
                </Link>
                <div className={style.divider} />
                    <div className={style.socialIcon}>
                        <HiDotsVertical />
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}></div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            {userData[0]?.name}
            <span className="text-[#2081e2]"></span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.description}></div>
        </div>
      </div>
      <div className="sm:mx-4 md:mx-[2rem] lg:mx-[10rem]">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
        </div>
      </div>
      
      <Footer/>
    </div>
    </>
    )
}

export default Profile;