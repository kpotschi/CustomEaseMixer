import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin'
import { GameScene } from '../scenes/GameScene'
import { gameOptions } from './gameOptions'

export const phaserConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game-wrapper',
    width: gameOptions.WIDTH,
    height: gameOptions.HEIGHT,
    // expandParent: false,
    max: {
      width: gameOptions.WIDTH,
      height: gameOptions.HEIGHT
    }
  },
  title: gameOptions.TITLE + ' ' + process.env.VERSION,
  banner: {
    text: `${'#' + gameOptions.COLORS.BACKGROUND}`,
    background: [
      `${'#' + gameOptions.COLORS.PRIMARY}`,
      `${'#' + gameOptions.COLORS.SECONDARY}`,
      `${'#' + gameOptions.COLORS.BACKGROUND}`,
      `${'#' + gameOptions.COLORS.PRIMARY}`
    ],
    hidePhaser: true
  },

  // transparent: true,
  dom: {
    createContainer: true
  },
  backgroundColor: '#aaaaaa',
  physics: {
    default: 'arcade',

    arcade: {
      // debug: true,
      gravity: {
        x: 0,
        y: 0
      }
    }
  },
  disableContextMenu: true,

  scene: [GameScene]
}
