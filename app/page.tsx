"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlus,
  FaMinus,
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import logo from "../img/the-logo.svg";
import trading from "../img/trading-platform-preview.png";
import { Poppins } from "@next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["600", "500"], // Specify the weights you want to use
  subsets: ["latin"], // Specify character subsets if necessary
});

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I open an account with Pullix?",
      answer:
        "You can open an account in minutes by simply clicking the “open account button” and providing a email address and username.",
    },
    {
      question: "What is the minimum deposit required?",
      answer: "The minimum deposit amount is $50 or currency equivalent.",
    },
    {
      question: "Are there any withdrawal fees?",
      answer: "There are no fees to withdraw your funds.",
    },
    {
      question: "What is a CFD?",
      answer:
        "CFD, short for Contract For Difference, is an arrangement allowing traders to speculate on the price movements of a financial instrument without owning it. The value of the CFD mirrors that of the underlying instrument, meaning when you buy/sell a CFD, your exposure is akin to owning/selling the actual instrument.",
    },
    {
      question: "What assets do you offer for trading?",
      answer:
        "We offer a diverse range of CFDs covering major, minor, and exotic currency pairs, commodities, cryptocurrencies and global indices. Manage all instruments conveniently from a single account, expanding your Pullix portfolio diversification. For more information, visit the following links Forex Indices Cryptocurrencies Commodities",
    },
    {
      question: "Which deposit methods do you accept?",
      answer:
        "Users can top-up their trading account with the following cryptocurrencies: Bitcoin (BTC) Ethereum (ETH) Binance (BNB) Tether (USDT) Ripple (XRP) Pullix (PLX) Solana (SOL) Dogecoin (DOGE) Litecoin (LTC) Shiba Inu (SHIB)",
    },
    {
      question: "Does Pullix offer a deposit bonus?",
      answer:
        "Yes, we offer a 25% deposit bonus on all deposits up to $5,000. This 25% deposit bonus acts as an additional margin, so that you can trade larger position sizes. To find out more about this bonus offer, please click here",
    },
    {
      question:
        "How long does it take for my deposits and withdrawals to be processed?",
      answer:
        "We process your deposits instantly and the process times depend upon the blockchain you are using to make your deposit. Withdrawals are processed immediately after completing internal checks",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0D0E12] text-white font-sans">
      <div className="container mx-auto px-12 py-8">
        <div className="flex justify-center mb-8 pt-14">
          <Image src={logo} alt="Pullix Logo" width={160} height={50} />
        </div>
        <div className="absolute md:block hidden left-0 z-[0]">
          <Image
            src={"https://pullix.io/assets/background.svg"}
            alt="Pullix Logo"
            width={1600}
            height={1000}
          />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl font-[1000] mb-4 pt-4">
            Live Trading Launching
          </h1>
          <h2 className="text-5xl font-[1000] mb-8 pt-9">Coming Soon</h2>
        </div>

        {/* Trading Interface Image */}
        <div className="relative mb-8 z-[0]">
          <Image
            src={trading}
            alt="Trading Interface"
            width={1400}
            height={600}
            className="rounded-lg mx-auto  mt-8"
          />
          {/* <div className="absolute -left-8 top-1/4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Coin"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="absolute -right-8 bottom-1/4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Coin"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-16 mt-5  cursor-pointer  md:mx-[305px]">
          <button className=" text-center md:w-[35%]  bg-[#025e9f] bg-gradient-to-r from-[#025e9f] to-[#3fc5ea] hover:from-[#3fc5ea] hover:to-[#025e9f] transition-colors duration-[350ms] ease-out cursor-pointer flex-grow-[1] text-white px-16 py-5 z-[10] rounded-md text-lg font-semibold">
            <Link href="/staking" className="w-full h-full " target="_blank">
              Stake
            </Link>
          </button>

          <button className="text-center  md:w-[35%]  bg-gradient-to-r from-[#c96d00] via-[#d7913f] to-[#ef9933] hover:from-[#ef9933] hover:to-[#c96d00] transition-colors duration-[350ms] ease-out hover:bg-gradient-to-r hover:via-[#3fc5ea]/60cursor-pointer flex-grow-[1] text-white px-16 py-5 z-[10] rounded-md text-lg font-semibold">
            <Link href="/staking" className="w-full h-full " target="_blank">
              Claim
            </Link>
          </button>
        </div>

        {/* Description */}
        <p className="text-center text-xl text-gray-400 mb-16 max-w-6xl mx-auto">
          Pullix is an innovative forex and cryptocurrency platform equipped
          with advanced trading tools. Leveraging state-of-the-art technology
          and blockchain, we offer everything necessary for informed trading and
          investment decisions.
        </p>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="md:text-6xl text-3xl font-bold text-center mb-8">
            Frequently Asked Question
          </h2>
          <div className="space-y-4 max-w-5xl pt-8 mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="border border-gray-700 bg-gradient-to-br from-[#CE7914] via-[#CE7914]/0 to-[#E2A965] rounded-3xl w-full cursor-pointer p-[1px] transition-all"
              >
                <div
                  className={`bg-black w-full h-full py-5 pb-4 px-5 md:px-8 rounded-3xl duration-200 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-20"
                  }`}
                >
                  <div className="grid grid-cols-[1fr_auto] items-center ">
                    <p
                      className={`${poppins.className} md:text-xl text-sm font-[900] text-white t_base  font-poppins`}
                    >
                      {faq.question}
                    </p>
                    {/* Show plus if not open, minus if open */}
                    {openIndex === index ? (
                      <FaMinus className="text-[#F4A261]" />
                    ) : (
                      <FaPlus className="text-[#F4A261]" />
                    )}
                  </div>

                  {/* Conditionally render the answer */}
                  {openIndex === index && (
                    <p
                      className={`${poppins.className} font-[500] md:text-xl text-sm pt-10 text-white `}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex  mb-8 pt-14">
            <Image src={logo} alt="Pullix Logo" width={160} height={50} />
          </div>
          <div>
            <p className="mt-10 font-[700]">Socials</p>
            <div className="flex items-center gap-10 mt-6">
              <a href="https://x.com/pullixmarkets">
                <FaTwitter className="text-white text-4xl " />
              </a>
              <a href="https://t.me/pullixmarkets">
                <FaTelegram className="text-white text-4xl " />
              </a>
              <a href="https://discord.com/invite/zcbBhphBsd">
                <FaDiscord className="text-white text-4xl " />
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fpullixmarkets%2F&is_from_rle">
                <FaInstagram className="text-white text-4xl " />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-[100px]">
          <p className="py-8 text-[#ffffffbf] text-md">
            This website is owned and operated by Pullix Prime Trading LTD a
            company incorporated in Mwali as an International Business Company
            (HY01123062) and holds International Brokerage and Clearing House
            license (T2023426) issued by Mwali International Services Authority.
          </p>
        </div>
        <div className="border-t border-gray-500 ">
          <p className="py-8 text-[#ffffffbf] text-md">
            <strong className="text-lg">RISK WARNING</strong>
            <br />
            <br />
            Before engaging with this Website and the Services made available
            through it, you should read all relevant Terms & Conditions, Privacy
            Policy, and accompanying documentation, which govern the Terms of
            Use and Service of all Pullix products and services. <br />
            <br />
            Pullix products are complex financial instruments which come with a
            high risk of losing money rapidly due to leverage. These products
            are not suitable for all investors. You should consider whether you
            understand how leveraged products work and whether you can afford to
            take the inherently high risk of losing your money. If you do not
            understand the risks involved, or if you have any questions
            regarding the Pullix products, you should seek independent financial
            and/or legal advice from a qualified professional. <br />
            <br />
            CFDs are leveraged products that carry a high degree of risk, which
            can lead to potential gains or significant losses. Returns or
            profits may be subject to capital gains tax in your jurisdiction,
            for which you shall be entirely responsible.
          </p>
        </div>
        <div className="border-t border-gray-500 ">
          <p className="py-8 text-[#ffffffbf] text-md">
            <strong className="text-lg">Restricted Jurisdictions</strong>
            <br />
            <br />
            You are not allowed to access or use our services if you are
            located, incorporated or otherwise established in, or a citizen or
            resident of the United States of America or other countries or
            territories where the activity shall be specially licensed or
            regulated. If you are traveling to prohibited countries or
            territories, you acknowledge that our services may not be available
            to you.
            <br />
            <br />
            The content on this website is not intended for citizens or
            residents of the European Union, the wider European Economic Area or
            the United Kingdom <br />
          </p>
        </div>
        <div className="border-t border-gray-500 ">
          <p className="py-8 text-center text-[#ffffffbf] text-md">
            2024 Pullix.io All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
