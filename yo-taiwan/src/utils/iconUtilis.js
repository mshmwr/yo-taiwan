import { ReactComponent as IconWeatherSunny } from "../images/icon/sunny.svg";
import { ReactComponent as IconWeatherRainy } from "../images/icon/rainy.svg";
import { ReactComponent as IconWeatherCloudy } from "../images/icon/cloudy.svg";
import { ReactComponent as IconBus } from "../images/icon/bus.svg";
import { ReactComponent as IconLocation } from "../images/icon/location.svg";
import { ReactComponent as IconYoTaiwanLogo } from "../images/icon/YoTaiwan_logo.svg";

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

function getLocationIcon() {
  return <IconLocation alt="location" />;
}
function getyoTaiwanLogoIcon() {
  return <IconYoTaiwanLogo alt="YoTaiwanLogo" />;
}

export { getWeatherIcon, getBusIcon, getLocationIcon, getyoTaiwanLogoIcon };
