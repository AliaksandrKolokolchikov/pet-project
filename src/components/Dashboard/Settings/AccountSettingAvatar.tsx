import React, { useEffect, useState } from 'react';

export const AccountSettingAvatar = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
        sessionStorage.setItem('avatar', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    sessionStorage.removeItem('avatar');
  };

  useEffect(() => {
    const savedImage = sessionStorage.getItem('avatar');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  return (
    <>
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
    </>
  );
};
