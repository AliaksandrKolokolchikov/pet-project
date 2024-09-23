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
import { WrapperField } from './WrapperField.tsx';

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
        return <UserSetting />;
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
          <WrapperField
            label="Dashboard"
            active={activeDashboard}
            onActive={grayDash}
            selectedType={selected === DashboardTypes.DASHBOARD}
            onClick={() => setSelected(DashboardTypes.DASHBOARD)}
          />

          <WrapperField
            label="Wishlist"
            active={blackWish}
            onActive={wish}
            selectedType={selected === DashboardTypes.WISHLIST}
            onClick={() => setSelected(DashboardTypes.WISHLIST)}
          />

          <WrapperField
            label="Shopping Cart"
            onClick={() => setSelected(DashboardTypes.CART)}
            selectedType={selected === DashboardTypes.CART}
            active={blackCart}
            onActive={cart}
          />

          <WrapperField
            label="Settings"
            onClick={() => setSelected(DashboardTypes.SETTINGS)}
            selectedType={selected === DashboardTypes.SETTINGS}
            active={activeSetting}
            onActive={setting}
          />

          <WrapperField
            label="Log-out"
            onClick={() => setSelected(DashboardTypes.LOGOUT)}
            selectedType={selected === DashboardTypes.LOGOUT}
            active={blackOut}
            onActive={logout}
          />
        </div>
      </aside>

      <div className="w-full ml-6">{renderWrapper()}</div>
    </div>
  );
};
