import { ptxFetcher } from "@utils/axios";
import { URL_ROOT, URL_TOURISM } from "@utils/constants";

const getRestaurants = async () => {
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/Restaurant`);
};

export default getRestaurants;
