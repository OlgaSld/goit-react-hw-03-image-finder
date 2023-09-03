import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, Searchbar } from "./Searchbar_styled"
import { HiSearch } from 'react-icons/hi';

export const SearchBar = ({ query, onHandlerRequest }) => {
     return (
       <Searchbar>
         <SearchForm>
           <SearchFormButton type="submit">
             <SearchFormButtonLabel>
               <HiSearch style={{ width: 20, height: 20 }} />
             </SearchFormButtonLabel>
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