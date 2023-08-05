const circleArea = (radius) => {
  const area = Math.floor(Math.PI * (radius * radius));
  console.log("Dairenin alanı", area);
};

const circleCircumference = (radius) => {
  const circumference = Math.floor(2 * Math.PI * radius);
  console.log("Dairenin Alanı ", circumference);
};
module.exports = {
  circleArea,
  circleCircumference,
};
