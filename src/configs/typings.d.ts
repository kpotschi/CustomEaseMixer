declare module '*.pug' {
	const content: string
	export default content
}

declare module '*.yaml' {
	const data: any
	export default data
}

declare module 'phaser3-rex-plugins/plugins/webfontloader-plugin'
