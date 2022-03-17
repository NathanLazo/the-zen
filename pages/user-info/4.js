import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Separator from "../../components/additives/Separator";


const GetStarted = () => {
    return (
        <>
        <Header/>
        <div className="relative bg-white overflow-hidden h-max">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="sm:mx-[4rem] lg:mx-[30rem]">
                    <h1 className="font-bold text-4xl">How to collaborate with us?</h1>
                    <br/>
                    <p className="text-xl font-light">We are open to all content creator who wants to work with us</p>
                    <br/>
                    <div class="flex flex-col text-xl font-normal ">
                        <p className="pb-2 flex">
                            You can contact us via our social media or email to talk in how we can integrate you in this company.
                        </p>
                        <Separator/>
                        <p className="pb-2 flex">
                            We can also integrate your NFT projects into our marketplace and promote them to the community.
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