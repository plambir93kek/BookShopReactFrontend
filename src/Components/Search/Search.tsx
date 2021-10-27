import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const Input = styled.input.attrs({
    type:'text',
    placeholder: 'Search for book'
})`
  width: 500px;
  border: none;
  outline: none;
  padding-left: 10px;
  @media (max-width: 500px){
    width: 180px;
  }
`;

const SearchButton = styled.button`
  background: var(--main-color);
  border: none;
  display:flex;
  margin: -1px  ;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  height: 100%;
  border-radius: 0 var(--radius) var(--radius) 0px;
  &:active{
      opacity: 0.5;
  }
  `;

const SearchContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0.5rem;
  border:2px solid var(--main-color);
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius);
  @media (max-width: 500px){
    height: 35px;
  }
`;

const Search = () => {
   return (
    <SearchContainer>
        <Input />
        <SearchButton>
           <IoSearch size='25px'/>
        </SearchButton>
    </SearchContainer>
   )
};

export default Search;