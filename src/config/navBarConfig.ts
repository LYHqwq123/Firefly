import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const LinkPresets: Record<string, NavBarLink> = {
	Home: { name: "首页", url: "/", icon: "material-symbols:home-rounded" },
	Archive: { name: "归档", url: "/archive/", icon: "material-symbols:archive-rounded" },
	Categories: { name: "分类", url: "/categories/", icon: "material-symbols:folder-open-rounded" },
	Tags: { name: "标签", url: "/tags/", icon: "material-symbols:tag-rounded" },
	About: { name: "关于我", url: "/about/", icon: "material-symbols:person-rounded" },
	Friends: { name: "友链", url: "/friends/", icon: "material-symbols:link-rounded", pageKey: "friends" },
};

export const navBarConfig: NavBarConfig = {
	links: [LinkPresets.Home, LinkPresets.Archive, LinkPresets.Categories, LinkPresets.Tags, LinkPresets.About],
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
