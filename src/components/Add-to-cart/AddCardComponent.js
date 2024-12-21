import React, { useState } from "react";
import PolicyModel from "./PolicyModel";
import { Clock, IndianRupee, MapPin } from "lucide-react";
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

  const [currentAddress, setCurrentAddress] = useState('');
  const [add, setAdd] = useState('');

  const currentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log("object", data);
          setAdd(data.address);
          const formattedAddress = `${data.address?.house_number || ''}, ${data.address?.residential || data?.address?.city || ''}, ${data.address?.state_district || ''}, ${data.address?.state || ''}`;
          setCurrentAddress(formattedAddress.trim().replace(/^,|,$/g, ''));
        })
        .catch((error) => console.error("Error fetching location:", error));
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen p-3 bg-gray-50">
      <div className="flex flex-col w-full md:w-2/3 max-h-[95vh] bg-white rounded-lg shadow-md p-10 space-y-8">
        <div className="border p-2">
          <div className="border-b p-3">
            <h3 className="font-bold flex items-center gap-5 text-lg font-mono"> <span><MapPin /></span>Send booking details to</h3>
            <p className="text-gray-600 m-2 font-mono md:ml-10">+91 8434169932</p>
          </div>
          <div className="border-b p-3">
            <h3 className="font-bold text-lg font-mono inline-flex items-center gap-5">
              <MapPin className="mr-1" /> Address - <span className="font-normal ml-1">{currentAddress}</span>
            </h3>
            <button onClick={toggleAddressModal} className="block mt-2 md:ml-10 py-2 px-4 bg-purple-600 font-mono text-white rounded-lg hover:bg-purple-700">
              Select an address
            </button>
          </div>
          <div className="border-b p-3">
            <h3 className="font-semibold text-lg font-mono inline-flex items-center">
              <Clock className="mr-1 " /> <p className="md:ml-5">Slot</p>
            </h3>           
            <p className="text-gray-400 font-mono md:ml-10">Select a slot</p>
          </div>
          <div className="p-3">
            <h3 className="font-bold text-lg inline-flex font-mono"><IndianRupee
             /><p className="md:ml-5">Payment Method</p></h3>
            <p className="text-gray-400 font-mono md:ml-10">Select a payment method</p>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-xl font-mono md:mt-[-10px]">Cancellation policy</h3>
          <p className="text-gray-600  text-sm font-mono">
            Free cancellations if done more than 3 hrs before the service or if a
            professional isn’t assigned. A fee will be charged otherwise.
          </p>
          <p onClick={toggleModal} className=" cursor-pointer  underline mt-2 font-semibold font-mono">Read full policy</p>
        </div>
      </div>
      {isOpen && <PolicyModel isOpen={isOpen} toggleModal={toggleModal} />}
      {isAddressOpen && <AddressModel currentLocation={currentLocation} isAddressOpen={isAddressOpen} toggleAddressModal={toggleAddressModal} />}

      <div className="flex flex-col font-mono  w-full md:w-1/3  bg-white rounded-lg shadow-md mt-4 md:mt-0 md:ml-6 p-6 space-y-10">
        <div className="max-h-[60vh] space-y-5 overflow-y-scroll">
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
