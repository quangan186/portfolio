import React from "react";
import Text from "../utilities/text/Text";
import Avatar from "./Avatar";

const ProfileInfo: React.FC = () => {
  return (
    <div className="w-full leading-10 md:flex gap-6 h-full">
      {/* <Text className="!text-[16px]">
        - Gender: <span>Male</span>
      </Text> */}

      <Avatar />

      <div className="w-full flex flex-col h-full gap-4">
        <Text className="!text-[16px] font-bold leading-8">
          - Full name: <span className="font-normal">Bui Quang An</span>
        </Text>

        <Text className="!text-[16px] font-bold leading-8">
          - Role:{" "}
          <span className="font-normal">
            Software Developer, Web and Mobile App Developer
          </span>
        </Text>

        <Text className="!text-[16px] font-bold leading-8">
          - Date of Birth: <span className="font-normal">18/06/2002</span>
        </Text>

        <Text className="!text-[16px] font-bold leading-8">
          - Email: <span className="font-normal">quangan186@gmail.com</span>
        </Text>

        {/* <Text className="!text-[16px] font-bold">
          - Gender: <span className="font-normal">Male</span>
        </Text> */}

        <Text className="!text-[16px] font-bold leading-8">
          - Hobbies:{" "}
          <span className="font-normal">
            Coding web, Playing sports, Play video games, Play guitar
          </span>
        </Text>
        <Text className="italic !text-[16px] leading-8">
          "Personally, I am a sociable, honest, funny, hardworking person and
          always try to learn from people around me to improve myself as well as
          for the work I do to achieve the best quality. My life motto is that
          people can do it, I can do it"
        </Text>
      </div>
    </div>
  );
};

export default ProfileInfo;
