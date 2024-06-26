import "./LandingPage.css";
import video from "/bg.mp4";

import { useRef, useEffect } from "react";

export default function LandingPage() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div id="landingPage">
      <p>
        <video
          ref={videoRef}
          id="video"
          preload="auto"
          autoPlay="autoplay"
          loop
          muted
          playsInline={true}
          type="video/mp4"
          src={video}
        ></video>

        {/* <div
          dangerouslySetInnerHTML={{
            __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${video} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        /> */}
      </p>
      <p>Hi, I'M</p>
      <p>ATHARV </p>
      <p>SINGH</p>

      <p className="description">
        I am a{" "}
        <strong>
          <em>Web</em>
        </strong>{" "}
        and{" "}
        <strong>
          <em>Game Developer</em>
        </strong>{" "}
        with expertise in dynamic websites and immersive games. Let's create something amazing!
      </p>
    </div>
  );
}
