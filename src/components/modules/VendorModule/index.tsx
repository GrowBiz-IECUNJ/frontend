import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "src/components/contexts/AuthContext";
import { IAuthContext } from "src/components/contexts/AuthContext/interface";
import Image from "next/image";

import { ALink } from "@elements";
import { TextInput, Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { DialogueCard } from "../AuthModule/module-elements/DialogueCard";
import { IRegisterData } from "../AuthModule/interface";
import { EMPTY_REGISTER_DATA } from "../AuthModule/constant";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VendorModule: React.FC = () => {
  return (
    <>
      <div className=" bg-blue-light relative w-full py-10 lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <ToastContainer />
        <h1 className="text-3xl text-center">Transaksi Baru</h1>
        <br />
        <DialogueCard>
          <h2>Pemasukan</h2>
          <TextInput
            id="phone"
            type="text"
            placeholder="20000"
            required={true}
          />
          <br />
          <h2>Pemasukan</h2>
          <TextInput
            id="phone"
            type="text"
            placeholder="20000"
            required={true}
          />
          <br />
          <h2>Pemasukan</h2>
          <TextInput
            id="phone"
            type="text"
            placeholder="20000"
            required={true}
          />
          <br />
        </DialogueCard>
      </div>
    </>
  );
};
