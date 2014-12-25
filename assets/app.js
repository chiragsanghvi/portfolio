Appacitive.initialize({ 
  apikey: "OIprEphvKPFdT+QUO3tLn30tVo3uRorNkfrqKwIKOP8= ",// The master or client api key for your app on appacitive.
  env: "sandbox",      // The environment that you are targetting (sandbox or live).
  appId: "79397178698761175"     // The app id for your app on appacitive. 
});


$(function() {
    return $("a").click(function() {
        var e;
        return e = $($(this).attr("href")).offset().top - $(this).data("offset"), $("html, body").animate({scrollTop: e}, 700), !1
    }), $("#contact_form").submit(function() {
        var e, t;
        return t = [], $("#contact_name").val() || t.push("Your Name"), 
        $("#contact_email").val() || t.push("Your Email"), 
        $("#contact_message").val() || t.push("Message"), 
        ($("#contact_email").val() ? (
        	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test($("#contact_email").val()) ? '' : t.push('Invalid Email') )
        	 : ''),
        t.length ? ($(".error_message").remove(), e = $("<div/>").text("Required: " + t.toString()).addClass("error_message"), 
        $("#contact_form").prepend(e), !1) : ($("#contact_send").text("Loading..."), 
        	Appacitive.Email.sendRawEmail({
			    to: ["chirag_sanghvi7@hotmail.com"],
			    from: [$("#contact_email").val()],
			    replyto:$("#contact_email").val(),
			    subject: "Portfolio Site Message from " + $("#contact_name").val(),
			    body: $("#contact_message").val(),
			    ishtml: true
			}).then(function (email) {
            	return $("#contact_form").slideUp("slow"), $(".success_message").slideDown("slow"), !1
			})

    	, !1)
    })
});