// import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { UserWrapper } from "./styles";
import Loader_ from "../loader/Loader";



export default function Referrals({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
//   const {user} = state.auth;

  useEffect(()=>{
    setLoading(true)
    // dispatch(getUser())

    setTimeout(()=>{
    //   user.isLoading ? setLoading(true) : setLoading(false)
        setLoading(false)
    }, 1000)
  }, [])

// console.log(user)
    const user = {
        data: ''
    }


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
          <div style={{textAlign: 'center'}}>{user.msg || 'No Data Currently Available'}</div>
      ):
      (
        <UserWrapper>
          display data here
        </UserWrapper>
      )
    )    
  )
}
