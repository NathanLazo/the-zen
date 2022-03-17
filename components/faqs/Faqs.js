import React from "react";
import Link from "next/link";
import Separator from "../../components/additives/Separator";

const Faqs = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-max">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="sm:mx-[4rem] lg:mx-[30rem]">
            <h1 className="font-bold text-4xl">FAQ</h1>
            <br/>
            <p className="text-xl font-light">Frequently asked questions made by our users</p>
            <br/>
            <div class="flex flex-col text-xl font-medium ">
              <Link href="/user-info/1">
              <div className="pb-2 hover:font-bold">Where you can contact us?</div>
              </Link>
              <Separator/>
              <Link href="/user-info/2">
              <div className="pb-2 hover:font-bold">What is the floor price?</div>
              </Link>
              <Separator/>
              <Link href="/user-info/3">
              <div className="pb-2 hover:font-bold">Where can I see Ethereum transactions?</div>
              </Link>
              <Separator/>
              <Link href="/user-info/4">
              <div className="pb-2 hover:font-bold">How to collaborate with us?</div>
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