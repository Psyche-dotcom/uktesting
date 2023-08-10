import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <div className="bg-grey p-5">
      <h5 className="text-h4">Dashboard</h5>
      <div className="flex justify-between items-center">
        <div className="flex">
          <Link href="#">Home </Link>
          <h6>
            <p>
              / Dashboard / <span className="text-black">Default</span>
            </p>
          </h6>
        </div>
        <div className="flex gap-4">
          <Link
            href="/Invite"
            className="flex gap-2 items-center rounded-md bg-white px-4 py-2"
          >
            <Image
              src="/favicon_io/plus.svg"
              height={16}
              width={16}
              alt="Add button icon"
            />
            <h6 className="text-black">New Member</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
