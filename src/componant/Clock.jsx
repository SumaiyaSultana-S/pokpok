import React from 'react';
import img10 from "../assets/img-10.png";

const Clock = () => {
    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mt-8 mb-6 lg:mt-16 lg:mb-12">
                    <img
                        src={img10}
                        alt="Clock Countdown Banner"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Clock;
