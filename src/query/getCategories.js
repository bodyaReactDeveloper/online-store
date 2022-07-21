import { gql } from "apollo-boost";

const getNamesOfCategories = gql`
    query{
        categories{
   	        name 
        }
    }
`

export default getNamesOfCategories