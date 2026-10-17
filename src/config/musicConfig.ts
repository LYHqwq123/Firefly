import type { MusicPlayerConfig } from "../types/musicConfig";

// 尚未添加自己的音乐列表，播放器入口暂时关闭。
export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: false,
	showInSidebar: false,
	mode: "local",
	volume: 0.5,
	playMode: "list",
	showLyrics: false,
	local: { playlist: [] },
};
