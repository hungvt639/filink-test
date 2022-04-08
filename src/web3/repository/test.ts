import { initProvider } from "../config";

class TestWeb3API {
    public getBlock = async (blockNumber: number, optional = true) => {
        return await initProvider().eth.getBlock(blockNumber, optional);
    };

    public getTransactionFromBlock = async (blockNumber: number) => {
        return await initProvider().eth.getTransactionFromBlock(blockNumber, 0);
    };
}
export default new TestWeb3API();
