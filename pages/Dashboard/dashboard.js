import Link from "next/link";
import Image from "next/image";

import DashboardMain from "@/components/DashboardMain";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Children, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <DashboardLayout>
        <DashboardMain />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
