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
                    <h1 className="font-bold text-4xl">Where can I see Ethereum transactions?</h1>
                    <br/>
                    <p className="text-xl font-light">We can all se Ethereum transactions, all you need to have is one of the following:</p>
                    <br/>
                    <div class="flex flex-col text-xl font-normal ">
                        <p className="pb-2 flex">
                            Address
                        </p>
                        <Separator/>
                        <p className="pb-2 flex">
                            Txn Hash
                        </p>
                        <Separator/>
                        <p className="pb-2 flex">
                            Block
                        </p>
                        <Separator/>
                        <p className="pb-2 flex">
                            Token
                        </p>
                        <Separator/>
                        <p className="pb-2 flex">
                            Ens
                        </p>
                        <Separator/>
                        <br/>
                        <p className="text-xl font-light">
                            Then you can access to: <a className="text-sky-500 hover:font-normal" href="https://etherscan.io" target="_blank">Etherscan.io</a> and see all the blocks, transactions, and more.
                        </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default GetStarted;