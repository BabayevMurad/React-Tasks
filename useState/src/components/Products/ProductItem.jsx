import styled from "styled-components";

function ProductItem({active, productName, productDescription, newArry, setNewArry, id, bagProducts, setBagProducts}) {

    function handleDelete() {
        let arrydel = [...newArry]
        let index = arrydel.findIndex((elem) => elem.id === id)
        arrydel.splice(index, 1)
        setNewArry(arrydel)
    }

    function handleAdd() {
        console.log(bagProducts)
        let productArry = [...bagProducts]
        let index = productArry.findIndex((elem) => elem.id === id)
        if(index === -1) {
            productArry.push({productName:productName, productDescription:productDescription, id:id, count:1})
        }
        else{
            productArry[index].count = productArry[index].count + 1
        }
        setBagProducts(productArry)
        console.log(productArry)
    }

    return(
        <ProductsLi>
            {active && <><ProductName>{productName}</ProductName>
            <ProductDescription>{productDescription}</ProductDescription>
            <ProductPrice>10 azn</ProductPrice></>}
            <HasInStock>{active ? 'HAS IN STOCK' : 'HAS NOT IN STOCK'}</HasInStock>
            <button onClick={handleDelete}>Delete</button>
            {active && <button onClick={handleAdd}>Add</button>}
        </ProductsLi>
    )
}

export default ProductItem

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

const HasInStock= styled.span`

`;
