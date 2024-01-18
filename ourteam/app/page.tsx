import React from 'react';

interface creatorCards {
  name: string;
  expertise: string;
  imageSrc: string;
  altText: string;
}

const TeamMember: React.FC<creatorCards> = ({ name, expertise, imageSrc, altText }) => {
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

const ourTeam: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="border-t border-orange-600 w-full"></div>
      <div className="mt-8">
        <div className="text-3xl font-bold text-center">
          &lt;Our <span className="text-orange-600">Team!</span>&gt;
        </div>
        <div className="capitalize mt-2 text-gray-500 text-xl text-center">
          <p>Your One Stop Destination for success</p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 gap-6 mt-6 mx-auto">
          <TeamMember
            name="Anubhav Gupta"
            expertise="20 years of expertise"
            imageSrc="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            altText="Anubhav Gupta"
          />
          <TeamMember
            name="Gautam Singla"
            expertise="15 years of expertise"
            imageSrc="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            altText="Gautam Singla"
          />
          <TeamMember
            name="Rishabh Mittal"
            expertise="5 years of expertise"
            imageSrc="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            altText="Rishabh Mittal"
          />
        </div>
      </div>
      <div className="mt-8 border-b w-full border-orange-600"></div>
    </div>
  );
};

export default ourTeam;
