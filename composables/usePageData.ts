// composables/usePageData.ts
import type { PageProps } from '@/types/PageData'

export async function usePageData() {
  const { data, error } = await useAsyncData<PageProps>(
    'page-data', // chave de cache (deve ser única por endpoint)
    () =>
      $fetch(`${process.env.COSMIC_API_URL}${process.env.COSMIC_BUCKET_SLUG}/objects/680d7662364aebf5eec897a6`, {
        params: {
          pretty: true,
          read_key: process.env.COSMIC_READ_KEY,
          depth: 1,
          props: 'slug,title,metadata,type',
        },
      })
  )

  if (error.value) {
    console.error('Erro ao buscar dados da página:', error.value)
  }

  return { pageData: data, error }
}
