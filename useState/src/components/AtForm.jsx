import styled from "styled-components"

function AtForm({elementArry, setElementArry}) {

    function handleForm(event) {
        event.preventDefault();
        let arry1 = [...elementArry]
        let arry = Object.fromEntries([... new FormData(event.target)])
        console.log(arry)
        arry.id = arry1.lenght === 0 ? 1 : arry1.at(-1).id +1;
        arry1.push(arry)
        setElementArry(arry1)
    }

    return (
        <>
            <ElementAdd onSubmit={handleForm}>
                <Words htmlFor="productName">Product Name</Words>
                <Input type="text" name="productName"/>
        
                <Words htmlFor="ProductDescription">Product Description</Words>
                <Input type="text" name="productDescription"/>
        
                <Input name="active" type="checkbox"/>
                <Words htmlFor="isActive">Has In Stock</Words>
        
                <Button>Add</Button>
            </ElementAdd>
        </>
    )

}

export default AtForm

const ElementAdd = styled.form``

const Words = styled.label`
    padding-left: 10px;
`

const Input = styled.input`
    margin-left: 10px;
    padding-right: 10px;
    
`

const Button = styled.button`
    margin-left: 10px;
`