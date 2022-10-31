import styled from "styled-components";


const Container = styled.div`
    background-color: #fcf5f5;
    text-align: center;
`
const Info = styled.div`
   padding: 50px 0px;
`
const Title = styled.h1`
    font-size: 60px;
    font-weight: 900;
`
const Updates = styled.p`
    font-weight: bold;
    font-size: 25px;
    line-height: 1.2;
`
const Form = styled.form`

`
const Input = styled.input`
    width: 25%;
    height: 18px;
    ${'' /* border-radius: 7px; */}
    border: none;
    border-color: #AAC4FF;
    padding: 10px;
`
const Button = styled.button`
    padding: 10px;
    width: 5%;
    background-color: teal;
    border: none;
    cursor: pointer
`
const NewsLetter = () => {
    return (
        <Container>
            <Info>
                <Title>
                    NewsLetter
                </Title>
                <Updates>
                    Get timely updates from your favorite product
                </Updates>
                <Form>
                    <Input type="email" placeholder="Your email">
                    </Input>
                    <Button>
                        <i class="fa-solid fa-envelope" style={{ color: "#fff" }}></i>
                    </Button>
                </Form>
            </Info>

        </Container>
    )
}

export default NewsLetter