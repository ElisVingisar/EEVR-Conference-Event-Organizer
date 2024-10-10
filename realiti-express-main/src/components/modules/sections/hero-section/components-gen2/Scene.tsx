"use client"
import React, { useState, useEffect } from 'react';
import MobileScene from './MobileScene';
import { ThreeDCardDemo } from './Card3D';

const Scene: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <MobileScene /> : <ThreeDCardDemo />;
};

export default Scene;