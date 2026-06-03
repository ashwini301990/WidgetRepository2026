function executeWidgetCode() {
	define("Main",[],function() {
		var myWidget = {
            onLoadWidget: function() {
                widget.body.innerHTML = "<p>Hello, World !</p>" + "<br/>" + widget.getPreference("UserName").value;
            }
        };
        widget.addEvent("onLoad", myWidget.onLoadWidget);
    });
}