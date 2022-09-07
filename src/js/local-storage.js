export const saveLocal = (key, value) => {
  try {
    const strLocal = JSON.stringify(value);
    localStorage.setItem(key, strLocal);
  } catch (error) {
    console.error('Помилка збереження даних: ', error.message);
  }
};

export const getLocal = key => {
  try {
    const strLocal = localStorage.getItem(key);
    return strLocal === null ? undefined : JSON.parse(strLocal);
  } catch (error) {
    console.error('Помилка завантаження даних: ', error.message);
  }
};
