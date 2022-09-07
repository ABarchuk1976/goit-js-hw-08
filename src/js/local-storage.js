export function saveLocal(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error('Помилка збереження даних: ', error.message);
  }
}

export function getLocal(key) {
  try {
    const aValue = localStorage.getItem(key);
    return Number(aValue);
  } catch (error) {
    console.error('Помилка завантаження даних: ', error.message);
  }
}
