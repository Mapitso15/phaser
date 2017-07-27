var Class = require('../../../utils/Class');
var Event = require('../../../events/Event');

var DragStartEvent = new Class({

    Extends: Event,

    initialize:

    function DragStartEvent (pointer, gameObject)
    {
        Event.call(this, 'DRAG_START_EVENT');

        //  The Pointer that triggered the event
        this.pointer = pointer;

        //  The native DOM event (MouseEvent, TouchEvent, etc)
        this.event = pointer.event;

        //  The Game Object the event occurred on
        this.gameObject = gameObject;

        //  The local x/y coordinates of the event within the Game Object
        this.x = gameObject.input.dragX;
        this.y = gameObject.input.dragY;
    }

});

module.exports = DragStartEvent;