import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Separator from "../../components/additives/Separator";
import { CashIcon } from '@heroicons/react/outline'


const GetStarted = () => {
    return (
        <>
        <Header/>
        <div className="relative bg-white overflow-hidden h-max">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="sm:mx-[4rem] lg:mx-[30rem]">
                    <h1 className="font-bold text-4xl">What is the floor price?</h1>
                    <br/>
                    <p className="text-xl font-light">An estimate for The Zen collection of the floor price was made by the time making these personal NFTs</p>
                    <br/>
                    <div className="flex flex-col text-xl font-normal ">
                        <p className="pb-2 flex">
                            <CashIcon className="w-8 mr-2"/>
                            Right now the floor price is 0.018 ETH
                        </p>
                        <Separator/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default GetStarted;