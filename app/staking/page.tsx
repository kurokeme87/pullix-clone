/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  ChevronDown,
  Lock,
  Flame,
  Users,
  Home,
  BarChart2,
  Monitor,
  Gift,
  Coins,
  Building,
} from "lucide-react";
import logo from "../../img/the-logo.svg";
import ethereumImg from "../../img/eth.png";
import Circle from "../../img/blueCircle.png";
// import Image from "next/image";
import UK from "../../img/uk-flag.jpeg";
import Usdt from "../../img/usdt.png";
import Pullix from "../../img/pullix-icon.png";
import Image from "next/image";
import { ConnectWalletModal } from "../components/Modal";
import ConnectedWallet from "../components/ConnectedWallet";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";

import { GoDash } from "react-icons/go";

import { useAccount, useDisconnect, useEnsName } from "wagmi";

export default function StakingPlatform() {
  const [lockPeriod, setLockPeriod] = useState("30 Days");
  const [apyPeriod, setApyPeriod] = useState("30 Days");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ethBalance, setEthBalance] = useState(0);
  // const [showDetails, setShowDetails] = useState();

  const [isConnectedModalOpen, setIsConnectedModalOpen] = useState(false);

  const openModal = () => {
    setIsConnectedModalOpen(true);
  };
  const closeModal = () => setIsConnectedModalOpen(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { address, status } = useAccount();
  // const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName })
  const { disconnect } = useDisconnect();

  const changeModalState = (_reason: any) => {
    if (_reason === "modal_close") {
      updateModalState(false);
      return;
    }
    if (status === "connected") {
      disconnect();
      return;
    }

    updateModalState(true);
  };

  const [isModalOpen, updateModalState] = useState(true);

  const ConnectWalletButtonClickHandler = () => {
    console.log("[Connect-Wallet]: ");
    console.log("[state]: ", isModalOpen);
    changeModalState((oldSate: any) => !oldSate);
  };

  function formatAddress(address: any) {
    return address.slice(0, 7) + "..." + address.slice(address.length - 5);
  }

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  useEffect(() => {
    getTokens();
  }, [address]);

  const getTokens = async () => {
    try {
      const apiKey = "freekey";

      const response = await axios.get(
        `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${apiKey}`
      );

      console.log("addresss", address);

      const tokenData = response.data.tokens || [];
      const ethData = response.data.ETH || {};

      console.log("tokenData:", tokenData);

      setEthBalance(ethData.balance);
    } catch (err) {
      console.error("Error fetching tokens:", err);
    }
  };

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#0d0e17] pt-12 text-white font-sans"
      style={{
        backgroundImage: "url('/img/pullixBg.png')",
        backgroundRepeat: "no-repeat",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,

        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div
        className={`transition-all overflow-hidden duration-300 ease-in-out  ${
          isSidebarOpen
            ? "md:ml-[300px] md:px-[30px] px-[20px]"
            : "ml-0 md:px-[140px] px-[20px]"
        }`}
      >
        <header className="flex justify-between w-full items-center p-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-400 focus:outline-none"
          >
            <Menu />
          </button>
          <div className="flex items-center md:space-x-4 space-x-2">
            <div>
              {status === "connecting" && isModalOpen === true ? (
                <button
                  className="  font-[500] bg-[#0077b6]  bg-gradient-to-r from-[#0077b6] to-[#3fc5ea]  text-white px-4 py-2 rounded text-base"
                  onClick={ConnectWalletButtonClickHandler}
                >
                  {" "}
                  Connecting . . .{" "}
                </button>
              ) : status === "connected" ? (
                <button
                  className="px-1 py-[2px] flex hover:bg-[#313138] items-center md:gap-3 gap-1 bg-[#18181b] rounded-full"
                  onClick={openModal}
                >
                  <div className="flex items-center md:gap-2 gap-1">
                    <Image src={ethereumImg} alt="eth" width={32} height={32} />
                    <p className="text-white md:text-md text-[12px]">
                      {ethBalance.toFixed(4) || 0.0} ETH
                    </p>
                  </div>
                  <div className="p-1 bg-[#252528] flex items-center md:gap-2 gap-1 rounded-full">
                    <Image src={Circle} alt="eth" width={20} height={25} />
                    <p className="text-white md:text-md text-[12px]">
                      {ensName
                        ? `${ensName} (${formatAddress(address)})`
                        : formatAddress(address)}
                    </p>
                  </div>{" "}
                </button>
              ) : (
                <button
                  className="  font-[500] bg-[#0077b6]  bg-gradient-to-r from-[#0077b6] to-[#3fc5ea]  text-white px-4 py-2 rounded text-base"
                  onClick={ConnectWalletButtonClickHandler}
                >
                  {" "}
                  Connect Wallet{" "}
                </button>
              )}
            </div>
            <GoDash className="rotate-90 text-white text-2xl" />

            <div className="flex items-center">
              <Image
                src={UK}
                alt="Flag"
                className="mr-2"
                width={45}
                height={18}
              />
              <ChevronDown className="text-gray-400" />
            </div>
          </div>
        </header>

        <main className="container mx-auto w-full  py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Value Locked"
              value="$2,334,021.49"
              icon={<Lock size={11} />}
            />
            <StatsCard
              title="APY Rate"
              value="10%"
              icon={<Flame size={11} />}
              period={apyPeriod}
              setPeriod={setApyPeriod}
            />
            <StatsCard
              title="Stakers"
              value="1,011"
              icon={<Users size={11} />}
            />
          </div>

          <div className="bg-[#161a28] rounded-lg p-6 mb-8">
            <div className="flex items-center md:justify-start justify-between md:gap-2 mb-4">
              <div className="flex items-center gap-3">
                <Lock size={11} className=" text-[10px] text-gray-400" />

                <span className="text-[11px]  text-gray-400">Lock Period</span>
              </div>
              <GoDash className="rotate-90 md:block hidden text-white text-2xl" />
              <select
                value={lockPeriod}
                onChange={(e) => setLockPeriod(e.target.value)}
                className="bg-transparent border border-[#fff] text-[11px] text-[#605f5f] rounded py-[9px] px-[10px] "
              >
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
              </select>
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="text-5xl font-bold text-center mb-4">
                <p className="text-gray-400 text-left  font-semibold text-[11px] mb-5">
                  {formattedDate}
                </p>
                <span className="text-[#ffa500] md:text-4xl text-2xl bg-[#1e2237] font-bold p-2">
                  00
                </span>
                <span className="text-[#ffa500] md:text-4xl text-2xl font-bold">
                  {" "}
                  :{" "}
                </span>
                <span className="text-[#ffa500] md:text-4xl text-2xl bg-[#1e2237] font-bold p-2">
                  00
                </span>
                <span className="text-[#ffa500] md:text-4xl text-2xl font-bold">
                  {" "}
                  :{" "}
                </span>
                <span className="text-[#ffa500] md:text-4xl text-2xl bg-[#1e2237] font-bold p-2">
                  {" "}
                  00
                </span>
                <span className="text-[#ffa500] md:text-4xl text-2xl font-bold">
                  {" "}
                  :{" "}
                </span>
                <span className="text-[#ffa500] md:text-4xl text-2xl bg-[#1e2237] font-bold p-2">
                  00{" "}
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center text-sm border-t pt-4  border-white text-gray-400">
              <div className="flex items-center gap-10">
                <p className=" text-[11px]">
                  Token Staked:{" "}
                  <span className="text-white text-[12px]">0 PLX</span>{" "}
                </p>
                <p className=" text-[11px]">
                  Rewards Earned:{" "}
                  <span className="text-white text-[12px]">0.00000 PLX</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end md:mt-0 mt-4 ">
              <Image src={logo} alt="Pullix Logo" width={50} height={15} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StakeForm />
            <TokenRates />
          </div>

          <ClaimTokens />
        </main>

        <footer className="text-right py-4">
          <div className="flex justify-end mb-8 pt-14">
            <Image src={logo} alt="Pullix Logo" width={160} height={50} />
          </div>
        </footer>
      </div>

      <ConnectWalletModal
        isModalOpen={isModalOpen}
        changeModalState={changeModalState}
      />
      <ConnectedWallet
        isOpen={isConnectedModalOpen}
        onClose={closeModal}
        address={address}
        ethBalance={ethBalance}
        ensName={ensName}
        disconnect={disconnect}
      />
    </div>
  );
}

function Sidebar({ isOpen, setIsSidebarOpen }: any) {
  return (
    <div
      className={`fixed top-0 left-0 h-full  w-[300px] bg-[#000] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex md:justify-center justify-between items-center mb-8 md:pt-4 pt-8">
          <Image src={logo} alt="Pullix Logo" width={160} height={50} />
          <div
            className="md:hidden block"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaXmark className="text-white text-2xl cursor-pointer" />
          </div>
        </div>
        <nav className="space-y-4 pt-5">
          <SidebarItem icon={<Home />} text="Home" active />
          <SidebarItem icon={<BarChart2 />} text="Markets" />
          <SidebarItem icon={<Monitor />} text="Platform" />
          <SidebarItem icon={<Gift />} text="Promotions" />
          <SidebarItem icon={<Coins />} text="PLX Token" />
          <SidebarItem icon={<Building />} text="Company" />
        </nav>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active = false }: any) {
  return (
    <div
      className={`flex items-center space-x-3 p-4 rounded ${
        active
          ? "bg-[#025e9f] bg-gradient-to-r from-[#11131c] to-[#3b4563] text-[#fff]"
          : "text-gray-400 hover:bg-[#2c2d3a] hover:text-white"
      }`}
    >
      <div className={`${active ? "text-[#ffa500]" : "text-white"}`}>
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function StatsCard({ title, value, icon, period, setPeriod }: any) {
  return (
    <div className="bg-[#161a28] rounded-lg p-6">
      <div className="flex border-b border-white justify-between items-center pb-4">
        <h2 className="text-[#ffa500] text-[11px]">{title}</h2>
        <div className="text-[#ffa500] text-[11px]">{icon}</div>
      </div>

      {setPeriod ? (
        <div className="p-3 bg-[#2c2d3a] mt-4 flex items-center justify-between">
          <div className="text-[15px] font-light ">{value}</div>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="border text-sm bg-[#161a28] w-[45%] text-gray-400 border-white  rounded px-1 py-1 "
          >
            <option>30 Days</option>
            <option>60 Days</option>
            <option>90 Days</option>
          </select>
        </div>
      ) : (
        <div className="text-[15px] font-light  p-3 bg-[#2c2d3a] mt-4">
          {value}
        </div>
      )}
    </div>
  );
}

function StakeForm() {
  return (
    <div className="bg-[#161a28] flex gap-6 rounded-lg p-6">
      <div className="w-[65%]">
        <h2 className="text-[#ffa500] text-[11px] border-b border-white pb-4">
          Amount to Stake
        </h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Amount"
            className="w-full bg-transparent text-[11px] border border-white text-white rounded px-6 py-4 mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-r from-[#c96d00] via-[#d7913f] to-[#ef9933] hover:from-[#ef9933] hover:to-[#c96d00] transition-colors duration-[350ms] ease-out hover:bg-gradient-to-r hover:via-[#3fc5ea]/60cursor-pointer w-full text-white rounded py-2">
              Stake
            </button>
            <button className="bg-[#025e9f] bg-gradient-to-r from-[#025e9f] to-[#3fc5ea] hover:from-[#3fc5ea] hover:to-[#025e9f] transition-colors duration-[350ms] ease-out w-full text-white rounded py-2">
              Unstake
            </button>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <h2 className="text-[#ffa500] border-b border-white pb-4 text-[11px]">
          Timeframe
        </h2>
        <select className="w-full bg-transparent text-[11px] mt-4 border border-[#ffa500] text-white rounded px-[26px] py-[17px] mb-4">
          <option>Select Lock Period</option>
          <option>30 days</option>
          <option>90 days</option>
          <option>180 days</option>
        </select>
        <button className="bg-gradient-to-r from-[#c96d00] via-[#d7913f] to-[#ef9933] hover:from-[#ef9933] hover:to-[#c96d00] transition-colors duration-[350ms] ease-out hover:bg-gradient-to-r hover:via-[#3fc5ea]/60cursor-pointer grid grid-cols-1 w-full text-white rounded py-2">
          Get Rewards
        </button>
      </div>
    </div>
  );
}

function TokenRates() {
  return (
    <div className="bg-[#161a28] rounded-lg p-6">
      <h2 className="text-[#ffa500] border-b text-[11px] border-white pb-4">
        Token Rate
      </h2>
      <div className="space-y-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full gap-8 bg-[#2c2d3a] ">
            <div className="bg-black flex items-center justify-center p-3">
              <Image
                src={Usdt}
                alt="USDT"
                className=""
                width={23}
                height={23}
              />
            </div>
            <div className="bg-[#2c2d3a]">
              <div className="flex items-center gap-1">
                <div className="text-[11px]">USDT | </div>
                <div className="text-[11px] text-gray-400"> Tether USD</div>
              </div>
              <div className="text-[#ffa500] text-sm font-semibold">
                $ 1.00 USD
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full  gap-8 bg-[#2c2d3a]">
            <div className="bg-black flex items-center justify-center p-3">
              <Image
                src={Pullix}
                alt="PLX"
                className=""
                width={23}
                height={23}
              />
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <div className="text-[11px]">PLX | </div>
                <div className="text-[11px] text-gray-400"> Pullix</div>
              </div>
              <div className="text-[#ffa500] text-sm font-semibold">
                $ 0.047 USD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClaimTokens() {
  return (
    <div className="bg-[#161a28] rounded-lg p-6">
      <h2 className="text-[#ffa500] text-[11px] pb-4 border-b border-white">
        Claim Your Presale Tokens
      </h2>
      <div className="flex justify-between my-4">
        <span className="text-[#ffa500] md:text-[14px] text-sm">
          Total PLX Purchase : 0 PLX
        </span>
        <span className="text-[#ffa500] md:text-[14px] text-sm">
          Remaining PLX Balance : 0 PLX
        </span>
      </div>
      <p className="text-[10px] text-white mb-1">
        <span className="font-semibold">Please Note:</span> There are two ways
        you can claim your presale tokens:
      </p>
      <p className="text-[10px] text-white mb-1">
        <span className="font-semibold">Stake:</span> All of your token balance
        will be staked for 180 days
      </p>
      <p className="text-[10px] text-white mb-1">
        <span className="font-semibold">Claim:</span> You will receive your
        balances in 4 installments.
      </p>

      <p className="text-[10px] text-white mb-2">
        <span className="font-semibold">Claiming Schedule:</span> User can start
        claiming their presale token as per following schedule:
      </p>
      <ul className="list-disc ml-5 list-inside text-[10px] text-white mb-4">
        <li>First Claim of 25% starts from March 28, 2024</li>
        <li>Second Claim of 25% starts from April 28, 2024</li>
        <li>Third Claim of 25% starts from May 28, 2024</li>
        <li>Fourth Claim of 25% starts from June 28, 2024</li>
      </ul>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-gradient-to-r from-[#c96d00] via-[#d7913f] to-[#ef9933] hover:from-[#ef9933] hover:to-[#c96d00] transition-colors duration-[350ms] ease-out hover:bg-gradient-to-r hover:via-[#3fc5ea]/60cursor-pointer text-white rounded py-2">
          Stake
        </button>
        <button className="bg-[#025e9f] bg-gradient-to-r from-[#025e9f] to-[#3fc5ea] hover:from-[#3fc5ea] hover:to-[#025e9f] transition-colors duration-[350ms] ease-out text-white rounded py-2">
          Claim
        </button>
      </div>
    </div>
  );
}
