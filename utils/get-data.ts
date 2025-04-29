import type { PageProps } from '@/types/PageData';

export const getData = async (): Promise<PageProps> => {
  const { data } = await useAsyncData('page-data', async () => {
    const config = useRuntimeConfig();
    const response = await $fetch<PageProps>(`${config.public.apiUrl}${config.cosmicBucketSlug}/objects/680d7662364aebf5eec897a6?pretty=true&read_key=${config.cosmicReadKey}&depth=1&props=slug,title,metadata,type`);
    // const response = await $fetch<PageProps>(`${process.env.COSMIC_API_URL}${process.env.COSMIC_BUCKET_SLUG}/objects/680d7662364aebf5eec897a6?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`);
    
    return response;
  });

  if (!data.value) {
    throw new Error('Erro ao buscar os dados do Cosmic.');
  }

  return data.value;
};
