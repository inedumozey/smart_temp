import {useRouter} from 'next/router'

import {
    TransactionStyle,
    Header,
    Title
} from '../styles'

export default function Transactions({Title_, base}) {
  const router = useRouter()

  return (
    <TransactionStyle>
        <Header>
            <Title onClick={()=>router.push(`/admin/${base}/transactions`)}>{Title_}</Title>
        </Header>
    </TransactionStyle>
  )
}
