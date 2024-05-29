import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div id='about'>
        <div className='mt-5 mb-5 container px-6 py-6 mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                <div className="col-span-1 sm:col-span-1">
                    <div className="flex items-center">
                        <div className="h-px bg-primary "></div>
                        <h2 className="text-3xl font-semibold  capitalize lg:text-3xl ">About <br />BlueHut <span className="text-primary">Solutions</span></h2>
                    </div>
                    <div className="flex items-center">
                        
                        <p className="mt-4">Welcome to BlueHut Solutions, a dedicated technical firm specializing in innovative solutions to complex challenges. Our skilled professionals excel at every project stage, from conceptual design to implementation. We prioritize quality, efficiency, and client satisfaction, tackling large-scale infrastructure projects, cutting-edge technology developments, and intricate system integrations. Our commitment to excellence drives us to exceed expectations and deliver superior results. Join us in transforming ideas into reality with impactful and sustainable solutions.</p>
                    </div>
                </div>
                <div className="col-span-1 relative sm:col-span-1">
    
                    <img src="img.svg" alt="Engineering Team" className="" />
                
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutUs;
