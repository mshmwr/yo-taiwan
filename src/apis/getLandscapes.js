import { ptxFetcher } from "@utils/axios";
import { URL_ROOT, URL_TOURISM } from "@utils/constants";

const getLandscapes = async () => {
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/ScenicSpot`);
};
export default getLandscapes;
