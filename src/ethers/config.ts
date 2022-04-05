import { ethers } from "ethers";
const PROVIDER_URL =
    "https://rinkeby.infura.io/v3/e5b97339938341618b45e7e0d7e7d225";
const PROVIDER_NETWORK = 4;
export const jsonProvider = () => {
    const provider = new ethers.providers.JsonRpcProvider(
        PROVIDER_URL,
        PROVIDER_NETWORK
    );
    return provider;
};
