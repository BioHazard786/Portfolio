import React from 'react'
import {BsTelegram} from "react-icons/bs"
import {BsReddit} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://t.me/lulu786" target="_blank"> <BsTelegram /> </a>
        <a href="https://www.reddit.com/u/LuLu786" target="_blank"> <BsReddit /> </a>
        <a href="https://twitter.com/CuntSlayer786" target="_blank"> <AiFillTwitterCircle /> </a>
    </div>
  )
}

export default HeaderSocials