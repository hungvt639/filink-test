import "./style.scss";
import useItem from "./hooks/useItem";
import Item from "./Item";
import Money from "./Money";
import useMoney from "./hooks/useMoney";
import FormFilter from "./FormFilter";
const Index = () => {
    const { items, setBodyApi, bodyApi } = useItem();
    const { moneys } = useMoney();
    return (
        <div className="w-full _home">
            {/* <div className="home-content"> */}
            <h2 className="text-center">2nd largest of Transactions:</h2>
            <p className="text-center">1.10 ETH</p>
            <div className="flex moneys">
                {moneys.map((m, index) => (
                    <Money {...m} key={index} />
                ))}
            </div>
            <FormFilter setBodyApi={setBodyApi} bodyApi={bodyApi} />

            <div className="items flex flex-wrap">
                {items.map((item, index) => (
                    <Item {...item} key={index} />
                ))}
            </div>
            <div className="flex justify-center">
                <div className="see-all">See All Funded Projects</div>
            </div>
            {/* </div> */}
            <div className="footer"></div>
        </div>
    );
};
export default Index;
