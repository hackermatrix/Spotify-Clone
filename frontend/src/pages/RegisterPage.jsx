import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import TextInput from "../components/TextInput";
import PassInput from "../components/PassInput";
import { Link } from 'react-router-dom';
import {UnauthPOSTApiCall} from '../utils/apiHelpers'

const RegisterPage = () => {
    
    const [email,setEmail] = useState('')
    const [confirmEmail,setConfirmEmail] = useState('')
    const [password,setPass] = useState('')
    const [username,setUsername] = useState('')
    const [first_name,setFname] = useState('')
    const [last_name,setLname] = useState('')

    const register = async()=>{
        if(email!==confirmEmail){
            alert("Email and ConfimEmail should match!!")
            return;
        }
        const data = {email,password,username,first_name,last_name}

        const res = await UnauthPOSTApiCall("/api/register",data)
        if(res && !res.err){
            console.log(res);
            localStorage.setItem("access",res['access'])
            localStorage.setItem("refresh",res['refresh'])
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
                <div className="font-bold mb-4 text-2xl" >
                    Sign up for free to start listening.
                </div>

                <TextInput 
                label="Email address" 
                placeholder="Enter your email."
                className="my-6"
                value={email}
                setValue={setEmail}
                />

                <TextInput 
                label="Confirm youe email" 
                placeholder="Enter your email again."
                className="mb-6"
                value={confirmEmail}
                setValue={setConfirmEmail}
                />

                <PassInput 
                label="Create a password" 
                placeholder="Create a password"
                value={password}
                setValue={setPass}
                />

                <TextInput 
                label="what should we call you?" 
                placeholder="Enter a username."
                className="my-6"
                value={username}
                setValue={setUsername}
                />

                <div className='w-1/2 flex justify-center space-x-3'>
                <TextInput 
                label="First Name" 
                placeholder="Enter your First Name"
                className="my-6"
                value={first_name}
                setValue={setFname}
                />
                <TextInput 
                label="Last Name" 
                placeholder="Enter your Last Name"
                className="my-6"
                value={last_name}
                setValue={setLname}
                />
                </div>

                <div className="w-full flex justify-center items-center my-8">
                    <button 
                    className="bg-green-400  font-semibold p-3 px-6 rounded-full "
                    onClick={(e)=>{
                        e.preventDefault()
                        register()
                    }}
                    >SIGN UP
                    </button>
                </div>

                <div className="w-full border border-gray-300 "></div>
                <div className="my-8 font-semibold text-md" >Already have an account?</div>
               <div className="w-full border border-gray-400 rounded-full flex justify-center py-2 cursor-pointer"><Link to={'/login'}>Login to Spotify</Link></div>
            </div>
        </div>
    )
}

export default RegisterPage