import Search from "@/assets/search.svg"
import Friends from "@/assets/friends.svg"
import Saved from "@/assets/saved.svg"
import Profile from "@/assets/profile.svg"
import Notification from "@/assets/notification.svg"
import { IconButton } from "./IconButton"
import { InputForm } from "./InputForm"
import { TabMenu } from "./TabMenu"
import { SignInButton } from "./SignInButton"

export const Header = () => {
  return (
    <header>
      <nav className="flex row bg-[#212233] backdrop-blur-[8px] py-2 items-center justify-between">
        <div className="flex row gap-[5px]">
          <TabMenu />
        </div>
        <InputForm image={Search} alt="search"/>
        <div className="flex row px-2 items-center justify-end gap-[10px] mr-[4px]">
          <IconButton image={Friends} alt="friends" />
          <IconButton image={Notification} alt="notifications" />
          <IconButton image={Saved} alt="saved" />
          <IconButton image={Profile} alt="profile" />
          <SignInButton />
        </div>
      </nav>
    </header>
  );
};