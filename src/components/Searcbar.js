import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  SearchFormContainer,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from "./style.component";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string,
  };
  state = {
    inputValue: "",
  };

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  render() {
    return (
      <SearchFormContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit" />

          <SearchFormInput
            type="text"
            onChange={this.handleInput}
            placeholder="Search images and photos"
            value={this.state.inputValue}
          />
        </SearchForm>
      </SearchFormContainer>
    );
  }
}
