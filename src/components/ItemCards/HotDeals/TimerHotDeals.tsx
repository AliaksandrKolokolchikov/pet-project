import { useTimer } from 'react-timer-hook';

type Props = {
  expiryTimestamp: Date;
};

export const MyTimer = ({ expiryTimestamp }: Props) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <div className="flex gap-5 justify-center mb-6">
      <div className="flex flex-col">
        <span className="text-[18px] text-[#1A1A1A] text-center">0{days}</span>
        <p className="text-[10px] text-[#999999] opacity-80  uppercase">Days</p>
      </div>
      <div className="flex flex-col">
        <span className="text-[18px] text-[#1A1A1A] text-center">{hours}</span>
        <p className="text-[10px] text-[#999999] opacity-80 uppercase">Hours</p>
      </div>
      <p className="text-[18px] text-[#808080]">:</p>
      <div className="flex flex-col">
        <span className="text-[18px] text-[#1A1A1A] text-center">
          {minutes}
        </span>
        <p className="text-[10px] text-[#999999] opacity-80 uppercase">Mins</p>
      </div>
      <p className="text-[18px] text-[#808080]">:</p>
      <div className="flex flex-col">
        <span className="text-[18px] text-[#1A1A1A] text-center">
          {seconds}
        </span>
        <p className="text-[10px] text-[#999999] opacity-80 uppercase">Secs</p>
      </div>
    </div>
  );
};
