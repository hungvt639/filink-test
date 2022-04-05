import { useCallback, useEffect, useState } from "react";
import ethersAPI from "../../../ethers";
import { Transaction } from "ethers";
import { getBalanceNumber, getMaxSecond } from "../../../utils/function";
const useEthers = () => {
    const blockNumberFrom = 10441830;
    // const blockNumberTo = 10441831;
    const blockNumberTo = 10441840;

    const [totalTransactions, setTotalTransactions] = useState(0);
    const [blockTime, setBlockTime] = useState(0);
    const [avgValue, setAvgValue] = useState(0);
    const [maxSecondTx, setMaxSecondTx] = useState<any>();
    const getBlock = useCallback(async () => {
        let total = 0;
        let start = 0;
        let end = 0;
        let trans: Transaction[] = [];
        for (let i = blockNumberFrom; i <= blockNumberTo; i++) {
            try {
                const res = await ethersAPI.test.getBlockWithTransactions(i);
                total += res.transactions.length;
                if (i === blockNumberFrom) start = res.timestamp;
                if (i === blockNumberTo) end = res.timestamp;
                trans = trans.concat(res.transactions);
            } catch (e) {
                console.log(e);
            }
        }
        const avg =
            trans.reduce(
                (total, next) => total + getBalanceNumber(next.value),
                0
            ) / trans.length;
        setTotalTransactions(total);
        setBlockTime((end - start) / (blockNumberTo - blockNumberFrom));
        setAvgValue(avg);
        setMaxSecondTx(getMaxSecond(trans));
    }, []);
    useEffect(() => {
        getBlock();
    }, [getBlock]);

    return { totalTransactions, blockTime, avgValue, maxSecondTx };
};
export default useEthers;
