
alert(document.getElementById("sas"));

function generate() {
  var num = document.getElementById('num').value;
  create(num);
}

function create(num) {
  for (var i = 0; i < num; i++) {
    var pitch = document.createElement("input");
    var yaw = document.createElement("input");
    var type = document.createElement("input");
    var cssClass = document.createElement("input");
    var text = document.createElement("input");
    var sceneId = document.createElement("input");
    var targetYaw = document.createElement("input");
    var targetPitch = document.createElement("input");
    var createTooltipFunc = document.createElement("input");
    var createTooltipArgs = document.createElement("input");
    document.body.appendChild(document.createElement("br"));
    attributes(pitch, {"placeholder":"pitch", "class":"pitch"});
    attributes(yaw, {"placeholder":"yaw", "class":"yaw"});
    attributes(type, {"placeholder":"type", "class":"type"});
    attributes(cssClass, {"placeholder":"cssClass", "class":"cssClass"});
    attributes(text, {"placeholder":"text", "class":"text"});
    attributes(sceneId, {"placeholder":"sceneId", "class":"sceneId"});
    attributes(targetYaw, {"placeholder":"targetYaw", "class":"targetYaw"});
    attributes(targetPitch, {"placeholder":"targetPitch", "class":"targetPitch"});
    attributes(createTooltipFunc, {"placeholder":"createTooltipFunc", "class":"createTooltipFunc"});
    attributes(createTooltipArgs, {"placeholder":"createTooltipArgs", "class":"createTooltipArgs"});
  }
}

function attributes(elem, attr) {
  for (var i in attr) {
    elem.setAttribute(i, attr[i]);
    document.body.appendChild(elem);
  }
}




function appendText(elem, tx, br) {
  elem.appendChild(document.createTextNode(tx));
  if (br) {
    elem.appendChild(document.createElement("br"));
  }
}

function done() {
  var title = document.getElementById("title").value;
  if(document.getElementById('end') != null){
    var end = document.getElementById('end');
    end.parentNode.removeChild(end);
  }
  if (!!title) {
    var endDiv = document.createElement("div");
    var pitch_ = document.getElementsByClassName("pitch");
    var yaw_ = document.getElementsByClassName("yaw");
    var type_ = document.getElementsByClassName("type");
    var cssClass_ = document.getElementsByClassName("cssClass");
    var text_ = document.getElementsByClassName("text");
    var sceneId_ = document.getElementsByClassName("sceneId");
    var targetYaw_ = document.getElementsByClassName("targetYaw");
    var targetPitch_ = document.getElementsByClassName("targetPitch");
    var createTooltipFunc_ = document.getElementsByClassName("createTooltipFunc");
    var createTooltipArgs_ = document.getElementsByClassName("createTooltipArgs");
    var all = [pitch_, "'pitch' : ", false, yaw_, "'yaw' : ", false, type_, "'type' : ", true, cssClass_, "'cssClass' : ", true, text_, "'text' : ", true, sceneId_, "'sceneId' : ", true, targetYaw_, "'targetYaw' : ", false, targetPitch_, "'targetPitch' : ", false, createTooltipFunc_, "'createTooltipFunc' : ", false, createTooltipArgs_, "'createTooltipArgs' : ", true];
    appendText(endDiv, "var " + title + " = [", true);
    var labl = document.createElement("label");
    labl.innerHTML = "&emsp;";
    var tab = labl.textContent;

    for (var i = 0; i < pitch_.length; i++) {
      var full = 0;
      appendText(endDiv, tab + "{", true);
      for (var k = 0; k < all.length; k += 3) {
        if (all[k][i].value) {
          full++;
        }
      }
      var numm = 0;
      for (var k = 0; k < all.length; k += 3) {
        if (all[k][i].value) {
          numm++;
          if (all[k + 2]) {
            appendText(endDiv, tab + tab + all[k + 1] + "'" + all[k][i].value + "'", false);
          } else {
            appendText(endDiv, tab + tab + all[k + 1] + all[k][i].value, false);
          }
          if (numm != full) {
            appendText(endDiv, ",", true)
          } else {
            endDiv.appendChild(document.createElement("br"));
          }
        }
      }
      if (i != pitch_.length - 1) {
        appendText(endDiv, tab + "}", false);
        appendText(endDiv, ",", true);
      } else {
        appendText(endDiv, tab + "}", true);
      }
    }
    appendText(endDiv, "]", false);
    attributes(endDiv, {"id":"end"});
  }
}

function copy() {
  var endDiv = document.getElementById("end");
  var textArea = document.createElement("textArea");
  textArea.value = endDiv.textContent;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

function reload() {
  document.getElementById("title").value = "";
  document.getElementById("num").value = 1;
  location.reload();
}
