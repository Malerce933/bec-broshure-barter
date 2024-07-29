import { Proposition } from "../components/Propositions/Proposition"
import Title from "../components/Title"
import { useTranslation } from 'react-i18next';
export default function Barter({ proposition, innerRef }) {
    const { t } = useTranslation();
    return (



        <div ref={innerRef} id="propositions" className="propositions relative  text-white mx-3 flex flex-col items-center lg:mx-[72px]">
            <Title className=" relative z-30 propositions__title text-center text-wrap mx-[57px] mb-[30px] lg:mb-[64px]">{t("packets.title")}</Title>
            <Proposition proposition={proposition}></Proposition>
            <div className=" relative px-[25px] lg:px-0 z-30 self-start lg:self-start  lg:mx-0 left-[6%] lg:left-[10%] ">
                {t("packets.discontText3")}
            </div>
        </div>

        // <div>
        //     
        // </div>
    )
}