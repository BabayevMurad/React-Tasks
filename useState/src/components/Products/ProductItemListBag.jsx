import styled from "styled-components";
import ProductItemBag from "./ProcuctItembag";

function ProductListBag({bagProducts, setBagProducts}) {

    return(
        <ProductsSection>
            <Products>
                {bagProducts.bagProducts.map((elem) => 
                    <ProductItemBag  productName={elem.productName} productDescription={elem.productDescription} key={elem.id} />
                )}
            </Products>
        </ProductsSection>
    )
}

export default ProductListBag

const ProductsSection = styled.section`
     padding:30px;
`;

const Products = styled.ul`
    display:grid;
    grid-template-columns: auto auto auto;
    gap: 30px 30px;
`;