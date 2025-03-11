import { Product } from '@/shared/types/product';

async function mockFetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = localStorage.getItem('products') || '';
      const products = JSON.parse(data) || [];
      resolve(products);
    }, 1000);
  });
}

async function mockSaveProduct(products: Product[]) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem('products', JSON.stringify(products));
      resolve(products);
    }, 1000);
  });
}

export async function getProducts() {
  try {
    const data = (await mockFetchData()) as unknown as Product[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
    throw new Error('Error fetching products');
  }
}

export async function saveProducts(products: Product[]) {
  try {
    const data = await mockSaveProduct(products);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error while saving products: ${error.message}. Please try again.`,
      );
    }
    throw new Error('Error while saving products. Please try again.');
  }
}
