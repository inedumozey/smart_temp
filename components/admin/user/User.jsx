// import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { AdminWrapper } from "./styles";
import Loader_ from "../loader/Loader";



export default function User({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  // const {user} = state.aUser;

  useEffect(()=>{
    setLoading(true)
    // dispatch(getUser())

    setTimeout(()=>{
    //   user.isLoading ? setLoading(true) : setLoading(false)
        setLoading(false)
    }, 1000)
  }, [])

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
          <div style={{textAlign: 'center'}}>{user.msg || 'No data currently available'}</div>
      ):
      (
        <AdminWrapper>
          display data here
        </AdminWrapper>
      )
    )    
  )
}
