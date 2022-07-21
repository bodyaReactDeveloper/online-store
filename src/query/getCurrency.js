import { gql } from "@apollo/client"

const getCurr = gql`
query{
  currencies{
    label
    symbol
  }
}
`

export default getCurr