import Title from "../Title";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Contacts({ innerRef }) {
    const { t } = useTranslation()
    const location = useLocation();
    const contacts = t('contacts.contacts', { returnObjects: true });

    // Якщо це сторінка "медіа", відображаємо елементи з індексами 1 і 3
    // Інакше відображаємо елементи з індексами 0, 1 і 2
    const displayedContacts = location.pathname === '/media'
        ? [contacts[1], contacts[3]] // Елементи з індексами 1 і 3
        : contacts.slice(0, 3); // Елементи з індексами 0, 1 і 2
    return (
        <div ref={innerRef} className="contacts flex flex-col items-center relative text-white ">
            <Title className="contacts__title text-center lg:text-center px-[40px]">{t("contacts.title")}</Title>
            <div className="">
                <ol className=" flex flex-col 1130px:gap-[42px] lg:gap-[5px] gap-[25px] lg:flex-row justify-center items-center lg:items-start">
                    {displayedContacts.map((contact, index) => <Contact key={index} {...contact}></Contact>)}
                </ol>
                {location.pathname === '/media' ? <a className=" block mt-[25px] lg:mt-[57px] media__button bg-customOrange  w-full text-black underline text-center " href='mailto:lviv@best-eu.org' >Написати керівникам організації</a> : <></>}
            </div>

        </div>

    );
} 