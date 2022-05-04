// Selector
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.precio + amount, 0);