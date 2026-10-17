import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

export const friendsPageConfig: FriendsPageConfig = {
	title: "友情链接",
	description: "在这里收藏相遇的博客。友链列表正在整理中。",
	showCustomContent: false,
	showComment: false,
	randomizeSort: false,
};

export const friendsConfig: FriendLink[] = [];

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);
	if (friendsPageConfig.randomizeSort) return friends.sort(() => Math.random() - 0.5);
	return friends.sort((a, b) => b.weight - a.weight);
};
