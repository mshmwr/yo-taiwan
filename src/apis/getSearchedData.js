import { ptxFetcher } from "@utils/axios";
import { URL_ROOT, URL_TOURISM } from "@utils/constants";

export const doSearch = async (top = 30) => {
  const conditions = {
    $filter: "contains(Address%2C%20'%E8%8A%B1%E8%93%AE')",
    $top: `${top}`,
  };
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/ScenicSpot`, conditions);
};

export const doSearchTopic = async (topicName = "") => {
  const conditions = {
    $filter: `contains(DescriptionDetail,%20%27${topicName}%27)`,
    $top: "10",
  };
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/ScenicSpot`, conditions);
};

export const doSearchName = async (name = "", address = "", top = 30) => {
  const conditions = {
    $filter: `contains(ScenicSpotName%2C'${name}') and contains(Address%2C'${address}')`,
    $top: `${top}`,
  };
  return ptxFetcher(`${URL_ROOT}/${URL_TOURISM}/ScenicSpot`, conditions);
};
