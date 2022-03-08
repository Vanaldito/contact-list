export function checkName(name) {
  const nameRegex = /^([A-Za-z0-9]| ){1,20}$/;

  return nameRegex.test(name);
}
