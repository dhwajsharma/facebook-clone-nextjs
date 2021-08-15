import Image from "next/Image"
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon, ShoppingCartIcon, FlagIcon, PlayIcon } from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"


const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <img
                    loading="lazy"
                    src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="fb"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className="flex items-center sm:space-x-2 justify-end">
                <p className="whitespace-nowrap font-semibold pr-3">Dhwaj Sharma</p>
                <ViewGridIcon className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray0-300" />
                <ChatIcon className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray0-300" />
                <BellIcon className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray0-300" />
                <ChevronDownIcon className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray0-300" />
            </div>
        </div>
    )
}

export default Header
