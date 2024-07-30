import { TbHeartCode } from 'react-icons/tb';
import { MdOutlineCancel } from 'react-icons/md';
import { IconType } from 'react-icons';

interface AnimationButtonProps {
  animationSide: 'left' | 'right';
  setAnimation: () => void;
}

export default function AnimationButton({ animationSide, setAnimation }: AnimationButtonProps) {
  const Icon: IconType = animationSide === 'left' ? MdOutlineCancel : TbHeartCode;

  return (
    <button
      className="text-2xl"
      onClick={() => {
        setAnimation();
      }}
    >
      <Icon />
    </button>
  );
}
