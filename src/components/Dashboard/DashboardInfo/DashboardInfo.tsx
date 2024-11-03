import { useEffect, useState } from 'react';
import { DashboardTypes } from '../../../constants';
import { ScrollToTop } from '../../ScrollToTop/ScrollToTop.tsx';
import { useUserInfo } from '../../../hooks';

type Props = {
  setSelected: (selected: DashboardTypes) => void;
};

export const DashboardInfo = ({ setSelected }: Props) => {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const { userInfo } = useUserInfo();

  useEffect(() => {
    const savedImage = sessionStorage.getItem('avatar');
    if (savedImage) {
      setAvatarImage(savedImage);
    }
  }, []);

  return (
    <>
      <div className="font-Poppins flex gap-2">
        <ScrollToTop />
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
            <p className="text-[20px] font-medium">{userInfo.firstName}</p>
            <p className="text-[14px] text-[#808080]">Customer</p>
            <button onClick={() => setSelected(DashboardTypes.SETTINGS)}>
              <p className="text-[#00B307] pt-2">Edit Profile</p>
            </button>
          </div>
        </div>
        {userInfo.email.length > 0 ? (
          <div className="border rounded-2xl w-[536px] h-[278px ">
            <div className="flex flex-col pl-8">
              <p className="pt-8 pb-[18px] text-[14px] text-[#999999]">
                Billing Address
              </p>
              <p className="text-[18px] font-medium">{userInfo.firstName}</p>
              <p className="text-[14px] text-[#666666]">{userInfo.address}</p>
              <p className="py-2">{userInfo.email}</p>
              <p className="pb-[19px]">{userInfo.phone}</p>
              <button onClick={() => setSelected(DashboardTypes.SETTINGS)}>
                <p className="text-[#00B307]">Edit Profile</p>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
