import { Suspense, cloneElement, useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";
import { Box, VStack, Spinner, Collapse } from "@chakra-ui/react";
import Footer from "./Footer";

function Ready({ setReady }) {
  useEffect(() => () => void setReady(true), []);
  return null;
}

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  return (
    <>
      <Suspense fallback={<Ready setReady={setReady} />}>
        {cloneElement(children, { ready: clicked && ready, clicked: clicked })}
      </Suspense>

      <Box
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          clicked && "clicked"
        }`}
      >
        <VStack mt="40vh">
          <Collapse in={!ready}>
            <Spinner boxSize={36} size="xl" />
          </Collapse>
          <Link
            sx={{
              marginX: "20vw",
              display: "inline-block",
              textAlign: "center",
              mt: "2rem",
            }}
            href="#"
            onClick={() => setClicked(true)}
          >
            {!ready
              ? "Loading..."
              : "This experience will begin with audio. Click to proceed."}
          </Link>
        </VStack>
      </Box>
      <Footer />
    </>
  );
}
