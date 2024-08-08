import note from '../../assets/LatestNews/note.svg';
import admin from '../../assets/LatestNews/admin.svg';
import comments from '../../assets/LatestNews/comments.svg';
import { ArrowIcon } from '../Icons/ArrowIcon.tsx';

export const LatestNews = () => {
  return (
    <>
      <div className="text-center text-[#1A1A1A] font-semibold text-[32px] font-[Poppins] pb-[32px] ">
        Latest News
      </div>
      <div className="flex justify-between px-[4%] cursor-pointer pb-[60px]">
        <div className="bg-piece-orange-bg bg-no-repeat hover:drop-shadow-md ">
          <div className="pt-[242px] min-h-[324px] group ">
            <div className="w-[58px] h-[58px] bg-white group-hover:opacity-100 flex flex-col items-center ml-6 mb-6 rounded opacity-80 ">
              <p className="text-[#1A1A1A] font-medium text-[20px] mt-1.5">
                18
              </p>
              <p className="text-[#808080] text-[12px] font-medium uppercase">
                Nov
              </p>
            </div>
            <div className="w-[424px] h-[170px] bg-white border rounded-b-[8px] ">
              <div className="flex gap-4 text-[14px] text-[#666666] pl-[5%] pt-[26px] ">
                <div className="flex gap-2">
                  <img src={note} alt="note" />
                  <p>Food</p>
                </div>
                <div className="flex gap-2">
                  <img src={admin} alt="admin" />
                  <p>By Admin</p>
                </div>
                <div className="flex gap-2">
                  <img src={comments} alt="comments" />
                  <p>65 Comments</p>
                </div>
              </div>
              <div className="group">
                <p className="pl-[5%] w-[375px] text-[18px] font-medium mt-2 mb-5 group-hover:text-[#2C742F]">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>
                <div className="flex group pl-[5%]">
                  <button className="font-semibold text-[#00B307] text-[16px] hover:text-[#2C742F] pr-3 ">
                    Read More
                  </button>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-egg-bg bg-no-repeat hover:drop-shadow-md ">
          <div className="pt-[242px] min-h-[324px] group">
            <div className="w-[58px] h-[58px] bg-white opacity-80 group-hover:opacity-100  flex flex-col items-center ml-6 mb-6 rounded">
              <p className="text-[#1A1A1A] font-medium text-[20px] mt-1.5">
                29
              </p>
              <p className="text-[#808080] text-[12px] font-medium uppercase">
                Jan
              </p>
            </div>
            <div className="w-[424px] h-[170px] bg-white border rounded-b-[8px] ">
              <div className="flex gap-4 text-[14px] text-[#666666] pl-[5%] pt-[26px] ">
                <div className="flex gap-2">
                  <img src={note} alt="note" />
                  <p>Food</p>
                </div>
                <div className="flex gap-2">
                  <img src={admin} alt="admin" />
                  <p>By Admin</p>
                </div>
                <div className="flex gap-2">
                  <img src={comments} alt="comments" />
                  <p>65 Comments</p>
                </div>
              </div>
              <div className="group">
                <p className="pl-[5%] w-[375px] text-[18px] font-medium mt-2 mb-5 group-hover:text-[#2C742F]">
                  Eget lobortis lorem lacinia. Vivamus pharetra semper,
                </p>
                <div className="flex group pl-[5%]">
                  <button className="font-semibold text-[#00B307] text-[16px] hover:text-[#2C742F] pr-3 ">
                    Read More
                  </button>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-salad-bg bg-no-repeat hover:drop-shadow-md ">
          <div className="pt-[242px] min-h-[324px] group">
            <div className="w-[58px] h-[58px] bg-white opacity-80 group-hover:opacity-100 flex flex-col items-center ml-6 mb-6 rounded">
              <p className="text-[#1A1A1A] font-medium text-[20px] mt-1.5">
                21
              </p>
              <p className="text-[#808080] text-[12px] font-medium uppercase">
                Feb
              </p>
            </div>
            <div className="w-[424px] h-[170px] bg-white border rounded-b-[8px] ">
              <div className="flex gap-4 text-[14px] text-[#666666] pl-[5%] pt-[26px] ">
                <div className="flex gap-2">
                  <img src={note} alt="note" />
                  <p>Food</p>
                </div>
                <div className="flex gap-2">
                  <img src={admin} alt="admin" />
                  <p>By Admin</p>
                </div>
                <div className="flex gap-2">
                  <img src={comments} alt="comments" />
                  <p>65 Comments</p>
                </div>
              </div>
              <div className="group">
                <p className="pl-[5%] w-[375px] text-[18px] font-medium mt-2 mb-5 group-hover:text-[#2C742F]">
                  Eget lobortis lorem lacinia. Vivamus pharetra semper,
                </p>
                <div className="flex group pl-[5%]">
                  <button className="font-semibold text-[#00B307] text-[16px] hover:text-[#2C742F] pr-3 ">
                    Read More
                  </button>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
