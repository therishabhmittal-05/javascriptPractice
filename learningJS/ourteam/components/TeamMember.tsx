// components/TeamMember.tsx
import React from 'react';

interface TeamMemberProps {
  name: string;
  expertise: string;
  imageSrc: string;
  altText: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, expertise, imageSrc, altText }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <img
        src={imageSrc}
        alt={altText}
        className="size-64 object-cover rounded-lg p-[2px] bg-gradient-to-b from-orange-600 to-amber-400 shadow-sm shadow-orange-600"
      />
      <div className="text-center">
        <p className="font-bold text-lg text-amber-400 normal-case">{name}</p>
        <p className="text-base leading-normal text-black dark:text-white font-semibold">{expertise}</p>
      </div>
    </div>
  );
};

export default TeamMember;
