import { Notification , NotificationWrapper} from './styles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; 

export default function Notifications({showNotif, setShowNotif, showDropDown, alert, setDropDown}) {
  
  const handleShowNotif =()=>{
    setShowNotif(!showNotif);
    setDropDown(false)
  }
  return (
    <NotificationWrapper alert={alert}>
        <NotificationsNoneIcon style={{fontSize: '2rem'}} onClick={handleShowNotif}/>
        <span className="alert" onClick={handleShowNotif}>{5}</span>

        {
          showNotif ? (
            <Notification>
              
          </Notification>
          ) : ''
        }
    </NotificationWrapper>
  )
}
