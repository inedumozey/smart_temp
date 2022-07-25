import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig, updateConfig} from "../../../redux/admin/web_config";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';
import Transactions from "../transactionsModal/Transactions";

import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container,
  Input,
  Label
} from "../styles";


export default function Withdrawals({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {config} = state.config;

  const initialState = {  
    maxTransferLimit: config.data.maxTransferLimit,
    minTransferLimit: config.data.minTransferLimit,
    allowTransfer: config.data.allowTransfer,
    transferCommonDiff: config.data.transferCommonDiff,
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
         <Transactions Title_='View Transactions' base="transfer"/>
        <Form>
            <Container>

                <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                    <span style={{fontSize: '1rem'}}>Transfer</span>
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

                <InputWrapper title="Max Transfer Amount">
                    <Label htmlFor="">Max Transfer Amount: <span className="item">{config.data.maxTransferLimit} {config.data.nativeCurrency}</span></Label>
                    <Input
                      disabled={!edit}
                      type="number"
                      value={inp.maxTransferLimit || ''}
                      name='maxTransferLimit'
                      onChange={getInput}
                    />
                </InputWrapper>
    
                <InputWrapper title="Min Transfer Amount">
                    <Label htmlFor="">Min Transfer Amount: <span className="item">{config.data.minTransferLimit} {config.data.nativeCurrency}</span></Label>
                    <Input
                      disabled={!edit}
                      type="number"
                      value={inp.minTransferLimit || ''}
                      name='minTransferLimit'
                      onChange={getInput}
                    />
                </InputWrapper>
    
                <InputWrapper title="Step factor amount for transfer (Common Diff)">
                    <Label htmlFor="">Transfer Amount Factor: <span className="item">{config.data.transferCommonDiff} {config.data.nativeCurrency}</span></Label>
                    <Input
                      disabled={!edit}
                      type="number"
                      value={inp.transferCommonDiff || ''}
                      name='transferCommonDiff'
                      onChange={getInput}
                    />
                </InputWrapper>
    
                <InputWrapper title="Allow transfer or disable it">
                    <Label htmlFor="">Allow Transfer?: <span className="item">{config.data.allowTransfer}</span></Label>
                    <Input
                      disabled={!edit}
                      type="text"
                      value={inp.allowTransfer || ''}
                      name='allowTransfer'
                      onChange={getInput}
                    />
                </InputWrapper>

            </Container>
        </Form>
      </div>
    )
}

