import Link from "next/link";
import Image from "next/image";

import DashboardMain from "@/components/DashboardMain";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Children, useState } from "react";

const DashboardLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="flex">
        <DashboardSidebar />
        <div className="w-full h-full h-screen overflow-scroll overflow-x-hidden">
          <button
            className="ml-auto block lg:hidden"
            onClick={handleShowSidebar}
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17H20M4 12H20M4 7H20"
                stroke="#f9096c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#f9096c"
              />
            </svg>
          </button>
          {showSidebar && (
            <div className="px-5 py-5 bg-white lg:hidden">
              <div className="rounded-md border-2 flex p-2">
                <Image
                  src="/favicon_io/search.svg"
                  height={16}
                  width={16}
                  alt="random-icon"
                />
                <input placeholder="Search..." type="text" className="w-full" />
              </div>
              <h4 className="my-5 text-h4">Projects</h4>
              <ul className="sidebar-lists">
                <li>
                  <Link className="sidebar_icon" href="/">
                    <div className="sidebar__icon">
                      <Image
                        src="/favicon_io/bebo.svg"
                        height={20}
                        width={20}
                        alt="random-icon"
                      />
                    </div>
                    <div>
                      <h5 className="text-h5">Dashboard</h5>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="sidebar_icon"
                    href="/dashboard/usermanagement"
                  >
                    <div className="sidebar__icon">
                      <Image
                        src="/favicon_io/bebo.svg"
                        height={20}
                        width={20}
                        alt="random-icon"
                      />
                    </div>
                    <div>
                      <h5 className="text-h5">User Management</h5>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="sidebar_icon"
                    href="/dashboard/cammanagement"
                  >
                    <div className="sidebar__icon">
                      <Image
                        src="/favicon_io/vimeo.svg"
                        height={20}
                        width={20}
                        alt="random-icon"
                      />
                    </div>
                    <div>
                      <h5 className="text">Cam Management</h5>
                    </div>
                  </Link>
                  <Link className="sidebar_icon" href="/dashboard/callrecord">
                    <div className="sidebar__icon">
                      <Image
                        src="/favicon_io/vimeo.svg"
                        height={20}
                        width={20}
                        alt="random-icon"
                      />
                    </div>
                    <div>
                      <h5 className="text">Call Records</h5>
                    </div>
                  </Link>
                  <Link className="sidebar_icon" href="/dashboard/payment">
                    <div className="sidebar__icon">
                      <Image
                        src="/favicon_io/vimeo.svg"
                        height={20}
                        width={20}
                        alt="random-icon"
                      />
                    </div>
                    <div>
                      <h5 className="text">Payments</h5>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <DashboardNavbar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
