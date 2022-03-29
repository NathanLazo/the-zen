import React, { useEffect, useState, useMemo} from "react";
import { ThirdwebWeb3Provider, useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Link from "next/link";
import Header from "../components/Header";
import { client } from '../lib/sanityClient';
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from 'react-icons/hi';
import Footer from "../components/Footer";
import NFTCard from "../components/NFTCard";

// You can switch out this provider with any wallet or provider setup you like.

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
    socialIcon: `my-2 px-6 hover:text-[#6d3ff8]`,
    divider: `border-r-2`,
    title: `text-5xl font-bold mb-4`,
    createdBy: `text-lg mb-4`,
    statsContainer: `sm:w-[26rem] md:w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
    collectionStat: `w-1/4`,
    statValue: `text-3xl font-bold w-full flex items-center justify-center`,
    ethLogo: `h-6 mr-2`,
    statName: `text-lg w-full text-center mt-1`,
    description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mb-4`,
  };



const Profile = ()=>{
    
    const { address } = useWeb3();
    const [ userData, setUser ] =  useState({});
    const userId = address;
    const { provider } = useWeb3();
    const [ nfts, setNfts ] = useState([]);
    const [ listings, setListings ] = useState([]);
    const collectionId = "0xE9cEC25c3ba4f9Cc4930C2432BB9fC7C23B323Db";

      const nftModule = useMemo(() => {
        if(!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/WWZWSkv5blIqaD3JQpq61xXM1EdCLixv'
        )
        return sdk.getNFTModule(collectionId)
      }, [provider])

      //get all NFT in the collection
      useEffect(()=>{
          if(!nftModule) return
          ;(async() =>{
              const nfts = await nftModule.getOwned(address);

              setNfts(nfts)
          })()

      }, [nftModule])

      const marketPlaceModule = useMemo(()=>{
        if(!provider) return
        
        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/WWZWSkv5blIqaD3JQpq61xXM1EdCLixv'
        )
        return sdk.getMarketplaceModule(
            '0xA73a954721311c5dFac3E5D8558D2adCB71380a5'
        )
    },[provider]);

    useEffect(() => {
        if(!marketPlaceModule) return
        ;(async () => {
            setListings(await marketPlaceModule.getAllListings())
        })()
    }, [marketPlaceModule]);

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

      {/* Profile Images */}
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

          {/* Social Icons */}
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
              </div>
            </div>
          </div>
        </div>
        
        {/* Info-Name */}
        <div className={style.midRow}>
          <div className={style.createdBy}>
            {userData[0]?.name}
            <span className="text-[#2081e2]"></span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.description}>{address}</div>
        </div>
      </div>


      {/* NFTs list */}
      <div className="bg-transparent w-screen">,
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-18">
          {!nfts 
          ?<div className="text-center text-white">Loading</div>
          :nfts.map((nft, index) => { return (
            <NFTCard
            key={index}
            nftItem={nft}
            title=""
            listings={listings}
            />
          )})
          }
        </div>
      </div>
      

      <Footer/>
    </div>
    </>
    )
}

export default Profile;