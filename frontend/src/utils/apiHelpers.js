import { API_URL } from "./config";

export const UnauthPOSTApiCall = async (route,body)=>{
    try{
        const response = await fetch(API_URL+route,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })

        return await response.json()
    }
    catch(error){
        console.error(error);
    }
}

export const AuthPOSTApiCall = async(route,body)=>{
    try{
        const response = await fetch(API_URL+route,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${localStorage.getItem("access")}`
            },
            body:JSON.stringify(body)
        })
        return response.json()
    }
    catch(error){
        console.log("ERROR FROM AUTH-POST-API-CALL",error);
    }
}

export const AuthGETApiCall = async(route)=>{
    try{
        const response = await fetch(API_URL+route,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${localStorage.getItem("access")}`
            },
        })
        return response.json()
    }
    catch(error){
        console.log("ERROR FROM AUTH-GET-API-CALL",error);
    }
}


