import React from 'react'
import { useGlobalState } from '../store'
import Card from './Card'

const ArtWorks = ({artworks}) => {
  const [nfts] = useGlobalState('nfts')
  return (
    <div className='max-w-4xl mx-auto  text-gray-100 items-start  pt-10'>
      <h1 className='flex gap-2 items-center justify-center'>
        <h1 className='text-center py-8 font-semibold'> My NFT's</h1>
         <div
                className="shadow-xl flex flex-row
                justify-center items-center w-10 h-10 rounded-full
              bg-white cursor-pointer p-4 ml-4 text-black 
              transition-all
                duration-75 delay-100"
                >
                  <span className="text-sm font-bold">{nfts.length}/99</span>
                </div>
      </h1>
       <div className='grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-4 lg:gap-3 py-2.5 mx-4'>
        {
          artworks?.map((nft, i) => (
            <Card key={i} nft = {nft}/>
          )) 
        }
       </div>
    </div>
  )
}

export default ArtWorks