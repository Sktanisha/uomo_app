import Image from "next/image"
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" aria-label="logo">
      <Image src="/images/logo.png" alt="logo" width={111} height={27}/>
    </Link>
    
  );
};

export default Logo;
