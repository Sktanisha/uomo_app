"use client";

import React, { useState } from "react";
import Logo from "../../common/Logo";
import Searchinput from "./Searchinput";
import Container from "../Container";
import { Heart, Menu, X } from "lucide-react";
import HeaderCart from "./HeaderCart";
import HeaderLogin from "./HeaderLogin";
import Link from "next/link";

const Topheader = () => {
  const navData = [
    { 
    id: 1,
    name:"HOME"
    },
    { 
    id: 2,
    name:"SHOP"
    },
    { 
    id: 3,
    name:"COLLECTION"
    },
    { 
    id: 4,
    name:"JOURNAL"
    },
    { 
    id: 5,
    name:"LOOKBOOK"
    },
    { 
    id: 6,
    name:"PAGES"
    }

];
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="bg-secondary py-4 lg:py-5">
      <Container>
        {/* ================= Desktop ================= */}
        <div className="hidden lg:flex items-center gap-8.25">
          <Logo />

          <div className="flex-1">
            <Searchinput />
          </div>

          <div className="flex items-center gap-7.5">
            <HeaderLogin />

            <button>
              <Heart size={20} color="white" />
            </button>

            <HeaderCart />

            <button>
              <Menu size={20} color="white" />
            </button>
          </div>
        </div>
        {/* ================= Mobile ================= */}
        <div className="lg:hidden">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <Logo />

            <div className="flex items-center gap-3">
              <HeaderLogin />

              <button>
                <Heart size={18} color="white" />
              </button>

              <HeaderCart />

              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <X size={20} color="white" />
                ) : (
                  <Menu size={20} color="white" />
                )}
              </button>
            </div>
          </div>

          {/* Search */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileMenu ? "opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <Searchinput className="w-full md:mb-4 " />
            <div className=" md:hidden bg-primary px-5 py-2">
              <ul className="flex:col gap-4 md:gap-11">
                {navData.map((navList) => (
                  <li key={navList.id} className="list-item">
                    <Link href={`${navList.id}`}>{navList.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
