export function setItem(data) {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem("sw-ticket-storage", stringifyData);
}

export function getItem() {
  const getItem = localStorage.getItem("sw-ticket-storage");
  if (getItem && typeof getItem === "string") {
    return JSON.parse(getItem);
  }
  return null;
}
