import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {

    const date = new Date().getFullYear();
    return (
      <div className="text-center">
        <div className=' max-w-4xl my-4 mx-auto flex justify-center flex-col sm:flex-row sm:justify-between  text-gray-200 '>
          <h2> &copy; {date} Minted minting Dapp </h2>
          <h4 className='flex justify-center items-center'>Designed By Galien
          <a href="https://twitter.com/GalienMuhindo" target='_blank'
          className='text-2xl ml-1 text-gradient'>
              <AiOutlineTwitter />
            </a>
          </h4>
          
        </div>
      </div>
  )
}

export default Footer