import type { FontDefinition, FontSelectionConfig } from "@/types/fontConfig";

// 使用设备自带字体，无需访问外部字体服务。
export const fontsList: FontDefinition[] = [];

export const fontConfig: FontSelectionConfig = {
	enable: false,
	selected: ["system"],
	bannerTitleFont: "",
	bannerSubtitleFont: "",
	navbarTitleFont: "",
	codeFont: "",
	subsetFonts: {},
};
