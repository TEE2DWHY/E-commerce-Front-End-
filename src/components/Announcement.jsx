import React from 'react'
import styled from 'styled-components'


const News = styled.div`
     background-color: teal;
     color: white;
     height: 30px;
     text-align: center;
     padding: 10px;
     font-size: 14px
`

const Announcement = () => {
    return (
        <News>
            Super Deal! Free shipping on orders over $50.
        </News>
    )
}

export default Announcement