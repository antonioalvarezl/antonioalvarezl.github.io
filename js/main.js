// Dean Attali / Beautiful Jekyll 2016

var main = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    // Shorten the navbar after scrolling a little bit down
    var syncNavbarScrollState = function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("top-nav-short");
      } else {
        $(".navbar").removeClass("top-nav-short");
      }
    };
    $(window).scroll(syncNavbarScrollState);
    syncNavbarScrollState();
    
    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });
	
    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function(e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function(key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });

    // On mobile, collapse the navbar after selecting a link
    $('#main-navbar').on("click", "a", function(e) {
      if ($(this).hasClass("navlinks-parent")) {
        return;
      }
      if ($(".navbar-toggle").is(":visible")) {
        $("#main-navbar").collapse("hide");
      }
    });
    
    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function(i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function(idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function(id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width =  fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }        

    main.syncPageState();
    main.bindLocationCardReset();
    main.initContactEmailGate();
    main.hydrateEmailLinks();
    main.bindContactEmailCopy();

    // show the big header image	
    main.initImgs();
  },

  syncPageState : function(targetUrl) {
    var normalizePath = function(pathname) {
      var normalized = (pathname || "").replace(/\/+$/, "");
      return normalized.length ? normalized : "/";
    };

    var parsePathFromUrl = function(url) {
      try {
        return normalizePath(new URL(url, window.location.origin).pathname);
      } catch (err) {
        return normalizePath(url);
      }
    };

    var homeLink = $(".navbar-brand").attr("href") || "/";
    var homePath = parsePathFromUrl(homeLink);

    var locationLink = $(".navbar-social a[data-location-link]").attr("href") || "/location/";
    var locationPath = parsePathFromUrl(locationLink);

    var currentPath = targetUrl ? parsePathFromUrl(targetUrl) : normalizePath(window.location.pathname);
    $("body").toggleClass("on-home-page", currentPath === homePath);
    $("body").toggleClass("location-mode", currentPath === locationPath);
    $("body").addClass("page-state-ready");
  },

  bindLocationCardReset : function() {
    $(document).off("click.locationReset", ".location-address-card");
    $(document).on("click.locationReset", ".location-address-card", function() {
      var iframe = $(".location-map-canvas iframe").first();
      if (!iframe.length) {
        return;
      }

      var initialSrc = iframe.attr("data-initial-src") || iframe.attr("src");
      if (!initialSrc) {
        return;
      }

      iframe.attr("src", initialSrc);
    });
  },

  initContactEmailGate : function() {
    var gateCard = $("[data-contact-gate]").first();
    if (!gateCard.length) {
      return;
    }

    var siteKey = (gateCard.attr("data-turnstile-sitekey") || "").trim();
    var endpoint = (gateCard.attr("data-email-endpoint") || "").trim();
    var widgetContainer = gateCard.find("[data-contact-turnstile]").first();
    var emailRow = gateCard.find("[data-contact-email-row]").first();
    var emailLink = gateCard.find("[data-contact-email-link]").first();
    var copyButton = gateCard.find("[data-contact-copy-btn]").first();
    var feedback = gateCard.find(".contact-copy-feedback").first();

    var showStatus = function(message, isError) {
      if (!feedback.length) {
        return;
      }
      feedback.toggleClass("is-error", !!isError).text(message || "");
    };

    var unlockEmail = function(email) {
      emailLink.attr("href", "mailto:" + email).text(email);
      copyButton.attr("data-copy-text", email);
      emailRow.removeClass("contact-email-row-hidden");
      gateCard.addClass("is-unlocked");
      showStatus("");
    };

    var revealEmail = function(token) {
      if (!token) {
        showStatus("CAPTCHA validation failed. Please retry.", true);
        return;
      }

      showStatus("Verifying challenge...", false);
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
          token: token
        })
      }).then(function(response) {
        return response.json().catch(function() {
          return {};
        }).then(function(payload) {
          return {
            ok: response.ok,
            payload: payload
          };
        });
      }).then(function(result) {
        var email = (result.payload.email || "").trim();
        var emailLooksValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

        if (!result.ok || !emailLooksValid) {
          showStatus("Could not verify CAPTCHA. Please retry.", true);
          if (window.turnstile && typeof window.turnstile.reset === "function") {
            window.turnstile.reset();
          }
          return;
        }

        unlockEmail(email);
      }).catch(function() {
        showStatus("Verification error. Please retry.", true);
        if (window.turnstile && typeof window.turnstile.reset === "function") {
          window.turnstile.reset();
        }
      });
    };

    if (!siteKey || !endpoint || !widgetContainer.length) {
      showStatus("Contact is temporarily unavailable.", true);
      return;
    }

    if (!window.turnstile || typeof window.turnstile.render !== "function") {
      showStatus("CAPTCHA did not load. Refresh the page.", true);
      return;
    }

    window.turnstile.render(widgetContainer.get(0), {
      sitekey: siteKey,
      callback: revealEmail,
      "error-callback": function() {
        showStatus("CAPTCHA error. Please retry.", true);
      },
      "expired-callback": function() {
        showStatus("CAPTCHA expired. Please solve it again.", true);
      }
    });
  },

  buildEmailFromData : function(element) {
    var node = $(element);
    var user = (node.attr("data-email-user") || "").trim();
    var domain = (node.attr("data-email-domain") || "").trim();
    if (!user || !domain) {
      return "";
    }
    return user + "@" + domain;
  },

  hydrateEmailLinks : function() {
    $(".js-email-link").each(function() {
      var link = $(this);
      var email = main.buildEmailFromData(link);
      if (!email) {
        return;
      }

      var display = (link.attr("data-email-display") || "").trim();
      if (!display) {
        display = email.replace("@", " [at] ");
        link.attr("data-email-display", display);
      }

      link.attr("href", "mailto:" + email);
      if (link.hasClass("contact-email-link")) {
        link.text(display);
      }
    });
  },

  bindContactEmailCopy : function() {
    var fallbackCopyText = function(text) {
      var textarea = $("<textarea></textarea>");
      textarea.val(text).css({
        position: "fixed",
        top: "-9999px",
        left: "-9999px",
        opacity: "0"
      });
      $("body").append(textarea);
      textarea.trigger("focus").trigger("select");

      var copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (err) {
        copied = false;
      }

      textarea.remove();
      return copied;
    };

    var showCopyResult = function(button, feedback, success) {
      var timer = button.data("copyTimer");
      if (timer) {
        clearTimeout(timer);
      }

      if (success) {
        button.addClass("is-copied").text("Copied");
        if (feedback.length) {
          feedback.removeClass("is-error").text("Email copied to clipboard");
        }
      } else {
        button.removeClass("is-copied").text("Retry");
        if (feedback.length) {
          feedback.addClass("is-error").text("Could not copy automatically");
        }
      }

      timer = setTimeout(function() {
        button.removeClass("is-copied").text("Copy");
        if (feedback.length) {
          feedback.removeClass("is-error").text("");
        }
      }, success ? 1600 : 2200);

      button.data("copyTimer", timer);
    };

    $(document).off("click.contactCopy", ".contact-copy-btn");
    $(document).on("click.contactCopy", ".contact-copy-btn", function() {
      var button = $(this);
      var textToCopy = (button.attr("data-copy-text") || "").trim();
      if (!textToCopy) {
        textToCopy = main.buildEmailFromData(button);
      }
      var card = button.closest(".contact-email-card");
      var feedback = card.find(".contact-copy-feedback").first();

      if (!textToCopy) {
        showCopyResult(button, feedback, false);
        return;
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(function() {
          showCopyResult(button, feedback, true);
        }).catch(function() {
          showCopyResult(button, feedback, fallbackCopyText(textToCopy));
        });
        return;
      }

      showCopyResult(button, feedback, fallbackCopyText(textToCopy));
    });
  },
  
  initImgs : function() {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

          // 2fc73a3a967e97599c9763d05e564189
	  // set an initial image
	  var imgInfo = main.getImgInfo();
	  var src = imgInfo.src;
	  var desc = imgInfo.desc;
  	  main.setImg(src, desc);
  	
	  // For better UX, prefetch the next image so that it will already be loaded when we want to show it
  	  var getNextImg = function() {
	    var imgInfo = main.getImgInfo();
	    var src = imgInfo.src;
	    var desc = imgInfo.desc;		  
	    
		var prefetchImg = new Image();
  		prefetchImg.src = src;
		// if I want to do something once the image is ready: `prefetchImg.onload = function(){}`
		
  		setTimeout(function(){
                  var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
  		  $(".intro-header.big-img").prepend(img);
  		  setTimeout(function(){ img.css("opacity", "1"); }, 50);
		  
		  // after the animation of fading in the new image is done, prefetch the next one
  		  //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		  setTimeout(function() {
		    main.setImg(src, desc);
			img.remove();
  			getNextImg();
		  }, 1000); 
  		  //});		
  		}, 6000);
  	  };
	  
	  // If there are multiple images, cycle through them
	  if (main.numImgs > 1) {
  	    getNextImg();
	  }
    }
  },
  
  getImgInfo : function() {
  	var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
	var desc = main.bigImgEl.attr("data-img-desc-" + randNum);
	
	return {
	  src : src,
	  desc : desc
	}
  },
  
  setImg : function(src, desc) {
	$(".intro-header.big-img").css("background-image", 'url(' + src + ')');
	if (typeof desc !== typeof undefined && desc !== false) {
	  $(".img-desc").text(desc).show();
	} else {
	  $(".img-desc").hide();  
	}
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);
