import React, { useEffect, useState } from 'react';

export const AccountSetting = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
        localStorage.setItem('avatar', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    localStorage.removeItem('avatar');
  };

  useEffect(() => {
    const savedImage = localStorage.getItem('avatar');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  return (
    <>
      <div className="flex border rounded-2xl">
        <form>
          <div className="border-b h-[62px] ">
            <p className="text-[20px] font-medium pl-6 pt-[18px]">
              Account Settings
            </p>
          </div>

          <div className="pl-6 pt-6">
            <p className="text-[14px]">First name</p>
            <input
              className="border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="pl-6 pt-4">
            <p className="text-[14px]">Last name</p>
            <input
              className="border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="pl-6 pt-4">
            <p className="text-[14px]">Email</p>
            <input
              className="border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="pl-6 pt-6">
            <p className="text-[14px]">Phone Number</p>
            <input
              className="border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
          <button className="bg-[#00B307] w-[167px] h-[45px] rounded-full hover:bg-[#2C742F] ml-6 my-6">
            <p className="text-white text-[14px] font-semibold">Save Changes</p>
          </button>
        </form>

        <div className="flex flex-col items-center pt-[120px] pl-[112px]">
          <div className="w-[224px] h-[224px] rounded-full overflow-hidden bg-gray-200">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
          <label className="group mt-5" htmlFor="change">
            <div className="border border-[#00B307] w-[159px] h-[45px] rounded-full flex items-center justify-center cursor-pointer group-hover:bg-[#00B307]">
              <p className="text-[#00B307] text-[14px] font-semibold  group-hover:text-white">
                Chose Image
              </p>
            </div>
            <input
              id="change"
              type="file"
              onChange={handleImageChange}
              className="mt-4 hidden "
            />
          </label>
          <button
            onClick={() => handleDeleteImage()}
            className="w-[159px] h-[45px] rounded-full flex items-center justify-center"
          >
            <p>Delete Avatar</p>
          </button>
        </div>
      </div>
    </>
  );
};
