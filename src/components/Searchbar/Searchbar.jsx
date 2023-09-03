import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, Searchbar } from "./Searchbar_styled"

export const SearchBar = ({ query, onHandlerRequest }) => {
     return (
      <Searchbar>
        <SearchForm>
          <SearchFormButton>
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={query}
            onChange={onHandlerRequest}
          />
        </SearchForm>
      </Searchbar>
    );
    
}