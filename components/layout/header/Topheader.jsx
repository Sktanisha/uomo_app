import React from "react";
import Logo from "../../common/Logo";
import Searchinput from "./Searchinput";
import Container from "../Container";
import { UserRound, Heart, Handbag, Menu } from "lucide-react";

const Topheader = () => {
  return (
    <div className="bg-secondary py-5">
      <Container>
        <div className="flex items-center gap-8.25">
          <Logo />
          <Searchinput />
          <div className="flex ml-auto gap-7.5">
            <button>
              <UserRound size={20} color="white" />
            </button>
            <button>
              <Heart size={20} color="white" />
            </button>
            <button className="relative">
              <Handbag size={20} color="white" />
              <span className="text-[10px] font-medium text-white rounded-full size-4 bg-primary absolute -bottom-1.25 -right-2.5">3</span>
            </button>
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
