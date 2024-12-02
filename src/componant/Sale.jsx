import React from 'react';
import img1 from '../assets/Ad_1.png';
import img2 from '../assets/Ad_2.png';
import img3 from '../assets/Ad_3.png';
import Container from './Container';

const Sale = () => {
    return (
        <>
            <section>
                <Container>
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <div className="lg:w-1/2 mb-4 lg:mb-0">
                            <img src={img1} alt="img1" className="w-full h-auto object-cover" />
                        </div>
                        <div className="lg:w-1/2 space-y-4">
                            <img src={img2} alt="img2" className="w-full h-auto object-cover" />
                            <img src={img3} alt="img3" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Sale;
