import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { BsFillEyeFill} from 'react-icons/bs'
import { MdOutlineEmail} from 'react-icons/md'
import { RiCloseLine} from 'react-icons/ri'
import { AiTwotoneLock, AiFillEyeInvisible} from 'react-icons/ai'
import { useSnap } from '@mozeyinedu/hooks-lab'; 
import { signin } from "../../../redux/auth/auth";
import check from '../../../utils';
import Spinner from "../../../loaders/Spinner";
import { useRouter } from "next/router";


import {
    AuthWrapper,
    Form,
    Title,
    SubTitle,
    InputWrapper,
    InputIcon,
    AuthLink,
    Error,
    Success,
    Close
} from "./styles/auth";
import Agreement from "./Agreement";
import Cookies from "js-cookie";



export const Signin=({userInfo})=>{
    const router = useRouter()
    const dispatch = useDispatch();
    const { snap } = useSnap(.5);
    const state = useSelector(state=>state);
    const {auth} = state;

    const [showPassword, setShowPassword] = useState(false)
    const [feedback, setFeedback] = useState({
        msg: auth.signin.msg,
        status: false
    });

    const intitialState = {
        email: '',
        password: '',
    }

    const [inp, setInpt] = useState(intitialState)

    // get form input
    const getInput =(e)=>{
        const {name, value} = e.target;
        setInpt({...inp, [name]: value })
    }

    // submit form
    const submit =(e)=>{
        e.preventDefault();

        dispatch(signin(inp))   

        setFeedback({
            msg: auth.signin.msg,
            status: true
        });

        // clear form input
        auth.signin.status ? setInpt(intitialState) : setInpt({...inp, password: ''});        
    }

    // handle close feedback msg
    const handleClose =()=>{
        setFeedback({
            msg: '',
            status: false
        })
    }

    useEffect(()=>{
        // empty form input
        auth.signin.status ? setInpt(intitialState) : setInpt({...inp, password: ''})

        // redirect user after a successful login to the required dashboard (either user or admin dashboard)
        const user_info = {
            refreshtoken: Cookies.get('refreshtoken'),
            type: Cookies.get('type')
        };

        
        
        auth.signin.status ? check.redirectToDashboard(router, user_info) : ''        

   }, [auth.signin.status])

    return (
        <>
        <AuthWrapper>
            <Form onSubmit={submit}>
                <Title>Sign In</Title>
                <SubTitle bottomMargin="20px">Forex Trading Solution for Everyone</SubTitle>
                {
                    feedback.status ? (
                        auth.signin.msg ? 
                        (
                            auth.signin.status ? 
                        (
                            <Success>
                                <Close onClick={handleClose}>
                                    <RiCloseLine />
                                </Close>
                                {auth.signin.msg}
                            </Success>
                        ) :
                        (
                            <Error>
                                <Close onClick={handleClose}>
                                    <RiCloseLine />
                                </Close>
                                {auth.signin.msg}
                            </Error>
                        )
                        ): ''
                    ):''
                }
                <InputWrapper>
                    <InputIcon right="" left="0">
                    <MdOutlineEmail />
                    </InputIcon>
                    <input type="text" 
                    name="email"
                    value={inp.email || ''}
                    placeholder="Email/Username"
                    onInput={getInput}
                    />
                </InputWrapper>

                <InputWrapper>
                    <InputIcon right="" left="0">
                    <AiTwotoneLock />
                    </InputIcon>
                    <input type={showPassword ? "text" : "password"} 
                    name="password"
                    value={inp.password || ''}
                    placeholder="Password"
                    onInput={getInput}
                />
                    <InputIcon onClick={()=>setShowPassword(!showPassword)} right="0" left="">
                        {showPassword ? <BsFillEyeFill /> : <AiFillEyeInvisible /> }
                    </InputIcon>
                </InputWrapper>

                <SubTitle bottomMargin="5px">
                    <Link  href="/reset-password-req" passHref>
                        <AuthLink> Reset Password?</AuthLink>
                    </Link>
                </SubTitle>

                {auth.signin.isLoading ? <Spinner size='20px'/> : ""}

                <Agreement />

                <InputWrapper>
                    <input {...snap()} type="submit"
                        value={auth.signin.isLoading ? `Loading...` : "Sign In"}
                        disabled={auth.signin.isLoading ? true : false}
                    />
                </InputWrapper>
                
                <SubTitle bottomMargin="0">
                    Don't have an Account?
                    {" "}
                    <Link  href="/signup" passHref>
                        <AuthLink>Sign Up</AuthLink>
                    </Link>
                </SubTitle>

            </Form>
            
        </AuthWrapper>
        </>
    )
}
