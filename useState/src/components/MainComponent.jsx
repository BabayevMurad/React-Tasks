import styled from "styled-components";
import ProductList from "./Products/ProductList";
import AtForm from "./AtForm";
import { useState } from "react";
import { productsArry } from "../assets/data";

function MainComponent({bagProducts, setBagProducts}) {
  let tagColor = 'red'
  let tagFont = '60px'
    
  let [elementArry, setElementArry] = useState([...productsArry])

  return (
    <PageMain>
      <AtForm elementArry={elementArry} setElementArry={setElementArry} />
      <ProductList elementArry={elementArry} setElementArry={setElementArry} bagProducts={bagProducts} setBagProducts={setBagProducts} />
    </PageMain>
  );
}

export default MainComponent;

const PageMain = styled.main`
  margin-bottom: auto;
  margin-top: 30px;
`;

