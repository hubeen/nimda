$(document).ready(function() {
  var loginForm = $(".login-form");
  var userBtn = $(".user-btn");
  var passwdMsg = $(".passwd-msg");

  var numAboveChecked, numBelowChecked, checkedBtn;
  var users = {};

  var passwdMsgFadeTime = 150;
  var passwdMsgShowTime = 500;

  userBtn.click(function() {
    checkedBtn = $(".user-btn:checked");

    numAboveChecked = checkedBtn.parent().prevAll().size();
    numBelowChecked = checkedBtn.parent().nextAll().size();

    aboveCheckedMove(checkedBtn, numAboveChecked, users);
    belowCheckedMove(checkedBtn, numBelowChecked, users);
    checkedMove(checkedBtn);
  });

  loginForm.submit(function() {
    passwdMsg.css({ visibility: "visible", opacity: "1" });
    setTimeout(function() {
      passwdMsg.fadeTo(passwdMsgFadeTime, 0, function() {
        $(this).css({ visibility: "hidden" });
      });
    }, passwdMsgShowTime);
  })

  function aboveCheckedMove(checkedBtn, numAboveChecked, users) {
    users["aboveChecked0"] = checkedBtn;
    
    for (var i = 0; i < numAboveChecked; i++) {
      users["aboveChecked" + (i + 1)] = users["aboveChecked" + i].parent().prev().children(".user-label")
        .removeClass(function(index, css) {
          return (css.match(/\buser-label-\S+/g) || []).join(' ');
        }).addClass("user-label-above-" + (i + 1));
    }
  }

  function belowCheckedMove(checkedBtn, numBelowChecked, users) {
    users["belowChecked0"] = checkedBtn;
    
    for (var i = 0; i < numBelowChecked; i++) {
      users["belowChecked" + (i + 1)] = users["belowChecked" + i].parent().next().children("label")
        .removeClass(function(index, css) {
          return (css.match(/\buser-label-\S+/g) || []).join(' ');
        }).addClass("user-label-below-" + (i + 1));
    }
  }

  function checkedMove(checkedBtn) {
    checkedBtn.siblings(".user-label").removeClass(function(index, css) {
      return (css.match(/\buser-label-\S+/g) || []).join(' ');
    }).addClass("user-label-0");
  }
});
