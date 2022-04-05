import { useCallback, useEffect, useState } from "react";
import API from "../../../api";
export interface FundProjects {
    _id: string;
    name: string;
    symbol: string;
    status: string;
    photo: string;
    coverPhoto: string;
    totalRaise: number;
    personalAllocation: number;
    startOn: string;
    __v: number;
}
export interface BodyApi {
    page: number;
    pageSize: number;
    symbol: string;
    name: string;
    status: string;
    totalRaise: [number, number];
    personalAllocation: [number, number];
}

const useItem = () => {
    const initData: BodyApi = {
        page: 1,
        pageSize: 8,
        symbol: "",
        name: "",
        status: "SOLD_OUT",
        totalRaise: [100, 200],
        personalAllocation: [0.07, 0.08],
    };
    const [totalItem, setTotalItem] = useState(0);
    const [items, setItems] = useState<FundProjects[]>([]);
    const [bodyApi, setBodyApi] = useState<BodyApi>(initData);
    const getItems = useCallback(async () => {
        try {
            const res = await API.test.getData(bodyApi);

            if (bodyApi.page === 1) setItems(res.data.data.fundProjects);
            else setItems((data) => [...data, ...res.data.data.fundProjects]);
            setTotalItem(res.data.data.totalRecords);
        } catch (e) {
            console.log(e);
        }
    }, [bodyApi]);
    useEffect(() => {
        getItems();
    }, [getItems]);

    async function fetchMoreData() {
        setBodyApi({ ...bodyApi, page: bodyApi.page + 1 });
    }
    return { items, setBodyApi, bodyApi, fetchMoreData, totalItem, initData };
};
export default useItem;
