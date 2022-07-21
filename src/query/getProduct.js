import { gql } from "apollo-boost"

const getProduct = gql `
query {
  categories{
    products{
      inStock
      id
      name
      gallery
      category
      description
      category
      prices{
        amount
        currency{
          label
          symbol
        }
      }
    }
  }
}
`
export default getProduct