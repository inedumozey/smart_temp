import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig, updateConfig} from "../../../redux/admin/web_config";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';
import TextLoader from "../../../loaders/TextLoader";

import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container,
  Input,
  Label
} from "../styles";
import Transactions from "../transactionsModal/Transactions";


export default function Withdrawals({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {config} = state.config;

  const initialState = {  
    maxWithdrawalLimit: config.data.maxWithdrawalLimit,
    minWithdrawalLimit: config.data.minWithdrawalLimit,
    withdrawalCoins: config.data.withdrawalCoins,
    withdrawalCommonDiff: config.data.withdrawalCommonDiff,
    pendingWithdrawalDuration: config.data.pendingWithdrawalDuration,
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
      <div>
          <Transactions Title_='View Transactions' base="withdrawals"/>
          <Form>
              <Container>

                  <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                      <span style={{fontSize: '1rem'}}>Withdrawals</span>
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

                  <InputWrapper title="Max Withdrawalable Amount">
                      <Label htmlFor="">Max Withdrawable Amount: <span className="item">{config.data.maxWithdrawalLimit} {config.data.nativeCurrency}</span></Label>
                      <Input
                        disabled={!edit}
                        type="number"
                        value={inp.maxWithdrawalLimit || ''}
                        name='maxWithdrawalLimit'
                        onChange={getInput}
                      />
                  </InputWrapper>
      
                  <InputWrapper title="Min Withdrawalable Amount">
                      <Label htmlFor="">Min Withdrawable Amount: <span className="item">{config.data.minWithdrawalLimit} {config.data.nativeCurrency}</span></Label>
                      <Input
                        disabled={!edit}
                        type="number"
                        value={inp.minWithdrawalLimit || ''}
                        name='minWithdrawalLimit'
                        onChange={getInput}
                      />
                  </InputWrapper>
      
                  <InputWrapper title="Step factor for withdrawal amount (Common Diff)">
                      <Label htmlFor="">Withdrawable Amount Factor: <span className="item">{config.data.withdrawalCommonDiff} {config.data.nativeCurrency}</span></Label>
                      <Input
                        disabled={!edit}
                        type="number"
                        value={inp.withdrawalCommonDiff || ''}
                        name='withdrawalCommonDiff'
                        onChange={getInput}
                      />
                  </InputWrapper>
      
                  <InputWrapper title="Add in comma seperated strings with the last comma preserved to avoid lost of data">
                      <Label htmlFor="">Withdrawable Coins: {" "} 
                      {
                        config.data.withdrawalCoins.map((coins, i)=><span key={i} style={{paddingRight: '4px'}} className="item">{coins}</span>)
                      }
                      </Label>
                      <Input
                        disabled={!edit}
                        type="string"
                        value={inp.withdrawalCoins || ''}
                        name='withdrawalCoins'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Number of hours giving to resolve a withdrawal request ">
                      <Label htmlFor="">Withdrawal request resolved in: <span className="item">{config.data.pendingWithdrawalDuration} hours</span></Label>
                      <Input
                        disabled={!edit}
                        type="number"
                        value={inp.pendingWithdrawalDuration || ''}
                        name='pendingWithdrawalDuration'
                        onChange={getInput}
                      />
                  </InputWrapper>

              </Container>
          </Form>
      </div>
    )
}

