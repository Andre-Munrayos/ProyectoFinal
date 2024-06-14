export const truncateString = (str, num) => {
    if (str && str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str || "";  // Devuelve un string vacío si str es null o undefined
      }
    }