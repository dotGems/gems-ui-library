export interface NetworkModel {
    name: string,
    icon: string,
    resources: {
        available: Boolean,
        types: Array<{
            name: string,
            unit: string
        }>
    }
}