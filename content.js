document.addEventListener('mouseup',function(event)
{
    var sel = window.getSelection().toString();
	if(sel.length)
     chrome.runtime.sendMessage({gateway: "quocdunginfo", data: sel}, function(response) {
		  console.log(response);
		});
});