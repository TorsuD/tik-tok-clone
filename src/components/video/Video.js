import React, { useRef } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);

  const onVideoPress = () => {
    videoRef.current.play();
  };
  return (
    <div className="video">
      <video
        controls
        ref={videoRef}
        onClick={onVideoPress}
        loop
        className="video__player"
        src="https://v16-webapp.tiktok.com/223f8d2f8acb64b8863b76cfcdddecc1/62940234/video/tos/useast2a/tos-useast2a-pve-0068/b7a947632283478a9d2469ba1930202e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3322&bt=1661&btag=80000&cs=0&ds=3&ft=eXd.6H1cMyq8ZlYrSwe2N8-Aol7Gb&mime_type=video_mp4&qs=0&rc=OTVmOWdnNGY4ZGdmNDQ0ZEBpanMzZTM6Zmo8ZDMzNzczM0BjMjVeNjEtNmIxNTI2MmNhYSMub2gwcjRnZDZgLS1kMTZzcw%3D%3D&l=20220529173047010190219223145D7CDE"
      ></video>
    </div>
  );
}

export default Video;

// i tried -- https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/881d3a99af3946bfae67f4cdadf9686c_1649294447?x-expires=1653861600&x-signature=wE2raVzG6NpM0cWn%2F%2BaqUxHJFyo%3D

// soccer - https://v16-webapp.tiktok.com/223f8d2f8acb64b8863b76cfcdddecc1/62940234/video/tos/useast2a/tos-useast2a-pve-0068/b7a947632283478a9d2469ba1930202e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3322&bt=1661&btag=80000&cs=0&ds=3&ft=eXd.6H1cMyq8ZlYrSwe2N8-Aol7Gb&mime_type=video_mp4&qs=0&rc=OTVmOWdnNGY4ZGdmNDQ0ZEBpanMzZTM6Zmo8ZDMzNzczM0BjMjVeNjEtNmIxNTI2MmNhYSMub2gwcjRnZDZgLS1kMTZzcw%3D%3D&l=20220529173047010190219223145D7CDE
