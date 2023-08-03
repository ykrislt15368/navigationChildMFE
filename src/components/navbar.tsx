import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { Links } from "@/types/links";

const Navbar = ({
  styleName,
  navigation,
}: {
  styleName: string;
  navigation: Links[];
}) => {
  const pathName = usePathname();
  console.log("current path name", pathName);
  return (
    <>
      <ul className={styleName}>
        {navigation
          ? navigation.map((link) => (
              <li
                key={link.name}
                className={link.path === pathName ? styles.active : ""}
              >
                {link.children && link.children.length > 0 ? (
                  <>
                  {/* Rendering the parent name only, TODO: can have Link or collapsible feature */}
                  {link.name} 
                  <ul>
                    {link.children.map((linkchild) => (
                      <li
                        key={linkchild.name}
                        className={
                          linkchild.path === pathName ? styles.active : ""
                        }
                      >
                        <Link href={linkchild.path}>{linkchild.name}</Link>
                      </li>
                    ))}
                  </ul>
                  </>
                ) : (
                  <Link href={link.path}>{link.name}</Link>
                )}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default Navbar;
