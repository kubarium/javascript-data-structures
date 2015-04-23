class window.DS.List
    
    constructor:() ->
        @items=[]
        @currentPosition=0
    getItem:() ->
        if !@isLast()
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
        if @length() <= index || index < 0
            return
        @items.splice(index || @currentPosition, 0, item)
    
    hasNext:() ->
        @currentPosition != @length()
    hasPrevious:() ->
        @currentPosition > 0
    next:() ->
        if @hasNext()
            ++@currentPosition
    previous:() ->
        if @hasPrevious()
            --@currentPosition
    isLast:() ->
        @currentPosition == @length()
    length:() ->
        @items.length
    size:@::length
    clear:() ->
        @items.splice(0, @length())
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
        @moveTo(@length()-1)
    last:() ->
        @end()
        @getItem()
    isEmpty:() ->
        @length() == 0
    toString:() ->
        @items.toString()