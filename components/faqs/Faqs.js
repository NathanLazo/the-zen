import React from "react";
import Link from "next/link";
import Separator from "../../components/additives/Separator";

const Faqs = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="sm:mx-[4rem] lg:mx-[30rem]">
            <h1 className="font-bold text-4xl">FAQ</h1>
            <br/>
            <p className="text-xl font-light">Frequently asked questions made by our users</p>
            <br/>
            <div className="flex flex-col text-xl font-medium ">
              <Link href="/user-info/1">
              <a className="pb-2 hover:font-bold">Where you can contact us?</a>
              </Link>
              <Separator/>
              <Link href="/user-info/2">
              <a className="pb-2 hover:font-bold">What is the floor price?</a>
              </Link>
              <Separator/>
              <Link href="/user-info/3">
              <a className="pb-2 hover:font-bold">Where can I see Ethereum transactions?</a>
              </Link>
              <Separator/>
              <Link href="/user-info/4">
              <a className="pb-2 hover:font-bold">How to collaborate with us?</a>
              </Link>
              <Separator/>
            </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Faqs;