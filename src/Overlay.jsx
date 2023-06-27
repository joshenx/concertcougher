import { Image } from "@chakra-ui/react";
import { FaBehance, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Overlay({ ...props }) {
  return (
    <>
      <Image
        sx={{
          display: "block",
          position: "fixed",
          left: "50%",
          top: "5vh",
          filter: "opacity(30%)",
          transform: "translateX(-50%)",
          paddingBottom: "1.5rem",
          transition: "all 1s",
        }}
        _hover={{ filter: "opacity(100%)" }}
        width="200px"
        src="./images/logo.png"
      ></Image>
    </>
  );
}
