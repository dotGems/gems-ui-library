import { NetworkModel } from "../models/Network.model";

/**
 * Returns the proper port based on provided port or by using
 * the default port of the provided protocol.
 * 
 * @param protocol Protocol used
 * @param port Specified port (overwrites any default)
 * 
 * @returns Specified port or default protocol port
 */
export const getPort = (protocol: string, port: Number) => {
    if(port) {
        return port;
    } else {
        switch(protocol) {
            case "http": return 80;
            case "https": return 443;
            default: return 443;
        }
    }
}

/**
 * Builds the network url concatenating protocol, host and port.
 * 
 * @param network Chain Object Data
 * 
 * @returns network url
 */
export const buildChainHost = (network: NetworkModel) : string => {
    return `${getPort(network.protocol, network.port)}://${network.host}:${getPort(network.protocol,network.port)}`
}