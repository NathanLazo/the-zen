import React from "react";
import Link from "next/link";
import { ShoppingBagIcon } from '@heroicons/react/outline'
import Separator from "../additives/Separator";


const BuyComponent = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-max">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-8 sm:static">
            <div className="flex space-x-4 mb-4">
                <ShoppingBagIcon className="w-16"/>
                <h1 className="font-bold text-4xl inline-block align-baseline pt-2">Buy</h1>
            </div>
            <p className="text-xl">
            The first steps are to create a metamask account, 
            or if you already have one, just connect with this website going to the 
            <Link href="/" className="text-sky-500"> Home</Link> page, if nothing shows up, the wallet is successfully connected 
            </p>
            <Separator/>
            <p className="text-xl">
            Once your metamask wallet is connected to this website,
            you can easily buy NFT by going to the <Link href="/collections/0xE9cEC25c3ba4f9Cc4930C2432BB9fC7C23B323Db" className="text-sky-500">Collection</Link> page,
            and selecting the NFT you want to buy.
            </p>
            <Separator/>
            <p className="text-xl">
            Once you have selected the NFT you want to buy, click the `&quot;`Buy`&quot;` button, a Smart contract will be deployed 
            to the blockchain, and the NFT will be added to your wallet.
            </p>
        </div>
      </div>
    </div>
    </>
    )
}

export default BuyComponent;