export function checkPhoneNumber(phoneNumber) {
  const phoneRegex =
    /^(\+\d+|\(\d+\))?(\/| |-)?(\d+)?(\/| |-)?\d{3,}(\/| |-)?\d{3,}$/;

  return phoneRegex.test(phoneNumber.trim());
}
