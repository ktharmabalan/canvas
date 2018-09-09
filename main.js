const canvasSupport = () => {
    return !!document.createElement('canvas').getContext;
};

const drawCircles = (context, width, height) => {
    const circleSize = 10;
    const gaps = circleSize + 10;
    const widthCount = parseInt(width / gaps);
    const heightCount = parseInt(height / gaps);
    const aColors = ['#43A9D1', '#EFA63B', '#EF7625', '#5E4130'];
    const aColorsLength = aColors.length;

    for (let x = 0; x < widthCount; x++) {
        for (let y = 0; y < heightCount; y++) {
            context.fillStyle = aColors[parseInt(Math.random() * aColorsLength)];
            context.beginPath();
            context.arc(circleSize + gaps * x, circleSize + gaps * y, circleSize, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }
    canvas.addEventListener('mousemove', ($event) => clickHandler($event, { circleSize, widthCount, heightCount, width, height, gaps, context }));
};

const clickHandler = ($event, { circleSize, widthCount, heightCount, width, height, gaps, context }) => {
    const { x, y, target } = $event;
    // console.log(x, y);
    // console.log(circleSize);
    const x1 = Math.floor(x / gaps);
    const y1 = Math.floor(y / gaps);
    console.log(x1, y1);

    context.fillStyle = '#FFFFFF55';
    context.beginPath();
    context.arc(circleSize + gaps * x1, circleSize + gaps * y1, circleSize, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}

const drawScreen = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.fillStyle = "#FCEAB8";
    context.fillRect(0, 0, width, height);
    // context.clearRect(0, 0, width / 2, height / 2);

    drawCircles(context, width, height);
};

const canvasApp = () => {
    if (!canvasSupport) {
        return;
    }
    drawScreen();
};

window.onload = canvasApp();