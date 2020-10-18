import axios from "axios";

const fetchImgWithQuery = (query, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=18758155-8662c213c0daba3e05069688e&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits);
};

export default {fetchImgWithQuery};
