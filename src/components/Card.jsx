import React from 'react'

const Card = ({nft}) => {
  return (
    <div className='p-4  rounded-md  shadow-sm font-globalFont bg-[#1b242a] cursor-pointer' >
      <img className='rounded-md h-80 sm:h-60 w-full object-cover' src={'https://res.cloudinary.com/teepublic/image/private/s--a5ygbat3--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_auto,h_630,q_90,w_630/v1639324217/production/designs/26272804_0.jpg'} alt="NFT" />
      <div className='flex items-center justify-between   bg-[#1b242a] text-gray-100 rounded-md w-full mt-4' >
        <h2 className='text-base font-semibold'> I love NFT</h2>
        <p className='text-base font-semibold text-[#f9543e]'>20 ETH</p>
      </div>
  </div>
  )
}

export default Card