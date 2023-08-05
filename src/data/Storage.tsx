import {AnniversarySlides, AnniversaryDescription} from "./AnniversaryData";
import {NagaStyleSlides, NagaStyleDescription} from "./NagaStyleData";
import {NoraStyleSlides, NoraStyleDescription} from "./NoraStyleData";
import {NoraQuizSlides, NoraQuizDescription} from "./NoraQuizData";
import {PatternSlides, PatternDescription} from "./PatternData";
import {SeagullSlides, SeagullDescription} from "./SeagullData";
import {TsumSlides, TsumDescription} from "./TsumData";
import {SlidesData} from "../interfaces";


export const Data: Array<SlidesData> = [
    {
        slides: SeagullSlides,
        description: SeagullDescription,
        id: 1
    },
    {
        slides: AnniversarySlides,
        description: AnniversaryDescription,
        id: 2
    },
    {
        slides: NagaStyleSlides,
        description: NagaStyleDescription,
        id: 3
    },
    {
        slides: NoraStyleSlides,
        description: NoraStyleDescription,
        id: 4
    },
    {
        slides: NoraQuizSlides,
        description: NoraQuizDescription,
        id: 5
    },
    {
        slides: TsumSlides,
        description: TsumDescription,
        id: 6
    },
    {
        slides: PatternSlides,
        description: PatternDescription,
        id: 7,
        lastSlide: true
    }
]



