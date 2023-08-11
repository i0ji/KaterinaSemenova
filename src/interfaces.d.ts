export interface SlidesInterface {
    id: number;
    img: string;
}

export interface SlidesData {
    slides: Array<SlidesInterface>;
    description: string;
    id?: number;
    lastSlide?: boolean;
}
