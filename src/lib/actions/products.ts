'use server';

import { createClient } from '@/lib/supabase/server';

interface GetProductsParams {
  limit: number;
}

export async function getProducts({ limit = 10 }: GetProductsParams) {
  try {
    const supabase = createClient();
    // TODO: make pagination here for infinite scroll
    // TODO: The products table does not show up in TS

    // TODO: also add order?
    const { data: products, error } = await supabase
      .from('products')
      .select('*, product_files(*), media(*)')
      .eq('approved_for_sale', 'approved')
      .limit(limit);

    // Process products to add image URLs
    const productsWithImageUrls = products?.map((product) => {
      if (product.media) {
        const { prefix, filename } = product.media;
        const imagePath = `${prefix}/${filename}`;

        const { data } = supabase.storage
          .from('digital-marketplace-bucket')
          .getPublicUrl(imagePath);

        // Add the image URL to the product object
        return {
          ...product,
          imageUrl: data.publicUrl, // Add the URL here
        };
      }
      return product;
    });

    return productsWithImageUrls;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

interface GetProductByIdParams {
  id: string;
}

export async function getProductById({ id }: GetProductByIdParams) {
  console.log(id);
  try {
    const supabase = createClient();

    const { data: product, error } = await supabase
      .from('products')
      .select('*, media(*)')
      .eq('id', id)
      .single();

    let productWithImageUrl;
    // Process product to add image URL
    if (product) {
      const { prefix, filename } = product.media;
      const imagePath = `${prefix}/${filename}`;

      const { data } = supabase.storage
        .from('digital-marketplace-bucket')
        .getPublicUrl(imagePath);

      // Add the image URL to the product object
      productWithImageUrl = {
        ...product,
        imageUrl: data.publicUrl,
      };
    }

    return productWithImageUrl;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
