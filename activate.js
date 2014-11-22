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

/////////////////////////////////////////////
// Mapping to page content and Help links
/////////////////////////////////////////////

var helpMap = [
  {
    description: "GitHub Logo",
    selector: ".header-logo-invertocat",
    helpLink: "https://help.github.com/articles/searching-github/"
  },
  {
    description: "User avatar",
    selector: ".avatar",
    helpLink: "https://help.github.com/articles/how-do-i-set-up-my-profile-picture/"
  },
  {
    description: "Repo name & path",
    selector: ".breadcrumb",
    helpLink: "https://help.github.com/articles/working-with-repositories/"
  },
  {
    description: "PR, branch selector",
    selector: ".file-navigation",
    helpLink: "https://help.github.com/articles/using-pull-requests/"
  },
  {
    description: "Commits page menu link",
    selector: ".commits",
    helpLink: "https://help.github.com/articles/editing-files-in-your-repository/"
  },
  {
    description: "Unwatch/watch button",
    selector: ".subscription",
    helpLink: "https://help.github.com/articles/watching-repositories/"
  }
];

function github(){
  var i;

  for(i=0;i < helpMap.length; i++){
    var helpIcon = $('<a class="question" data-selector="helpMap[i].selector" href="' + helpMap[i].helpLink + '"></a>"');
    container.append(helpIcon);

    var target     = $(helpMap[i].selector),
        offset     = target.offset(),
        helpLink   = helpMap[i].helpLink + " .article-body p:first-child";

    console.log(offset);

    if (offset.top > 0 && offset.left > 0){
      helpIcon.css("top", offset.top + "px");
      helpIcon.css("left", offset.left + "px");
    }

    helpIcon.mouseover({selector: helpMap[i].selector, link: helpLink, offsetLeft: offset.left, offsetTop: offset.top},
      function(event){
        highlight.width($(event.data.selector).width());
        highlight.height($(event.data.selector).height());
        highlight.css("top", event.data.offsetTop + "px");
        highlight.css("left", event.data.offsetLeft + "px");
        highlight.toggle();

        answer.css("top", event.data.offsetTop+$(event.data.selector).height() + "px");
        answer.css("left", event.data.offsetLeft + "px");
        answer.show();
        answer.load(event.data.link);
      }
    );
    helpIcon.mouseout({selector: helpMap[i].selector},
      function(event){
        // $(event.data.selector).css("box-shadow", "none");

        highlight.toggle();

        // $(event.data.selector).toggleClass("highlight");

        // page.css("-webkit-filter", "");
        answer.hide();
        answer.html("");
      }
    );
  }
}

github();
