import { fetcher } from "@utils/axios";
const authorization = "CWB-D997CC8B-DFC0-403B-8FD7-705C37EC9A02";

const getWeather = async () => {
  return await fetcher(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${authorization}`
  );
};

export default getWeather;
