import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { UserWrapper } from "./styles";
import Loader_ from "../loader/Loader";



export default function Index({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {user} = state.auth;

  useEffect(()=>{
    dispatch(getUser())

    setTimeout(()=>{
      user.isLoading ? setLoading(true) : setLoading(false)
    }, 2000)
  }, [])



  return (
    
    //check if user exist

    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty
      !user.data ?
     
      (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{user.msg || 'No Data Currently Available'}</div>
      ):
      (
        <UserWrapper>
          {/* <DashboardHeader /> */}
            display user's dashborad data herejhh
        </UserWrapper>
      )
    )    
  )
}
