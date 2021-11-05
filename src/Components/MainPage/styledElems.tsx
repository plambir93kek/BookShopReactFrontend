import styled from "styled-components";

export const WrapperMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media(max-width: 920px){
    grid-template-columns: 1fr 1fr;
  }
  
  @media(max-width: 700px){
    grid-template-columns: 1fr;
  }
`;