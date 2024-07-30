import { motion } from 'framer-motion';
import { BiSolidMessageError } from 'react-icons/bi';
import { ImSpinner9 } from 'react-icons/im';
import { useEffect, useState } from 'react';

import fetchUser from '../../api/fetchUser';
import AnimationToSide from '../../interfaces/AnimationToSide';
import GithubUser from '../../interfaces/GithubUser';
import AnimationButton from './AnimationButton';
import UserBioAndTopLangs from './UserBioAndTopLangs';
import UserCardHeader from './UserCardHeader';
import UserFollowingAndFollowers from './UserFollowingAndFollowers';
import UserLocation from './UserLocation';

export default function UserCard() {
  const [user, setUser] = useState<GithubUser | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const [animation, setAnimation] = useState<AnimationToSide | undefined>();
  const [isAnimation, setIsAnimation] = useState(false);
  const ANIMATION_DURATION = 500; // ms

  const getUserFromApi = async () => {
    setUser(undefined);
    setIsLoading(true);
    const response = await fetchUser();
    setUser(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  const startAnimation = () => {
    setIsAnimation(true);
  };

  const endAnimation = () => {
    setIsAnimation(false);
  };

  const setAnimationLeft = () => {
    startAnimation();

    const animationLeft: AnimationToSide = {
      x: -1000,
      y: 140,
      rotate: -15,
    };

    setAnimation(animationLeft);

    setTimeout(() => {
      endAnimation();
    }, ANIMATION_DURATION);
  };

  const setAnimationRight = () => {
    startAnimation();

    const animationRight: AnimationToSide = {
      x: 1000,
      y: 140,
      rotate: 15,
    };

    setAnimation(animationRight);

    setTimeout(() => {
      endAnimation();
    }, ANIMATION_DURATION);
  };

  return user ? (
    <>
      <motion.div
        className="box bg-gray-950 text-gray-200 mx-auto mt-12 w-96 rounded-md shadow-md p-6 transition-transform hover:scale-105"
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={isAnimation ? animation : { x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        <UserCardHeader html_url={user?.html_url} name={user?.name} avatar_url={user?.avatar_url} email={user?.email} />

        <UserBioAndTopLangs bio={user?.bio} login={user?.login} />

        <UserFollowingAndFollowers following={user?.following} followers={user?.followers} />

        <UserLocation location={user?.location} />

        <div className="flex items-center justify-around pt-4">
          <AnimationButton
            animationSide="left"
            setAnimation={() => {
              setAnimationLeft();

              setTimeout(() => {
                getUserFromApi();
              }, ANIMATION_DURATION);
            }}
          />

          <AnimationButton
            animationSide="right"
            setAnimation={async () => {
              setAnimationRight();

              setTimeout(() => {
                getUserFromApi();
              }, ANIMATION_DURATION);
            }}
          />
        </div>
      </motion.div>
    </>
  ) : isLoading ? (
    <ImSpinner9 className="loading size-10 text-gray-400 rotate-180 m-5" />
  ) : (
    <h2 className="text-lg flex items-center text-gray-200 gap-1 font-medium mt-4">
      Limite de requisições atingido! Volte mais tarde <BiSolidMessageError />
    </h2>
  );
}
