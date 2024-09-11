import axios from 'axios';

import { Endpoints } from '../Endpoints';

export const PostApi = (endpoint, data,loader=false) =>{
    return new Promise(async(resolve, reject)=>{
        // let options = {
        //     'content-type' : 'application/json'
        // };

        let options = {
            'content-type' : 'application/json'
        };
        // if(store.getState().user.token && endpoint!=Endpoints.login){
        //     options["Authorization"] = "Bearer " + store.getState().user.token;
        // }
        // console.log('options',options);
        // console.log('url',Endpoints.baseURL+ endpoint);
        console.log("datat________data", data)
        let configs = {
            headers : options,
            method :'POST',
            baseURL : Endpoints.baseUrl,
            url : endpoint,
            data : data ? data: null
        }
        if(data){
            configs.data = data;
        }
        try{
            let resp = await axios(configs);
            // console.log('checkfetchapi22222______');
            // console.log('checkfetchapi______');
            // console.log('data',JSON.stringify(resp.data,null,4))
            if(resp && resp.data.status==401){
                console.log('Session Expired! Please login again.');
                return;
            }
            if(resp.data.status==210){
                if(resp.data.message){
                    console.log(resp.data.message);
                }
                else if(resp.data.errors && typeof(resp.data.errors)=="string"){
                    console.log(resp.data.errors);
                }
                else if(typeof(resp.data.errors)=="object"){
                    console.log(resp.data.errors.errorCode);
                }
                // console.log(resp.data.errors);
                reject(resp.data);
                return;
            }
            else{
                // console.log('step2')
                resolve(resp.data);
            }
        }
        catch(e){
            if(e.response && e.response.status==401){
            }
            if(e.response && e.response.status==500){
                console.log('Server Error. Please Try after Some Time')
            }
            reject(e);
        }
    })
}