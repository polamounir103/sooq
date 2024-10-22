import { Link, Route, Routes } from "react-router-dom";
import AccountMain from "../components/userProfile/accountMain/AccountMain";
import Orders from "../components/userProfile/orders/Orders";
import Wislhist from "../components/userProfile/Wislhist";
import Transactions from "../components/userProfile/transactions/Transactions";
import { PiCreditCard, PiGearSix, PiListChecks, PiListHeart } from "react-icons/pi";

export default function UserProfile() {
  const sideLinks = [
    {
      name: "Account main",
      link: "account",
      icon: <PiGearSix />,
    },
    {
      name: "Orders",
      link: "orders",
      icon: <PiListChecks />,
    },
    {
      name: "My wishlist",
      link: "wishlist",
      icon: <PiListHeart />,
    },
    {
      name: "Transactions",
      link: "transactions",
      icon: <PiCreditCard />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-9 items-start gap-10  ">
        <div
          className={`user-profile-side-menu min-h-max col-span-3 lg:col-span-2 bg-sky-100 w-full rounded-lg `}
        >
          <ul className="flex md:flex-col gap-4 p-5">
            {sideLinks.map((i, index) => {
              return (
                <li key={index} className="grow flex gap-2 items-center hover:text-sky-600">
                  <span className="text-2xl">{i.icon}</span>
                  <Link to={i.link}>{i.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-7 bg-blue-200 rounded-xl  p-3 ">
          <Routes>
            <Route path="/" element={<AccountMain />} />
            <Route path="account" element={<AccountMain />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wislhist />} />
            <Route path="transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
