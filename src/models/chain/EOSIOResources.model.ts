export interface EOSIOResourcesModel {
    available: boolean,
    types: Array<{
        name: string,
        unit: string
    }>
};