// Файл конфигурации компонента Filter

// Примечания:
//     При редактировании этого файла следует быть осторожным, чтобы избежать ошибок конфигурации,
//     которые могут привести к непредсказуемому поведению приложения.
//     Любые изменения в этом файле должны быть тщательно протестированы перед развертыванием в продакшен-среде.

// Базовые настройки RadioButton Stock
// 1. key - Ключ необходимый для .map()
// 2. value - значение которое сравнивается с state
// 3. t - ключ необходимый для переводов
// P.S. Количество элементов массива было протестированно до 99
// TODO
//  1. Нужно будет всем обьектам раздать поле id
export const filterConfig = {
  stock: [
    {
      key: 1,
      value: "В наличии",
      t: "available",
    },
    {
      key: 2,
      value: "Нет в наличии",
      t: "unavailable",
    },
  ],
  type: [
    {
      key: 1,
      value: "Пуэр",
      t: "puer",
      checked: false,
    },
    {
      key: 2,
      value: "Улун",
      t: "oolong",
      checked: false,
    },
    {
      key: 3,
      value: "Красный чай",
      t: "redTea",
      checked: false,
    },
    {
      key: 4,
      value: "Зеленый чай",
      t: "greenTea",
      checked: false,
    },
    {
      key: 5,
      value: "Белый чай",
      t: "whiteTea",
      checked: false,
    },
    {
      key: 6,
      value: "Остальные чаи",
      t: "othersTea",
      checked: false,
    },
  ],
  manufacturer: [
    {
      key: 1,
      value: "Производитель",
      t: "manufacturer",
    },
    {
      key: 2,
      value: "Производитель",
      t: "manufacturer",
    },
    {
      key: 3,
      value: "Производитель",
      t: "manufacturer",
    },
    {
      key: 4,
      value: "Производитель",
      t: "manufacturer",
    },
    {
      key: 5,
      value: "Производитель",
      t: "manufacturer",
    },
    {
      key: 6,
      value: "Производитель",
      t: "manufacturer",
    },
  ],
  price: [500, 10_000_000],
};
