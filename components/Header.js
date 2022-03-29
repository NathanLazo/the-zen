import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import theZenLogo from '../assets/TheZen3.png';
import DropdownMenu from './DropdownMenu';
const apk = '../static/downloads/TheZenMobile.apk';

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem]  flex justify-center`,
    logoContainer: `sm:justify-evenly sm:items-center sm:flex flex items-center cursor-pointer `,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl sm:hidden md:block`,
    searchBar: `sm:hidden md:flex flex-1 mx-[0.8rem] mt-[.5rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] h-[2.4rem]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: `sm:justify-evenly sm:items-center sm:flex sm:text-xs md:text-xl md:items-center md:justify-end md:flex `,
    headerItem1: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerItem2: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerItem3: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerItem4: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `sm:hidden md:block text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
    headerIconD: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  }

const Header = () => {
    return(
        <div className={style.wrapper}>
            <Link href="/" >
                <div className={style.logoContainer}>
                    <Image src={theZenLogo} height={60} width={60} />
                    <div className={style.logoText}>The Zen</div>
                </div>
            </Link>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input className={style.searchInput} type="text" placeholder="Search items, collections and accounts" />
            </div>
            <div className={style.headerItems}>
                <Link href="/collections/0xE9cEC25c3ba4f9Cc4930C2432BB9fC7C23B323Db">
                    <div className={style.headerItem1}>Collection</div>
                </Link>
                {/* <Link href="/">
                    <div className={style.headerItem2}>Stats</div>
                </Link> */}
                    <a className={style.headerItem3} download href={apk} >Metaverse</a>
                {/* <Link href="/">
                    <div className={style.headerItem4}>Create</div>
                </Link> */}
                <div className={style.headerIconD}>
                    <DropdownMenu/>
                </div>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet />
                </div>
            </div>
        </div>
)}

export default Header;