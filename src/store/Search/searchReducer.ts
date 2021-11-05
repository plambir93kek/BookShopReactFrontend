import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SearchTerm {
    searchTerm: string;
};

const initialState:SearchTerm = {
    searchTerm: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toSearch: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        }
    }
});

export default searchSlice.reducer;
