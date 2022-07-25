import styled from 'styled-components';
const InputWrapperHeight = '80px'
const InputHeight = '30px'

const AdminWrapper = styled.div`
    width: 100%;
`

const Form = styled.form`
    width: 100%;
    padding: 10px;
`

const InputWrapper = styled.div`
    min-width: 100px;
    height: auto;
    position: relative;
    margin: 10px 5px;

    .item {
        color: #972309;
    }
`

const Input = styled.input`
    display: block;
    width: 100%;
    border: none;
    padding: 5px;
    box-shadow: 1px 3px 3px 0px #ccc;

    &:focus {
        outline: none;
        border: 1px solid #ccc;
        box-shadow: 1px 3px 3px 0px #ccc;
    }
`

const Label = styled.label`
    width: 100%;
    padding: 5px;
    display: block;
    font-size: .8rem;
    font-weight: bold;
    user-select: none;
    -webkit-user-select: none;
`
    
const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    margin-bottom: 20px;
    display: grid;
    border: 1px solid #f1f1f1;
    border-bottom: 2px solid #aaa;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr));
    position: relative;

    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: -12px;
        background: #f1f1f1;
        padding: 2px 4px;
        border-radius: 5px;
        cursor: pointer;
        left: 5px;
        user-select: none;
        -webkit-user-select: none;

        &:hover{
            opacity: .8;
        }

        .edit{
            padding: 3px 15px;
            width: 20px;
            display: block;
            display: flex;
            margin-left: 5px;
            justify-content: center;
            background: var(--major-color-purest);
            color: #fff;
            align-items: center;
            height: 100%;
        }
    }

    .btn{
        position: absolute;
        top: -12px;
        right: 5px;
        display: inline-block;
        width: 100px;
        background: #f1f1f1;
        background: var(--bright-color);
        border: none;
        color: #fff;
        padding: 5px;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;

        &:hover{
            opacity: .8;
        }
    }
    
    span, input{
        font-size: .7rem;
        word-break: break-all
    }
`

const TransactionStyle = styled.div`
    width: 100%;
    padding: 10px;
`

const Header = styled.div`
    padding: 10px;
    border-bottom: 2px solid var(--major-color-purest)
`
const Title = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: var(--major-color-purest)
`


export {
    AdminWrapper,
    Form,
    InputWrapper,
    Container,
    Label,
    Input,
    TransactionStyle,
    Header,
    Title
}