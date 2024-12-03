import styled from "styled-components";
import ProductListBag from "./Products/ProductItemListBag";

function Footer(bagProducts, setBagProducts) {
    return(
        <PageFooter>
            <Line><Headline>Bag Elemnts</Headline></Line>
            <ProductListBag bagProducts={bagProducts} setBagProducts={setBagProducts}/>
        </PageFooter>
    )
}

export default Footer

const PageFooter = styled.footer``;

const Line = styled.div`
    background-color: red;
    padding: 0px;
`
const Headline = styled.h1`
  color: white;
`;