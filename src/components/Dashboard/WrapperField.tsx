type Props = {
  onClick?: () => void;
  label: string;
  selectedType?: boolean;
  active?: string;
  onActive?: string;
};

export const WrapperField = ({
  onClick,
  label,
  selectedType,
  active,
  onActive,
}: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`flex items-center gap-2 pb-4 h-[56px] ${
          selectedType
            ? 'text-[#1A1A1A] bg-[#EDF2EE] border-l-2 border-[#00B307] pt-4'
            : ''
        }`}
      >
        <img
          className="ml-5"
          src={selectedType ? active : onActive}
          alt="wishlist"
        />
        <p>{label}</p>
      </div>
    </>
  );
};
