import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  align-items: center;
  justify-content: center;
   position: relative;
   display: flex;
   &:hover ${Info}{
    opacity: 1
   }
  `
const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 2
`;


const Icon = styled.div`
   width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = (items) => {

  const location = useLocation();
  const id = location.pathname.split("/")[2]

  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      try {

      } catch (err) {

      }
    }
  }, [id])
  return (
    <Container>
      <Circle />
      <Image src={items.img} />
      <Info>
        <Icon>
          <i class="fa-solid fa-cart-shopping"></i>
        </Icon>
        <Icon>
          <Link to={`/product/${items._id}`}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </Icon>
        <Icon>
          <i class="fa-solid fa-heart"></i>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product