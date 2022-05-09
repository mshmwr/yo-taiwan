const cityTitleList = ["縣", "市"];
const distTitleList = ["市", "鎮", "鄉", "區"];

const splitAddressToCityAndDistrict = (address) => {
  if (!address) {
    return { city: null, district: null };
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
  const city = address.substring(0, cityIndex + 1);

  const districtAddress = address.substring(cityIndex + 1);
  const districtIndex = getTitleIndex(districtAddress, distTitleList);
  const district = districtAddress
    .substring(0, districtIndex + 1)
    .replace(/\d+/, "");

  return { city, district };
};

const getCityWithDistrict = (address) => {
  const addressItems = splitAddressToCityAndDistrict(address);
  return `${addressItems.city}, ${addressItems.district}`;
};

export { getCityWithDistrict, splitAddressToCityAndDistrict };
