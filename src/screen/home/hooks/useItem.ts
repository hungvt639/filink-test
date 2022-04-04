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
    totalRaise: number[];
    "personal Allocation": number[];
}
const useItem = () => {
    const [items, setItems] = useState<FundProjects[]>([]);
    const [bodyApi, setBodyApi] = useState<BodyApi>({
        page: 1,
        pageSize: 10,
        symbol: "",
        name: "",
        status: "SOLD_OUT",
        totalRaise: [100, 200],
        "personal Allocation": [0.07, 0.08],
    });
    const getItems = useCallback(async () => {
        const res = await API.test.getData(bodyApi);
        console.log(res);
        setItems(res.data.data.fundProjects);
    }, [bodyApi]);
    useEffect(() => {
        getItems();
    }, [getItems]);
    return { items, setBodyApi, bodyApi };
};
export default useItem;
