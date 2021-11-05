import styled from "styled-components";

const Image = styled.img`
 text-align: center;
 height:600px;
 width: 600px;
 object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;



const NotFoundPage = () => {
    return (
        <Container>
            <h1>404</h1>
            <h2>Page not found...</h2>
            <Image src='https://www.dialog.ua/images/news/fb647a386b21faced13f3da867bba858.jpg' />
        </Container>
    )
};

export default NotFoundPage;