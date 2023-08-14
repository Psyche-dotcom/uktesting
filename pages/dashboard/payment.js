import { dummyData } from "@/contants";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";

const CamManage = () => {
  function handleDelete(id) {
    console.log("Delete id:", id);
  }
  function handleSuspend(id) {
    console.log("Suspend id:", id);
  }
  return (
    <>
      <DashboardLayout>
        <div className="bg-white shadow-md rounded-lg p-4 mb-5">
          <form className="my-4 mx-4">
            <label className="mb-2 block">Select top cam girls</label>
            <input
              type="search"
              name="search"
              placeholder="Select top cam girls"
              className="border-2 rounded-md focus:outline-none p-4 w-1/2"
            />
          </form>
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

        <div className="bg-white shadow-md rounded-lg p-4 mb-5">
          <table className="w-full tabble">
            <thead>
              <tr>
                <th>User Email</th>
                <th>Cam Girl Email</th>
                <th>Minutes used</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {dummyData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <h5>james05</h5>
                    </td>
                    <td>
                      <h5>sarah05</h5>
                    </td>
                    <td>
                      <h5>1500</h5>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </>
  );
};

export default CamManage;
