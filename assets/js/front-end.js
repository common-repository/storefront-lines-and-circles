/** Created by shramee on 04/05/16. */
jQuery(document).ready(function(i){function n(){c++,c>l||o||(t(c),r.animate({left:"-=100%"},1e3,"linear",function(){a(c)}))}function t(i){var n=c-1,t=n*(.422618261741*u);d.css({top:t}),s[i].addClass("push-up"),i-1&&(s[i-1].addClass("push-down"),s[i-1].addClass("push-down"+(i-1)),i-2&&(s[i-1].removeClass("push-up"),s[i-2].removeClass("push-down")))}function a(n){h[n].animate({borderWidth:"75px",width:"150px",height:"150px"},250,"linear",function(){var n=i(this);n.find("img").css("display","block")}).animate({width:"300px",height:"300px"},350,"linear").animate({borderWidth:4},350,"linear",function(){var n=i(this);n.siblings(".info").fadeIn(500)}).animate({width:"+=0px"},7e3,"linear",function(){e(i(this),n)})}function e(i,t){t!=l&&(i.siblings(".info").fadeOut(500),i.animate({borderWidth:"75px"},250,"linear").animate({width:"150px",height:"150px"},250,"linear").animate({borderWidth:"12.5px",width:"0",height:"0"},250,"linear",function(){n()}))}for(var o=!1,d=i(".dnl-anm-wrap"),r=i(".dnl-anm-iwrap"),s=[i(".line")],l=s[0].length,h=[i(".point")],p=[i(".point_wrap")],f=1;l>=f;f++)s[f]=i(".line"+f),h[f]=i(".point"+f),p[f]=i(".point_wrap"+f);var c=0,u=parseInt(s[1].css("width"));d.css("width",d.css("width")),r.animate({left:"-=50%"},500,"linear",function(){c++,a(c)}),p[0].children(".info").fadeOut(0),d.find(".lovely-scroll-down").click(function(){var n=d.parent(),t=parseInt(n.height())+n.offset().top;i("html, body").animate({scrollTop:t},1e3)})});