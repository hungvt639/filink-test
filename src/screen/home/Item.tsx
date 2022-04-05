import "./style.scss";
import Coin from "../../img/Coin.png";
import { FundProjects } from "./hooks/useItem";
import { showDate } from "../../utils/function";

const Index = (props: FundProjects) => {
    const {
        startOn,
        symbol,
        name,
        personalAllocation,
        totalRaise,
        coverPhoto,
        photo,
    } = props;
    return (
        <div className="_item flex flex-col">
            <div className="sold-out">Sold Out</div>
            <div className="image">
                <img src={coverPhoto} alt="item img" />
                <img className="photo" src={photo} alt="Frame 39" />
            </div>
            <div className="flex flex-row justify-between item-name">
                <h1>{name}</h1>
                <img src={Coin} alt="Coin" />
            </div>
            <p className="symbol">{`$${symbol}`}</p>
            <div className="flex flex-row justify-between items-center total-raise">
                <p>Total Raise</p>
                <span>{`$${totalRaise} Max`}</span>
            </div>
            <div className="flex flex-row justify-between items-center personal-allocation">
                <p>Personal Allocation</p>
                <span>{`$${personalAllocation}`}</span>
            </div>
            <p className="flex justify-end time">
                IDO starts on {showDate(startOn)}
            </p>
        </div>
    );
};
export default Index;
