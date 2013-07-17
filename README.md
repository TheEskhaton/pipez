# Pipez

Pipez is a microlibrary for creating event handlers with pre and post executing functions

### Example

This:
```html
    <script src="pipez.js"></script>
    <div id="test">
        Test div
    </div>    
    <script>
        var pipe = new Pipez(function(evt){ console.log('the event'); });
        pipe.after(function(evt){ console.log('after'); })
            .before(function(evt){ console.log('before'); });
        document.getElementById('test').addEventListener('click',pipe.handler)
    </script>
```
Outputs "before", "the event", "after" when the div is clicked
