"use client";
import { useAdmin } from "@/firebase/admin/AdminContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  MdExitToApp,
  MdOutlineDashboard,
  MdOutlineLocalShipping,
  MdOutlineShoppingBag,
  MdPersonAddAlt,
} from "react-icons/md";

export default function Bar() {
  const adminAuth = useAdmin();
  const router = useRouter();

  const [superAdmin, setSuperAdmin] = useState(false);

  useEffect(() => {
    if (adminAuth.admin.superAdmin == true) {
      setSuperAdmin(true);
    } else {
      setSuperAdmin(false);
    }
  }, [adminAuth.admin.superAdmin]);
  const handleLogout = () => {
    adminAuth.logOut();
    router.replace('/admin');
  }
  return (
    <nav className="flex h-screen w-64 flex-col bg-white p-4 shadow-xl">
      <h1 className="m-2 text-heading-m font-bold">Admin</h1>
      <section className="flex flex-col gap-2">
        <Link
          href={"/admin/dashboard"}
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
        >
          <span className="text-2xl">
            <MdOutlineDashboard />
          </span>
          <span>Dashboard</span>
        </Link>
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
          href={"/admin/purchase"}
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
        >
          <span className="text-2xl">
            <MdOutlineLocalShipping />
          </span>{" "}
          <span>Purchase</span>
        </Link>

        {superAdmin && <Link
          href={"/admin/admins"}
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
        >
          <span className="text-2xl">
            <MdPersonAddAlt />{" "}
          </span>
          <span>Add Admin</span>
        </Link>}
        <button
          className=" flex cursor-pointer items-center gap-2 rounded-xl p-2  hover:bg-zinc-200"
          onClick={handleLogout}
        >
          <span className="text-2xl">
            <MdExitToApp />{" "}
          </span>
          <span>Log out</span>
        </button>
      </section>
    </nav>
  );
}
