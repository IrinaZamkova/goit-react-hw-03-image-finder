import styled from "styled-components";

const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw-10px );
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 12px;
  margin-top: 2px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Img= styled.img `
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  `;
  const SearchFormContainer =styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  `;
const SearchForm =styled.form`
 display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;
const SearchFormBtn =styled.button`
display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
    opacity: 1;
  }
`;
const SearchFormInput =styled.input`
  display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
const SearchFormLabel =styled.span`
position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
    `;
export {GalleryList,GalleryItem,Img,SearchFormContainer,SearchForm,SearchFormBtn,SearchFormInput,SearchFormLabel};