import "./LandingPage.css";
// import { useEffect, useRef } from "react";

export default function LandingPage() {
  // const videoRef = useRef(null);
  // useEffect(() => {
  //   videoRef.current.defaultMuted = true;
  // });

  return (
    <div id="landingPage">
      {/* <div
        dangerouslySetInnerHTML={{
          __html: (function () {
            let videoContainer = document.createElement("video");
            let source = document.createElement("source");
            videoContainer.setAttribute("autoplay", "");
            videoContainer.setAttribute("muted", "");
            videoContainer.setAttribute("loop", "");
            source.src = "/bg.mp4";
            videoContainer.appendChild(source);
            return videoContainer.outerHTML;
          })(),
        }}
      /> */}

      {/* <video ref={videoRef} muted autoPlay loop src="/bg.mp4" playsInline></video> */}

      <video autoPlay loop muted playsInline id="video" src="/bg.mp4" />
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
