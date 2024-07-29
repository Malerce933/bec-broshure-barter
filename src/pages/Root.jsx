import { Outlet } from "react-router-dom"
import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import FullScreen from '/src/components/FullScreen';
import PhotoSlider from "/src/components/PhotoSlider";
import WhatBec from "/src/components/WhatBec";
import TdVsCs from "/src/components/TdVsCs/TdVsCs";
import Opportunities from "/src/components/Opportunities/Opportunities";
import Statistics from "/src/components/Statistics";
import Portrait from "/src/components/Portrait";
import Propositions from "/src/components/Propositions/Propositions";
import Partners from "/src/components/Partners";
import Aboutbest from "/src/components/AboutBest";
import Contacts from "/src/components/Contacts/Contacts";
import Footer from "/src/components/Footer";
import { SLIDES } from '/src/data';
import { useTranslation } from 'react-i18next';

export default function RootLayout() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const { i18n } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);


    const [selectedPropositions, setSelectedPropositions] = useState([{ title: "Solid Base", price: 350, isSub: false }]);
    const propositionsRef = useRef(null);
    const whatBecRef = useRef(null);
    const statisticsRef = useRef(null);
    const contactsRef = useRef(null);

    const addToBasket = (title, price, isSub) => {
        setSelectedPropositions(propositions => {
            for (const proposition of propositions) {
                if (proposition.title == title) {
                    return propositions
                }
            }
            return [...propositions, { title, price, isSub }]
        });
    };
    const handleRemoveProposition = (name) => {
        setSelectedPropositions(propositions => {
            const newPropositions = [...propositions]; // Створюємо копію масиву
            const index = newPropositions.findIndex(proposition => proposition.title === name); // Знаходимо індекс пропозиції
            if (index !== -1) {
                newPropositions.splice(index, 1); // Видаляємо пропозицію, якщо вона знайдена
            }
            return newPropositions;
        });
    };


    return (
        <div className=" relative overflow-hidden  flex flex-col  bg-black">

            <FullScreen propositionsRef={propositionsRef} whatBecRef={whatBecRef} statisticsRef={statisticsRef} contactsRef={contactsRef} />
            <WhatBec isMobile={isMobile} innerRef={whatBecRef} />
            <PhotoSlider isMobile={isMobile} images={SLIDES} />
            <TdVsCs isMobile={isMobile} />
            <Opportunities isMobile={isMobile} />
            <Statistics isMobile={isMobile} innerRef={statisticsRef} />
            <Portrait isMobile={isMobile} />
            <div ref={propositionsRef}></div>
            {/* <Propositions isMobile={isMobile} innerRef={propositionsRef} selectedPropositions={selectedPropositions} addToBasket={addToBasket} handleRemoveProposition={handleRemoveProposition} /> */}
            <Outlet innerRef={propositionsRef} />
            <Partners isMobile={isMobile} />
            <Aboutbest />
            <Contacts innerRef={contactsRef} />
            <Footer />
        </div>
    );
}