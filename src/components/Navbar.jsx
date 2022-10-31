import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from "../responsive";

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    text-align: center;
     ${mobile({ padding: "10px 0px" })};
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center
`
const Language = styled.span`
    font-size: 16px;
    font-weight: bold;
    display: flex;
     ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding: 3px;
`
const Input = styled.input`
    border: none;
     ${mobile({ width: "50px" })};
`

const Center = styled.div`
    flex:1;
    text-align: center;
    display: flex;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin: auto
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuList = styled.div`
    font-size: 16px;
    cursor: pointer;
   margin-left:25px;
   font-weight: bold;  
`
// const Link = styled.a`
//     text-decoration: none;
// `
const Navbar = () => {
    return (
        <>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                        <SearchContainer>
                            <Input />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </SearchContainer>
                    </Language>
                </Left>
                <Center>
                    <Logo>
                        Fashion Hub
                    </Logo>
                </Center>
                <Right>
                    <Link to="/register">
                        <MenuList>
                            Register
                        </MenuList>
                    </Link>
                    <Link to="/login">
                        <MenuList>
                            Sign In
                        </MenuList>
                    </Link>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                        <MenuList>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </MenuList>
                    </Link>
                </Right>
            </Wrapper>
        </>
    )
}

export default Navbar