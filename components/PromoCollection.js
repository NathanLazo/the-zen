import React from "react";
import Link from "next/link";

const PromoCollection = () => {
    return(
        <>
         <div className="relative bg-white overflow-hidden h-screen">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg sm:pt-0 md:pt-8">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Our Zen collection is finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new collection is going to amaze all users on the Blockchain. 
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full sm:hidden md:block"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-1.png')] bg-cover bg-center"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-6.png')] bg-cover bg-center"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-7.png')] bg-cover bg-center"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-4.png')] bg-cover bg-center"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-8.png')] bg-cover bg-center"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-5.png')] bg-cover bg-center"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <div
                          alt=""
                          className="w-full h-full object-center object-cover bg-[url('../assets/the-zen-gallery/the-zen-3.png')] bg-cover bg-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/collections/0xE9cEC25c3ba4f9Cc4930C2432BB9fC7C23B323Db">
                <a
                    className="inline-block text-center bg-[#6d3ff8] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-[#4d2dad]"
                >
                    Shop Collection
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default PromoCollection;