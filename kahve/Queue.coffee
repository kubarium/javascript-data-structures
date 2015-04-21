class window.DS.Queue
    
    constructor:() ->
        @items=[]
    dequeue:() ->
        @items.shift()
    enqueue:(item) ->
        @items.push(item)
    length:() ->
        @items.length
    size:@::length
    clear:() ->
        @items.splice(0, @items.length)
        return null
    empty:@::clear
    back:() ->
        @items[@items.length-1]
    front:() ->
        @items[0]
    isEmpty:() ->
        @items.length == 0
    toString:() ->
        @items.toString()