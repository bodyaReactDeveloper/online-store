import { gql } from "@apollo/client"

export const getExactProduct = gql`
    query getExactProduct($id: String! ){
        product( id: $id){
            id
            name
            inStock
            gallery
            attributes{
            id
            name
            type
            items{
                value
                displayValue
            }
            }
            prices{
            amount
            currency{
                symbol
                label
                }
            }
            description
            brand
        }
    }
`
