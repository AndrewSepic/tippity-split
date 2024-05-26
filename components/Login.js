import React, { useState, useEffect } from 'react'
import { supabase } from '../src/client'
import toast from 'react-hot-toast'

const Login = ({ setIsLoggedIn }) => {
    const [isNewUser, setIsNewUser] = useState(false)
    const [userState, setUserState] = useState([])

    const handleInputChange = (e, fieldName) => {
        const value = e.target.value
        setUserState((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }))
    }

    const handleNewUser = () => {
        setIsNewUser((prevState) => !prevState)
    }

    async function handleSignUp() {
        const { data, user, error, session } = await supabase.auth.signUp({
            email: userState.email,
            password: userState.password,
            options: {
                data: {
                    name: userState.name,
                    company: userState.company,
                },
            },
        })
        if (error) {
            console.log('fail:', error)
			toast.error('Error: We encountered a problem signing you up. Please contact support.')
        }
        if (data) {
			toast.success('Success! Account created.')
            setIsLoggedIn(true)
            // console.log("user", user);
            // console.log("session:", session);
            console.log('data is', data)
        }
    }

    const handleSignIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: userState.email,
            password: userState.password,
        })
        if (error) {
            console.log('fail:', error)
			toast.error("Error: Incorrect password or username. Dummy.")
        }
        if (data.session || data.user) {
			toast.success('Success!  Logging in..')
            setIsLoggedIn(true)
        }
    }

    return (
        <div className="max-w-96 bg-white rounded px-12 py-8  flex flex-col items-center">
            <img
                className="w-[200px] mb-8"
                src="/logo.svg"
                alt="Tippity Split"
            />

            {isNewUser ? (
                <>
                    <input
                        type="text"
                        className="bg-inputbg mb-4 w-full text-white p-2 rounded placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        placeholder="Name"
                        onChange={(e) => handleInputChange(e, 'name')}
                    ></input>
                    <input
                        type="text"
                        className="bg-inputbg mb-4 w-full text-white p-2 rounded placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        placeholder="Company (Optional)"
                        onChange={(e) => handleInputChange(e, 'company')}
                    ></input>
                    <input
                        type="email"
                        className="bg-inputbg mb-4 w-full text-white p-2 rounded placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        placeholder="Email"
                        onChange={(e) => handleInputChange(e, 'email')}
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-inputbg mb-4 w-full text-white p-2 rounded placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        onChange={(e) => handleInputChange(e, 'password')}
                    ></input>
                    <button
                        className="bg-buttonbg mb-4 w-full py-2 px-8 text-white rounded font-bold uppercase transition-all duration-300 hover:bg-[#176f79]"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <p>
                        Already have an account?{' '}
                        <a
                            href="#"
                            onClick={handleNewUser}
                            className="transition-all text-coinyellow hover:text-cashgreen"
                        >
                            Sign in!
                        </a>
                    </p>
                </>
            ) : (
                <>
                    <input
                        type="email"
                        className="bg-inputbg mb-4 w-full text-white p-2 rounded placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        placeholder="Email"
                        onChange={(e) => handleInputChange(e, 'email')}
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-inputbg mb-4 w-full text-white p-2 rounded placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        onChange={(e) => handleInputChange(e, 'password')}
                    ></input>
                    <button
                        className="bg-buttonbg mb-4 w-full py-2 px-8 text-white rounded font-bold uppercase transition-all duration-300 hover:bg-[#176f79]"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                    <p>
                        Don't have an account?{' '}
                        <a
                            href="#"
                            onClick={handleNewUser}
                            className="transition-all text-coinyellow hover:text-cashgreen"
                        >
                            Sign up!
                        </a>
                    </p>
                </>
            )}
        </div>
    )
}

export default Login
