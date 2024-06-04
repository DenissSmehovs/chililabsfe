import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useProduct (id: string) {
    const { data, error, isLoading } = useSWR(`http://localhost:3004/product/${id}`, fetcher)

    return {
      product: data,
      isLoading,
      isError: error
    }
  }