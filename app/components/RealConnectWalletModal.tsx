import { X } from "lucide-react"

const RealConnectWalletModal=({ isModalOpen, changeModalState }:any)=> {


    if (!isModalOpen) return null;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-gray-600 mr-2"></div>
            <h2 className="text-white text-lg font-semibold">Connect Wallet</h2>
          </div>
          <button className="text-gray-400 hover:text-white">
            <X onClick={() => changeModalState("modal_close")} className="w-5 h-5" />
          </button>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-lg mr-3"></div>
              <span className="text-white">WalletConnect</span>
            </div>
            <span className="text-xs text-gray-400">QR CODE</span>
          </div>
          <div className="flex items-center py-3 border-b border-gray-700">
            <div className="w-10 h-10 bg-purple-500 rounded-lg mr-3"></div>
            <span className="text-white">Browser Wallet</span>
          </div>
          <div className="flex items-center py-3 border-b border-gray-700">
            <div className="w-10 h-10 bg-orange-500 rounded-lg mr-3"></div>
            <span className="text-white">MetaMask</span>
          </div>
          <div className="flex items-center py-3 border-b border-gray-700">
            <div className="w-10 h-10 bg-indigo-500 rounded-lg mr-3"></div>
            <span className="text-white">Phantom</span>
          </div>
          <div className="flex items-center py-3 border-b border-gray-700">
            <div className="w-10 h-10 bg-blue-600 rounded-lg mr-3"></div>
            <span className="text-white">Coinbase</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-700 rounded-lg mr-3"></div>
              <span className="text-white">All Wallets</span>
            </div>
            <span className="text-xs text-gray-400">430+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealConnectWalletModal