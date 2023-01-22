export interface CustomConfig {
	dpr: number
	sdkResponse: SDK.InitResponse
}

export type Constants = {
	COLORS?: ColorObject
	VOLUME?: number
	FONTS: FontObject
}

type ColorObject = {
	PRIMARY: string
	SECONDARY: string
	BACKGROUND: string
	WARNING: string
	BGALPHA: number
}

interface CustomGameConfig extends Phaser.Game {
	customConfig: CustomConfig
}

type FontObject = {
	PRIMARY: string
	SECONDARY: string
}

type AssetFolder = {
	[key: string]: Phaser.Types.Loader.FileTypes.PackFileSection
}

interface CustomPhaserConfig extends Phaser.Types.Core.GameConfig {
	scale: StrictScaleConfig
	game?: CustomGameConfig
}

interface StrictScaleConfig extends Phaser.Types.Core.ScaleConfig {
	width: number
	height: number
}
