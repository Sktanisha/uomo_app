import React from "react";
import Logo from "../../common/Logo";
import Searchinput from "./Searchinput";
import Container from "../Container";
import { Heart, Menu } from "lucide-react";
import HeaderCart from "./HeaderCart";
import HeaderLogin from "./HeaderLogin";

const Topheader = () => {
  return (
    <div className="bg-secondary py-5">
      <Container>
        <div className="flex items-center gap-8.25">
          <Logo />
          <Searchinput />
          <div className="flex ml-auto gap-7.5">
            <HeaderLogin/>
            <button>
              <Heart size={20} color="white" />
            </button>
            <HeaderCart/>
            <button>
              <Menu size={20} color="white" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
