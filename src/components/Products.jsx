import { useEffect } from "react";
import styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
     justify-content: space-between
`

const Products = ({ cat, filters, sort }) => {
    //defining products
    const [products, setProducts] = useState([]);


    //defining filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [sortProducts, setSortProducts] = useState([]);

    //if the category changes we would run this function (this function involves getting product from our API)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data)
            } catch (err) {

            }
        }
        getProducts()
    }, [cat])

    //if the filter changes we would run this function 
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)))
        )

    }, [products, cat, filters])


    useEffect(() => {
        if ((sort === "newest")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.createdAt - b.createdAt)
            )
        }
        else if ((sort === "price-asc")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        }
        else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])
    return (
        <Container>
            {cat ? filteredProducts.map(items => (
                <Product  {...items} key={items.id} />
            )) : products.slice(0, 8).map(items => (
                <Product  {...items} key={items.id} />
            ))}
        </Container>
    )
}

export default Products