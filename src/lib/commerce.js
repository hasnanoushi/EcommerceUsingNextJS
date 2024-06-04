import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCEJS_PUBLIC_KEY, true);

export const fetchProducts = async () => {
  const { data } = await commerce.products.list();
  return data;
};

export default commerce;
