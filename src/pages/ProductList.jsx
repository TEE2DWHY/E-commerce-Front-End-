import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Container = styled.div`

`
const Title = styled.h1`
    margin: 25px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px
`

const FilterText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
`
const Select = styled.select`
    padding: 5px;
    margin-right: 20px;
`
const Option = styled.option`

`
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]

    const [filters, setFilters] = useState({})

    const handleChange = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    };
    // console.log(filters);

    const [sort, setSort] = useState("newest");

    const handleSort = (e) => {
        setSort(
            e.target.value
        )
    }

    // console.log(sort)

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleChange}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleChange}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                    <Select onChange={handleSort}>
                        <Option value="newest">Newest</Option>
                        <Option value="price-asc">Price (asc)</Option>
                        <Option value="price-desc">Price (desc)</Option>
                    </Select></Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList