"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const ShopBreadcrumb = () => {
  const pathname = usePathname();

  // Split the URL into segments
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex items-center uppercase font-medium gap-2 text-sm text-primary-black">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="text-sm text-primary-black"
          >
            Home
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          // Convert "men-shoes" => "Men Shoes"
          const title = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li
              key={href}
              className="flex items-center gap-2 text-sm"
            >
              <ChevronRight size={16} />

              {isLast ? (
                <span >
                  {title}
                </span>
              ) : (
                <Link
                  href={href}
                  
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ShopBreadcrumb;