import { useTimer } from 'react-timer-hook';

type Props = {
  expiryTimestamp: Date;
};

export const TimerBanner = ({ expiryTimestamp }: Props) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <>
      <div className="flex gap-4 justify-center mt-2">
        <div className="flex flex-col">
          <span className="text-[24px] text-white text-center">{days}</span>
          <p className="text-[12px] text-white opacity-80  uppercase">Days</p>
        </div>
        <p className="text-[24px] text-white">:</p>
        <div className="flex flex-col">
          <span className="text-[24px] text-white text-center">0{hours}</span>
          <p className="text-[12px] text-white opacity-80 uppercase">Hours</p>
        </div>
        <p className="text-[24px] text-white">:</p>
        <div className="flex flex-col">
          <span className="text-[24px] text-white text-center">{minutes}</span>
          <p className="text-[12px] text-white opacity-80 uppercase">Mins</p>
        </div>
        <p className="text-[24px] text-white">:</p>
        <div className="flex flex-col">
          <span className="text-[24px] text-white text-center">{seconds}</span>
          <p className="text-[12px] text-white opacity-80 uppercase">Secs</p>
        </div>
      </div>
    </>
  );
};
