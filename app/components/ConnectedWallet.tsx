import { useState } from "react";
import Image from "next/image";
import { XIcon } from "lucide-react";
import Circle from "../../img/blueCircle.png";
import { FaCopy, FaCompass, FaChevronRight, FaCheck } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import { IoIosLogOut, IoIosSwap } from "react-icons/io";
import ethereum from "../../img/eth.png";

// type ConnectedModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   address: any;
//   ethBalance: number;
//   ensName?: any;
// };

export default function ConnectedModal({
  isOpen,
  onClose,
  address,
  ethBalance,
  ensName,
  disconnect,
}: any) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        console.log("Text copied to clipboard");
      })
      .catch((err: any) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#191a1a] p-4 rounded-lg md:w-[28%]  w-[70%]">
        <div className="flex relative justify-between items-center mb-4">
          {/* <h2 className="text-xl font-bold text-white">Wallet Details</h2> */}
          <button
            onClick={onClose}
            className="text-white absolute right-0 top-6"
          >
            <XIcon size={24} />
          </button>
        </div>
        <div className="space-y-4 ">
          <div className="flex items-center justify-center ">
            <div className="p-2 bg-[#252528] rounded-full">
              <Image src={Circle} alt="Ethereum" width={50} height={50} />
            </div>
          </div>
          <div className="flex mt-4 justify-center items-center gap-3">
            <p className="text-white text-xl font-semibold">
              {ensName
                ? `${ensName} (${formatAddress(address)})`
                : formatAddress(address)}
            </p>
            <div
              onClick={() => copyToClipboard(address)}
              className="cursor-pointer"
            >
              {copied ? (
                <FaCheck className="text-white text-lg" />
              ) : (
                <FaCopy className="text-white text-lg" />
              )}
            </div>
          </div>
          <div className="mt-[-8px]">
            <p className="text-gray-300 text-center text-md ">
              {ethBalance.toFixed(4) || 0.0} ETH
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div
              onClick={() =>
                window.open(`https://etherscan.io/address/${address}`, "_blank")
              }
              className="border flex items-center gap-3 cursor-pointer border-gray-700 hover:border-white rounded-md py-1 px-4"
            >
              <div>
                <FaCompass className="text-white text-md" />
              </div>
              <p className="text-white text-lg ">Block Explorer</p>
              <div>
                <CgArrowTopRight className="text-white text-md" />
              </div>
            </div>
          </div>
          <div className="px-2 mt-7">
            <div className="w-full p-4 bg-[#1e1e1e] hover:bg-[#3d3d3d] flex items-center gap-3">
              <Image src={ethereum} alt="" width={30} height={30} />
              <p>Ethereum</p>
            </div>
            <div className="w-full mt-2 p-4 bg-[#1e1e1e] hover:bg-[#3d3d3d] flex items-center justify-between">
              <div className="flex items-center gap-6">
                <IoIosSwap className="text-[#949e9f] text-lg" />
                <p>Activity</p>
              </div>
              <FaChevronRight className="text-white text-" />
            </div>
            <div
              onClick={() => {
                disconnect();
                onClose();
              }}
              className="w-full mt-2 p-4 bg-[#1e1e1e] hover:bg-[#3d3d3d] flex items-center gap-1"
            >
              <div className="p-2 bg-[#303232] rounded-full">
                <IoIosLogOut className="text-[#949e9f] text-lg" />
              </div>
              <p>Disconnect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
