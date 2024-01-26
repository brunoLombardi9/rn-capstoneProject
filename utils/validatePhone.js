const validatePhone = (phone) => {
  if (typeof parseInt(phone) !== "number" || phone.length < 8) {
    return false;
  } else {
    return true;
  }
};
export default validatePhone;
