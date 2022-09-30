export const saveLocalData = (key, data) => {
  if (key && data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getLocalData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
};
