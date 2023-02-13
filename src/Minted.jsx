import abi from './abis/src/contracts/Minted.sol/Minted.json'
import address from './abis/contractAddress.json'
import { getGlobalState, setAlert, setGlobalState, setLoadingMsg } from './store'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'

const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`

const getEtheriumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    return contract
  } else {
    return getGlobalState('contract')
  }
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) return toast.error('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0])
      await isWallectConnected()
    })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      toast.error('Please connect wallet.')
      console.log('No accounts found.')
    }
  } catch (error) {
    reportError(error)
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum)  {console.log('Please install Metamask')}
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
    window.location.reload()
  } catch (error) {
    reportError(error)
  }
}

const payToMint = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const connectedAccount = getGlobalState('connectedAccount')
    const contract = getEtheriumContract()
    const amount = ethers.utils.parseEther('0.001')
    setLoadingMsg("Minting new NFT to your account","white")
    await contract.payToMint({
      from: connectedAccount,
      value: amount._hex,
    })
    
    setAlert('Minting Successfully!','white')
    window.location.reload()
  } catch (error) {
    setAlert("Proccess failed",'red')
    console.log(error);
    reportError(error)
  }
}

const loadNfts = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')

    const contract = getEtheriumContract()
    setLoadingMsg("load Nfts","white")
    const nfts = await contract.getAllNFTs()
    setGlobalState('nfts', structuredNfts(nfts))
    setAlert("Data gotten, refresh!","white")
    
  } catch (error) {
    reportError(error)
  }
}

const reportError = (error) => {
  console.log(error.message)
  throw new Error('No ethereum object.')
}

const structuredNfts = (nfts) =>
  nfts
    .map((nft) => ({
      id: Number(nft.id),
      url: opensea_uri + nft.id,
      buyer: nft.buyer,
      imageURL: nft.imageURL,
      cost: parseInt(nft.cost._hex) / 10 ** 18,
      timestamp: new Date(nft.timestamp.toNumber()).getTime(),
    }))
    .reverse()

export { 
  isWallectConnected, 
  connectWallet, 
  payToMint, 
  loadNfts 
}