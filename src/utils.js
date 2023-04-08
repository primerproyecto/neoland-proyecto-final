//helper para generar arrays. Range
export const range = (start, end) => {
  return [...Array(end).keys()].map((item) => item + start);
};

//comprobar que un elemento este en un array

export const estaPresenteEnArray = (arr, val) => {
  /*  console.log(
    'cc',
    arr.some((arrVal) => val === arrVal),
  ); */
  return arr.some((arrVal) => val === arrVal);
};
