import React from "react";
import {SocialIcon, SocialIconProps} from "@components/ui/base/SocialIcon";

export type SocialIconsRowProps = {
  links: SocialIconProps[]
}
const SocialIconsRow: React.FC<SocialIconsRowProps> = ({ links }) => (
  <div className="flex justify-center space-x-4">
    {links.map((social) => (
      <SocialIcon
        key={social.label}
        href={social.href}
        iconName={social.iconName}
        label={social.label}
        className="w-8 h-8 bg-white/5 hover:bg-white/10"
      />
    ))}
  </div>
);

export default SocialIconsRow;