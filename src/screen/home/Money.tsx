import Coin from "../../img/Coin.png";
type MoneyProps = {
    name: string;
    color: string;
    value: number | string;
};
const Index = (props: MoneyProps) => {
    const { color, name, value } = props;
    return (
        <div className="flex-1 flex flex-col _money">
            <div className="flex flex-row justify-center">
                <img
                    className="coin-img"
                    src={Coin}
                    alt="Coin"
                    width={32}
                    height={32}
                />
                <span style={{ color: color }}>{name}</span>
            </div>
            <p className="flex justify-center">{value}</p>
        </div>
    );
};
export default Index;
