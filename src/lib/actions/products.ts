'use server';

import { revalidatePath } from 'next/cache';

import { createClient } from '@/lib/supabase/server';

interface GetAppointmentParams {
  poolValue: string;
}

export async function getProducts() {
  try {
    const supabase = createClient();
    // TODO: make pagination here for infinite scroll
    // TODO: The products table does not show up in TS

    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('approved_for_sale', 'approved')
      .limit(10);

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
