import React from 'react'
import hero from "../assets/hero.png"


const Banner = () => {
  return (
    <div className='max-w-4xl mx-auto  text-gray-100 items-start  pt-40'>
      <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 order-2">
          <div className='w-11/12 pt-4 text-center sm:text-left'>
            <h1 className='text-5xl font-bold mb-4 text-center sm:text-left'>Minted</h1>
            <p className='text-base text-gray-200 font-base'>A digital minting Dapp, letting you mint multiple NFT assets from your own digital assets.</p>
            <p className='text-base text-gray-200 font-base py-4'>Upload a image or enter a prompt to generate an asset</p>
            <button className='bg-[#fd1c1c] py-1.5 px-2.5 rounded font-semibold text-lg'>Mint Now</button>
          </div>
          <img src={hero} alt="banner" className='order-first sm:order-last'/>
      </div>
    </div>
  )
}

export default Banner