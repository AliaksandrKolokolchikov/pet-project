import { useState } from 'react';

import { UserSetting } from './Settings';
import { DashboardInfo } from './DashboardInfo';
import { WishlistDashboard } from './WishListDashboard';
import { CartListDashboard } from './CartListDashboard';
import { LogOut } from './LogOut';

import activeDashboard from '../../assets/Dashboard/dashboard.svg';
import grayDash from '../../assets/Dashboard/grayDash.svg';
import wish from '../../assets/Dashboard/wishlist.svg';
import blackWish from '../../assets/Dashboard/blackheart.svg';
import cart from '../../assets/Dashboard/cart.svg';
import blackCart from '../../assets/Dashboard/blackCart.svg';
import setting from '../../assets/Dashboard/setting.svg';
import activeSetting from '../../assets/Dashboard/BlackSetting.svg';
import logout from '../../assets/Dashboard/logout.svg';
import blackOut from '../../assets/Dashboard/blackOut.svg';
import { DashboardTypes } from '../../constants';

export const DashboardWrapper = () => {
  const [selected, setSelected] = useState<DashboardTypes>(
    DashboardTypes.DASHBOARD,
  );

  const renderWrapper = () => {
    switch (selected) {
      case DashboardTypes.DASHBOARD:
        return <DashboardInfo setSelected={setSelected} />;
      case DashboardTypes.WISHLIST:
        return <WishlistDashboard />;
      case DashboardTypes.CART:
        return <CartListDashboard />;
      case DashboardTypes.SETTINGS:
        return <UserSetting setSelected={setSelected} />;
      case DashboardTypes.LOGOUT:
        return <LogOut />;
      default:
        return <DashboardInfo setSelected={setSelected} />;
    }
  };

  return (
    <div className="font-Poppins pt-8 px-[5%] flex mb-5">
      <aside className="border rounded w-[312px] h-full text-[#666666] cursor-pointer">
        <p className="text-[20px] font-medium pt-6 pl-4 pb-4">Navigation</p>
        <div className="flex flex-col">
          <div
            onClick={() => setSelected(DashboardTypes.DASHBOARD)}
            className={`flex items-center gap-2 pb-4 h-[56px] ${
              selected === DashboardTypes.DASHBOARD
                ? 'text-[#1A1A1A] bg-[#EDF2EE] border-l-2 border-[#00B307] pt-4'
                : ''
            }`}
          >
            <img
              className="ml-5"
              src={
                selected === DashboardTypes.DASHBOARD
                  ? activeDashboard
                  : grayDash
              }
              alt="dashboard"
            />
            <p>Dashboard</p>
          </div>

          <div
            onClick={() => setSelected(DashboardTypes.WISHLIST)}
            className={`flex items-center gap-2 pb-4 h-[56px] ${
              selected === DashboardTypes.WISHLIST
                ? 'text-[#1A1A1A] bg-[#EDF2EE] border-l-2 border-[#00B307] pt-4'
                : ''
            }`}
          >
            <img
              className="ml-5"
              src={selected === DashboardTypes.WISHLIST ? blackWish : wish}
              alt="wishlist"
            />
            <p>Wishlist</p>
          </div>

          <div
            onClick={() => setSelected(DashboardTypes.CART)}
            className={`flex items-center gap-2 pb-4 h-[56px] ${
              selected === DashboardTypes.CART
                ? 'text-[#1A1A1A] bg-[#EDF2EE] border-l-2 border-[#00B307] pt-4'
                : ''
            }`}
          >
            <img
              className="ml-5"
              src={selected === DashboardTypes.CART ? blackCart : cart}
              alt="cart"
            />
            <p>Shopping Cart</p>
          </div>

          <div
            onClick={() => setSelected(DashboardTypes.SETTINGS)}
            className={`flex items-center gap-2 pb-4 h-[56px] ${
              selected === DashboardTypes.SETTINGS
                ? 'text-[#1A1A1A] bg-[#EDF2EE] border-l-2 border-[#00B307] pt-4'
                : ''
            }`}
          >
            <img
              className="ml-5"
              src={
                selected === DashboardTypes.SETTINGS ? activeSetting : setting
              }
              alt="settings"
            />
            <p>Settings</p>
          </div>

          <div
            onClick={() => setSelected(DashboardTypes.LOGOUT)}
            className={`flex items-center gap-2 pb-4 h-[56px] ${
              selected === DashboardTypes.LOGOUT
                ? 'text-[#1A1A1A] bg-[#EDF2EE] border-l-2 border-[#00B307] pt-4'
                : ''
            }`}
          >
            <img
              className="ml-5"
              src={selected === DashboardTypes.LOGOUT ? blackOut : logout}
              alt="logout"
            />
            <p>Log-out</p>
          </div>
        </div>
      </aside>

      <div className="w-full ml-6">{renderWrapper()}</div>
    </div>
  );
};
