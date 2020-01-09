import axios from 'axios'
axios.defaults.timeout = 50000;    //接口超时时间
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://cnodejs.org/api/v1';   //接口域名自己修改
} else {
    axios.defaults.baseURL = '/api';   //接口域名自己修改

}
axios.defaults.withCredentials = true;
axios.defaults.crossDomain=true
axios.defaults.headers.post["Content-type"]="application/json";

// 接口调取情况(成功根据返回值判断)
const handleStatus = (res) => {
    if (res.data.code == 0 || res.data.msg == '成功'||res.data.success == true) {
        return res.data;
    } else {
        return '请求失败'
    }
};
//失败
const handleError = (error) => {
    if (error.message.includes('timeout')) {
        console.log('请求超时')
    }
    return false;
};

//防止有缓存，接口后加一个时间
axios.interceptors.request.use(config => {
    if (config.data) {
        for (let key of Object.keys(config.data)) {
            if (key && key.indexOf('$') === 0) {
                delete config.data[key]
            }
        }
    }
    // fix ie cache
    if (config.params) {
        config.params['_t'] = new Date().getTime()
    } else {
        config.params = {
            '_t': new Date().getTime()
        }
    }
    return config
}, err => {
    return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(response => {
    let redirectUrl = localStorage.getItem("redirectUrl");
    if (response.data.code == '-403') {
        window.location.href = redirectUrl
    }
    return response
}, (error) => {
    return Promise.reject(error)
})

export default {

    get(url, params, config) {

        let queryString = []
        if (params) {
            Object.keys(params)
                .forEach((key) => params[key] && queryString.push(`${key}=${params[key]}`))
            if (params.dangerClasses === 0) {
                queryString.push('dangerClasses=0')
            }
        }
        if (queryString.length > 0) {
            queryString = queryString.join('&')
            url += `?${queryString}`
        }
        // console.log(url)
        return axios
            .get(url, config)
            .then(handleStatus)
            .catch(handleError)
    },
    post(url, params, config) {
        // config.timeout = 500;
        return axios
            .post(url, params, config)
            .then(handleStatus)
            .catch(handleError)
    },
}

