import type { Live2DWidgetConfig, SpineModelConfig } from "../types/pioConfig";

// 看板娘暂未启用；需要时添加自己的模型文件。
export const spineModelConfig: SpineModelConfig = {
	enable: false,
	model: { path: "" },
	position: { corner: "bottom-left" },
	size: { width: 135, height: 165 },
};

export const live2dWidgetConfig: Live2DWidgetConfig = {
	enable: false,
	model: { path: "", volume: 0 },
};
