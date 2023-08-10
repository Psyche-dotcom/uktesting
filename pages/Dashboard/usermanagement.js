import DashboardLayout from "@/components/DashboardLayout";
import { LinearProgress } from "@mui/material";
import Image from "next/image";

const UserPage = () => {
  return (
    <>
      <DashboardLayout>
        <table className="w-full tabble">
          <thead>
            <tr>
              <th>Cam Girls</th>
              <th>Minutes used</th>
              <th>Actions</th>
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
              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image
                    src="/asset/pencil.png"
                    height={16}
                    width={16}
                    alt="Edit icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="/asset/delete.png"
                    height={16}
                    width={16}
                    alt="Delete icon"
                  />
                </div>
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

              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image
                    src="/asset/pencil.png"
                    height={16}
                    width={16}
                    alt="Edit icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="/asset/delete.png"
                    height={16}
                    width={16}
                    alt="Delete icon"
                  />
                </div>
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

              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image
                    src="/asset/pencil.png"
                    height={16}
                    width={16}
                    alt="Edit icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="/asset/delete.png"
                    height={16}
                    width={16}
                    alt="Delete icon"
                  />
                </div>
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

              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image
                    src="/asset/pencil.png"
                    height={16}
                    width={16}
                    alt="Edit icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="/asset/delete.png"
                    height={16}
                    width={16}
                    alt="Delete icon"
                  />
                </div>
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

              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image
                    src="/asset/pencil.png"
                    height={16}
                    width={16}
                    alt="Edit icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="/asset/delete.png"
                    height={16}
                    width={16}
                    alt="Delete icon"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </DashboardLayout>
    </>
  );
};

export default UserPage;
