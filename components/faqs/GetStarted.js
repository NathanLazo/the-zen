import React from "react";
import Link from "next/link";
import Separator from "../additives/Separator";

const GetStartedComponent = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-max">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-8 sm:static">
          <div className="flex justify-between sm:pt-0 md:pt-8">
            <div className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              How to get started with Metamask.

              <p className="text-xl pt-8 font-medium">Available as a browser extension and as a mobile app,
               MetaMask equips you with a key vault, secure login, token wallet,
                and token exchange—everything you need to manage your digital assets.

                <Separator/>

                Swap tokens directly from your desktop or mobile wallet. The Swaps feature combines data from 
                decentralized exchange aggregators, market makers, and DEXs, 
                to ensure you get the very best price with the lowest network fees.

                <Separator/>

                Unlike other crypto wallets out there, MetaMask is built to be privacy-first. We empower you to access, 
                store and swap tokens, without having to worry about dapps or exchanges accessing more personal data than 
                you’ve consented to give. Whether you’re participating in decentralized finance, or surfing Web 3.0, with 
                MetaMask, you are always in complete control of your data.

                <Separator/>
              </p>
              <img className="mt-10" src="https://images.ctfassets.net/9sy2a0egs6zh/7dddYc4TwT6S1xh2ltAIKn/8de01d009f97a4dd8dc9c52dfe764078/swapsscreens.png" />
            </div>
            <img className="sm:hidden md:block pl-2 w-48 h-48"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" 
             alt="metamask" />
          </div>
          <Separator/>
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Enhanced Gas UI to improve how EIP-1559 gas fees work with MetaMask
              </div>
            </div>
            <a className="inline-flex items-center px-16 py-2 mt-10 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            href="https://metamask.io/1559/">
              More info.
            </a>
            <Separator/>  
          </div>   
        </div>
      </div>
    </div>
    </>
    )
}

export default GetStartedComponent;