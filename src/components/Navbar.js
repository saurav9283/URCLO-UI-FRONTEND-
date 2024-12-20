import React from "react";
import { ReactTyped } from "react-typed";
import { Bell, MapPin, Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md font-bold">
                        UC
                    </div>
                    <span className="text-lg font-medium hidden sm:inline">
                        Urban Company
                    </span>
                </div>
            </div>

            {/* Middle Section */}
            <div className="hidden md:flex items-center space-x-4">
                {/* Location */}
                <div className="flex items-center space-x-2 border px-4 py-2 rounded-md">
                    <MapPin className="text-gray-500 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Chandigarh, India"
                        className="outline-none text-sm text-gray-700 font-medium w-52 transition-opacity duration-500"
                    />
                </div>

                {/* Search */}
                <div className="flex items-center space-x-2 border px-4 py-2 rounded-md">
                    <Search className="text-gray-500 w-5 h-5" />
                    <ReactTyped
                        strings={[
                            "Search for \"products\"",
                            "Search for \"categories\"",
                            "Search for \"brands\"",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input
                            type="text"
                            className="outline-none text-sm text-gray-700 font-medium w-52 transition-opacity duration-500"
                        />
                    </ReactTyped>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-8">
                <div className="relative">
                    <Bell className="cursor-pointer w-5 h-5" />
                    <span className="absolute top-[-12px] right-[-8px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        3
                    </span>
                </div>
                <div className="relative">
                    <ShoppingCart className="cursor-pointer w-5 h-5" />
                    <span className="absolute top-[-12px] right-[-12px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full md:top-[-10px] md:right-[-10px] md:w-5 md:h-5 lg:top-[-14px] lg:right-[-8px] lg:w-5 lg:h-5">
                        1
                    </span>

                </div>
                <User className="cursor-pointer w-5 h-5" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    id="menu-btn"
                    className="text-gray-500 focus:outline-none"
                    aria-label="Open Menu"
                >
                    <span className="material-icons">menu</span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                id="mobile-menu"
                className="hidden md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4"
            >
                {/* Location */}
                <div className="flex items-center space-x-2 mb-4 border px-4 py-2 rounded-md">
                    <MapPin className="text-gray-500 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Chandigarh, India"
                        className="outline-none text-sm text-gray-700 font-medium w-full"
                    />
                </div>

                {/* Search */}
                <div className="flex items-center space-x-2 border px-4 py-2 rounded-md">
                    <Search className="text-gray-500 w-5 h-5" />
                    <ReactTyped
                        strings={[
                            "Search for \"products\"",
                            "Search for \"categories\"",
                            "Search for \"brands\"",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input
                            type="text"
                            className="outline-none text-sm text-gray-700 font-medium w-full"
                        />
                    </ReactTyped>
                </div>

                {/* Right Section */}
                <div className="flex justify-between mt-4">
                    <Bell className="text-black w-6 h-6" />
                    <ShoppingCart className="text-gray-500 w-6 h-6" />
                    <User className="text-gray-500 w-6 h-6" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
