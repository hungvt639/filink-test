import AxiosAPI from "../config";

// const resource = "user";
const resource = "api/v1";

const getData = (body: any) => {
    return AxiosAPI().post(`${resource}/fund_projects/filter`, body);
};

const userAPI = {
    getData,
};
export default userAPI;
