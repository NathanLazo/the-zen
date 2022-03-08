import React from "react";



const AboutComponent = () => {
    return (
        <>
        <div className="sm:ml-8 sm:justify-center md:justify-between md:mx-10 mt-[5rem]">
            <div className="flex text-white ">
                <div className="pr-8">
                     <h1 className="text-5xl font-bold">Join this decentralized economy</h1>
                     <p className="text-gray-300 text-xl text-justify mt-6">
                        In The Zen we work to deliver the best product to our
                        customers. We are a team of developers, designers,
                        and marketers who are passionate about building
                        products that are useful and easy to use.
                        You can build, buy or sell NFTs in a matter
                        of seconds. This is connected to Ethereum so you can use your wallets 
                        anywhere, anytime. This <b>Not Fungible Tokens</b> are changing the way
                        we work. They are unique, tradeable and can be used across applications.
                        Just like physical goods, you can throw them to the trash, gift them to family or friends
                        across the globe. Find and discover the best choice for you.
                        <br/>
                        <br/>
                        But, why do we do this? We want to deliver an experience
                        that is simple, fast, and secure. We want to take to every single
                        person on the planet a chance to own their information, their assets, 
                        and to have their freedom back, we don’t want any more corporations handling 
                        people's information, so blockchain gives us the tools to deliver this decentralized
                        and anonymous experience to our users.

                     </p>
                </div>
               
                <img className="sm:hidden md:block w-[60%] h-[60%]" src="https://gateway.pinata.cloud/ipfs/QmduwnuQj4k7s4x7pqhWrhwpVcLtAY8zVuBYbmykUTS9ny" />
            </div>
        </div>
        </>
        
        

    )     
}

export default AboutComponent;
