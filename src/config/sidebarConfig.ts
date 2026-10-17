import type { SidebarLayoutConfig } from "../types/sidebarConfig";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "left",
	hideSidebarOnPostPage: false,
	noSidebarContentWidth: 1,
	leftComponents: [
		{ type: "profile", enable: true, position: "top", showOnPostPage: true },
		{ type: "announcement", enable: true, position: "top", showOnPostPage: false },
		{ type: "categories", enable: true, position: "top", showOnPostPage: false, specificConfig: { collapseThreshold: 5 } },
		{ type: "tags", enable: true, position: "top", showOnPostPage: false, specificConfig: { collapseThreshold: 10 } },
		{ type: "calendar", enable: true, position: "sticky", showTitle: false, showOnPostPage: false, specificConfig: { calendar: { showHeatmap: false } } },
		{ type: "sidebarToc", enable: true, position: "sticky", showOnPostPage: true, hideOnNonPostPage: true },
	],
	rightComponents: [],
	mobileBottomComponents: [
		{ type: "profile", enable: true, showOnPostPage: false },
		{ type: "categories", enable: true, showOnPostPage: false, specificConfig: { collapseThreshold: 5 } },
	],
};
