import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 3px;
    position: relative;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin: 5px;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: #fff;
    margin: 5px
`

const Button = styled.button`
    border: none;
    padding: 10px;
    color: gray;
    cursor: pointer;
    font-weight: 600
`

const CategoryItem = (items) => {
    return (
        <Container>
            <Image src={items.img} />
            <Info>
                <Title>
                    {items.title}
                </Title>
                <Link to={`/products/${items.cat}`}><Button>SHOP NOW</Button></Link>
            </Info>
        </Container>
    )
}

export default CategoryItem