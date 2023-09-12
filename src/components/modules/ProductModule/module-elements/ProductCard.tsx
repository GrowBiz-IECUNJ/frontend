import React from "react";
import { Props } from "./interface";
import Image from "next/image";
import { Button } from "flowbite-react";
import { ALink } from "@elements";
import { IAuthContext } from "src/components/contexts/AuthContext/interface";
import { useAuthContext } from "src/components/contexts/AuthContext";
import { Product } from "../interface";
import axios from "axios";

export const ProductCard: React.FC<Props> = ({
  product,
  className,
  handler,
}) => {
  const { jwt }: IAuthContext = useAuthContext();

  return (
    <>
      <div
        className={`
        ${className}    
        relative bg-white drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
      >
        <Image
          src={product.photo}
          alt="foto"
          width={500}
          height={500}
          className="object-cover w-[250px] h-[200px] rounded-t-2xl"
        />
        <div className="flex flex-col gap-x-6 px-6 pt-6">
          <h1 className="text-title-large">{product.name}</h1>
          <p>{product.description}</p>
          <p className="mt-3 mb-6">Rp. {product.price}</p>
        </div>
        <div className="flex justify-center gap-x-6 px-6 pb-6">
          <ALink
            uppercase={false}
            href={`http://localhost:3000/Products/${product.id}`}
          >
            View more
          </ALink>
          <Button
            className="bg-indigo-500"
            disabled={!jwt || product.stock == 0}
          >
            {jwt ? "Add to Cart" : "Login dulu!"}
          </Button>
        </div>
      </div>
    </>
  );
};
