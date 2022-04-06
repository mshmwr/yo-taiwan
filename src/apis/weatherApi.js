import axios from "axios";
const authorization = "CWB-D997CC8B-DFC0-403B-8FD7-705C37EC9A02";
const weatherApi = async () => {
  let res = null;
  try {
    await axios
      .get(
        `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${authorization}`
      )
      .then(function (response) {
        res = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    alert("GET Error!!" + error);
  }
  return res;
};

export default weatherApi;
