import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div id='about'>
        <div className='mt-5 mb-5 container px-6 py-6 mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                <div className="col-span-1 sm:col-span-1">
                    <div className="flex items-center">
                        <div className="h-px bg-primary mr-3"></div>
                        <h2 className="text-2xl font-semibold border-l-4 w-2 pl-2 capitalize lg:text-4xl border-primary">About BlueHut Solutions</h2>
                    </div>
                    <div className="flex items-center">
                        
                        <p className="mt-4">We are a dedicated engineering firm providing innovative solutions to complex challenges. With a team of skilled professionals, we deliver excellence in every project from conceptual design to implementation.</p>
                    </div>
                </div>
                <div className="col-span-1 relative sm:col-span-1">
                    <div className="w-full h-full absolute bg-gray-300 z-0"></div>
                    <img src="img2.jpg" alt="Engineering Team" className="w-full h-auto rounded-lg relative z-10" />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg transition duration-300 hover:opacity-0 focus:opacity-0 z-20"></div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutUs;
