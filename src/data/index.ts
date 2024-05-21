import {AnniversarySlides, AnniversaryDescription} from "data/AnniversaryData";
import {NagaStyleSlides, NagaStyleDescription} from "data/NagaStyleData";
import {NoraStyleSlides, NoraStyleDescription} from "data/NoraStyleData";
import {NoraQuizSlides, NoraQuizDescription} from "data/NoraQuizData";
import {PatternSlides, PatternDescription} from "data/PatternData";
import {SeagullSlides, SeagullDescription} from "data/SeagullData";
import {TsumSlides, TsumDescription} from "data/TsumData";
import {ISlidesData} from "declarations/interfaces";

export const Data: Array<ISlidesData> = [
    {
        slides: SeagullSlides,
        description: SeagullDescription,
        id: 1,
    },
    {
        slides: AnniversarySlides,
        description: AnniversaryDescription,
        id: 2,
    },
    {
        slides: NagaStyleSlides,
        description: NagaStyleDescription,
        id: 3,
    },
    {
        slides: NoraStyleSlides,
        description: NoraStyleDescription,
        id: 4,
    },
    {
        slides: NoraQuizSlides,
        description: NoraQuizDescription,
        id: 5,
    },
    {
        slides: TsumSlides,
        description: TsumDescription,
        id: 6,
    },
    {
        slides: PatternSlides,
        description: PatternDescription,
        id: 7,
        lastSlide: true,
    },
];
