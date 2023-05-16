document.addEventListener("DOMContentLoaded", function () {
  var rightcard = false;
  var tempblock;
  var tempblock2;
  
  flowy(document.getElementById("canvas"), drag, release, snapping);
  
  function addEventListenerMulti(type, listener, capture, selector) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener(type, listener, capture);
    }
  }
  function snapping(drag, first) {
    var grab = drag.querySelector(".grabme");
    grab.parentNode.removeChild(grab);
    var blockin = drag.querySelector(".blockin");
    blockin.parentNode.removeChild(blockin);

    var blockElemType = drag.querySelector(".blockelemtype").value;
    switch (blockElemType) {
      case "1":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/action.svg">
            <p class="blockyname">Action 1</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "2":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/action.svg">
            <p class="blockyname">Action 2</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "21":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/condition.svg">
            <p class="blockyname">Conditional 1</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "22":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/condition.svg">
            <p class="blockyname">Conditional 2</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "41":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/Database.svg">
            <p class="blockyname">AI 1</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "42":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/Database.svg">
            <p class="blockyname">AI 2</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "61":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/log.svg">
            <p class="blockyname">Logging 1</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "62":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/log.svg">
            <p class="blockyname">Logging 2</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "81":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/closeright.svg">
            <p class="blockyname">Imports 1</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "82":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/closeright.svg">
            <p class="blockyname">Imports 2</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "101":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/variable.svg">
            <p class="blockyname">Variable 1</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      case "102":
        drag.innerHTML += `
          <div class="blockyleft">
            <img src="assets/variable.svg">
            <p class="blockyname">Variable 2</p>
          </div>
          <div class="blockyright">
            <img src="assets/more.svg">
          </div>
          <div class="blockydiv"></div>
          <div class="blockyinfo">
            <span>Dummy</span> description
          </div>
        `;
        break;
      
      default:
        break;
    }

    return true;
  }
  function drag(block) {
    block.classList.add("blockdisabled");
    tempblock2 = block;
  }
  function release() {
    tempblock2.classList.remove("blockdisabled");
  }
  function disabledClick(event) {
  event.preventDefault();
  document.querySelector(".navactive").classList.add("navdisabled");
  document.querySelector(".navactive").classList.remove("navactive");
  this.classList.add("navactive");
  this.classList.remove("navdisabled");

  const blockType = this.getAttribute("id");
  const blocks = [
    {
      blockType: "actions",
      blocks: [
        {
          id: 1,
          title: "Action 1",
          desc: "Dummy Description 2",
          icon: "action"
        },
        {
          id: 2,
          title: "Action 2",
          desc: "Dummy Description 2",
          icon: "action"
        }
      ]
    },
    {
      blockType: "conditionals",
      blocks: [
        {
          id: 21,
          title: "Conditional 1",
          desc: "Dummy Description 2",
          icon: "condition"
        },
        {
          id: 22,
          title: "Conditional 2",
          desc: "Dummy Description 2",
          icon: "condition"
        }
      ]
    },
    {
      blockType: "ai",
      blocks: [
        {
          id: 41,
          title: "AI 1",
          desc: "Dummy Description 2",
          icon: "database"
        },
        {
          id: 42,
          title: "AI 1",
          desc: "Dummy Description 2",
          icon: "database"
        }
      ]
    },
    {
      blockType: "logging",
      blocks: [
        {
          id: 61,
          title: "Logging 1",
          desc: "Dummy Description 2",
          icon: "log"
        },
        {
          id: 62,
          title: "Logging 2",
          desc: "Dummy Description 2",
          icon: "log"
        }
      ]
    },
    {
      blockType: "imports",
      blocks: [
        {
          id: 81,
          title: "Imports 1",
          desc: "Dummy Description 2",
          icon: "closeright"
        },
        {
          id: 82,
          title: "Imports 2",
          desc: "Dummy Description 2",
          icon: "closeright"
        }
      ]
    },
    {
      blockType: "variables",
      blocks: [
        {
          id: 101,
          title: "Variables 1",
          desc: "Dummy Description 2",
          icon: "variable"
        },
        {
          id: 102,
          title: "Variables 2",
          desc: "Dummy Description 2",
          icon: "variable"
        }
      ]
    }
  ];

  const block = blocks.find(block => block.blockType === blockType);
  const blockHTML = block.blocks.map(block => `
    <div class="blockelem create-flowy noselect">
      <input type="hidden" name="blockelemtype" class="blockelemtype" value="${block.id}">
      <div class="grabme"><img src="assets/grabme.svg"></div>
      <div class="blockin">
        <div class="blockico"><span></span><img src="assets/${block.icon}.svg"></div>
        <div class="blocktext">
          <p class="blocktitle">${block.title}</p>
          <p class="blockdesc">${block.desc}</p>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("blocklist").innerHTML = blockHTML;
  }

  addEventListenerMulti("click", disabledClick, false, ".side");
  document.getElementById("close").addEventListener("click", function () {
    if (rightcard) {
      rightcard = false;
      document.getElementById("properties").classList.remove("expanded");
      setTimeout(function () {
        document.getElementById("propwrap").classList.remove("itson");
      }, 300);
      tempblock.classList.remove("selectedblock");
    }
  });

  document.getElementById("removeblock").addEventListener("click", function () {
    flowy.deleteBlocks();
  });
  var aclick = false;
  var noinfo = false;
  var beginTouch = function (event) {
    aclick = true;
    noinfo = false;
    if (event.target.closest(".create-flowy")) {
      noinfo = true;
    }
  };
  var checkTouch = function (event) {
    aclick = false;
  };
  var doneTouch = function (event) {
    if (event.type === "mouseup" && aclick && !noinfo) {
      if (
        !rightcard &&
        event.target.closest(".block") &&
        !event.target.closest(".block").classList.contains("dragging")
      ) {
        console.log(
          event.target.closest(".block").classList.contains("dragging")
        );
        tempblock = event.target.closest(".block");
        rightcard = true;
        document.getElementById("properties").classList.add("expanded");
        document.getElementById("propwrap").classList.add("itson");
        tempblock.classList.add("selectedblock");
      }
    }
  };
  document.getElementById("code-editor-textarea").value += "hello\n";

  
  addEventListener("mousedown", beginTouch, false);
  addEventListener("mousemove", checkTouch, false);
  addEventListener("mouseup", doneTouch, false);
  addEventListenerMulti("touchstart", beginTouch, false, ".block");
});

var rightSwitch = document.getElementById('rightswitch');
var leftSwitch = document.getElementById('leftswitch');
rightSwitch.addEventListener('click', function() {
  rightSwitch.style.backgroundColor = '#fbfbfb';
  rightSwitch.style.color = '#393c44';
  leftSwitch.style.backgroundColor = '#ffffff';
  leftSwitch.style.color = '#a3a3a3';
  var closecard = document.getElementById('closecard');
  var leftcard = document.getElementById('leftcard');
  var leftcardWidth = leftcard.offsetWidth;
  var leftcardLeft = leftcard.offsetLeft;
  leftcard.style.left = '-' + leftcardWidth + 'px';
  closecard.getElementsByTagName('img')[0].src = 'assets/closeright.svg';
  closecard.style.display = 'none';
  
  var codeEditorDiv = document.getElementById('codeEditorDiv');
  if (codeEditorDiv) {
	console.log("exists");
	codeEditorDiv.style.display = 'block';
  } else {
	console.log("doesn't exist");
	var navigation = document.getElementById('navigation');
	var height = navigation.offsetHeight;
	var codeEditor = document.createElement('div');
	codeEditor.style.backgroundColor = 'white';
	codeEditor.id = 'codeEditorDiv';
	codeEditor.style.width = '100%';
	codeEditor.style.height = (window.innerHeight - height) + 'px';
	codeEditor.zIndex = '9999';
	document.body.appendChild(codeEditor);
	codeEditor.style.position = 'absolute';
	codeEditor.style.bottom = '0px';
	var codearea = document.createElement('textarea');
	codearea.id = 'codearea';
	codearea.name = 'codearea';
	codearea.rows = 25;
	codearea.style.width = '100%';
	codearea.style.height = '100%';
	codearea.style.border = 'none';
	codearea.style.outline = 'none';
	codeEditor.appendChild(codearea);
  }

});
leftSwitch.addEventListener('click', function() {
  leftSwitch.style.backgroundColor = '#fbfbfb';
  leftSwitch.style.color = '#393c44';
  rightSwitch.style.backgroundColor = '#ffffff';
  rightSwitch.style.color = '#a3a3a3';
  closecard.style.display = 'block';
  codeEditorDiv.style.display = 'none';
  leftcard.style.left = '0px';
  closecard.getElementsByTagName('img')[0].src = 'assets/closeleft.svg';
  closecard.style.display = 'block';
});