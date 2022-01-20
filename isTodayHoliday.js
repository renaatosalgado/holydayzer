import { today } from "./today.js"
import { holidays } from "./holidays.js";

const isTodayHoliday = () => {
  for (let i = 0; i < holidays.length; i++) {
    if (holidays[i].date === today.toLocaleDateString("en-US")) {
      return `Sim, hoje é ${holidays[i].name}`;
    }
  }
  return "Não, hoje não é feriado";
};

export { isTodayHoliday };
