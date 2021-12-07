import { LocalizedStandardModel } from "./Standard.model";

export interface TemplateModel {
    template_id: number,
    schema_name: string,
    transferable: number,
    burnable: number,
    max_supply: number,
    issued_supply: number,
    deserialized: {
        name: string,
        img: string,
        artist: string,
        about: string,
        type: string,
        drop: string,
        website: string,
        video?: string,
        backimg?: string,
        cardimg?: string
    },
}