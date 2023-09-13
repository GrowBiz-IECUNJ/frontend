import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import Image from 'next/image'

import { ALink } from '@elements'
import { TextInput, Button, Spinner } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { DialogueCard } from '../AuthModule/module-elements/DialogueCard'
import { IRegisterData } from '../AuthModule/interface'
import { EMPTY_REGISTER_DATA } from '../AuthModule/constant'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Dropdown } from 'flowbite'
import { Wallet } from './interface'
import { WASI } from 'wasi'

export const WalletModule: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false)
  const [total, setTotal] = useState('')
  const [jenisTransaksi, setJenisTransaksi] = useState('')
  const [tanggalTransaksi, setTanggalTransaksi] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [chooseTypePengeluaran, setChooseTypePengeluaran] =
    useState<Boolean>(false)
  const [chooseTypePemasukan, setChooseTypePemasukan] = useState<Boolean>(false)
  const [wallets, setWallets] = useState<Wallet[]>([])

  const handleDeleteWallet = async (id: Number) => {
    await axios
      .delete(`http://localhost:8000/wallets/wallet/${id}/delete/`)
      .then((response) => {
        toast.success('Success delete data')
      })
      .catch((err) => {
        console.log('eror')
      })
  }

  const handleCreateWallet = async () => {
    await axios
      .post(
        'http://localhost:8000/wallets/wallet/',
        {
          amount_of_money: total,
          type: jenisTransaksi,
          date: tanggalTransaksi,
          description: deskripsi,
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
      .get('http://localhost:8000/wallets/wallet/')
      .then((response) => {
        console.log('risaaa')
        console.log(response.data)
        setWallets(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [wallets])

  return (
    <>
      <div className=" bg-blue-light relative w-full py-10 lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <ToastContainer />
        <h1 className="text-3xl text-center">Transaksi Baru</h1>

        <br />
        <DialogueCard>
          <h2>Total Pemasukan/Pengeluaran</h2>
          <TextInput
            id="phone"
            type="text"
            placeholder="Contoh: 20000"
            required={true}
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <br />
          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpen(!open)}
              className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              {chooseTypePengeluaran || chooseTypePemasukan
                ? `${chooseTypePemasukan ? 'Pemasukan' : 'Pengeluaran'}`
                : 'Jenis Transaksi'}
            </button>
            {open ? (
              <div className="mb-5 origin-top-right right-0 mt-2 w-32 rounded-md shadow-lg">
                <div className="rounded-md bg-white shadow-xs">
                  <a
                    onClick={() => {
                      setJenisTransaksi('Pengeluaran')
                      setChooseTypePengeluaran(!chooseTypePengeluaran)
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Pengeluaran
                  </a>
                  <a
                    onClick={() => {
                      setJenisTransaksi('Pemasukan')
                      setChooseTypePemasukan(!chooseTypePemasukan)
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Pemasukan
                  </a>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>

          <h2 className="mt-2">Tanggal Transaksi</h2>
          <TextInput
            type="text"
            placeholder="Contoh: 2023-03-03"
            required={true}
            value={tanggalTransaksi}
            onChange={(e) => setTanggalTransaksi(e.target.value)}
          />
          <br />
          <h2>Description</h2>
          <TextInput
            type="text"
            placeholder="Contoh: Transaksi ini berupa pemasukan"
            required={true}
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
          <br />

          <Button
            className="bg-indigo-500"
            onClick={() => handleCreateWallet()}
            // onClick={(e) => router.push('/auth/login')}
          >
            Submit
          </Button>
        </DialogueCard>

        {wallets.map((wallet) => (
          <>
            <a
              key={wallet.id}
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {wallet.type}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {wallet.description}
              </p>
              <Button
                className="bg-indigo-500"
                onClick={() => handleDeleteWallet(wallet.id)}
                // onClick={(e) => router.push('/auth/login')}
              >
                Delete
              </Button>
            </a>
          </>
        ))}
      </div>
    </>
  )
}
