import { ptxFetcher } from "@utils/axios";
import { URL_ROOT, URL_TOURISM } from "@utils/constants";

export const doBusRouteSearch = async (busName = "") => {
  return ptxFetcher(
    `${URL_ROOT}/${URL_TOURISM}/Bus/Route/TaiwanTrip/${busName}`
  );
};

export const doBusRouteShp = async () => {
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/Bus/Shape/TaiwanTrip`);
};
