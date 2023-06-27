import { Image } from "@chakra-ui/react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { FaBehance, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Overlay({ clicked, ...props }) {
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
      />

      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ y: "150vh", opacity: 0 }}
            animate={{
              y: "90vh",
              opacity: 1,
              transition: { type: "spring", duration: 2 },
            }}
          >
            <Image
              sx={{
                display: "block",
                position: "fixed",
                left: "50%",
                bottom: "-10rem",
                transform: "translateX(-50%)",
                transition: "all 1s",
                zIndex: "0",
                pointerEvents: "none",
                objectFit: "fill",
              }}
              draggable="false"
              minWidth="1920px"
              src="./images/audience_far.png"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ y: "150vh", opacity: 0 }}
            animate={{
              y: "90vh",
              opacity: 1,
              transition: { type: "spring", duration: 1 },
            }}
          >
            <Image
              sx={{
                display: "block",
                position: "fixed",
                left: "50%",
                bottom: "-10rem",
                transform: "translateX(-50%)",
                transition: "all 1s",
                zIndex: "1",
                pointerEvents: "none",
              }}
              draggable="false"
              minWidth="1920px"
              src="./images/audience_close.png"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
