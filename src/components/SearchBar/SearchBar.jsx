import {
    SearchBarWrap,
    SearchInput,
    SearchButton
} from "./SearchBar.elements";

const SearchBar = ({search, getSearch, setSearch}) => {

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    return(
        <SearchBarWrap onSubmit = {getSearch}>
            <SearchInput
                type = "text"
                defaultValue = {search}
                onChange = {updateSearch}
            />
            <SearchButton type = "submit">
                Search
            </SearchButton>
        </SearchBarWrap>   
    );
}
export default SearchBar;
