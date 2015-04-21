class window.DS.Stack
    
    constructor:() ->
        @items=[]
    pop:() ->
        @items.pop()
    remove:@::pop
    push:(item) ->
        @items.push(item)
    add:@::push
    length:() ->
        @items.length
    size:@::length
    clear:() ->
        @items.splice(0, @items.length)
        return null
    empty:@::clear
    top:() ->
        @items[@items.length-1]
    peek:@::top
    isEmpty:() ->
        @items.length == 0
    toString:() ->
        @items.toString()