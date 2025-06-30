// components/SkillCard.jsx
import React from "react";
import * as SiIcons from "react-icons/si"; // All simple icons

const SkillCard = ({ skill }) => {
  const IconComponent = SiIcons[skill.icon];

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-gray-800 p-4 shadow-md w-28 h-32 hover:shadow-lg hover:shadow-indigo-500/30  transition">
      {IconComponent && (
        <IconComponent className="text-3xl text-blue-500 mb-2" />
      )}
      <p className="text-lg font-semibold">{skill.level}</p>
      <p className="text-sm text-gray-600">{skill.name}</p>
    </div>
  );
};

export default SkillCard;
