import React, { useEffect, useState } from 'react';
import { FiX, FiSearch } from "react-icons/fi";
import { Atom, LocateFixed, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { h2 } from 'framer-motion/client';

// Custom icon for the marker
const customIcon = new L.Icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20220521/ourmid/pngtree-red-location-icon-sign-png-image_4644037.png',
    iconSize: [28, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62]
});

function AddressModel({ toggleAddressModal, isAddressOpen ,currentLocation}) {
    const [showMap, setShowMap] = useState(false);
    const [location, setLocation] = useState(); // Default location


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude]);
        });
    }, []);


    const handleUseCurrentLocation = () => {
        
        if (navigator.geolocation) {
            currentLocation();
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation([position.coords.latitude, position.coords.longitude]);
                setShowMap(true);
            });
        }
        alert("Location set to current location");
    };

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

                    <div
                        className="flex items-center mt-4 cursor-pointer text-purple-600 hover:text-purple-800 gap-3"
                        onClick={handleUseCurrentLocation}
                    >
                        <LocateFixed size={16} />
                        <span>Use current location</span>
                    </div>
                </div>

                {showMap ? (
                    <div className="h-64">
                        <MapContainer center={location} zoom={13} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={location} icon={customIcon}>
                                <Popup>
                                    You are here
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                ) : (
                    <div className="border-t px-6 py-4 text-center">
                        <p className="text-sm text-gray-500">
                            powered by <span className="text-blue-600">Google</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddressModel;