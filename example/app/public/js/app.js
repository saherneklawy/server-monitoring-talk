$(document).ready(function() {
  $.getJSON("/data.json", {}, function(data) {
    $('#ajax-content').html(data.data);
  } );
});

$(document).click(function(event) {
  sendClickThroughData(event.target);
});




function sendClickThroughData(element, extra_params){
  element  = element || $(body)[0];
  extra_params = extra_params || {};
  var rootScope = rootScope || {};
  var isGuest = null;
  if(rootScope.isGuest) {
    isGuest = rootScope.isGuest();
  }
  options = {
       current_page: document.URL,
       current_state: JSON.stringify(rootScope.currentState),
       csspath: cssPath(element),
       trackable_action: element.getAttribute('trackable-action'),
       trackable_id: element.getAttribute('trackable-id'),
       trackable_scrolling: element.getAttribute('track-scrolling'),
       client_timestamp: new Date().getTime() / 1000,
      };
  options = $.extend(options, extra_params);
  $.getJSON("/bcn.json", options, function(data) { return false; } );
}


// http://stackoverflow.com/questions/3620116/get-css-path-from-dom-element
var cssPath = function(el) {
  if (!(el instanceof Element)) return;
  var path = [];
  while (el && el.nodeType === Node.ELEMENT_NODE) {
    var selector = el.nodeName.toLowerCase();
    //var idFound = false;
    if (el.id) {
      selector += '#' + el.id;
      //idFound = true;
    } else {
      var sib = el, nth = 1;
      while (sib = sib.previousSibling) {
        // this handles non-element nodes
        if(sib.nodeType === Node.ELEMENT_NODE)
          nth++;
      }
      selector += ":nth-child("+nth+")";
    }
    path.unshift(selector);
    el = el.parentNode;
    //if (idFound)
      //break;

  }
  return path.join(" > ");
}
