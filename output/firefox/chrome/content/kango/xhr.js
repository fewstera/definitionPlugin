﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.XHRRequest=function(){this.method="GET";this.url="";this.params={};this.headers={};this.async=!0;this.mimeType=this.password=this.username=this.contentType=""};DefinitionPlugin_kango.XHRResult=function(){this.response="";this.status=0};DefinitionPlugin_kango.XHR=function(){};
DefinitionPlugin_kango.XHR.prototype={_paramsToString:function(c){var b="",a;for(a in c)c.hasOwnProperty(a)&&(""!=b&&(b+="&"),b+=a+"="+c[a]);return b},getXMLHttpRequest:function(){return new XMLHttpRequest},send:function(c,b){var a=this.getXMLHttpRequest(),h=c.method||"GET",m=c.async||!0,d=c.params||null,i=c.contentType||"text",e=c.url,n=c.username||null,p=c.password||null,f=c.headers||{},k=c.mimeType||null;DefinitionPlugin_kango.io.isLocalUrl(e)&&(e=DefinitionPlugin_kango.io.getExtensionFileUrl(e));var l=function(a,c){var b={response:null,status:0,
abort:function(){a.abort()}};if(2<=a.readyState&&(b.status=a.status,4==a.readyState)){if("xml"==c)b.response=a.responseXML;else if("json"==c)try{b.response=JSON.parse(a.responseText)}catch(d){}else b.response=a.responseText;b.abort=function(){}}return b},g=function(){return{response:null,status:0,abort:function(){}}};null!=d&&("object"==typeof c.params&&(d=this._paramsToString(d),"POST"==h&&(f["Content-Type"]="application/x-www-form-urlencoded")),"GET"==h&&(e=e+"?"+d,d=null));try{a.open(h,e,m,n,p)}catch(q){return b(g()),
g()}"undefined"!=typeof a.overrideMimeType&&(null!=k?a.overrideMimeType(k):"json"==i&&a.overrideMimeType("application/json"));a.onreadystatechange=function(){4==a.readyState&&("function"==typeof b||"undefined"!=typeof b.call&&"undefined"!=typeof b.apply)&&b(l(a,i))};if("object"==typeof f)for(var j in f)f.hasOwnProperty(j)&&a.setRequestHeader(j,f[j]);try{a.send(d)}catch(r){return b(g()),g()}return l(a,i)}};DefinitionPlugin_kango.xhr=new DefinitionPlugin_kango.XHR;
