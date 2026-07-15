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
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="hover:text-primary transition-colors"
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
              className="flex items-center gap-2"
            >
              <ChevronRight size={16} />

              {isLast ? (
                <span className="font-medium text-primary-black">
                  {title}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-primary transition-colors"
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ShopBreadcrumb;