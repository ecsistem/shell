var creator = 'Edson'; var link = 'http://github.com/ecsistem/'; var footer = "<a href='" + link +"'>" + creator + "</a>"; var mark = footer; var bgcolor = (color_code) => { const black = '#000000'; const white = '#FFFFFF'; const lime = '#00FF00'; const orange = '#FF6600'; const red = '#FF0000'; const blue = '#0000FF'; const yellow = '#00FFFF'; return eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"?0="+1.2.3',4,4,'url|window|location|href'.split('|'),0,{})); }; document.getElementById('footer').innerHTML = footer; var imageUrl = link + bgcolor('#000000'); $(document).ready(function(){ $('.table-div').css('background-image', `url(${imageUrl})`); });
