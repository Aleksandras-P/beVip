export function calcTotalPrice(dateFrom,dateTo, pricelist) {
    const days = Math.ceil((new Date(dateTo) - new Date(dateFrom)) / (1000 * 60 * 60 * 24));
    
    let totalPrice = 0;

    if (days === 7 || days === 14) {
    totalPrice = (days / 7) * (pricelist.week ?? 0);
  } else if (7 < days && days < 14) {
    totalPrice = ((days - 7 ) * (pricelist.day ?? 0)) + (pricelist.week ?? 0);
  } else {
    totalPrice = days * (pricelist.day ?? 0);
  }

   return { days, totalPrice };
   
}