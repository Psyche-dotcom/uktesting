import { useState } from "react";
import { dummyData } from "@/contants";
import Image from "next/image";
import BarChartComponent from "./BarChartComponents";

const DashboardMain = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-grey p-5">
      <BarChartComponent />
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 mb-5">
          <h4 className="text-h4">Top five cam girls based on calls made</h4>
          <table className="w-full tabble">
            <thead>
              <tr>
                <th>Cam girl</th>
                <th>Minutes used</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/asset/testImage.jpg"
                          height={45}
                          width={45}
                          className="rounded-md"
                          alt="User image"
                        />
                        <div>
                          <p className="text-h6">{user.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>1500 Minutes</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full mb-5">
          <h4 className="text-h4">Top five users with most calls made</h4>

          <table className="w-full tabble">
            <thead>
              <tr>
                <th>User</th>
                <th>Minutes used</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/asset/testImage.jpg"
                          height={45}
                          width={45}
                          className="rounded-md"
                          alt="User image"
                        />
                        <div>
                          <p className="text-h6">{user.name}</p>
                        </div>
                      </div>
                    </td>

                    <td>1500 Minutes</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full mb-5">
          <h4 className="text-h4">Top five users with most the mins </h4>

          <table className="w-full tabble">
            <thead>
              <tr>
                <th>User</th>
                <th>Minutes used</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/asset/testImage.jpg"
                          height={45}
                          width={45}
                          className="rounded-md"
                          alt="User image"
                        />
                        <div>
                          <p className="text-h6">{user.name}</p>
                        </div>
                      </div>
                    </td>

                    <td>1500 Minutes</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
