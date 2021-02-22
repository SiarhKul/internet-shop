const db = [
  {
    ticketsBenefit: [{ param: '12 месяц', type: 'рассрочка' }, { param: '35%', type: 'экономия' }],
    carousel: [],
    products: {
      nameProduct: 'iPhone SE 32GB', color: 'Красный', price: '320', priceThrough: '375',
    },
    ticketCondition: [{ value: '5+', valueByString: 'Как новый' }, { value: '5', valueByString: 'Отличный' }, { value: '4+', valueByString: 'Хорошо' }],
  },
];
console.log(db[0].ticketsBenefit[0].param);
module.exports = db;
