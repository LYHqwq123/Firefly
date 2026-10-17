import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/paris-rain/avatar.svg",
	name: "paris rain",
	bio: "记录学习、生活与喜欢的旋律。",
	links: [
		{ name: "GitHub", icon: "fa7-brands:github", url: "https://github.com/LYHqwq123", showName: true },
		{ name: "关于我", icon: "material-symbols:person", url: "/about/", showName: true },
		{ name: "RSS", icon: "material-symbols:rss-feed", url: "/rss.xml", showName: false },
	],
};
