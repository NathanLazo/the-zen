import React, { useEffect, useMemo, useState} from "react";
import { client } from '../../lib/sanityClient'
import { useRouter } from "next/router";
import Header from "../../components/Header";
import toast, { Toaster } from 'react-hot-toast';
import Separator from '../../components/additives/Separator';
import Footer from "../../components/Footer";


const UserConfig = () => {

  const updateSuccessful = ( toastHAndler =  toast) =>{
    toastHAndler.success(
      `Update successful`,
        {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

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



  const [name, setName] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  useEffect(() => {
    if(userData[0]?.name){
       setName(userData[0]?.name)
     }
  },[userData])
  useEffect(() => {
    if(userData[0]?.instagram){
       setInstagram(userData[0]?.instagram)
     }
  },[userData])
  useEffect(() => {
    if(userData[0]?.twitter){
       setTwitter(userData[0]?.twitter)
     }
  },[userData])
    

  const updateProfileInfo =  (e) => {
    e.preventDefault();
    

    client
    .patch(`${userId}`) // Document ID to patch
    .set({
      userName: name,
      twitterHandle: twitter,
      igHandle: instagram,
    }) //merge of document
    .commit() // Perform the patch and return a promise
    .then((updatedUser) => {
      console.log('Updated')
      console.log(updatedUser)
    })
    .catch((err) => {
      console.error('Oh no, the update failed: ', err.message)
     })
     
     updateSuccessful();
     setTimeout(window.location.reload(),500);
     
  }

  const changeProfilePhotos =  (e) => {
    e.preventDefault();
   
  }


    return (
      <>
      <Toaster position='top-center' reverseOrder={false}/>
      <Header/>
      <br/>
      <div className="mt-10 mx-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-3xl text-white">Profile Info</h3>
              <p className="mt-1 text-lg text-gray-300">Information shown in your profile for direct contact</p>
              {/* //Profile image
              //Banner image */}
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={updateProfileInfo}>
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-8">
                      <label htmlFor="first-name" className="block text-sm font-medium text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-[#604d9b] block w-full shadow-sm sm:text-sm rounded-md bg-[#363636] text-white"
                        value={name}
                        placeholder="Type any name you want"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white">
                        Instagram
                      </label>
                      <input
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-[#604d9b] block w-full shadow-sm sm:text-sm rounded-md bg-[#363636] text-white"
                        value={instagram}
                        placeholder="Insert your instagram url"
                        onChange={(e) => setInstagram(e.target.value) }
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white">
                        Twitter
                      </label>
                      <input
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-[#604d9b] block w-full shadow-sm sm:text-sm rounded-md bg-[#363636] text-white"
                        value={twitter}
                        placeholder="Insert your twitter url"
                        onChange={(e) => setTwitter(e.target.value)}
                      />
                    </div>
       
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#604d9b] hover:bg-[#463870] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    );
}
 
export default UserConfig;