import React , { useState, useEffect }  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogComponent from "../components/Blog";



const blog = () => {
    return (
        <>
        <Header/>
        <BlogComponent/>
        <Footer/>
        </>
    )
}
export default blog;