import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Separator from "../../components/additives/Separator";
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'


const GetStarted = () => {
    return (
        <>
        <Header/>
        <div className="relative bg-white overflow-hidden h-max">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="sm:mx-[4rem] lg:mx-[30rem]">
                    <h1 className="font-bold text-4xl">Where you can contact us?</h1>
                    <br/>
                    <p className="text-xl font-light">Via Email or Social media</p>
                    <br/>
                    <div className="flex flex-col text-xl font-normal ">
                        <a className="pb-2 hover:font-semibold flex" href="https://www.instagram.com/the_zen_corp/" rel="noreferrer" target="_blank">
                             <ArrowNarrowRightIcon className="w-6"/> 
                             The Zen Instagram
                        </a>
                        <Separator/>
                        <a className="pb-2 hover:font-semibold flex" href="https://twitter.com/the_zen_corp" rel="noreferrer" target="_blank">
                            <ArrowNarrowRightIcon className="w-6"/> 
                            The Zen Twitter
                        </a>
                        <Separator/>
                        <a className="pb-2 hover:font-semibold flex " href="mailto: thezen.corporation@gmail.com" rel="noreferrer" target="_blank">
                            <ArrowNarrowRightIcon className="w-6"/> 
                            Direct contact with creator
                        </a>
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