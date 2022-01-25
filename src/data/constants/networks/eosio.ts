/**
 * Since multiple chains are based on EOSIO, we
 * use this const to share the resources configuration
 * across multiple networks.
 */
 export const EOSIO_RESOURCES: {available: boolean, types: Array<{name: string, unit: string}>} = {
    available: true,
    types: [{
        name: "ram",
        unit: "kb"
    },
    {
        name: "cpu",
        unit: "kb"
    },
    {
        name: "net",
        unit: "kb"
    }]
};