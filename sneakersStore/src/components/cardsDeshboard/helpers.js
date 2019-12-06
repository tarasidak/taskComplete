export function getAvgPrice(items){
  return (getTotalCost(items) / getTotalAmount(items)).toFixed(2);
}

export function getTotalAmount(items){
  return items.length;
}

export function getTotalCost(items){
  return items.reduce((sum, current) => {
    return sum + parseInt(current.price);
  }, 0);
}