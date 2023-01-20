import React from 'react'

const Card = ({nft}) => {
  return (
      <a
      href={nft.url}
      target="_blank">
      <div className='p-4  rounded-md  shadow-sm font-globalFont bg-[#1b242a] cursor-pointer' >
        <img className='rounded-md h-80 sm:h-60 w-full object-cover' src={nft.imageURL} alt="NFT" />
        <div className='flex items-center justify-between   bg-[#1b242a] text-gray-100 rounded-md w-full mt-4' >
          <h2 className='text-base font-semibold'>Galien NFT #{nft.id}</h2>
          <p className='text-base font-semibold text-[#f9543e]'>{nft.cost} ETH</p>
        </div>
      </div>
    </a>
  )
}

export default Card