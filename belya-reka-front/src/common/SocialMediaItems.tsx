import type { FC } from "react";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const icon1 = `${CDN_BASE}/assets/media/picture/Frame.svg`;
const icon2 = `${CDN_BASE}/assets/media/picture/FrameTiktok.svg`;
const icon3 = `${CDN_BASE}/assets/media/picture/youtube.svg`;

const SocialMediaItems: FC = () => (
  <div className="flex gap-x-5 items-center">
    <a href="https://www.instagram.com/belayareka.kg/">
      <img src={icon1} alt="instagram" />
    </a>
    <a href="https://www.tiktok.com/@belayareka.kg">
      <img src={icon2} alt="tiktok" />
    </a>
    <a href="https://www.youtube.com/channel/UC9Y5P88RTpoeLgB4EY4FHsA">
      <img src={icon3} alt="youtube" />
    </a>
  </div>
);

export default SocialMediaItems;
