import React from 'react'
import Card from './Card'

const ArtWorks = () => {
  return (
    <div className='max-w-4xl mx-auto  text-gray-100 items-start  pt-10'>
      <h1 className='text-center py-8 font-semibold text-2xl'>
        My NFT's
      </h1>
       <div className='grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-4 lg:gap-3 py-2.5 mx-4'>
        {
          Array(3).fill(null).map((nft, i) => (
            <Card key={i} nft = {nft}/>
          )) 
        }
       </div>
       <div className='flex justify-center py-8'>
        <button  className='py-2 bg-[#ff2a0e]  px-3 rounded font-medium'>Load more</button>
       </div>
    </div>
  )
}

export default ArtWorks