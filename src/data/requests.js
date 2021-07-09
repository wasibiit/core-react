import {constants} from "../utils/constants";


export const getReqOptions = (query) => {
    return {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Origin': '*'},
        body: JSON.stringify({query: query})
    };
}

const getAuthReqOptions = (query, token) => {
    return {
        method: 'POST',
        headers: {
            'Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
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

export const AuthRequest = (query, setData, reqestedFor, token) => {
    fetch(constants.BASEURL, getAuthReqOptions(query, token))
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

export const AuthRequestWithFlag = (query, setData, reqestedFor, token) => {
    fetch(constants.BASEURL, getAuthReqOptions(query, token))
        .then(res => res.json())
        .then(
            (result) => {
                if (result.data[`${reqestedFor}`] === null) {
                    setData(false)
                } else {
                    let res = result.data[`${reqestedFor}`]
                    console.log("------------Response------------");
                    console.log(res);
                    console.log("----------end----------------");
                    setData(true)
                }
            },
            (error) => {
                console.log("------------start------------");
                console.log(error);
                console.log("----------end----------------");
            }
        )
};