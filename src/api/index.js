import axios from "axios";
import { BASE_URL } from "@constants";

export const getSearchingPackages = async (searchText, page) => {
  const response = await axios.get(
    `${BASE_URL}/-/v1/search?text=${searchText}&size=10&from=${page}`
  );
  return response;
};
