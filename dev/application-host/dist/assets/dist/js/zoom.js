// "use strict";
// var canvas = document.getElementById("canvas2");
// var context = canvas.getContext("2d");
// canvas.width = 600;
// canvas.height = 400;
// var zoom = {
//     scale: 1,
//     screen: {
//         x: 0,
//         y: 0,
//     },
//     world: {
//         x: 0,
//         y: 0,
//     },
// };
// var mouse = {
//     screen: {
//         x: 0,
//         y: 0,
//     },
//     world: {
//         x: 0,
//         y: 0,
//     },
// };
// var scale = {
//     length: function (number) {
//         return Math.floor(number * zoom.scale);
//     },
//     x: function (number) {
//         return Math.floor((number - zoom.world.x) * zoom.scale + zoom.screen.x);
//     },
//     y: function (number) {
//         return Math.floor((number - zoom.world.y) * zoom.scale + zoom.screen.y);
//     },
//     x_INV: function (number) {
//         return Math.floor((number - zoom.screen.x) * (1 / zoom.scale) + zoom.world.x);
//     },
//     y_INV: function (number) {
//         return Math.floor((number - zoom.screen.y) * (1 / zoom.scale) + zoom.world.y);
//     },
// };
// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.beginPath();
//     context.rect(scale.x(50), scale.y(50), scale.length(100), scale.length(100));
//     context.fillStyle = 'skyblue';
//     context.fill();
//     context.beginPath();
//     context.arc(scale.x(350), scale.y(250), scale.length(50), 0, 2 * Math.PI, false);
//     context.fillStyle = 'green';
//     context.fill();
// }
// canvas.addEventListener("wheel", zoomUsingCustomScale);
// function zoomUsingCustomScale(e) {
//     trackMouse(e);
//     trackWheel(e);
//     scaleShapes();
// }
// function trackMouse(e) {
//     mouse.screen.x = e.clientX;
//     mouse.screen.y = e.clientY;
//     mouse.world.x = scale.x_INV(mouse.screen.x);
//     mouse.world.y = scale.y_INV(mouse.screen.y);
// }
// function trackWheel(e) {
//     if (e.deltaY < 0) {
//         zoom.scale = Math.min(5, zoom.scale * 1.1);
//     }
//     else {
//         zoom.scale = Math.max(0.1, zoom.scale * (1 / 1.1));
//     }
// }
// function scaleShapes() {
//     zoom.screen.x = mouse.screen.x;
//     zoom.screen.y = mouse.screen.y;
//     zoom.world.x = mouse.world.x;
//     zoom.world.y = mouse.world.y;
//     mouse.world.x = scale.x_INV(mouse.screen.x);
//     mouse.world.y = scale.y_INV(mouse.screen.y);
//     draw();
// }
// draw();
