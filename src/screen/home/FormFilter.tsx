import { useState } from "react";
import { BodyApi } from "./hooks/useItem";
type FormFilterProps = {
    setBodyApi: React.Dispatch<React.SetStateAction<BodyApi>>;
    bodyApi: BodyApi;
};
const FormFilter = (props: FormFilterProps) => {
    const { setBodyApi, bodyApi } = props;
    const [data, setData] = useState({
        name: "",
        symbol: "",
        status: "",
    });
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setBodyApi({ ...bodyApi, ...data });
    }
    return (
        <form className="_form-filter" onSubmit={onSubmit}>
            <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="name"
            />
            <input
                placeholder="symbol"
                value={data.symbol}
                onChange={(e) => setData({ ...data, symbol: e.target.value })}
            />
            <input
                placeholder="status"
                value={data.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
            />
            <div className="submit-btn">
                <button type="submit">Filter</button>
            </div>
        </form>
    );
};
export default FormFilter;
