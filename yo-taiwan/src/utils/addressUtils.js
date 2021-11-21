const cityTitleList = ["縣", "市"];
const distTitleList = ["市", "鎮", "鄉", "區"];

const splitAddressToCityAndDistrict = (address) => {
  if (!address) {
    return "null";
  }

  const getTitleIndex = (address, titleList) => {
    for (let i = 0; i < titleList.length; i++) {
      const index = address.indexOf(titleList[i]);
      if (index > -1) {
        return index;
      }
    }
    return -1;
  };

  const cityIndex = getTitleIndex(address, cityTitleList);
  const cityStr = address.substring(0, cityIndex + 1);

  const distAddress = address.substring(cityIndex + 1);
  const distIndex = getTitleIndex(distAddress, distTitleList);
  const distStr = distAddress.substring(0, distIndex + 1).replace(/\d+/, "");

  return `${cityStr}, ${distStr}`;
};

export { splitAddressToCityAndDistrict };
