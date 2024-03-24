import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type CommentInfo = {
  avatarUrl: string;
  name: string;
  nickname: string;
  text: string;
};

export const Comment: React.FC<CommentInfo> = ({ text, avatarUrl, name, nickname }) => {
  return (
    <>
      <Card>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={avatarUrl}
              className="  rounded-full"
              alt={"LOlA"}
              quality={100}
              width={80}
              height={150}
            />
            <div className="flex flex-col">
              <p className=" font-bold">{name}</p>
              <p className="text-neutral-500 text-xs"> {nickname}</p>
            </div>
          </div>
          <div className="pt-2">
            <p className=" w-96">{text}</p>
          </div>
        </div>
      </Card>
    </>
  );
};
