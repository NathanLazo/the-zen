import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { client } from '../lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';
import { CgColorBucket } from 'react-icons/cg';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet} = useWeb3();

  const welcomeUser = (userName, toastHAndler =  toast) =>{
    toastHAndler.success(
      `Welcome back ${userName !== 'Unnamed' ? `${userName}` : ''}!`,
        {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if(!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const res = await client.createIfNotExists(userDoc);
      welcomeUser(res.userName);
    })()
  }, [address]);
  return (
    <div className={style.wrapper}>
    <Toaster position='top-center' reverseOrder={false}/>
      {address ? (
    <>
    <Header/>
    <Hero/>
    </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button className={style.button} onClick={() => connectWallet('injected')}>
            Connect Wallet
          </button>
          <div className={style.details}>
            You need to connect your wallet to view The Zen Marketplace
          </div>
        </div>
      )}
    </div>
  )
}
