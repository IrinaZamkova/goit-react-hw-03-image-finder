import React, { Component } from "react";
import {
  SearchFormContainer,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormLabel,
} from "./style.component";

export default class Searchbar extends Component {
  render() {
    return (
      <SearchFormContainer>
        <SearchForm>
          <SearchFormBtn type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchFormContainer>
    );
  }
}
