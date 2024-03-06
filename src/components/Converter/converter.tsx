import { NavLink } from "react-router-dom";

export default function Converter() {
  return (
    <div className="w-[506px] h-[53px] rounded-md p-1 flex bg-header-muted">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "converter-button-active" : "converter-button"
        }
        end
      >
        Coins
      </NavLink>
      <NavLink
        to={"/converter"}
        className={({ isActive }) =>
          isActive ? "converter-button-active" : "converter-button px-8"
        }
        end
      >
        Converter
      </NavLink>{" "}
    </div>
  );
}
