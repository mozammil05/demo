export const cryptoDecimals = (inValue: any) => {
  let value = Number(inValue);
  if (value == 0) {
    return 0.0;
  } else if ((value > 0 && value <= 9) || (value < 0 && value >= -9)) {
    return toCustomFixed(value, 5);
  } else if ((value > 9 && value <= 99) || (value < -9 && value >= -99)) {
    return toCustomFixed(value, 4);
  } else if ((value > 99 && value <= 999) || (value < -99 && value >= -999)) {
    return toCustomFixed(value, 3);
  } else if (
    (value > 999 && value <= 9999) ||
    (value < -999 && value >= -9999)
  ) {
    return toCustomFixed(value, 2);
  } else if (value > 9999 || value < -9999) {
    return toCustomFixed(value, 0);
  }
};

// export const crypyoo = (value) => {
//   const map = new Map()
//     .set(value == 0, "0.00")
//     .set(5, toCustomFixed(value, 5))
//     .set(
//       (value > 9 && value <= 99) || (value < -9 && value >= -99),
//       toCustomFixed(value, 4)
//     )
//     .set(
//       (value > 99 && value <= 999) || (value < -99 && value >= -999),
//       toCustomFixed(value, 3)
//     )
//     .set(
//       (value > 999 && value <= 9999) || (value < -999 && value >= -9999),
//       toCustomFixed(value, 2)
//     )
//     .set(value > 9999 || value < -9999, toCustomFixed(value, 0));
//   console.log("map", map);
//   return map.has(value) ? map.get(value) : "Unknown";
// };

const toCustomFixed = (num: any, fixed: number) => {
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
};

export const cryptoUsdDecimals = (inValue: number) => {
  let value = Number(inValue);
  let formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  if (value == 0) {
    return 0.0;
  } else if ((value > 0 && value <= 9) || (value < 0 && value >= -9)) {
    return value?.toFixed(5);
  } else if ((value > 9 && value <= 99) || (value < -9 && value >= -99)) {
    return value?.toFixed(4);
  } else if ((value > 99 && value <= 999) || (value < -99 && value >= -999)) {
    return value?.toFixed(3);
  } else if (
    (value > 999 && value <= 9999) ||
    (value < -999 && value >= -9999)
  ) {
    return value?.toFixed(2);
  } else if (value > 9999 || value < -9999) {
    let data;
    data = Number(value?.toFixed());
    data = formatter.format(data);
    return data;
  }
};
