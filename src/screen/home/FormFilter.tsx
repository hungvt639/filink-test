import { useState } from "react";
import { BodyApi } from "./hooks/useItem";
import { Slider } from "antd";

type FormFilterProps = {
    setBodyApi: React.Dispatch<React.SetStateAction<BodyApi>>;
    bodyApi: BodyApi;
    initData: BodyApi;
};
const FormFilter = (props: FormFilterProps) => {
    const { setBodyApi, bodyApi, initData } = props;
    const [data, setData] = useState(bodyApi);
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setBodyApi({ ...bodyApi, ...data, page: 1 });
    }
    function onReset(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setBodyApi(initData);
        setData(initData);
    }
    return (
        <form onReset={onReset} className="_form-filter" onSubmit={onSubmit}>
            <div className="input flex justify-end w-full">
                <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder="name"
                />
                <input
                    placeholder="symbol"
                    value={data.symbol}
                    onChange={(e) =>
                        setData({ ...data, symbol: e.target.value })
                    }
                />
                <input
                    placeholder="status"
                    value={data.status}
                    onChange={(e) =>
                        setData({ ...data, status: e.target.value })
                    }
                />
            </div>
            <div className="sliders flex justify-end w-full mt-5">
                <div className="slider flex w-full">
                    <div className="w-full">
                        <span>Total Raise </span>
                        <Slider
                            min={0}
                            max={500}
                            range
                            defaultValue={data.totalRaise}
                            value={data.totalRaise}
                            onChange={(val) =>
                                setData({ ...data, totalRaise: val })
                            }
                        />
                    </div>
                    <div className="w-full">
                        <span>Personal Allocation </span>
                        <Slider
                            range
                            min={0}
                            max={1}
                            step={0.01}
                            defaultValue={data.personalAllocation}
                            value={data.personalAllocation}
                            onChange={(val) =>
                                setData({ ...data, personalAllocation: val })
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="submit-btn flex justify-end">
                <button type="reset" className="mx-5">
                    All
                </button>
                <button type="submit">Filter</button>
            </div>
        </form>
    );
};
export default FormFilter;
