import styled from 'styled-components'

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
        background: ${({alert})=>alert ? 'red': '#fff'}
    }
`

const Notification = styled.div`
    color: red;
    position: absolute;
    width: 300px;
    padding: 5px 10px;
    height: 300px;
    max-height: 500px;;
    box-shadow: -1px 2px 6px 1px #333, -2px -2px 3px #333;
    right: -20px;
    top: 60px;
    cursor: default;
    background: #fff;

    &:before{
        position: absolute;
        content: '';
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        right: 16px;
        top: -14px;
        background: #fff;
    }
`

export {
    Notification,
    NotificationWrapper
}