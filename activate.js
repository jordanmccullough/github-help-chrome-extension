(function(){
  /////////////////////////////////////////////
  // Mapping to page content and Help links
  /////////////////////////////////////////////

    var helpMapUrl = "data/help-map.json",
        helpMap = [],
        xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        helpMap = JSON.parse(xhr.responseText);
        activate();
      }
    }
    xhr.open("GET", chrome.extension.getURL(helpMapUrl), true);
    xhr.send();


  /////////////////////////////////////////////
  // Operational variables and container setup
  /////////////////////////////////////////////

  var page = $(".site");
      container = $('<div id="howto-container"></div>'),
      highlight = $('<div class="gh-highlight"></div>');
      answer = $('<div class="answer"></div>');

  $("body").append(container);
  container.append(answer);
  container.append(highlight);

  function activate(){
    for(var i=0;i < helpMap.length; i++){

      var helpIcon = $('<a class="question" data-selector="helpMap[i].selector" href="' + helpMap[i].helpLink + '"></a>"');
      container.append(helpIcon);

      var target     = $(helpMap[i].selector),
          offset     = target.offset(),
          helpLink   = helpMap[i].helpLink + " .article-body p:first-child";

      if (offset){
        if (offset.top > 0 && offset.left > 0){
          helpIcon.css("top", offset.top + "px");
          helpIcon.css("left", offset.left + "px");
        }

        if (offset.top < helpIcon.height()){
          helpIcon.addClass("top");
        }


        helpIcon.mouseover({selector: helpMap[i].selector, link: helpLink, offsetLeft: offset.left, offsetTop: offset.top},
          function(event){
            highlight.width($(event.data.selector).width());
            highlight.height($(event.data.selector).height());
            highlight.css("top", event.data.offsetTop + "px");
            highlight.css("left", event.data.offsetLeft + "px");


            answer.css("top", event.data.offsetTop+$(event.data.selector).height() + ((offset.top < helpIcon.height()) ? helpIcon.height() : 0) + "px");

            if( ((answer.width() + event.data.offsetLeft )) > page.width() ){
              answer.css("left", (event.data.offsetLeft-answer.width()) + "px");
            }
            else{
              answer.css("left", event.data.offsetLeft + "px");
            }
            highlight.toggle();

            answer.show();
            answer.load(event.data.link);
          }
        );
        helpIcon.mouseout({selector: helpMap[i].selector},
          function(event){
            highlight.toggle();
            answer.hide();
            answer.html("");
          }
        );
      }
    }
  }
})();
