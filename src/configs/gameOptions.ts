import defaultLabels from './defaultLabels.yaml'

export const gameOptions = {
	TITLE: 'test-game',
	WIDTH: 800,
	HEIGHT: 800,

	COLORS: {
		PRIMARY: '095793',
		SECONDARY: 'ff00ff',
		GRAY: 'd5d6d6',
		BACKGROUND: '000000',
		WARNING: '00345B',
		BGALPHA: 1,
	},
	VOLUME: 0.4,
	sdkInit: {
		id: '62fb4ad96a64f2b20ce922f9',
		baseUrl: 'https://www.jtitop.ch/extensions/v3',
		mock: process.env.NODE_ENV === 'development',
		labels: defaultLabels,
	},
}
