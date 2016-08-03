//function resetDefaultSuggestion() {
//chrome.omnibox.setDefaultSuggestion({
//description: 'dapi: Search the Drupal API for %s'
//});
//}
//resetDefaultSuggestion();
var selText = '@Default';
function registerEvents(){
	chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.gateway == "quocdunginfo"){
		  selText = request.data;
		  sendResponse({data: "ok"});
	}
    
  });
}
registerEvents();


function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
    });
  }
  
  //chrome.omnibox.onInputEntered.addListener(function(text) {
  //  navigate("https://api.drupal.org/api/drupal/7/search/" + text);
  //});
  
  //Context menu for selection
  function registerContextMenu(){
	var onClickFn = function(){
		navigate('http://tratu.coviet.vn/hoc-tieng-anh/tu-dien/lac-viet/A-V/'+selText+'.html');
	}
	var contexts = ["selection"];
	for (var i = 0; i < contexts.length; i++)
	{
		var context = contexts[i];	
		chrome.contextMenus.create({"title": "Tra từ EN-VI", "contexts":[context], "onclick": onClickFn});  
	}
  }
  registerContextMenu();
