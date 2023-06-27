import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaBehance, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer({ ...props }) {
  return (
    <>
      <ButtonGroup
        sx={{
          display: "block",
          position: "fixed",
          width: "min(160px, 100%)",
          left: "50%",
          bottom: "0",
          transform: "translateX(-50%)",
          paddingBottom: "1.5rem",
          zIndex: "2",
        }}
        spacing={20}
        variant="ghost"
      >
        <IconButton
          as="a"
          href="https://www.youtube.com/channel/UCtNvViFMEl06md4ouf1YTRw"
          aria-label="Youtube"
          target="_blank"
          icon={<FaYoutube fontSize="1.5rem" />}
        />
        <IconButton
          as="a"
          href="http://linkedin.com/in/joshenxlim"
          aria-label="LinkedIn"
          target="_blank"
          icon={<FaLinkedin fontSize="1.5rem" />}
        />
        <IconButton
          as="a"
          href="http://behance.net/joshenlim"
          aria-label="Behance"
          target="_blank"
          icon={<FaBehance fontSize="1.5rem" />}
        />
        <IconButton
          as="a"
          href="http://github.com/joshenx/concertcougher"
          aria-label="GitHub"
          target="_blank"
          icon={<FaGithub fontSize="1.5rem" />}
        />
      </ButtonGroup>
    </>
  );
}
