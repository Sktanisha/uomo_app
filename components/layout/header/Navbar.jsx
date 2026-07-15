import React from "react";
import Container from "../Container";
import Link from "next/link";
const Navbar = () => {
  const navData = [
    { 
    id: 1,
    name:"HOME",
    href:"/",
    },
    { 
    id: 2,
    name:"SHOP",
    href:"/shop",
    },
    { 
    id: 3,
    name:"COLLECTION",
    href:"/collection",
    },
    { 
    id: 4,
    name:"JOURNAL",
    href:"/journal",
    },
    { 
    id: 5,
    name:"LOOKBOOK",
    href:"/lookbook",
    },
    { 
    id: 6,
    name:"PAGES",
    href:"/pages",
    }

];
   return (
    <nav className="hidden md:block bg-primary pt-5.25 pb-3.75">
      <Container>
        <ul className="flex gap-11">
          {navData.map((navList) => (
            <li key={navList.id} className="list-item">
              <Link href={navList.href}>{navList.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
