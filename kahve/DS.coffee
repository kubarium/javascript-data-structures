window.DS or= {}

window.DS.DSError = (message) ->
    @message = message
window.DS.DSError.prototype = new Error()
