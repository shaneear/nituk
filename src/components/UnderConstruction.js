import React from 'react';
import "../styles/underConstruction.css"
import Img from "./general/Img";
import Span from "./general/Span";

const UnderConstruction = () => {
    return (
        <div className={"constructionContainer"}>
            <div className={"constructionInner"}>
                <Img src={"cuate.png"} className={"imgBackHome"}/>
                <div className={"textContainer"}>
                    <Img src={"titleImg.svg"} className={"imgTitleContainer"}/>
                    <Span className={"subText"} text={"נתראה בקרוב!"}/>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;