import { ptxFetcher } from "@utils/axios";
import { URL_ROOT, URL_TOURISM } from "@utils/constants";

export const doSearchTripId = async (id) => {
  const conditions = {
    $filter: `ScenicSpotID eq '${id}'`,
  };
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/ScenicSpot`, conditions);
};

export const doSearchRestaurantId = async (id) => {
  const conditions = {
    $filter: `RestaurantID eq '${id}'`,
  };
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/Restaurant`, conditions);
};
