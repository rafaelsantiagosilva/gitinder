import { FaLocationDot } from 'react-icons/fa6';

interface UserLocationProps {
     location: string | null;
}

export default function UserLocation({ location }: UserLocationProps) {
  return (
    location && (
      <section className="flex gap-2 text-sm text-gray-600 font-medium justify-start items-center mt-2">
        <span className="flex items-center gap-1">
          <FaLocationDot /> {location}
        </span>
      </section>
    )
  );
}
