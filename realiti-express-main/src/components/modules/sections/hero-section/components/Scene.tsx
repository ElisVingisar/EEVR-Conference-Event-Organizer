"use client"
import React, { useState, useEffect } from 'react';
import MobileScene from './MobileScene';
import { ZustandApp } from './ZustandScene';

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

    return isMobile ? <MobileScene /> : <ZustandApp />;
};

export default Scene;