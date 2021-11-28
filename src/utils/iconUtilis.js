import { ReactComponent as IconWeatherSunny } from "../images/icon/sunny.svg";
import { ReactComponent as IconWeatherRainy } from "../images/icon/rainy.svg";
import { ReactComponent as IconWeatherCloudy } from "../images/icon/cloudy.svg";
import { ReactComponent as IconBus } from "../images/icon/bus.svg";
import { ReactComponent as IconLocation } from "../images/icon/location.svg";
import { ReactComponent as IconMyLocation } from "../images/icon/my_location.svg";
import { ReactComponent as IconYoTaiwanLogo } from "../images/icon/YoTaiwan_logo.svg";
import { ReactComponent as IconYoBikeLogo } from "../images/icon/YoBike_logo.svg";
import { ReactComponent as IconCamping } from "../images/icon/camping.svg";
import { ReactComponent as IconTemple } from "../images/icon/temple.svg";
import { ReactComponent as IconOnsen } from "../images/icon/onsen.svg";
import { ReactComponent as IconDiving } from "../images/icon/diving.svg";
import { ReactComponent as IconBook } from "../images/icon/book.svg";
import { ReactComponent as IconBicycle } from "../images/icon/dropdown_bicycle.svg";
import { ReactComponent as IconBusSelect } from "../images/icon/dropdown_bus.svg";

function getWeatherIcon(weather = null) {
  switch (weather) {
    case "sunny":
      return <IconWeatherSunny alt={`weather-${weather}`} />;
    case "rainy":
      return <IconWeatherRainy alt={`weather-${weather}`} />;
    case "cloudy":
      return <IconWeatherCloudy alt={`weather-${weather}`} />;

    default:
      return <></>;
  }
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
};
