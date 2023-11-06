export function monthGenerate(param: string) {
  switch (param) {
    case "January":
      return "Янв";
    case "February":
      return "Фев";
    case "March":
      return "Март";
    case "April":
      return "Апр";
    case "May":
      return "Май";
    case "June":
      return "Июнь";
    case "July":
      return "Июль";
    case "August":
      return "Авг";
    case "September":
      return "Сент";
    case "October":
      return "Окт";
    case "November":
      return "Нояб";
    case "December":
      return "Дек";

    default:
      break;
  }
}
