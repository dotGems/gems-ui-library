import { TemplateDeserializedModel } from "./TemplateDeserialized.model";

export interface TemplateModel {
    template_id: number,
    schema_name: string,
    transferable: number,
    burnable: number,
    max_supply: number,
    issued_supply: number,
    deserialized: TemplateDeserializedModel,
}