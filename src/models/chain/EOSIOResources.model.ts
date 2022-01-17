export interface EOSIOResourcesModel {
    available: Boolean,
    types: Array<{
        name: string,
        unit: string
    }>
};