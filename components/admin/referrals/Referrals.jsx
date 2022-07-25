import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig, updateConfig} from "../../../redux/admin/web_config";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';

import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container,
  Input,
  Label
} from "../styles";
import TextLoader from "../../../loaders/TextLoader";

export default function Referrals({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {config} = state.config;

  const initialState = {  
    referralBonusPercentage: config.data.referralBonusPercentage,
    referralBonusPercentageForMasterPlan: config.data.referralBonusPercentageForMasterPlan,
    referralBonusMaxCountForMasterPlan: config.data.referralBonusMaxCountForMasterPlan,
}


  useEffect(()=>{
    setLoading(true)
    dispatch(getConfig())

    setTimeout(()=>{
      config.isLoading ? setLoading(true) : setLoading(false)
    }, 1000)

  }, [])

  return (
    
    //check if config exist
    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !config.status ? 
      (
          <div style={{textAlign: 'center'}}>{config.msg || 'No data currently available'}</div>
      ):
      (
        <AdminWrapper>
          <SetForm config={config} initialState={initialState}/>
        </AdminWrapper>
      )
    )    
  )
}





function SetForm({config, initialState}) {
    const {snap} = useSnap(.5);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch()
  
    
    const [inp, setInp] = useState(initialState)
  
  
    const getInput=(e)=>{
      const {name, value} = e.target;
      setInp({...inp, [name]:value})
    }

    // console.log(config.data.unverifyUserLifeSpan)

    const submit=(e)=>{
        e.preventDefault();
        dispatch(updateConfig(inp));
        
        setInp(initialState);
    }

    useEffect(()=>{
      setInp(initialState);
    }, [config])
  
    return (
      <Form>
          <Container>

              <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                  <span style={{fontSize: '1rem'}}>Referrals</span>
                  <span className="edit">
                      <EditIcon />
                  </span>
              </div>

              {
                  edit ?
                  (
                      <button onClick={submit} className="btn">Submit</button>
                  ): ''
              }
  
              <InputWrapper title="Percentage returns to referrers after the initial investment by their downliners">
                  <Label htmlFor="">Bonus Percenatge: <span className="item">{config.data.referralBonusPercentage}</span></Label>
                  <Input
                    disabled={!edit}
                    type="number"
                    value={inp.referralBonusPercentage || ''}
                    name='referralBonusPercentage'
                    onChange={getInput}
                  />
              </InputWrapper>

              <InputWrapper title="Percentage returns to referrers after the initial investment by their downliners when they invest for master plans">
                  <Label htmlFor="">Master Plans' Bonus Percenatge: <span className="item">{config.data.referralBonusPercentageForMasterPlan}</span></Label>
                  <Input
                    disabled={!edit}
                    type="number"
                    value={inp.referralBonusPercentageForMasterPlan || ''}
                    name='referralBonusPercentageForMasterPlan'
                    onChange={getInput}
                  />
              </InputWrapper>

              <InputWrapper title="Number of times master plans investors will return the referral bonuses to their referrers">
                  <Label htmlFor="">Master plan bonus counts: <span className="item">{config.data.referralBonusMaxCountForMasterPlan}</span></Label>
                  <Input
                    disabled={!edit}
                    type="number"
                    value={inp.referralBonusMaxCountForMasterPlan || ''}
                    name='referralBonusMaxCountForMasterPlan'
                    onChange={getInput}
                  />
              </InputWrapper>

          </Container>
      </Form>
    )
}

