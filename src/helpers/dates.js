import { format, isToday, isTomorrow, isYesterday } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (date) => {
  if (date) {
    const newDate = new Date(date.substring(0, 10));
    if (isToday(newDate)) return "Сегодня";
    if (isYesterday(newDate)) return "Вчера";
    if (isTomorrow(newDate)) return "Завтра";
    return format(newDate, "dd MMMM yyyy", { locale: ru });
  } else return "";
};
