/**
 * Created by Administrator on 2017/5/22.
 */
(function () {
    // 根据ID获取对应的元素
    const CANVAS = document.getElementById('myCanvas');
    // 设置横坐标
    const X = CANVAS.width / 2;
    // 设置纵坐标
    const Y = CANVAS.height / 2;
    // 设置半径
    const RADIUS = 75;
    // 设置圆形的生成方向，false 表示为顺时针
    const COUNTER_CLOCKWISE = false;
    // 设置绘制进度条圆形的宽度
    const PROGRESS_LINE_WIDTH = 6;
    // 设置边界圆形的宽度
    const COMMON_LINE_WIDTH = 1;
    // 设置开始角度
    const START_ANGLE = 0;
    // 设置结束角度
    const END_ANGLE = Math.PI * 2;
    // 封装绘制圆形的过程，方便重复是用
    function drawCycle(canvasElem, positionX, positionY, radius, startAngle, endAngle, couterClockwise, lineWidth) {
        var cycle = canvasElem.getContext('2d');
        cycle.lineWidth = lineWidth;
        cycle.beginPath();
        cycle.arc(positionX, positionY, radius, startAngle, endAngle, couterClockwise);
        cycle.stroke();
    }
    // 设置 input 的属性
    const rangeElem = document.getElementById('range');
    // 最大值
    rangeElem.setAttribute('max', '' + 2 * Math.PI);
    // 最小值
    rangeElem.setAttribute('min', '0');
    // 初始值
    rangeElem.setAttribute('value', '0');
    // 移动控制条一次改变的值
    rangeElem.setAttribute('step', '0.0000000001');

    // 初始化边框
    // 内边框
    drawCycle(CANVAS, X, Y, RADIUS - PROGRESS_LINE_WIDTH / 2, START_ANGLE, END_ANGLE, COUNTER_CLOCKWISE, COMMON_LINE_WIDTH);
    // 外边框
    drawCycle(CANVAS, X, Y, RADIUS + PROGRESS_LINE_WIDTH / 2, START_ANGLE, END_ANGLE, COUNTER_CLOCKWISE, COMMON_LINE_WIDTH);

    // 当input的值改变时实时显示改变圆形进度条
    rangeElem.oninput = function () {
        // 实时清空旧的图形
        var clearRECT = CANVAS.getContext('2d');
        clearRECT.clearRect(X - RADIUS - PROGRESS_LINE_WIDTH, Y - RADIUS - PROGRESS_LINE_WIDTH, RADIUS * 2 + PROGRESS_LINE_WIDTH * 2, RADIUS * 2 + PROGRESS_LINE_WIDTH * 2);
        // 在圆形进度条中央绘制输入值
        var contextLetter = CANVAS.getContext('2d');
        contextLetter.font = '48px serif';
        contextLetter.textAlign = 'center';
        contextLetter.textBaseline = 'middle';
        contextLetter.strokeText((this.value / (2 * Math.PI) * 360 + '').split('.')[0], X, Y);

        // 绘制进度条
        drawCycle(CANVAS, X, Y, RADIUS - PROGRESS_LINE_WIDTH / 2, START_ANGLE, END_ANGLE, COUNTER_CLOCKWISE, COMMON_LINE_WIDTH);
        drawCycle(CANVAS, X, Y, RADIUS + PROGRESS_LINE_WIDTH / 2, START_ANGLE, END_ANGLE, COUNTER_CLOCKWISE, COMMON_LINE_WIDTH);
        // 根据输入值绘制进度条
        drawCycle(CANVAS, X, Y, RADIUS, START_ANGLE - Math.PI/2, this.value - Math.PI/2, COUNTER_CLOCKWISE, PROGRESS_LINE_WIDTH);
    };
})();