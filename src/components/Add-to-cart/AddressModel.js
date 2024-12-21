import { Atom } from 'lucide-react';
import React from 'react'
import { FiX, FiSearch } from "react-icons/fi";


function AddressModel({ toggleAddressModal, isAddressOpen }) {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white w-[90%] p-2 md:w-1/3 rounded-lg shadow-lg relative">
                <button
                    onClick={toggleAddressModal}
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
                >
                    <FiX size={20} />
                </button>

                <div className="p-6">
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                        <FiSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search for your location/society/apartment"
                            className="w-full outline-none text-gray-700"
                        />
                    </div>

                    <div className="flex items-center mt-4 cursor-pointer text-purple-600 hover:text-purple-800 gap-3">
                        <Atom size={16} />
                        <span>Use current location</span>
                    </div>
                </div>

                <div className="border-t px-6 py-4 text-center">
                    <p className="text-sm text-gray-500">
                        powered by <span className="text-blue-600">Google</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AddressModel
