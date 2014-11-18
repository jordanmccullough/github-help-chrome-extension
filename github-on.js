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
    description: "Creating a pull request",
    selector: ".button",
    helpLink: "https://help.github.com/articles/creating-a-pull-request/"
  },
  {
    description: "Permissions and repo owner",
    selector: ".entry-title",
    helpLink: "https://help.github.com/articles/permission-levels-for-a-user-account-repository/"
  },
  {
    description: "Commit history page",
    selector: ".js-social-container",
    helpLink: "https://help.github.com/articles/watching-repositories/"
  },
  {
    description: "Commit tease",
    selector: ".commit-tease",
    helpLink: "https://help.github.com/articles/differences-between-commit-views/"
  },
  {
    description: "Clone URL box",
    selector: ".repository-sidebar",
    helpLink: "https://help.github.com/articles/differences-between-commit-views/"
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
