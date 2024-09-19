import { AccountSettingData } from './AccountSettingData';
import { AccountSettingAvatar } from './AccountSettingAvatar';

export const AccountSetting = () => {
  return (
    <>
      <div className="flex border rounded-2xl">
        <AccountSettingData />
        <AccountSettingAvatar />
      </div>
    </>
  );
};
