import React, { useState } from "react"
import { Icon } from '@iconify/react';
import TextInput from "../components/TextInput";
import PassInput from "../components/PassInput";
import { Link, useNavigate } from "react-router-dom";
import { UnauthPOSTApiCall } from "../utils/apiHelpers";

const LoginPage = ()=>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const login = async()=>{
        const data = {username,password};
        const res = await UnauthPOSTApiCall("/api/login",data);
        if(res && !res.err){
            localStorage.setItem("access",res['access'])
            localStorage.setItem("refresh",res['refresh'])
            navigate("/home");
        }
        else{
            alert("Failure");
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className=" w-full logo p-6 border-b border-solid border-gray-250 flex justify-center">
                <Icon icon="logos:spotify" width="150"/>
            </div>
            <div className="inputRegion w-1/4 py-10 flex flex-col items-center justify-center">
                <div className="font-bold mb-4" >To continue, log in to Spotify.</div>
                <TextInput 
                label="Email address or username" 
                placeholder="Email address or username"
                className="my-6"
                value={username}
                setValue={setUsername}
                />
                <PassInput 
                label="Password" 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                />

                <div className="w-full flex justify-end items-center my-8">
                    {/* <div className="font-semibold text-sm">Forgot your password?</div> */}
                    <button 
                    className="bg-green-400  font-semibold p-3 px-6 rounded-full "
                    onClick={(e)=>{
                        e.preventDefault();
                        login();
                    }}
                    >LOG IN
                    </button>
                </div>

                <div className="w-full border border-gray-300 "></div>
                <div className="my-8 font-semibold text-md" >Don't have and account?</div>
                <button className="w-full border border-gray-400 rounded-full flex justify-center py-2 cursor-pointer "><Link to={"/register"}>Sign Up For Spotify</Link></button>
            </div>
        </div>
    )
}

export default LoginPage