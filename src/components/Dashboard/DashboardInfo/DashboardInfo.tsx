import { useEffect, useState } from 'react';

export const DashboardInfo = () => {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('avatar');
    if (savedImage) {
      setAvatarImage(savedImage);
    }
  }, []);

  return (
    <>
      <div className="font-Poppins">
        <div className="border rounded-2xl w-[536px] h-[278px] text-center">
          <div>
            {avatarImage ? (
              <img
                src={avatarImage}
                alt="User Avatar"
                className="w-[120px] h-[120px] rounded-full object-cover ml-[208px] mt-8 mb-2"
              />
            ) : (
              <div className="w-[120px] h-[120px] ml-[208px] mt-8 mb-2 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <p className="text-[20px] font-medium">Dianne Russell</p>
            <p className="text-[14px] text-[#808080]">Customer</p>
            <button>
              <p className="text-[#00B307] pt-2">Edit Profile</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
