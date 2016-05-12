
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {

      page = url.match(/^(https?:\/\/)([a-zA-Z\.-]*)\/(.*)$/);

      renderStatus('Capes proxy   ');

      capes = "http://" + page[2] + '.ez88.periodicos.capes.gov.br/' + page[3]

      chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
            chrome.tabs.update( tabs[0].id, { url: capes} ); 
      });
  });
});
