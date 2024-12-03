import styled from "styled-components";

function ProductItemBag({productName, productDescription, productCount}) {

    return(
        <ProductsLi>
            <>
                <ProductName>{productName}</ProductName>
                <ProductDescription>{productDescription}</ProductDescription>
                <ProductPrice>10 azn</ProductPrice>
                <ProductCount>{productCount}</ProductCount>
            </>
        </ProductsLi>
    )
}

export default ProductItemBag

const ProductsLi = styled.li`
  display:flex;
  flex-direction:column;
  gap: 10px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
`;

const ProductName = styled.h3`

`;
const ProductDescription = styled.p`

`;

const ProductPrice= styled.span`

`;

const ProductCount= styled.span`

`;