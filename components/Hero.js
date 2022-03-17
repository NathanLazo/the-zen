import React from "react";



const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-[#5c4494] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://gateway.pinata.cloud/ipfs/QmdTNB2ts8ZNGnafVqrmMFjNRCJUH8wmNMWnZuF7T3ccAz')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex sm:items-center sm:justify-center md:justify-start`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#604D9B] rounded-lg mr-5 text-white hover:bg-[#44356f] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem] mt-[2rem] sm:hidden md:hidden lg:block`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }


const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Create, explore and sell your own digital content.
                        </div>
                        <div className={style.description}>
                            The Zen is a decentralized and digital world.
                        </div>
                        <div className={style.ctaContainer}>
                            <Link href="/collections/0xE9cEC25c3ba4f9Cc4930C2432BB9fC7C23B323Db" className={style.accentedButton}>Explore</Link>
                            <button className={style.button}>Create</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img className="rounded-t-lg" 
                        src="https://gateway.pinata.cloud/ipfs/QmdTNB2ts8ZNGnafVqrmMFjNRCJUH8wmNMWnZuF7T3ccAz" 
                        alt="NFT"
                        />
                        <div className={style.infoContainer}>
                            <img className="h-[2.5rem] rounded-full" 
                            src="https://gateway.pinata.cloud/ipfs/QmThxpqKhE6ASPELPmHKvmZrxfLAP7ffiHGmkgTH2dGaMk" 
                            alt="Author"
                            />
                            <div className={style.author}>
                                <div className={style.name}>Avatar #3</div>
                                <a href="" className="text-[#1868b7]">Nathan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;