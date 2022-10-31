import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const Container = styled.div`

`
const Item = styled.div`
    display: flex;
    margin: 20px;
`
const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    height: 70%;
    width: 80%;
    object-fit: cover;
`
const Info = styled.div`
    ${'' /* margin-left: 40px; */}
    flex: 1;

`
const Title = styled.h1`

`
const Desc = styled.p`
  line-height: 1.2;
  font-size: 18px;
`
const Price = styled.p`
    font-size: 40px;
    margin-bottom: 12px ;
`
const ItemDetails = styled.span`
    font-size: 20px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
`
const Size = styled.span`
    font-size: 20px;
    margin-left: 30px;
`
const Select = styled.select`
    margin-left: 20px;
    padding: 5px;
    cursor:pointer;
`

const Option = styled.option`
    cursor:pointer;
`


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Item>
                <ImageContainer>
                    <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                </ImageContainer>
                <Info>
                    <Title>Face Cap (Gucci)</Title>
                    <Desc>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </Desc>
                    <Price>
                        $20
                    </Price>
                    <ItemDetails>
                        Color <FilterColor color="gray" />  <FilterColor color="blue" />  <FilterColor color="pink" />
                        <Size>
                            Size
                        </Size>
                        <Select>
                            <Option>
                                XL
                            </Option>
                            <Option>
                                XX
                            </Option>
                            <Option>
                                L
                            </Option>
                            <Option>
                                M
                            </Option>
                        </Select>
                        <br /> <br />
                        <AddContainer>
                            <AmountContainer>
                                <i class="fa-solid fa-minus"></i>
                                <Amount>1</Amount>
                                <i class="fa-solid fa-plus"></i>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </ItemDetails>
                </Info>
            </Item>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product