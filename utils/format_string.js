const formatNumberWithCommas = (num) => {

  if (typeof num === 'string') {
    num = parseInt(num);
  }
  
  return num.toLocaleString();
}

export {
  formatNumberWithCommas
}
