import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { Vendor } from './interface'
import { Button, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DialogueCard } from '../AuthModule/module-elements/DialogueCard'

export const VendorModule: React.FC = () => {
  const [content, setContent] = useState<string | undefined>()
  const { jwt, user, loading }: IAuthContext = useAuthContext()
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [product, setProduct] = useState('')
  const [vendors, setVendors] = useState<Vendor[]>([])

  const handleCreateVendor = async () => {
    await axios
      .post(
        'http://localhost:8000/vendors/vendor/',
        {
          name: name,
          phone_number: phoneNumber,
          product_name: product,
        }
        // config
      )
      .then((response) => {
        // const updatedForums = (vendors || []).map((vendor) => {
        //   if (vendor.id === id) {
        //     return {
        //       ...vendor,
        //       // replies: [...vendor.replies, response.data.content],
        //     }
        //   } else {
        //     return vendor
        //   }
        // })
        // setForums(updatedForums)
        // setContent('')
        // setShowSection(!showSection)
        console.log(response.data)
        toast.success('Success post data')
        // console.log(response.data)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/vendors/vendor/')
      .then((response) => {
        // console.log('risaaa')
        console.log(response.data)
        setVendors(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [vendors])

  return (
    <>
      <div className=" bg-blue-light relative w-full py-10 lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <ToastContainer />
        <h1 className="text-3xl text-center">Vendor Baru</h1>

        <br />
        <DialogueCard>
          <h2>Nama</h2>
          <TextInput
            type="text"
            placeholder="Contoh: John Doe"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <h2>Phone Number</h2>
          <TextInput
            type="text"
            placeholder="Contoh: 08128167165"
            required={true}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />

          <h2>Products</h2>
          <TextInput
            type="text"
            placeholder="Contoh: Margarine"
            required={true}
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <br />

          <Button
            className="bg-indigo-500"
            onClick={() => handleCreateVendor()}
            // onClick={(e) => router.push('/auth/login')}
          >
            Submit
          </Button>
        </DialogueCard>

        {vendors.map((vendor) => (
          <>
            <div
              key={vendor.id}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {vendor.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {vendor.product_name}
              </p>
              <Button
                className="bg-indigo-500"
                // onClick={() => handleDeletevendor(wallet.id)}
                // onClick={(e) => router.push('/auth/login')}
              >
                Delete
              </Button>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
