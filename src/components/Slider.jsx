import React, { useState } from 'react';
import styled from 'styled-components';
import sliderItems from '../data';
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    border-radius: 50%;
    height: 50px;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    opacity: 0.5;
    cursor: pointer;
    z-index: 2
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    height: 100vh;
    width:100vw;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
    flex: 1;
    height:100%;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding: 5px;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick()}>
                <i class="fa-solid fa-chevron-left"></i>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((items) => (
                    <Slide bg={items.bg}>
                        <ImgContainer>
                            <Image src={items.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>
                                {items.title}
                            </Title>
                            <Desc>
                                {items.desc}
                            </Desc>
                            <Link to="/product">
                                <Button>
                                    SHOP NOW
                                </Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick()}>
                <i class="fa-solid fa-chevron-right"></i>
            </Arrow>
        </Container>
    )
}

export default Slider