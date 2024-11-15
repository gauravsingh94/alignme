"use client";
import { CalendarCheck2, House, Settings, Users, LogOut } from "lucide-react";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
interface LinkItem {
  label: string;
  value: string;
  icon: ReactNode;
}

const Links: LinkItem[] = [
  { label: "Event Types", value: "eventType", icon: <House /> },
  { label: "Meetings", value: "meetings", icon: <Users /> },
  { label: "Availability", value: "availability", icon: <CalendarCheck2 /> },
  { label: "Settings", value: "settings", icon: <Settings /> },
];

const SideBar = ({isLoggedIn}:{isLoggedIn:boolean}) => {
  const { data: session } = useSession();
  const [currentSelected, setCurrentSelected] = useState<string>("eventType");
  const handleOptionSelect = (value: string) => {
    setCurrentSelected(value);
  };
  return (
    <div className="w-full h-[100vh]  px-4 flex flex-col justify-between items-center">
      <div className="mt-20">
        {Links.map((value, index) => (
          <SideBarOptions
            key={index}
            link={value}
            selected={currentSelected}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
      </div>
      {isLoggedIn ? (
        <div className="pb-4 mb-16">
          <Button onClick={() => signOut()} variant="destructive">
            <LogOut />
            SignOut
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const SideBarOptions = ({
  selected,
  link,
  handleOptionSelect,
}: {
  link: LinkItem;
  selected: string;
  handleOptionSelect: (value: string) => void;
}) => {
  return (
    <div
      onClick={() => handleOptionSelect(link.value)}
      className={`flex  items-center  gap-4 ${
        selected === link.value ? "bg-[#212121]" : ""
      } h-14 rounded-xl cursor-pointer px-8`}
    >
      {link.icon}
      <p>{link.label}</p>
    </div>
  );
};

export default SideBar;
