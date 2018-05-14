// 创建的方法是addHandlers(),removeHandlers(),这两个方法属于一个叫EventUtil的对象;
// 但是这个没有考虑到IE中作用域的问题，不过就添加和移除事件还是足够的。

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent(on + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;

    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent(on + type, handler);
        } else {
            element['on' + type] = null
        }
    }

};