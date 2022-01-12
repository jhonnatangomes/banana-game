import Game from './Game';

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const score = document.querySelector('.score');

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const game = new Game(canvas, context, score, screenWidth, screenHeight);
game.start();
