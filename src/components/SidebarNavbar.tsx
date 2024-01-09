import { NavLinks } from "../constants/NavLinks";
import { useState } from "react";
import WalletCard from "./WalletCard";
import UserCard from "./UserCard";

const SidebarNavbar = () => {
  const [activeLink, setActiveLink] = useState(7);
  return (
    <div className="bg-primary w-56 min-h-screen">
      <div className="py-4 px-2.5 flex flex-col justify-between h-full">
        <div>
          <UserCard userName="Nishyan" storeLink="Visit store" />
          <div className="pt-6">
            <nav>
              <ul className="flex flex-col gap-0.5">
                {NavLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => setActiveLink(link.id)}
                    className={`${
                      link.id === activeLink
                        ? "opacity-100 bg-white-100"
                        : "opacity-80"
                    }  flex gap-3 py-2 px-4 rounded items-center hover:bg-white-100 hover:opacity-100 cursor-pointer`}
                  >
                    <img src={link.iconUrl} alt={`${link.name} icon`} />
                    <div className="text-sm text-white font-medium">
                      {link.name}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <WalletCard title="Available credits" amount={222.1} />
      </div>
    </div>
  );
};

export default SidebarNavbar;
