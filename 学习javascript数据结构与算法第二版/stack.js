function Stack(items) {
    this.items = items;
}

/**
 * 添加一个或多个元素到栈顶
 */
Stack.prototype.push = function () {
    Array.prototype.push.apply(this.items, arguments);
};

/**
 * 移除栈顶元素，同时返回被移除的元素
 * @returns String
 */
Stack.prototype.pop = function () {
    return this.items.pop();
};

/**
 * 返回栈顶元素，不对栈作任何修改
 */
Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
};

/**
 * 如果栈里没任何元素返回true，有返回false
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};

/**
 * 清空栈
 */
Stack.prototype.clear = function () {
    this.items.length = 0;
};

/**
 * 返回栈里元素个数
 * @returns {*}
 */
Stack.prototype.size = function () {
    return this.items.length;
};

Stack.prototype.toString = function () {
    return this.items.join();
};