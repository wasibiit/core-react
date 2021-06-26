import {constants} from "../utils/constants";


export const getReqOptions = (query) => {
    return {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Origin': '*'},
        body: JSON.stringify({query: query})
    };
}

export const Request = (query, setData, reqestedFor) => {
    fetch(constants.BASEURL, getReqOptions(query))
        .then(res => res.json())
        .then(
            (result) => {
                if (result.data[`${reqestedFor}`] === null) {
                    return null;
                } else {
                    let res = result.data[`${reqestedFor}`]
                    setData(res)
                }
            },
            (error) => {
                console.log("------------start------------");
                console.log(error);
                console.log("----------end----------------");
            }
        )
};