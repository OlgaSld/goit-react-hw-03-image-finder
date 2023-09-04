import { Component } from "react";
import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, Searchbar } from "./Searchbar_styled"
import { HiSearch } from 'react-icons/hi';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handlerRequest = evt => {
    evt.preventDefault();
    const { query } = this.state;
    if (!query) {
      return;
    }
    this.props.onSubmit(query);
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value.trim() });
  };

  render() {
    const { query } = this.state;
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handlerRequest}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <HiSearch style={{ width: 20, height: 20 }} />
            </SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
} 

  

    
