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
        <div className="bg-white shadow-md rounded-lg p-4 my-5 mx-4">
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
        <div className="bg-white shadow-md rounded-lg p-4 my-5 mx-4">
          <form className="my-4 mx-4">
            <label className="mb-2 block">Select top users</label>
            <input
              type="search"
              name="search"
              placeholder="Select top users girls"
              className="border-2 rounded-md focus:outline-none p-4 w-1/2"
            />
          </form>
          <table className="w-full tabble">
            <thead>
              <tr>
                <th>Users</th>
                <th>Minutes used</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <p className="text-h6">{user.name}</p>
                    </td>
                    <td>1500 Minutes</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 my-5 mx-4">
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
          <div class="flex items-center justify-center space-x-2 mt-4">
            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              Previous
            </a>

            <a href="#" class="px-3 py-2 bg-blue-500 text-white rounded">
              1
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              2
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              3
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              Next
            </a>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 my-5 mx-4">
          <h5 className="text-h5">
            Specific user call with Associated Cam Girl
          </h5>
          <form className="my-4 mx-4">
            <label className="mb-2 block">User Id:</label>
            <input
              type="search"
              name="search"
              placeholder="Enter user Id..."
              className="border-2 rounded-md focus:outline-none p-4 w-1/2"
            />
          </form>
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
          <div class="flex items-center justify-center space-x-2 mt-4">
            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              Previous
            </a>

            <a href="#" class="px-3 py-2 bg-blue-500 text-white rounded">
              1
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              2
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              3
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              Next
            </a>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 my-5 mx-4">
          <h5 className="text-h5">Get all camgirl call records</h5>

          <table className="w-full tabble">
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Minutes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jonas05</td>
                <td>Jonas Schmedtmann</td>
                <td>jonas@mail.com</td>
                <td>12345</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Jonas05</td>
                <td>Jonas Schmedtmann</td>
                <td>jonas@mail.com</td>
                <td>12345</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Jonas05</td>
                <td>Jonas Schmedtmann</td>
                <td>jonas@mail.com</td>
                <td>12345</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
          <div class="flex items-center justify-center space-x-2 mt-4">
            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              Previous
            </a>

            <a href="#" class="px-3 py-2 bg-blue-500 text-white rounded">
              1
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              2
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              3
            </a>

            <a href="#" class="px-3 py-2 bg-gray-200 text-gray-800 rounded">
              Next
            </a>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default CamManage;
