import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { BsFillEyeFill} from 'react-icons/bs';
import { RiCloseLine} from 'react-icons/ri'
import { AiTwotoneLock, AiFillEyeInvisible} from 'react-icons/ai';
import { useSnap } from '@mozeyinedu/hooks-lab'; 
import { resetPassword } from "../../../redux/auth/auth";
import check from "../../../utils";
import Spinner from "../../../loaders/Spinner";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'

import {
    AuthWrapper,
    Form,
    Title,
    SubTitle,
    InputWrapper,
    InputIcon,
    Error,
    Success,
    Close
} from "./styles/auth";



export const ResetPassword=()=>{  
    const router = useRouter()

    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const {resetPass} = state.auth;
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false);

    const {token} = router.query;

    const [feedback, setFeedback] = useState({
        msg: resetPass.msg,
        status: false
    });

    const { snap } = useSnap(.5);

    const intitialState = {
        password: '',
        cpassword: ''
    }
    const [inp, setInpt] = useState(intitialState);

    // get form input
    const getInput =(e)=>{
        const {name, value} = e.target;
        setInpt({...inp, [name]: value })
    }
  
    // submit form
    const submit =(e)=>{
        e.preventDefault();

        dispatch(resetPassword({data:inp, token}))

        setFeedback({
            msg: resetPass.msg,
            status: true
        });

        // empty form input
        resetPass.status ? setInpt(intitialState) : setInpt({...inp, password: '', cpassword: ''})
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
        resetPass.status ? setInpt(intitialState) : setInpt({...inp, password: '', cpassword: ''})

        // redirect user after a successful login to the required dashboard (either user or admin dashboard)
        const user_info = {
            refreshtoken: Cookies.get('refreshtoken'),
            type: Cookies.get('type')
        };
        
        resetPass.status ? check.redirectToDashboard(router, user_info) : ''  

   }, [resetPass.status])
 
    return (
        <>
        <AuthWrapper>
            <Form onSubmit={submit}>
                <Title>Reset Your Password</Title>
                <SubTitle bottomMargin="20px">Forex Trading Solution for Everyone</SubTitle>
                {
                    feedback.status ? (
                        resetPass.msg ? 
                        (
                            resetPass.status ? 
                        (
                            <Success>
                                <Close onClick={handleClose}>
                                    <RiCloseLine />
                                </Close>
                                {resetPass.msg}
                            </Success>
                        ) :
                        (
                            <Error>
                                <Close onClick={handleClose}>
                                    <RiCloseLine />
                                </Close>
                                {resetPass.msg}
                            </Error>
                        )
                        ): ''
                    ):''
                }

                <InputWrapper>
                    <InputIcon right="" left="0">
                        <AiTwotoneLock />
                    </InputIcon>
                    <input
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        value={inp.password || ''}
                        placeholder="Password"
                        onInput={getInput}
                    />
                    <InputIcon onClick={()=>setShowPassword(!showPassword)} right="0" left="">
                        {showPassword ? <BsFillEyeFill /> : <AiFillEyeInvisible /> }
                    </InputIcon>
                </InputWrapper>

                <InputWrapper>
                    <InputIcon right="" left="0">
                        <AiTwotoneLock />
                    </InputIcon>
                    <input
                        type={showCPassword ? "text" : "password"} 
                        name="cpassword"
                        value={inp.cpassword || ''}
                        placeholder="Confirm Password"
                        onInput={getInput}
                    />
                    <InputIcon onClick={()=>setShowCPassword(!showCPassword)} right="0" left="">
                        {showCPassword ? <BsFillEyeFill /> : <AiFillEyeInvisible />}
                    </InputIcon>
                </InputWrapper>

                {resetPass.isLoading ? <Spinner size='20px'/> : ""}

                <InputWrapper>
                    <input
                        {...snap()}
                        type="submit"
                        value={resetPass.isLoading ? "loading..." : "Reset"}
                        disabled={resetPass.isLoading ? true : false}
                    />
                </InputWrapper>

            </Form>

        </AuthWrapper>
        </>
    )
}
