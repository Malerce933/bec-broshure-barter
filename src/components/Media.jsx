import { useTranslation } from "react-i18next";
import Title from "./Title";
import Points from "./Points";
import img from "/src/assets/oval.svg";
import BestLviv from "/src/assets/BestLviv.svg"

export default function Media() {


    const { t } = useTranslation();


    return (
        <div id="propositions" className="propositions relative  text-white mx-5 flex flex-col items-center lg:mx-[72px]">
            <div className=" min-[1024px]:hidden bg-ellipse absolute w-[1800px] h-[700px] top-[30%] transform rotate-90 z-10 brightness-[70%] filter blur-[60px]" alt="" > </div>
            <div className=" max-[1024px]:hidden bg-ellipse absolute w-[1200px] h-[1200px] transform rotate-90 z-10 brightness-[70%] filter blur-[60px]" alt="" > </div>
            {/* <div className=" bg-oval bg-no-repeat absolute w-full h-full   z-30 transform rotate-90"></div> */}
            <Title className=" relative uppercase  z-30 media__title text-center text-wrap ">{t("media.title1")}</Title>
            <Title className=" relative uppercase  z-30 media__title text-center text-wrap">{t("media.title2")}</Title>
            <Title className=" relative uppercase  z-30 media__title media__titl-last text-center text-wrap ">{t("media.title3")}</Title>
            <section className="  relative z-10 flex flex-col lg:flex-row gap-5 mb-5">
                <div ></div>
                <div className="list-none bg-black  media__block">
                    <p className=" media__sub-title text-[24px] font-daysOne  mb-[12px]">{t("media.title1")}:</p>
                    <li className="media__point before:top-[12px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]">{t("media.points1")}</li>
                    <li className="media__point before:top-[12px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]" >{t("media.points2")}</li>
                    <li className="media__point before:top-[12px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]">{t("media.points3")}</li>
                </div>
                <div className="list-none bg-black media__block">
                    <p className=" media__sub-title text-[24px] font-daysOne  mb-[12px]">{t("media.title3")}:</p>
                    <li className="media__point before:top-[12px]  before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]">{t("media.points4")}</li>
                    <li className="media__point before:top-[12px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]" >{t("media.points5")}</li>
                    <li className="media__point before:top-[12px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]">{t("media.points6")}</li>
                </div>
            </section>
            <div className="bg-black relative z-10 p-7 lg:p-8 lg:w-[54.6%] ">
                <p className="mb-3 lg:mb-4 media__text">{t("media.text1")}</p>
                <p className="mb-3 lg:mb-4 media__text">{t("media.text2")}</p>
            </div>
        </div>
    );
}