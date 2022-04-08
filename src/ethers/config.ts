import { ethers } from "ethers";
import _env from "../_env";
export const jsonProvider = () => {
    const provider = new ethers.providers.JsonRpcProvider(
        _env.PROVIDER_URL,
        _env.PROVIDER_NETWORK
    );
    return provider;
};
