import React from 'react'
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const Login = () => {
    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
            <SignInButton>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 w-screen p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`
const UberLogo = tw.img`

`