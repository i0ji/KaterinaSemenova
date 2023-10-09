export interface ISlides {
    id: number;
    img: string;
}

export interface ISlidesData {
    slides: Array<SlidesInterface>;
    description: string;
    id?: number;
    lastSlide?: boolean;
}