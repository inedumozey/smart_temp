import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; 
import styled from 'styled-components'
import moment from 'moment';
import { ScrollBar } from '../../styles/globalStyle';

export default function Notifications({showNotif, setShowNotif, notificationData}) {

  
  const handleShowNotif =()=>{
    setShowNotif(!showNotif);
  }
 

  return (
    <NotificationWrapper showNotif={showNotif}>
        <NotificationsNoneIcon title="Toggle notifications panel" style={{fontSize: '1.5rem'}} onClick={handleShowNotif}/>
        {
          notificationData.length > 0 ? <span className="alert" onClick={handleShowNotif}>{notificationData.length}</span> : ""
        }

        {
          showNotif ? (
            <Notification className='info-panel'>
              <div className="title">Notification Alerts</div>

              <div className="content">
                {
                  notificationData.map((data, i)=>{
                    return(
                      <div className="info">
                        <div className="info-title">{data.title}</div>
                        <div className="info-body">{data.body}</div>
                        <div className="info-date">{moment(data.date).calendar()}</div>
                      </div>
                    )
                  })
                }
              </div>
            </Notification>
          ) : ''
        }
        {/* <div onClick={handleShowNotif} className="closeHandle"></div> */}
    </NotificationWrapper>
  )
}


const NotificationWrapper = styled.div`
    position: relative;
    cursor: pointer;
    z-index: 1000;

    .alert{
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items; center;
        border-radius: 50%;
        border: 2px solid #fff;
        position: absolute;
        top: -1px;
        font-weight: bold;
        font-size: .7rem;
        right: -4px;
        background: red;
    }

    .closeHandle{
      background: rgba(0,0,0,.3);
      position: fixed;
      cursor: default;
      display: ${({showNotif})=>showNotif ? 'block' : 'none'};
      top: 0;
      z-index: -1000;
      bottom: 0;
      left: 0;
      right: 0;
    }
`

const Notification = styled.div`
    position: absolute;
    width: 210px;
    max-height: 450px;
    box-shadow: -1px 2px 6px 1px #333, -2px -2px 3px #333;
    right: 0px;
    // transform: translateX(-50%);
    top: 30px;
    cursor: default;
    background: #fff;
    border-radius: 3px;

    &:before{
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        right: -20px;
        transform: rotate(45deg);
        right: 16px;
        top: -5px;
        background: #f1f1f1;
    }

    .title{
      background: #f1f1f1;
      padding: 2px;
      height: 25px;
      text-align: center;
      font-weight: 600;
      color: var(--major-color-purest);
      border-radius: 5px 5px 0 0;
    }

    .content{
      width: 98%;
      height: 425px;
      font-size: .8rem;
      color: #fff;
      margin: auto;
      padding: 5px 2px;
      overflow-y: auto;

      ${ScrollBar()};

      .info{
        border: 1px solid #ccc;
        margin-bottom: 4px;
        color: #000;
        padding: 5px;

        .info-title{
          font-size: .9rem;
          font-weight: 600;

        }

        .info-body{
          margin: 2px 0px;
        }

        .info-date{
          color: #c20;
        }
      }

    }
`