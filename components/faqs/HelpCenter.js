import React from "react";
import Link from "next/link";

const HelpCenter = () => {
    return (
    <>
    <div className="sm:mx-2 lg:mx-[20rem] mt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-white text-center">
            
            <Link href="/user-info/get-started"><a className="border-2 border-none bg-[#6d3ff8] rounded-md sm:py-0 md:py-[1rem]">
                <h1 className="font-bold text-2xl pb-1">Get started</h1>
                <p className="px-8">Learn all about how to configure metamask and what you can do with it.</p>
            </a></Link>
            <Link href="/user-info/buy"><a className="border-2 border-none bg-[#6d3ff8] rounded-md sm:py-0 md:py-[1rem]">
                <h1 className="font-bold text-2xl pb-1">Buy</h1>
                <p className="px-8">Learn how you can buy and view your purchases with your wallet</p>
            </a></Link>
            <Link href="/user-info/sell"><a className="border-2 border-none bg-[#6d3ff8] rounded-md sm:py-0 md:py-[1rem]">
                <h1 className="font-bold text-2xl pb-1">Sell</h1>
                <p className="px-8">Learn how you can deploy and sell your nfts in Ethereum</p>
            </a></Link>
            <Link href="/user-info/create"><a className="border-2 border-none bg-[#6d3ff8] rounded-md sm:py-0 md:py-[1rem]">
                <h1 className="font-bold text-2xl pb-1">Create</h1>
                <p className="px-8">Learn about our tools to create different avatars for the metaverse</p>
            </a></Link>
            <Link href="/user-info/faqs"><a className="border-2 border-none bg-[#6d3ff8] rounded-md sm:py-0 md:py-[1rem]">
                <h1 className="font-bold text-2xl pb-1">FAQ</h1>
                <p className="px-8">Search for common questions made by users</p>
            </a></Link>
            <Link href="/user-info/safety"><a className="border-2 border-none bg-[#6d3ff8] rounded-md sm:py-0 md:py-[1rem]">
                <h1 className="font-bold text-2xl pb-1">User safety</h1>
                <p className="px-8">All the accounts are encrypted, see how and learn about anonymity</p>
            </a></Link>
        </div>
    </div>
    

    </>
    )
}

export default HelpCenter;