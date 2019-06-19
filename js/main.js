
google.load("visualization", "1", {
    packages: ["corechart"]
});

$(document)
    .ready(function () {
        if (!getCookie('seenIntro')) {
            doIntroSequence();
            setCookie('seenIntro', 1, 1);
        }
	var loginForm = $(".login-form");
	var userBtn = $(".user-btn");
	var passwdMsg = $(".passwd-msg");

	var numAboveChecked, numBelowChecked, checkedBtn;
	var users = {};

	var passwdMsgFadeTime = 150;
	var passwdMsgShowTime = 4000;

	userBtn.click(function() {
		checkedBtn = $(".user-btn:checked");

		numAboveChecked = checkedBtn.parent().prevAll().size();
		numBelowChecked = checkedBtn.parent().nextAll().size();

		aboveCheckedMove(checkedBtn, numAboveChecked, users);
		belowCheckedMove(checkedBtn, numBelowChecked, users);
		checkedMove(checkedBtn);
	});

	loginForm.submit(function() {
		passwdMsg.css({visibility: "visible", opacity: "1"});
		setTimeout(function() {
			passwdMsg.fadeTo(passwdMsgFadeTime, 0, function() {
				$(this).css({visibility: "hidden"});
			});
		}, passwdMsgShowTime);
	})

	function aboveCheckedMove(checkedBtn, numAboveChecked, users) {
		for (var i = 0; i < numAboveChecked; i++) {
			users["aboveChecked0"] = checkedBtn;

			users["aboveChecked" + (i + 1)] = users["aboveChecked" + i].parent().prev().children(".user-label")
			.removeClass(function(index, css) {
				return (css.match (/\buser-label-\S+/g) || []).join(' ');
			}).addClass("user-label-above-" + (i + 1));
		}
	}

	function belowCheckedMove(checkedBtn, numBelowChecked, users) {
		for (var i = 0; i < numBelowChecked; i++) {
			users["belowChecked0"] = checkedBtn;

			users["belowChecked" + (i + 1)] = users["belowChecked" + i].parent().next().children("label")
			.removeClass(function(index, css) {
				return (css.match (/\buser-label-\S+/g) || []).join(' ');
			}).addClass("user-label-below-" + (i + 1));
		}
	}

	function checkedMove(checkedBtn) {
		checkedBtn.siblings(".user-label").removeClass(function(index, css) {
				return (css.match (/\buser-label-\S+/g) || []).join(' ');
		}).addClass("user-label-0");
	}
    });

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function doIntroSequence() {
    $('#nimdaintrowindow').show();
    
    setTimeout(function() {
        $('#nimdaintrowindow').append(" Completed \n#");
    }, 700);    

    setTimeout(function() {
        $('#nimdaintrowindow').writeTextTyper(" nmap -sS -p- -PE -PP -PS21,22,80 -PA21,22,80 -PU21,22,80 -A -T4 -oA NIMDA.SECURITY-%D 127.209.52.10");
    }, 950);
    
    setTimeout(function() {
        $('#nimdaintrowindow').append("\nStarting Nmap ( http://nmap.org )");
    }, 3700);
    
    setTimeout(function() {
        $('#nimdaintrowindow').append("\nNmap scan report for NIMDA.SECURITY (127.209.52.10) \n(The 25565 ports scanned but not shown below are in state: closed) \n \nPORT      STATE    SERVICE       VERSION \n135/tcp   filtered msrpc \n136/tcp   filtered profile \n137/tcp   filtered nimdaos-ns \n138/tcp   filtered nimdaos-dgm \n139/tcp   filtered nimdaos-ssn \n445/tcp   open     macroshuft-ds  Macroshuft Compatibility macroshuft-ds \n1002/tcp  open     indows-icfw? \n1025/tcp  open     msrpc         Macroshuft Winders msrpc \n16552/tcp open     unknown \nDevice type: general purpose \nRunning: FeBIdoraOS \nOS details: FeBIdoraOS - FEDNet Fork w/Winders Compatibility v2.42.62c \n\nHost script results: \n|_nbstat: NIMDAOS name: NIMDA, NIMDAOS user: <unknown>,  NIMDAOS MAC: 80:14:35:d3:29:1e:ff (IBM) \n|_smbv2-enabled: Server doesn't support SMBv2 protocol \n| smb-os-discovery:   \n|   OS: NIMDAOS (NIMDA LAN Manager) \n|_  Name: WORKGROUP\\NIMDA \n\n#");
    }, 4700);
    setTimeout(function() {
        $('#nimdaintrowindow').writeTextTyper(' hubeen 127.209.52.10 -rootpw-"q1w2e3r1234" ');
    }, 5500);
    setTimeout(function() {
        $('#nimdaintrowindow').append("\nConnecting to 127.209.52.10:ssh ...");
    }, 7000);
    setTimeout(function() {
        $('#nimdaintrowindow').append(" successful.");
    }, 7500);
    setTimeout(function() {
        $('#nimdaintrowindow').append("\nAttempting to exploit SSNv1 CRC32 ...");
    }, 7900);
    setTimeout(function() {
        $('#nimdaintrowindow').append(" successful.");
    }, 8400);
    setTimeout(function() {
        $('#nimdaintrowindow').append('\nResetting root password to "q1w2e3r1234"');
    }, 8700);
    setTimeout(function() {
        $('#nimdaintrowindow').append('\n\n#');
    }, 9000);
    setTimeout(function() {
        $('#nimdaintrowindow').writeTextTyper(' ssh 10.209.24.10 -l nimda_hacked0');
    }, 9500);
    setTimeout(function() {
        $('#nimdaintrowindow').append('\nnimda_hacked@127.209.52.10 password:');
    }, 11000);
    setTimeout(function() {
        $('#nimdaintrowindow').writeTextTyper(' ***********');
    }, 11700);
    setTimeout(function() {
        $('#nimdaintrowindow').append('\nWelcome back, Commissioner Garrett!\nLoading XWindow Interface ... ');
    }, 12400);
    setTimeout(function() {
        $('#nimdaintrowindow').append(' successful.');
    }, 13200);
    setTimeout(function() {
        $('#nimdaintrowindow').css('color', 'black');
    }, 13500);
    setTimeout(function() {
        $('#nimdaintrowindow').css('background-color', '#555');
    }, 13500);
    setTimeout(function() {
        $('#nimdaintrowindow').hide();
    }, 13600);
    
}
