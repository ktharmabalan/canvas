let zoomLevel = 0;

const details = document.getElementById('details');

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.addEventListener('mousewheel', ($event) => scrollHandler($event, {}));

const canvasSupport = () => {
    return !!document.createElement('canvas').getContext;
};

const drawCircles = (canvas, context, width, height) => {
    const circleSize = 10;
    const gaps = circleSize + 10;
    const widthCount = parseInt(`${width / gaps}`);
    const heightCount = parseInt(`${height / gaps}`);
    const aColors = ['#43A9D1', '#EFA63B', '#EF7625', '#5E4130'];
    const aColorsLength = aColors.length;

    for (let x = 0; x < widthCount; x++) {
        for (let y = 0; y < heightCount; y++) {
            const colorIdx = parseInt(`${Math.random() * aColorsLength}`);
            context.fillStyle = aColors[colorIdx];
            context.beginPath();
            context.arc(circleSize + gaps * x, circleSize + gaps * y, circleSize, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }
    // canvas.addEventListener('mousemove', ($event) => clickHandler($event, {
    //     circleSize,
    //     widthCount,
    //     heightCount,
    //     width,
    //     height,
    //     gaps,
    //     context
    // }));
};

const clickHandler = ($event, {
    circleSize,
    widthCount,
    heightCount,
    width,
    height,
    gaps,
    context
}) => {
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

const drawGrid = () => {

};

const drawScreen = () => {
    console.log('drawscreen');
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    context.fillStyle = "#FCEAB8";
    context.fillRect(0, 0, width, height);
    // context.clearRect(0, 0, width / 2, height / 2);

    // drawCircles(canvas, context, width, height);
    // context.fillStyle = "#FFDE00";
    // context.arc(width / 2.3, height / 2, 40, 0, 2 * Math.PI, false);
    // context.fill();

    drawGrid();

    details.innerHTML = `zoom: ${zoomLevel}`;
};

const scrollHandler = ($event, {}) => {
    const {
        clientX,
        clientY,
        deltaX,
        deltaY,
        layerX,
        layerY,
        movementX,
        movementY,
        offsetX,
        offsetY,
        pageX,
        pageY,
        screenX,
        screenY,
        x,
        y,
        wheelDeltaX,
        wheelDeltaY,
    } = $event;
    console.log(
        //     `clientX: ${clientX}`,
        //     `clientY: ${clientY}`,
        //     `deltaX: ${deltaX}`,
        //     `deltaY: ${deltaY}`,
        //     `layerX: ${layerX}`,
        //     `layerY: ${layerY}`,
        //     `movementX: ${movementX}`,
        //     `movementY: ${movementY}`,
        //     `offsetX: ${offsetX}`,
        //     `offsetY: ${offsetY}`,
        //     `pageX: ${pageX}`,
        //     `pageY: ${pageY}`,
        //     `screenX: ${screenX}`,
        //     `screenY: ${screenY}`,
        //     `x: ${x}`,
        //     `y: ${y}`,
        // `wheelDeltaX: ${wheelDeltaX}`,
        // `wheelDeltaY: ${wheelDeltaY}`
    );
    if (wheelDeltaY > 0) {
        zoomLevel += 10;
    } else {
        zoomLevel -= 10;
    }
    // details.innerHTML = `zoom: ${zoomLevel}`;
    // console.log(zoomLevel);
};

const canvasApp = () => {
    if (!canvasSupport) {
        return;
    }
    // setInterval(() => {
    drawScreen();
    // }, 500);
};

window.addEventListener('load', canvasApp);