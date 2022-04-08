import Web3 from "web3";
import _env from "../_env";
export const initProvider = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider(_env.PROVIDER_URL));
    return web3;
};
