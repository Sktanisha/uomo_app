import React from "react";
import Container from "../Container";
import Link from "next/link";
const Navbar = () => {
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
  return (
    <nav className="bg-primary pt-5.25 pb-3.75">
      <Container>
        <ul className="flex gap-11">
        {
            navData.map((navList)=>(
                <li key={navList.id} className="list-item">
                    <Link href={`${navList.id}`}>{navList.name}</Link>
                </li>
            ))
        }
        </ul>
        
      </Container>
    </nav>
  );
};

export default Navbar;
