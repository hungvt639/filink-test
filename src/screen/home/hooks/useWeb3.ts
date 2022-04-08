import { useCallback, useEffect, useState } from "react";
import { Transaction } from "web3-core";
import { getBalanceNumberW3, getMaxSecondW3 } from "../../../utils/function";
import web3API from "../../../web3";
const useWeb3 = () => {
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
                const res = await web3API.test.getBlock(i);
                total += res.transactions.length;
                if (i === blockNumberFrom)
                    start =
                        typeof res.timestamp === "number"
                            ? res.timestamp
                            : parseInt(res.timestamp);
                if (i === blockNumberTo)
                    end =
                        typeof res.timestamp === "number"
                            ? res.timestamp
                            : parseInt(res.timestamp);
                trans = trans.concat(res.transactions);
            } catch (e) {
                console.log(e);
            }
        }
        const avg =
            trans.reduce(
                (total, next) => total + getBalanceNumberW3(next.value),
                0
            ) / trans.length;
        setTotalTransactions(total);
        setBlockTime((end - start) / (blockNumberTo - blockNumberFrom));
        setAvgValue(avg);
        setMaxSecondTx(getMaxSecondW3(trans));
    }, []);

    useEffect(() => {
        getBlock();
    }, [getBlock]);

    return { totalTransactions, blockTime, avgValue, maxSecondTx };
};
export default useWeb3;
