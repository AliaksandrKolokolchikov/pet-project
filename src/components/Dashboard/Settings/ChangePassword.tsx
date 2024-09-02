export const ChangePassword = () => {
  return (
    <>
      <form className="border rounded-2xl mt-6 mb-20">
        <div className="border-b h-[62px]">
          <p className="text-[20px] font-medium pl-6 pt-[18px]">
            Change Password
          </p>
        </div>
        <div className="pl-6 pt-6">
          <p className="text-[14px]">Current Password</p>
          <input
            className="border w-[936px] h-[49px] focus:outline-none rounded-[8px] pl-4"
            type="text"
            placeholder="Current Password"
          />
        </div>

        <div className="flex">
          <div className="pl-6 pt-4">
            <p className="text-[14px]">First name</p>
            <input
              className="border w-[460px] h-[49px] focus:outline-none rounded-[8px] pl-4"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="pl-4 pt-4">
            <p className="text-[14px]">First name</p>
            <input
              className="border w-[460px] h-[49px] focus:outline-none rounded-[8px] pl-4"
              type="text"
              placeholder="First name"
            />
          </div>
        </div>
        <button className="bg-[#00B307] w-[194px] h-[45px] rounded-full hover:bg-[#2C742F] ml-6 my-6">
          <p className="text-white text-[14px] font-semibold">
            Change Password
          </p>
        </button>
      </form>
    </>
  );
};
