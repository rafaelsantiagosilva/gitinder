import { useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Header from './components/Header/index';
import UserCard from './components/UserCard/index';
import AnimationToSide from './interfaces/AnimationToSide';

export default function App() {
  const [isAnimation, setIsAnimation] = useState(false);
  const [animation, setAnimation] = useState<AnimationToSide | undefined>();
  const ANIMATION_DURATION = 500; // ms

  const startAnimation = () => {
    setIsAnimation(true);
  };

  const endAnimation = () => {
    setIsAnimation(false);
  };

  const setAnimationLeft = () => {
    startAnimation();

    const animationLeft: AnimationToSide = {
      x: -300,
      y: 140,
      rotate: -20,
    };

    setAnimation(animationLeft);
    setTimeout(() => {
      endAnimation();
    }, ANIMATION_DURATION);
  };

  const setAnimationRight = () => {
    startAnimation();

    const animationRight: AnimationToSide = {
      x: 300,
      y: 140,
      rotate: 20,
    };

    setAnimation(animationRight);

    setTimeout(() => {
      endAnimation();
    }, ANIMATION_DURATION);
  };

  return (
    <>
      <Header />
      <main className="flex items-center justify-center gap-2">
        <button onClick={setAnimationLeft}>
          <IoIosArrowDropleft className="text-gray-400 size-10 font-bold" />
        </button>
        <UserCard isAnimate={isAnimation} animation={animation} />
        <button onClick={setAnimationRight}>
          <IoIosArrowDropright className="text-gray-400 size-10 font-bold" />
        </button>
      </main>
      <footer className="text-center text-md text-gray-200 mt-6">&copy;Rafael Santiago</footer>
    </>
  );
}
