import axios from 'axios'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Product } from './interface'
import { ProductCard } from './module-elements/ProductCard'
import Image from 'next/image'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
// import { CartFooter } from '@elements'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ProductModule: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined)
  const [products, setProducts] = useState<Product[] | null>()
  const { loading }: IAuthContext = useAuthContext()

  const router = useRouter()

  function fetchProducts(): Promise<any> {
    return axios
      .get('http://localhost:8000/products/product')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !products && !loading) {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setProducts([]))
  }

  return (
    <>
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-20 md:py-20 py-24 lg:px-32 md:px-16 px-3 text-sm bg-slate-50">
        <ToastContainer />
        <h1 className="py-12 text-display-medium text-purple-light text-center">
          Katalog Product
        </h1>
        <div className="flex py-6 w-full justify-around gap-x-2">
          <TextInput
            id="searchQuery"
            type="text"
            placeholder="Contoh: snickers"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="w-full"
          />
          <Button className="bg-purple-light">
            <Image
              src="/assets/images/icons/search.svg"
              width={24}
              height={24}
              alt="search"
            />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
          {products ? (
            products?.map((product: Product, key: number) => (
              <ProductCard key={key} product={product} handler={toast.error} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </main>
      {/* <CartFooter router={router.isReady} /> */}
    </>
  )
}
