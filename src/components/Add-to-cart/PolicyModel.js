import React from "react";

function PolicyModel({isOpen, toggleModal}) {

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className=" text-xl md:text-3xl font-semibold">Cancellation policy</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &#x2715;
              </button>
            </div>

            <div className="mb-6 ">
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="font-medium">Time</span>
                <span className="font-medium">Fee</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>More than 3 hrs before the service</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Within 3 hrs of the service</span>
                <span className="text-red-500">Up to ₹50</span>
              </div>
              <p className="text-sm text-green-600 flex items-center">
                <span className="mr-2">ℹ️</span>
                No fee if a professional is not assigned
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">This fee goes to the professional</h3>
              <p className="text-sm text-gray-600">
                Their time is reserved for the service & they cannot get another
                job for the reserved time.
              </p>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PolicyModel;
