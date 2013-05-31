/* 	$(function(){
	
		$("body").css("display", "none");
	 
		$("body").fadeIn(500);
	 
		$("a").click(function(event){
			event.preventDefault();
			linkLocation = this.href;
			$("body").fadeOut(500, redirectPage);
		});
	 
		function redirectPage() {
			window.location = linkLocation;
		}
		
	});
*/

    $(function(){
    
        $("body").css("display", "none");
     
        $("body").fadeIn(500);
     
        $("a").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(500, redirectPage);
        });
     
        function redirectPage() {
            window.location = linkLocation;
        }
        
    });


function add(key, val)
{
    var tup = new Array(key, val);
    this.tab.push(tup);
}

function getByKey(key)
{
    var i=0;
    for(i; i<this.tab.length; i++)
    {
        if(this.tab[i][0]==key)
        {
            return this.tab[i][1];
        }
    }
    return "";
}
 
function getByIndex(idx)
{
    if(idx<this.tab.length){ return this.tab[idx][1]; }
}
function getArray()
{
    var ret = new Array();
    var i=0;
    for(i; i<this.tab.length; i++)
    {
        ret.push(this.tab[i][1]);
    }
    return ret;
}
function dic()
{
    this.tab = new Array();
}
dic.prototype.add=add;
dic.prototype.getByKey=getByKey;
dic.prototype.getByIndex=getByIndex;
dic.prototype.getArray=getArray;
 
function get(key)
{
    return this.parms.getByKey(key);
}

function index(idx)
{
    return this.parms.getByIndex(idx);
}
function values()
{
    return this.parms.getArray();
}
function parse(){
 
var url = location.href
var ini = false;
var inipar = false;
var inival = false;
var par = "";
var val = "";
 
var i=0;
for(i; i<url.length; i++)
{
    if(!ini){
        if(url.charAt(i)=='?')
        {
            inipar = true;
            ini = true;
        }
    }else{
        if(url.charAt(i)=='&')
        {
            inipar = true;
            inival = false;
            this.parms.add(par, val);
            par = "";
        }
        else if(url.charAt(i)=='=')
        {
            inival = true;
            inipar = false;
            val = "";
        }
        else if(inipar)
        {
            par += url.charAt(i)
        }
        else if(inival)
        {
            val += url.charAt(i);
            if(i==url.length-1)
            {
                this.parms.add(par, val);
            }
        }
    }
}
}
 
function jsGet()
{
    this.url=location.href;
    this.parms=new dic();
    this.parse();
}

jsGet.prototype.parse=parse;
jsGet.prototype.get=get;
jsGet.prototype.index=index;
jsGet.prototype.values=values;

js_get = new jsGet();