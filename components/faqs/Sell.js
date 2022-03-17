import React from "react";
import Link from "next/link";
import { TagIcon } from '@heroicons/react/outline'
import Separator from "../additives/Separator";


const BuyComponent = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-max">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-8 sm:static">
            <div className="flex space-x-4 mb-4">
                <TagIcon  className="w-16"/>
                <h1 className="font-bold text-4xl inline-block align-baseline pt-2">Sell</h1>
            </div>
            <p className="text-xl">
            To sell your NFTs, first you need to list your NFT again in the network by going to the <Link href="/collections/0xE9cEC25c3ba4f9Cc4930C2432BB9fC7C23B323Db" className="text-sky-500">Collection</Link> page,
            and selecting the NFT you want to sell.
            </p>
            <Separator/>
            <p className="text-xl">
            Once your select the NFT you want to sell, click the &quot;List&quot; button
            </p>
            <Separator/>
            <p className="text-xl">
            Then your NFT is ready to sell and you can give us a <a className="text-sky-500" href="mailto: thezen.corporation@gmail.com">call</a> if you want to promote it.
            </p>
        </div>
      </div>
    </div>
    </>
    )
}

export default BuyComponent;