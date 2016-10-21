
$(ele).drag(obj):

obj: 可选，传递一个对象，可分别触发drag事件的回调

obj.down: 按下元素时触发

obj.move: 拖动元素时触发

obj.up: 松开元素时触发

obj.range: 是否限制元素拖拽范围

exm:

var obj = {

    // onmousedown触发时执行
    // ele: 元素
    down: function(ele) {
        console.log('move');
    }

    // onmousemove触发时执行
    // obj: object
    // obj.ele: 元素
    // obj.e: 事件对象
    // obj.box: 元素的的父节点
    // obj.left: 元素的实时left
    // obj.top: 元素的实时top
    move: function(obj) {   
        console.log('move');
    }

    // onmouseup触发时执行
    // ele: 元素本身
    up: function(ele) {
        console.log(ele.attr('class'));
    }

    range: true // 限制拖拽范围
}

$(ele).drag(obj);
