import React, { useEffect, useMemo, useState} from "react";
import { client } from '../../lib/sanityClient'
import { useRouter } from "next/router";

const UserConfig = () => {

    const router = useRouter();
    const { userId } = router.query;
    const [ userData, setUser ] =  useState({});

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
    console.log(userData[0]);


    client
  .patch(`${userId}`) // Document ID to patch
  .set({userName: 'Jorge'}) //merge of document
  .commit() // Perform the patch and return a promise
  .then((updatedUser) => {
    console.log('Updated')
    console.log(updatedUser)
  })
  .catch((err) => {
    console.error('Oh no, the update failed: ', err.message)
  })




    return (
        <h1 className="text-white" >
            {userId} 
            <br/>
            Hi
            {userData[0]?.name
            ? userData[0].name
            : "User"}
            <br/>
            {userData[0]?.profileImg
            ? userData[0].profileImg
            : "User"}
            <br/>
            {userData[0]?.instagram
            ? userData[0].instagram
            : "User"}
            <br/>
            {userData[0]?.bannerImg
            ? userData[0].bannerImg
            : "User"}
            <br/>
            {userData[0]?.twitter
            ? userData[0].twitter
            : "User"}
        </h1>
    );
}
 
export default UserConfig;