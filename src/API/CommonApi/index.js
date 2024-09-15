import axios from "axios"
import { Endpoints } from "../Endpoints"

export const CommonAPi=(endpoint, data, option=false)=>{
    return(
        new Promise(async(resolve, reject)=>{
            let options = {
                profile:localStorage.getItem("userId"),
                'Authorization':"Bearer " + localStorage.getItem('token')
            };
        try{
            let resp = await axios({
                headers : option ? option : options,
                baseURL : Endpoints.baseUrl,
                url : endpoint,
                data : data ? data : null,
                method : data ? "POST" : "GET"
            })
            if(resp && resp.data.status===401){
                console.log('Session Expired! Please login again.');
                return;
            }
            if(resp.data.status===210){
                if(resp.data.message){
                    console.log(resp.data.message);
                }
                else if(resp.data.errors && typeof(resp.data.errors)=="string"){
                    console.log(resp.data.errors);
                }
                else if(typeof(resp.data.errors)==="object"){
                    console.log(resp.data.errors.errorCode);
                }
                reject(resp.data);
                return;
            }
            else{
                // console.log('step2')
                resolve(resp.data);
            }
        }
        catch(e){
            if(e.response && e.response.status===401){
            }
            reject(e);
        }
        })
    )
}