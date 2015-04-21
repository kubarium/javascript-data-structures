window.DS or= {}

window.DS.DSError = (message) ->
    @message = message
window.DS.DSError.prototype = new Error()

class window.DS.List
    
    constructor:() ->
        @items=[]
        @currentPosition=0
    getItem:() ->
        @items[@currentPosition]
    getElement:@::getItem
    find:(item) ->
        
        return index for token, index in @items when token is item
        return -1
    contains:(item) ->
        @find(item) > -1
    has:@::contains
    remove:(item) ->
        position = @find(item)
        if position != -1
            @items.splice(position, 1)
            @moveTo(position)
            return true
        return false
    append:(item) ->
        @items.push(item)
        
    insert:(item, index) ->
        if @length - 1 >= index || index < 0
            return
        @items.splice(index || @currentPosition, 0, item)
    
    hasNext:() ->
        @currentPosition + 1 < @items.length
    hasPrevious:() ->
        @currentPosition > 0
    next:() ->
        if(@hasNext())
            ++@currentPosition
    previous:() ->
        if(@hasPrevious())
            --@currentPosition
    length:() ->
        @items.length
    size:@::length
    clear:() ->
        @items.splice(0, @items.length)
        @currentPosition = 0 
        return null
    empty:@::clear
    moveTo:(position)->
        if @length() > position >= 0
            @currentPosition = position
        else throw new window.DS.DSError("Can't move the cursor beyond range");
    front:() ->
        @moveTo(0)
    first:() ->
        @front()
        @getItem()
    end:() ->
        @moveTo(@items.length-1)
    last:() ->
        @end()
        @getItem()
    isEmpty:() ->
        @items.length == 0
    toString:() ->
        @items.toString()
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