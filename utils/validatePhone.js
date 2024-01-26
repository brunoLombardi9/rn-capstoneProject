const validatePhone = (phone) => {
  if (typeof phone !== "number" || phone.length < 10) {
    return false;
  } else {
    true;
  }
};
export default validatePhone;
