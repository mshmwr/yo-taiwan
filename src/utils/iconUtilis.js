import { ReactComponent as IconWeatherSunny } from "@asset/icon/sunny.svg";
import { ReactComponent as IconWeatherRainy } from "@asset/icon/rainy.svg";
import { ReactComponent as IconWeatherCloudy } from "@asset/icon/cloudy.svg";
import { ReactComponent as IconBus } from "@asset/icon/bus.svg";
import { ReactComponent as IconLocation } from "@asset/icon/location.svg";
import { ReactComponent as IconMyLocation } from "@asset/icon/my_location.svg";
import { ReactComponent as IconYoTaiwanLogo } from "@asset/icon/YoTaiwan_logo.svg";
import { ReactComponent as IconYoBikeLogo } from "@asset/icon/YoBike_logo.svg";
import { ReactComponent as IconCamping } from "@asset/icon/camping.svg";
import { ReactComponent as IconTemple } from "@asset/icon/temple.svg";
import { ReactComponent as IconOnsen } from "@asset/icon/onsen.svg";
import { ReactComponent as IconDiving } from "@asset/icon/diving.svg";
import { ReactComponent as IconBook } from "@asset/icon/book.svg";
import { ReactComponent as IconBicycle } from "@asset/icon/dropdown_bicycle.svg";
import { ReactComponent as IconBusSelect } from "@asset/icon/dropdown_bus.svg";
import { ReactComponent as IconNearbyFood } from "@asset/icon/nearby_food.svg";

function getWeatherIcon(weatherName) {
  //TODO: 或用 weatherValue 來做 switch: - [預報產品天氣描述代碼表](https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf)
  if (!weatherName) return null;
  if (weatherName.includes("雨")) {
    return <IconWeatherRainy alt={`${weatherName}`} />;
  }
  if (weatherName.includes("陰") || weatherName.includes("雲")) {
    return <IconWeatherCloudy alt={`${weatherName}`} />;
  }

  if (weatherName.includes("晴")) {
    return <IconWeatherSunny alt={`${weatherName}`} />;
  }
  return <p>{weatherName}</p>;
}

function getBusIcon() {
  return <IconBus alt="bus" />;
}

function getIconBicycle() {
  return <IconBicycle alt="Bicycle" />;
}

function getIconBusSelect() {
  return <IconBusSelect alt="bus" />;
}

function getCampingIcon() {
  return <IconCamping alt="Camping" />;
}
function getIconTemple() {
  return <IconTemple alt="Temple" />;
}
function getIconOnsen() {
  return <IconOnsen alt="Onsen" />;
}
function getIconDiving() {
  return <IconDiving alt="Diving" />;
}
function getIconBook() {
  return <IconBook alt="Book" />;
}

function getLocationIcon() {
  return <IconLocation alt="location" />;
}

function getMyLocationIcon() {
  return <IconMyLocation alt="my_location" />;
}

function getyoTaiwanLogoIcon() {
  return <IconYoTaiwanLogo alt="YoTaiwanLogo" />;
}

function getYoBikeLogoIcon() {
  return <IconYoBikeLogo alt="YoBikeLogo" />;
}

function getNearbyFoodIcon() {
  return <IconNearbyFood alt="NearbyFood" />;
}

export {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
  getMyLocationIcon,
  getyoTaiwanLogoIcon,
  getYoBikeLogoIcon,
  getCampingIcon,
  getIconTemple,
  getIconOnsen,
  getIconDiving,
  getIconBook,
  getIconBicycle,
  getIconBusSelect,
  getNearbyFoodIcon,
};
