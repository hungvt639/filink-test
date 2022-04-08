import "./style.scss";
import useItem from "./hooks/useItem";
import Item from "./Item";
import Money from "./Money";
import FormFilter from "./FormFilter";
import InfiniteScroll from "react-infinite-scroll-component";
import useEthers from "./hooks/useEthers";
import { getBalanceNumber, getBalanceNumberW3 } from "../../utils/function";
import useWeb3 from "./hooks/useWeb3";
const Index = () => {
    const { items, setBodyApi, bodyApi, fetchMoreData, totalItem, initData } =
        useItem();
    const { totalTransactions, blockTime, avgValue, maxSecondTx } = useEthers();
    const w = useWeb3();
    console.log(w);

    return (
        <div className="w-full _home">
            <h2 className="text-center">2nd largest of Transactions:</h2>
            <p className="text-center">1.10 ETH</p>
            <div className="flex moneys">
                <Money
                    name="Total transactions:"
                    color="#F0D042"
                    value={totalTransactions}
                />
                <Money
                    name="AVG of block time"
                    color="#31B4D9"
                    value={blockTime}
                />
                <Money
                    name="AVG of ETH/transactions"
                    color="#1F8B24"
                    value={`${avgValue.toFixed(2)} ETH`}
                />
            </div>

            <div className="flex moneys">
                <Money
                    name="Total transactions W3:"
                    color="#F0D042"
                    value={w.totalTransactions}
                />
                <Money
                    name="AVG of block time  W3"
                    color="#31B4D9"
                    value={w.blockTime}
                />
                <Money
                    name="AVG of ETH/transactions  W3"
                    color="#1F8B24"
                    value={`${w.avgValue.toFixed(2)} ETH`}
                />
            </div>
            {maxSecondTx && (
                <div className="max-second-tx">
                    <div className="detail">
                        <h1>Transaction has ETH of second-largest</h1>
                        <h3>blockHash: {maxSecondTx.blockHash}</h3>
                        <h3>hash: {maxSecondTx.hash}</h3>
                        <p>blockNumber: {maxSecondTx.blockNumber}</p>
                        <p>from: {maxSecondTx.from}</p>
                        <p>to: {maxSecondTx.to}</p>
                        <p>ETH: {getBalanceNumber(maxSecondTx.value)}</p>
                    </div>
                </div>
            )}
            {w.maxSecondTx && (
                <div className="max-second-tx">
                    <div className="detail">
                        <h1>Transaction has ETH of second-largest use Web3</h1>
                        <h3>blockHash: {w.maxSecondTx.blockHash}</h3>
                        <h3>hash: {w.maxSecondTx.hash}</h3>

                        <p>blockNumber: {w.maxSecondTx.blockNumber}</p>
                        <p>from: {w.maxSecondTx.from}</p>
                        <p>to: {w.maxSecondTx.to}</p>
                        <p>ETH: {getBalanceNumberW3(w.maxSecondTx.value)}</p>
                    </div>
                </div>
            )}
            <FormFilter
                setBodyApi={setBodyApi}
                bodyApi={bodyApi}
                initData={initData}
            />

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={totalItem !== items.length}
                loader={
                    <div className="flex justify-center w-full">
                        <div className="see-all">Loading...</div>
                    </div>
                }
                className="items flex flex-wrap"
            >
                {items.map((item, index) => (
                    <Item {...item} key={index} />
                ))}
            </InfiniteScroll>
            <div className="footer"></div>
        </div>
    );
};
export default Index;
