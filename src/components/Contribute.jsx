import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { performContribute } from '../Blockchain.services';
import { setGlobalState, useGlobalState } from '../store';


const Contribute = () => {  
  const [contributeModal] = useGlobalState('contributeModal')
  const [amount, setAmount] = useState('')
  // ======================================
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("hello");
    if (!!!amount || amount == '') return
    const tx = await performContribute(amount)
    toast.success('Contribution received')
    closeModal()
  }
  // ==========================
  const closeModal = () => {
    setGlobalState('contributeModal', 'scale-0')
    resetForm()
  }
  const resetForm = () => {
    setAmount(2)
  }
  return (
    <div 
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
      justify-center bg-black bg-opacity-50 transform z-50
      transition-transform duration-300 ${contributeModal}`}
      >
      <form className='w-11/12 md:w-4/12 h-7/12 p-4  bg-gray-700 shadow-lg rounded-xl text-gray-50 '>
           <div className='flex items-center justify-between'>
            <h2 className='text-gray-50 font-semibold text-lg'>Contribute</h2>
            <button type='button' onClick={()=>closeModal()}>
              <AiOutlineCloseCircle className='font-bold text-2xl text-gray-50'/>
            </button> 
          </div>
          <input 
            type="number" 
            min={0.1}
            className='bg-transparent outline-none border py-2.5 px-3 rounded-md my-4 w-full' 
            placeholder='e.g 5 Eth'
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
            />
          <button type="button"
          className='bg-gray-600 hover:bg-gray-500  py-3.5 px-3 rounded-md shadow-md w-full' 
          onClick={handleSubmit}
          
          >contribute</button>
        </form>
    </div>
  )
}

export default Contribute