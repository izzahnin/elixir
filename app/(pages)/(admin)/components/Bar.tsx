import Link from "next/link";
import React from "react";

import {
  MdOutlineLocalShipping,
  MdOutlineShoppingBag,
  MdPersonAddAlt,
} from "react-icons/md";

export default function Bar() {
  return (
    <nav className="flex h-screen w-64 flex-col bg-white p-4 shadow-xl">
      <h1 className="m-2 text-heading-m font-bold">Admin</h1>
      <section className="flex flex-col gap-2">
        <Link
          href={"/admin/product"}
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
        >
          <span className="text-2xl">
            <MdOutlineShoppingBag />
          </span>
          <span>Product</span>
        </Link>
        <Link
          href={"/admin/shipping"}
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
        >
          <span className="text-2xl">
            <MdOutlineLocalShipping />
          </span>{" "}
          <span>Shipping</span>
        </Link>
        <Link
          href={"/admin/add-admin"}
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
        >
          <span className="text-2xl">
            <MdPersonAddAlt />{" "}
          </span>
          <span>Add Admin</span>
        </Link>
      </section>
    </nav>
  );
}
