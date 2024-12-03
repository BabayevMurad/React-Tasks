import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useState } from "react";

function ProductList({elementArry, setelementArry, bagProducts, setBagProducts}) {

    let [newArry, setNewArry] = useState([...elementArry])

    return(
        <ProductsSection>
            <Products>
                {newArry.map((elem) => 
                  <ProductItem active={elem.active} productName={elem.productName} productDescription={elem.productDescription} key={elem.id} newArry={newArry} setNewArry={setNewArry} id={elem.id} bagProducts={bagProducts} setBagProducts={setBagProducts} />
                )}
            </Products>
        </ProductsSection>
    )
}

export default ProductList

const ProductsSection = styled.section`
     padding:30px;
`;

const Products = styled.ul`
    display:grid;
    grid-template-columns: auto auto auto;
    gap: 30px 30px;
`;
