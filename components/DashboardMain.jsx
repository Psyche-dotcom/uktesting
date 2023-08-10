import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import Image from "next/image";
import Link from "next/link";
import BarChartComponent from "./BarChartComponents";
import AreaChartComponent from "./AreaChartComponent";
import AreaChartComponentBlue from "./AreaChartComponentBlue";

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
      <div className="bg-white shadow-md rounded-lg p-4 mb-5">
        <h5 className="text-h5">Top 5 cam girls</h5>

        <table className="w-full tabble">
          <thead>
            <tr>
              <th>Cam girl</th>
              <th>Minutes used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <AreaChartComponent />
      <AreaChartComponentBlue /> */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full mb-5">
        <h5 className="mb-5 text-h5">Top 5 users</h5>

        <table className="w-full tabble">
          <thead>
            <tr>
              <th>User</th>
              <th>Minutes used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                    alt="User icon"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mb-5">
        <h5 className="text-h5">Trends</h5>

        <h6>Latest tech trends</h6>

        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h5 className="mb-5 text-h5">Authors</h5>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h5 className="mb-5 text-h5">Notifications</h5>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h5 className="mb-5 text-h5">Notifications</h5>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
