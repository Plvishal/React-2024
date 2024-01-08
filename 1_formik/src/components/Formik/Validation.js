export const validateProduct = (product) => {
  const errors = {};
  if (!product.id) {
    errors.id = 'Id should nott be empty';
  } else if (!/^[a-z]{3,3}[0-9]{3,3}$/.test(product.id)) {
    errors.id = 'Id  should not be right format';
  }

  if (!product.name) {
    errors.name = 'Name is required';
  }
  if (!product.qty) {
    errors.qty = 'Quantity Should not be empty';
  }
  if (!product.price) {
    errors.price = 'Price Should not be empty';
  }
  return errors;
};
