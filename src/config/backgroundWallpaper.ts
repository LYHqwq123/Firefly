import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "fullscreen",
	playerEnable: false,
	src: {
		desktop: "/assets/images/paris-rain/miku-stage.jpg",
		mobile: "/assets/images/paris-rain/miku-stage.jpg",
	},
	common: {
		dimOpacity: 0.22,
		homeText: {
			enable: true,
			title: "paris rain",
			titleSize: "4.5rem",
			subtitle: "记录学习、生活与喜欢的旋律。",
			subtitleSize: "1.1rem",
			typewriter: { enable: false, speed: 100, deleteSpeed: 50, pauseTime: 2000 },
			linksEnable: true,
			links: [
				{ name: "文章归档", url: "/archive/", icon: "material-symbols:article-rounded", showName: true },
				{ name: "关于我", url: "/about/", icon: "material-symbols:person", showName: true },
			],
		},
		carousel: { enable: false },
		waves: { enable: false },
		gradient: { enable: true, height: "20%" },
	},
	banner: {
		position: "center",
		postInfo: { mode: "description" },
		navbar: { transparentMode: "semi", blur: 14 },
	},
	// 全屏布局复用这些参数，初音插画留在背景，文字卡片保持可读。
	overlay: { zIndex: -1, opacity: 1, blur: 4, cardOpacity: 0.78 },
	fullscreen: {
		layout: "classic",
		position: "center",
		navbar: { transparentMode: "semifull", blur: 14 },
		blurRamp: { enable: { desktop: true, mobile: true } },
	},
};
