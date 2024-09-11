import axios from 'axios';

import { Endpoints } from '../Endpoints';

export const FetchApi = (endpoint,options=false,data,loader=false) =>{
    return new Promise(async(resolve, reject)=>{
       
        let options = {
            'content-type' : 'application/json'
        };
        
        let configs = {
            headers : options,
            method : data ? 'POST' : 'GET',
            baseURL : Endpoints.baseUrl,
            url : endpoint,
            data : data ? data: null
        }
       
        try{
            let resp = await axios(configs);
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
                reject(resp.data);
                return;
            }
            else{
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