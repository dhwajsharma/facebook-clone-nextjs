import Image from "next/Image"
import { BellIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"


const Header = () => {
    return (
        <div className="">
            <div className="flex items-center p-2">
                <img
                    loading="lazy"
                    src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
                </div>
            </div>
        </div>
    )
}

export default Header
