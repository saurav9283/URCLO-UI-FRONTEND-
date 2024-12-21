import React, { useState } from "react";
import PolicyModel from "./PolicyModel";
import { MapPin } from "lucide-react";
import AddressModel from "./AddressModel";

const AddCardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const toggleAddressModal = () => {
    setIsAddressOpen(!isAddressOpen);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen p-3 bg-gray-50">
      <div className="flex flex-col w-full md:w-2/3 max-h-[85vh] bg-white rounded-lg shadow-md p-10 space-y-8">
        <div className="border p-2">
          <div className="border-b pb-4">
            <h3 className="font-bold flex items-center gap-5 text-lg"> <span><MapPin /></span>Send booking details to</h3>
            <p className="text-gray-600 m-2">+91 8434169932</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg">Address</h3>
            <button onClick={toggleAddressModal} className="mt-2 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Select an address
            </button>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg">Slot</h3>
            <p className="text-gray-400">Select a slot</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Payment Method</h3>
            <p className="text-gray-400">Select a payment method</p>
          </div>
        </div>
        <div className="w-full mt-6">
          <h3 className="font-bold text-lg">Cancellation policy</h3>
          <p className="text-gray-600  text-sm">
            Free cancellations if done more than 3 hrs before the service or if a
            professional isn’t assigned. A fee will be charged otherwise.
          </p>
          <p onClick={toggleModal} className=" cursor-pointer  underline mt-2 font-semibold">Read full policy</p>
        </div>
      </div>
      {isOpen && <PolicyModel isOpen={isOpen} toggleModal={toggleModal} />}
      {isAddressOpen && <AddressModel isAddressOpen={isAddressOpen} toggleAddressModal={toggleAddressModal} />}

      <div className="flex flex-col  w-full md:w-1/3  bg-white rounded-lg shadow-md mt-4 md:mt-0 md:ml-6 p-6 space-y-10">
        <div className="max-h-[60vh] overflow-y-scroll">
          <div className="border-b pb-4">
            <h3 className="font-bold">Island chimney check-up</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">No light</p>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-lg">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 border rounded-lg">+</button>
              </div>
              <p className="font-bold">₹299</p>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold">Island chimney check-up</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">No light</p>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-lg">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 border rounded-lg">+</button>
              </div>
              <p className="font-bold">₹299</p>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold">Island chimney check-up</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">No light</p>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-lg">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 border rounded-lg">+</button>
              </div>
              <p className="font-bold">₹299</p>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold">Island chimney check-up</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">No light</p>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-lg">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 border rounded-lg">+</button>
              </div>
              <p className="font-bold">₹299</p>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold">Island chimney check-up</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">No light</p>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-lg">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 border rounded-lg">+</button>
              </div>
              <p className="font-bold">₹299</p>
            </div>
          </div>

          <div className="border-b pb-4">
            <p className="flex items-center space-x-2">
              <span className="text-green-600 font-bold">✔ ucCover</span>
              <span className="text-gray-500">protection on this booking</span>
            </p>
            <div className="flex items-center mt-2 space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Avoid calling before reaching the location</span>
            </div>
          </div>

          <div className="border-b pb-4">
            <p className="flex justify-between items-center">
              <span className="font-bold text-gray-800">Coupons and offers</span>
              <span className="text-purple-600 cursor-pointer">2 offers ➔</span>
            </p>
          </div>
        </div>


        <div>
          <h3 className="font-bold text-lg">Payment Summary</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Amount to pay</p>
            <p className="font-bold">₹358</p>
          </div>
          <p className="text-purple-600 cursor-pointer mt-2">View breakdown</p>
        </div>

      </div>


    </div>
  );
};

export default AddCardComponent;
