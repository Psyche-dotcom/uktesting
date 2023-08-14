import { dummyData } from "@/contants";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";

const CamManage = () => {
  function handleEdit(id) {
    console.log("Edit id:", id);
  }
  function handleDelete(id) {
    console.log("Delete id:", id);
  }
  function handleSuspend(id) {
    console.log("Suspend id:", id);
  }
  function handleView(id) {
    console.log("Suspend id:", id);
  }
  return (
    <>
      <DashboardLayout>
        <table className="w-full tabble">
          <thead>
            <tr>
              <th>Cam Girls</th>
              <th>Actions</th>
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

                  <td className="flex items-center gap-2">
                    <button
                      className="icon"
                      onClick={() => handleEdit(user.id)}
                    >
                      <Image
                        src="/asset/pencil.png"
                        height={16}
                        width={16}
                        alt="Edit icon"
                      />
                    </button>
                    <button
                      className="icon"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Image
                        src="/asset/delete.png"
                        height={16}
                        width={16}
                        alt="Delete icon"
                      />
                    </button>
                    <button
                      className="icon"
                      onClick={() => handleSuspend(user.id)}
                    >
                      <Image
                        src="/asset/suspend.png"
                        height={16}
                        width={16}
                        alt="Suspend icon"
                      />
                    </button>
                    <button
                      className="icon"
                      onClick={() => handleView(user.id)}
                    >
                      <Image
                        src="/asset/detail.png"
                        height={16}
                        width={16}
                        alt="Suspend icon"
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </DashboardLayout>
    </>
  );
};

export default CamManage;
