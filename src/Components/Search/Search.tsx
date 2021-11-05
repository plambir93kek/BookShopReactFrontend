import React from "react";
import { IoSearch } from "react-icons/io5";
import { Input, SearchButton, SearchContainer } from "./styledElemets";
import { useAppDispatch } from "../../store/store";
import { searchSlice } from "../../store/Search/searchReducer";



const Search = () => {

  const dispatch = useAppDispatch();
  const {toSearch} = searchSlice.actions;
  const searchBook = async (e:React.ChangeEvent<HTMLInputElement>) => {
      dispatch(toSearch(e.target.value))
  }

   return (
    <SearchContainer>
        <Input onChange={searchBook} />
        <SearchButton>
           <IoSearch size='25px'/>
        </SearchButton>
    </SearchContainer>
   )
};

export default Search;