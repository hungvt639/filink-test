import { jsonProvider } from "../config";

const getBlockTransactions = async (BLOCKNUMBER: number) => {
    return await jsonProvider().getBlock(BLOCKNUMBER);
};
const getBlockWithTransactions = async (BLOCKNUMBER: number) => {
    return await jsonProvider().getBlockWithTransactions(BLOCKNUMBER);
};

const getTransaction = async (hash: string) => {
    return await jsonProvider().getTransaction(hash);
};
const testAPI = {
    getBlockTransactions,
    getTransaction,
    getBlockWithTransactions,
};
export default testAPI;
