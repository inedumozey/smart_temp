import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useSelector, useDispatch } from 'react-redux';
import { sendVerificationLink } from '../../redux/auth/auth';
import TextLoader from '../../loaders/TextLoader';
import {useSnap} from '@mozeyinedu/hooks-lab'
import Pop from '../../loaders/Pop';



const DashboardHeader = () => {
    const [isLoading, setLoading ] = useState(false);
    const state = useSelector(state=>state);
    const {user} = state.auth;
    const {sendVerifyLink} = state.auth;
    const dispatch = useDispatch();
    const {snap} = useSnap(.5)
    const [msg, setMsg] = useState('')

    const initial =()=>{
        return user.data.username[0].toUpperCase()
    }

    const contactCS =()=>{
        location.href('/contact-us')
    }
    const verifyAccount =()=>{
        setLoading(true)
        dispatch(sendVerificationLink())
    }

    useEffect(()=>{
        if(sendVerifyLink.msg){
            setLoading(false)
        }
    })

    useEffect(()=>{
        if(sendVerifyLink.msg){
            setMsg(msg)
        }
    }, [sendVerifyLink.msg])

    return (
        <StyledDashboardHeader>
            <div className="user">
                <h3 className="name">{user.data.username}</h3>
                <div className="user-avatar">
                    <h1>{initial()}</h1>
                </div>
            </div>
            
           
            {
                (function(){
                    if(user.data.isBlocked){
                        return (
                            <button disabled={isLoading && !sendVerifyLink.msg ? true : false}  {...snap()} onClick={contactCS} className="account-status blocked">
                                Your Account is Blocked
                            </button>
                        )
                    }
                    else if(!user.data.isVerified){
                        return (

                            <button onClick={()=>dispatch(sendVerificationLink())} className="account-status unverified">
                               Verify Your Account
                            </button>
                            // <button disabled={isLoading && !sendVerifyLink.msg ? true : false} {...snap()} onClick={verifyAccount} className="account-status unverified">
                            //     {isLoading && !sendVerifyLink.msg ? <TextLoader iconSize='20px' textSize='.8rem'/> : 'Verify your Account'}
                            // </button>
                        )
                    }
                }())
            }

            
            
            {/* feedback msg */}
           <Pop msg={msg} setMsg={setMsg} status={sendVerifyLink.status}/>
            
        </StyledDashboardHeader>
    )
}

const StyledDashboardHeader = styled.div`
    width: 100%;
    height: 150px;
    // background: #5d6672;
    background: #fff;
    box-shadow: 2px 2px 5px #aaa;
    position: relative;
    color: #fff;
    z-index: 1;

    .account-status{
        background: transparent;
        padding: 4px 3px;
        border-radius: 5px;
        font-weight: 600;
        display: inline-block;
        cursor: pointer;
        position: absolute;
        right: 5px;
        font-size: .7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 120px;
        top: 5px;

        &:hover{
            color: #fff;
        }
    }
    .blocked{
        color: #ff2e04;
        border: 2px solid #ff2e04;
    }

    .unverified{
        color: #e1e10b;
        border: 2px solid #e1e10b;
    }

    .name{
        width: 100%;
        text-align: center;
        
    }
   .user{
        min-width: 10rem;
        height: 10rem;
        position: absolute;
        top: 50px;
        color: var(--major-color-purest);
        left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .user-avatar{
            width: 8rem;
            height: 8rem;
            border-radius: 100%;
            border: 2px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--major-color-purest);
            color: #aaa;;
            font-size: 1.4rem;
            font-weight: 400;
            border: 5px solid  #5d6672;        
        }
   }

`

export default DashboardHeader