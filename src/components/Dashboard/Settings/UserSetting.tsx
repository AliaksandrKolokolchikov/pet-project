import { AccountSetting, BillingSetting, ChangePassword } from '../../index.ts';

export const UserSetting = () => {
  return (
    <>
      <div className="min-w-[984px] font-Poppins ">
        <AccountSetting />
        <BillingSetting />
        <ChangePassword />
      </div>
    </>
  );
};
