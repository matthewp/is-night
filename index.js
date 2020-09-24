const toString = Object.prototype.toString;

module.exports = function(date) {
  if(toString.call(date) !== '[object Date]')
    throw new Error(`Argument must be a Date object.`);

  let hours = date.getHours();

  if(Number.isNaN(hours))
    throw new Error(`Argument is an Invalid Date`);

  // 8pm to 4am
  return hours >= 20 || hours < 4;
};