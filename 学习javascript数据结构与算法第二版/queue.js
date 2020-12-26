function Queue(items) {
    this.items = items;
}

/**
 * 项队列尾部添加一个元素
 */
Queue.prototype.enqueue = function () {
    Array.prototype.push.apply(this.items, arguments);
};

/**
 * 移除队列的第一个元素
 * @returns {T}
 */
Queue.prototype.dequeue = function () {
    return this.items.shift();
};

/**
 * 返回队列的第一个元素
 * @returns {*}
 */
Queue.prototype.front = function () {
    return this.items[0];
};

/**
 * 如果队列里没任何元素返回true，有返回false
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};

/**
 * 返回队列的元素个数
 * @returns {*}
 */
Stack.prototype.size = function () {
    return this.items.length;
};