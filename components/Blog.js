import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const BlogComponent = () => {
    var url = 'https://newsapi.org/v2/everything?' +
    'q= Crypto&' +
    'from=2022-03-22&' +
    'sortBy=popularity&' +
    'apiKey=1ec117a742774545bfdc4cb24825d1b3';

    var req = new Request(url);
    var news;

    const [data, setData] = useState();

    const fetchAPInews =  async ()=>{
    await fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        news = data.articles;
        setData(news);
    })
    .catch(function(error) {
        console.log(error);
    });
    }

    useEffect(()=>{
    fetchAPInews()
    }, []);

    console.log(data);
    return (
    <>
    { !data 
    ? <div className="text-white">Loading...</div> 
    : data.map((newsItem, index) => { return (
        <div key={index}>
            <div className="bg-gray-900 h-[450px] w-screen flex justify-center items-center">
                <Link href={newsItem.url}>
                    <div className="shadow-2xl shadow-[#5330bd] bg-white h-[22rem] w-[80%] rounded-xl flex justify-center items-center ">
                        <div className="text-center m-8">
                            <div className="w-[400px]">
                                <img className="bg-cover" src={newsItem.urlToImage} alt=""/>
                            </div>
                            <h1 className="mt-4 text-lg font-semibold">{newsItem.author}</h1>
                        </div>
                        <div className="mx-24 my-12 p-2">
                            <h2 className="text-2xl font-bold">{newsItem.title}</h2>
                            <p className="text-justify text-xl">{newsItem.description}</p>
                            <span className="text-gray-400 text-sm">{newsItem.publishedAt.slice(0,10)}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        )}
    )}
    </>
    )
}

export default BlogComponent;