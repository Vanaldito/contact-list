export function getContacts() {
  return Object.values(localStorage).map(JSON.parse);
}
