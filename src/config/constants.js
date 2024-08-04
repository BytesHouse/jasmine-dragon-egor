// import tea from "../../public/assets/Images/teagreen.png"
const tea = "/assets/Images/teagreen.png";
// import flower from "../../public/assets/Images/Flower.png";
const flower = "/assets/Images/Flower.png";
import { Strelka, Good, Plus } from "../ui-kit/icons";
export const mock = [
  {
    image: tea,
    name: "Чай зеленый",
    description:
      "Наша уникальная смесь зеленого чая подарит вам ощущение свежести и бодрости.",
    price: "18.75 Lei",
  },
  {
    image: flower,
    name: "Ромашка",
    description:
      "Наши цветы ромашки собираются вручную, чтобы предложить вам наилучшее качество.",
    price: "12.00 Lei",
  },
  {
    image: tea,
    name: "Чай белый",
    description:
      "Легкий и нежный вкус белого чая идеально подойдет для утреннего чаепития.",
    price: "30.00 Lei",
  },
  {
    image: flower,
    name: "Лаванда",
    description:
      "Цветы лаванды помогут вам расслабиться и насладиться приятным ароматом.",
    price: "15.50 Lei",
  },
  {
    image: tea,
    name: "Чай улун",
    description:
      "Наш улун обладает уникальным ароматом и богатым вкусом, который не оставит вас равнодушным.",
    price: "22.80 Lei",
  },
  {
    image: flower,
    name: "Роза",
    description:
      "Розовые лепестки создадут атмосферу романтики и красоты в вашем доме.",
    price: "25.00 Lei",
  },
  {
    image: tea,
    name: "Чай травяной",
    description:
      "Смесь различных трав подарит вам гармонию и спокойствие в любой день.",
    price: "19.90 Lei",
  },
  {
    image: flower,
    name: "Череда",
    description:
      "Цветы череды помогут укрепить ваше здоровье и улучшить самочувствие.",
    price: "17.20 Lei",
  },
  {
    image: tea,
    name: "Чай зеленый",
    description:
      "Наша уникальная смесь зеленого чая подарит вам ощущение свежести и бодрости.",
    price: "18.75 Lei",
  },
  {
    image: flower,
    name: "Ромашка",
    description:
      "Наши цветы ромашки собираются вручную, чтобы предложить вам наилучшее качество.",
    price: "12.00 Lei",
  },
  {
    image: tea,
    name: "Чай белый",
    description:
      "Легкий и нежный вкус белого чая идеально подойдет для утреннего чаепития.",
    price: "30.00 Lei",
  },
  {
    image: flower,
    name: "Лаванда",
    description:
      "Цветы лаванды помогут вам расслабиться и насладиться приятным ароматом.",
    price: "15.50 Lei",
  },
  {
    image: tea,
    name: "Чай улун",
    description:
      "Наш улун обладает уникальным ароматом и богатым вкусом, который не оставит вас равнодушным.",
    price: "22.80 Lei",
  },
  {
    image: flower,
    name: "Роза",
    description:
      "Розовые лепестки создадут атмосферу романтики и красоты в вашем доме.",
    price: "25.00 Lei",
  },
  {
    image: tea,
    name: "Чай травяной",
    description:
      "Смесь различных трав подарит вам гармонию и спокойствие в любой день.",
    price: "19.90 Lei",
  },
  {
    image: flower,
    name: "Череда",
    description:
      "Цветы череды помогут укрепить ваше здоровье и улучшить самочувствие.",
    price: "17.20 Lei",
  },
  {
    image: tea,
    name: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    image: flower,
    name: "Хризантема",
    description:
      "У нас вы найдете самые свежие хризантемы, которые украсят ваш дом и поднимут настроение.",
    price: "14.75 Lei",
  },
];
export const mock2 = [
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
];

export const mock3 = [
  { id: 0, title: "Выгодня цена", icon: <Good />, value: "favorible_price" },
  {
    id: 1,
    title: "Дешевле",
    icon: <Strelka isMini className="rotate-90" />,
    value: "less_expensive",
  },
  {
    id: 2,
    title: "Дороже",
    icon: <Strelka isMini className="-rotate-90" />,
    value: "more_expensive",
  },
  { id: 3, title: "Новинки", icon: <Plus />, value: "new_products" },
];
// export const mock5 = [
//   { id: 1, title: "Ру", value: `Ру` },
//   { id: 2, title: "Ro", value: `Ro` },
//   // { id: 3, title: "En", value: `En` },
// ];

export const privacyText = [
  { id: 0, title: "privacy_title_0", text: "privacy_text_00" },
  { id: 1, title: "privacy_title_1", text: "privacy_text_01" },
  { id: 2, title: "privacy_title_2", text: "privacy_text_2" },
  { id: 3, title: "privacy_title_3", text: "privacy_text_3" },
  { id: 4, title: "privacy_title_4", text: "privacy_text_4" },
  { id: 5, title: "privacy_title_5", text: "privacy_text_5" },
  { id: 6, title: "privacy_title_6", text: "privacy_text_6" },
  { id: 7, title: "privacy_title_7", text: "privacy_text_7" },
];

export const termsText = [
  { id: 0, title: "terms_title_0", text: "terms_text_00" },
  { id: 1, title: "terms_title_1", text: "terms_text_01" },
  { id: 2, title: "terms_title_2", text: "terms_text_2" },
  { id: 3, title: "terms_title_3", text: "terms_text_3" },
  { id: 4, title: "terms_title_4", text: "terms_text_4" },
  { id: 5, title: "terms_title_5", text: "terms_text_5" },
  { id: 6, title: "terms_title_6", text: "terms_text_6" },
];

export const FAQ_text = [
  { title: "faq_question_1", text: "faq_answer_1" },
  { title: "faq_question_2", text: "faq_answer_2" },
  { title: "faq_question_3", text: "faq_answer_3" },
  { title: "faq_question_4", text: "faq_answer_4" },
  { title: "faq_question_5", text: "faq_answer_5" },
  { title: "faq_question_6", text: "faq_answer_6" },
  { title: "faq_question_7", text: "faq_answer_7" },
  { title: "faq_question_8", text: "faq_answer_8" },
  { title: "faq_question_9", text: "faq_answer_9" },
  { title: "faq_question_10", text: "faq_answer_10" },
  { title: "faq_question_11", text: "faq_answer_11" },
  { title: "faq_question_12", text: "faq_answer_12" },
  { title: "faq_question_13", text: "faq_answer_13" },
  { title: "faq_question_14", text: "faq_answer_14" },
  { title: "faq_question_15", text: "faq_answer_15" },
  { title: "faq_question_16", text: "faq_answer_16" },
  { title: "faq_question_17", text: "faq_answer_17" },
  { title: "faq_question_18", text: "faq_answer_18" },
  { title: "faq_question_19", text: "faq_answer_19" },
  { title: "faq_question_20", text: "faq_answer_20" },
];

export const RecentlyOrderCols = [
  {
    title: "Номер заказа",
    text: "orderNumber",
  },
  { title: "Дата", text: "date" },
  { title: "Адрес доставки", text: "deliveryAddress" },
  { title: "Статус", text: "status" },
  { title: "Действия", text: "actions" },
];

export const RecentlyOrdersMock = [
  {
    orderNumber: "234538902",
    // createdAt: "16.01.2024",
    updatedAt: "16.01.2024",
    adress:
      "Strada Grivitei 286, Braila, Braila, 810040, România, +40771050788.",
    status: "success",
    link: "/",
  },
  {
    orderNumber: "234538902",
    // createdAt: "16.01.2024",
    updatedAt: "16.01.2024",
    adress:
      "Strada Grivitei 286, Braila, Braila, 810040, România, +40771050788.",
    status: "success",
    link: "/",
  },
  {
    orderNumber: "234538902",
    // createdAt: "16.01.2024",
    updatedAt: "16.01.2024",
    adress:
      "Strada Grivitei 286, Braila, Braila, 810040, România, +40771050788.",
    status: "success",
    link: "/",
  },
  {
    orderNumber: "234538902",
    // createdAt: "16.01.2024",
    updatedAt: "16.01.2024",
    adress:
      "Strada Grivitei 286, Braila, Braila, 810040, România, +40771050788.",
    status: "success",
    link: "/",
  },
  {
    orderNumber: "234538902",
    // createdAt: "16.01.2024",
    updatedAt: "16.01.2024",
    adress:
      "Strada Grivitei 286, Braila, Braila, 810040, România, +40771050788.",
    status: "success",
    link: "/",
  },
];

export const orderCols = [
  { title: "Имя товара", toTranslate: "productName" },
  { title: "ID товара", toTranslate: "productCode" },
  { title: "Цена", toTranslate: "price" },
  { title: "Кол-во", toTranslate: "quantity" },
  { title: "Cтоимость", toTranslate: "totalPrice" },
];

export const orderMock = [
  {
    productName: "Чай расыпной Пуэр экстракт малины с женьшенем",
    productCode: "10327",
    price: "200.00 Lei",
    quantity: 5,
    totalPrice: "1000.00 Lei",
  },
  {
    productName: "Чай расыпной Пуэр экстракт малины с женьшенем",
    productCode: "10327",
    price: "200.00 Lei",
    quantity: 5,
    totalPrice: "1000.00 Lei",
  },
  {
    productName: "Чай расыпной Пуэр экстракт малины с женьшенем",
    productCode: "10327",
    price: "200.00 Lei",
    quantity: 5,
    totalPrice: "1000.00 Lei",
  },
  {
    productName: "Чай расыпной Пуэр экстракт малины с женьшенем",
    productCode: "10327",
    price: "200.00 Lei",
    quantity: 5,
    totalPrice: "1000.00 Lei",
  },
];

export const flexRow = [
  {
    h5: "flexRow1",
    p1: "count",
    bgPath: "bg-[url('/assets/Images/FlexRow/0.png')]",
  },
  {
    h5: "flexRow2",
    p1: "count",
    bgPath: "bg-[url('/assets/Images/FlexRow/1.png')]",
  },
  {
    h5: "flexRow3",
    p1: "count",
    bgPath: "bg-[url('/assets/Images/FlexRow/2.png')]",
  },
  {
    h5: "flexRow4",
    p1: "count",
    bgPath: "bg-[url('/assets/Images/FlexRow/3.png')]",
  },
  {
    h5: "flexRow5",
    p1: "count",
    bgPath: "bg-[url('/assets/Images/FlexRow/4.png')]",
  },
];

export const labels = [
  { src: "/assets/Images/Labels/1.svg", width: 640, alt: "1" },
  { src: "/assets/Images/Labels/2.svg", width: 216, alt: "2" },
  { src: "/assets/Images/Labels/3.svg", width: 300, alt: "3" },
  { src: "/assets/Images/Labels/4.svg", width: 252, alt: "4" },
  { src: "/assets/Images/Labels/5.svg", width: 235, alt: "5" },
  { src: "/assets/Images/Labels/6.svg", width: 476, alt: "6" },
];
