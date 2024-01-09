import help from "/assets/Help.png";
import speaker from "/assets/speaker.svg";
import down from "/assets/down.svg";
import arrow from "/assets/arrow.png";
import sort from "/assets/Sort.svg";
import download from "/assets/download.png";
import triangleDown from "/assets/triangleDown.svg";

import Pagination from "../components/Pagination";
import AnalyticCard from "../components/AnalyticCard";
import TableBody from "../components/TableBody";
import TableHeader from "../components/TableHeader";
import LargeSearchBar from "../components/LargeSearchBar";
import SmallSearchBar from "../components/SmallSearchBar";
import { useState } from "react";

const Home = () => {
  const [sortDisplay, setSortDisplay] = useState(false);
  return (
    <div className="grow max-h-screen overflow-scroll">
      <div className="bg-white px-8 py-3 border-b borer-black-85 flex items-center justify-between z-50 top-0 sticky w-full">
        <div className="flex gap-4">
          <div className="text-body1 text-black-12">Payments</div>
          <div className="flex gap-1.5 items-center">
            <button>
              <img src={help} alt="help icon" />
            </button>
            <div className="text-xs text-black-30">How it works</div>
          </div>
        </div>
        <LargeSearchBar />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black-90 rounded-full flex items-center justify-center">
            <img src={speaker} alt="speaker icon" />
          </div>
          <img src={down} alt="down icon" />
        </div>
      </div>
      <div className="bg-black-95 p-8">
        <div className="pb-6 flex items-center justify-between">
          <div className="text-xl text-black-12 font-medium">Overview</div>
          <div className="text-black-30 bg-white px-3.5 py-1.5 rounded flex items-center ">
            Last Month
            <img src={arrow} alt="down black arrow icon" className="pl-1.5" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <AnalyticCard title="Last Month" number="231" />
          <AnalyticCard title="Amount received" number="₹23,92,312.19" />
        </div>
        <div className="pt-8 pb-5">
          <div className="text-black-12 text-xl font-medium">
            Transactions | This Month
          </div>
        </div>
        <div className="px-3 pt-3 pb-6 bg-white shadow-1 rounded-lg">
          <div className="flex items-center justify-between">
            <SmallSearchBar />
            <div className="flex gap-3 items-center">
              <div className="relative">
                <button
                  onClick={() => setSortDisplay(!sortDisplay)}
                  className="py-1.5 px-3 border-black-85 rounded border text-black-30 flex gap-1.5 items-center"
                >
                  Sort
                  <img src={sort} alt="sort icon" />
                </button>
                {sortDisplay && (
                  <div className="absolute px-3 py-3 rounded p-2 bg-white w-248 left-1/2 -translate-x-1/2 shadow-1 flex flex-col gap-2">
                    <div className="items-center flex gap-2">
                      <input
                        type="radio"
                        id="new_first"
                        name="sort_order"
                        value="new_first"
                        className="accent-blue"
                      />
                      <label
                        htmlFor="new_first"
                        className="text-black-12 text-sm"
                      >
                        Order date (Newest first)
                      </label>
                    </div>
                    <div className="items-center flex gap-2">
                      <input
                        type="radio"
                        id="old_first"
                        name="sort_order"
                        value="old_first"
                        className="accent-blue"
                      />
                      <label
                        htmlFor="old_first"
                        className="text-black-12 text-sm"
                      >
                        Order date (Oldest first)
                      </label>
                    </div>
                    <div className="items-center flex gap-2">
                      <input
                        type="radio"
                        id="amount_high"
                        name="sort_order"
                        value="amount_high"
                        className="accent-blue"
                      />
                      <label
                        htmlFor="amount_high"
                        className="text-black-12 text-sm"
                      >
                        Order amount (High to low)
                      </label>
                    </div>
                    <div className="items-center flex gap-2">
                      <input
                        type="radio"
                        id="amount_low"
                        name="sort_order"
                        value="amount_low"
                        className="accent-blue"
                      />
                      <label
                        htmlFor="amount_low"
                        className="text-black-12 text-sm"
                      >
                        Order amount (Low to high)
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <button className="p-2 border-black-85 rounded border text-black-30 flex gap-1.5 items-center">
                <img src={download} alt="download icon" />
              </button>
            </div>
          </div>
          <div className="pt-3">
            <div>
              <table className="w-full">
                <thead className="bg-black-95 rounded px-3">
                  <TableHeader
                    head1="Order ID"
                    head2="Order date"
                    head2Icon={triangleDown}
                    head3="Order amount"
                    head4="Transaction fees"
                    head4Icon={help}
                  />
                </thead>
                <tbody>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <TableBody
                      key={index}
                      orderId="#281209"
                      date="7 July, 2023"
                      amount="₹1,278.23"
                      fee="₹22"
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pt-6 flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
