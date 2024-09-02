import { forwardRef } from 'react';
import { Close } from '../../Icons/Products/Close.tsx';
import { QuickViewPopUp } from './QuickViewPopUp.tsx';
import { Product } from '../../../types/types.tsx';

interface Props {
  setIsShow: (value: boolean) => void;
  product: Product;
}

export const QuickViewPopUpWrapper = forwardRef<HTMLDivElement, Props>(
  ({ setIsShow, product }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className="justify-center items-center flex overflow-x-hidden touch-none fixed inset-0 z-50 outline-none focus:outline-none font-Poppins top-0"
        >
          <div className="border-0 rounded-lg shadow-lg absolute min-w-[1320px] min-h-[636px] bg-white outline-none focus:outline-none">
            <div
              className="flex pr-[50px]  justify-end pt-2  group cursor-pointer"
              onClick={() => setIsShow(false)}
            >
              <Close />
            </div>
            <QuickViewPopUp onClose={setIsShow} product={product} />
          </div>
        </div>
        <div className="opacity-70 fixed inset-0 z-40 bg-[#000000]"></div>
      </>
    );
  },
);

QuickViewPopUpWrapper.displayName = 'QuickViewPopUpWrapper';
