!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));window&&(window.html=function(e,...t){let n=e[0];for(let s=0;s<t.length;s++)n+=t[s],n+=e[s+1];return n});class s extends HTMLElement{constructor(){super(),this._props=this.makePropertiesFromAttributes()}connectedCallback(){console.log(this.tagName," connected"),this._attachedTimestamp=(new Date).getTime(),this._debug=!0===this.debug||null===this.debug}makePropertiesFromAttributes(){let e=customElements.get(this.tagName.toLowerCase()).observedAttributes;if(!e)return null;let t={};for(let n=0;n<e.length;n++){let s=this.toCamelCase(e[n]);t[s]=e[n],void 0===this[s]&&Object.defineProperty(this,s,{get:()=>{let t=this.getAttribute(e[n]);return"true"===t||"false"!==t&&t},set:t=>{this.setAttribute(e[n],t)}})}return t}toCamelCase(e){let t=e.split("-"),n=t[0];for(let e=1;e<t.length;e++)n+=t[e][0].toUpperCase()+t[e].substr(1);return n}toHyphenated(e){let t="";for(let n=0;n<e.length;n++){let s=e[n];s.toLowerCase()!==s?t+=`-${s.toLowerCase()}`:t+=s}return t}static isAAElement(e){return-1!=AANodeNames.indexOf(e.nodeName)}_restoreHeldNodes(e){let t=e.childNodes;for(let e=0;e<t.length;e++){let n=t[e];"AA-HOLDER"==n.nodeName?n.restoreNode():n.childNodes.length>0&&this._restoreHeldNodes(n)}}_createFragmentForNode(e){let t=document.createDocumentFragment();for(let n=0;n<e.childNodes.length;n++)t.append(e.childNodes[n].cloneNode(!0));return t}copy(e){let t;return"AA-HOLDER"==e.nodeName?t=e.clone():s.isAAElement(e)?(t=e.cloneNode(),t.innerFragment=this._createFragmentForNode(e)):t=e.cloneNode(!0),t}_dispatchDebugEvent(e){this.debug&&this.dispatchEvent(new CustomEvent("debugEvent",{detail:e,bubbles:!0}))}_dispatchEndEvent(e){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:e}))}_getParentSession(){let e=this;for(;null!=e&&"AA-SESSION"!=e.nodeName;)e=e.parentNode;return e}}customElements.get("aa-base-element")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-BASE-ELEMENT"),customElements.define("aa-base-element",s))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(0);class i extends s.a{static get observedAttributes(){return["name"]}static createHolderForNode(e){let t=document.createElement("aa-holder");return t.holdNode(e),t}static scanAndReplace(e){if("TEMPLATE"==e.nodeName)i.scanAndReplace(e.content);else if(s.a.isAAElement(e)){let t=i.createHolderForNode(e);e.replaceWith(t)}else for(let t=0;t<e.childNodes.length;t++)i.scanAndReplace(e.childNodes[t])}static scanAndRestore(e){if("TEMPLATE"==e.nodeName)i.scanAndRestore(e.content);else if(s.a.isAAElement(e))"AA-HOLDER"==e.nodeName&&e.restoreHeldNode();else for(let t=0;t<e.childNodes.length;t++)i.scanAndRestore(e.childNodes[t])}clone(){let e=document.createElement("aa-holder");e.name=this.name,e.id=this.id,e.node=this.node.cloneNode(!0),e.innerFragment=document.createDocumentFragment();for(let t=0;t<this.innerFragment.childNodes.length;t++)e.innerFragment.appendChild(this.innerFragment.childNodes[t].cloneNode(!0));return e.holdsAAElement=this.holdsAAElement,e}constructor(){super()}holdNode(e){this.node=e.cloneNode(!1),e.id?this.id=e.id:this.id=e.nodeName,this.innerFragment=this._createFragmentForNode(e),this.holdsAAElement=s.a.isAAElement(e)}replace(e){e.replaceWith(this)}restoreHeldNode(){if(this.node){if(this.holdsAAElement)this.holdsAAElement&&(this.node.innerFragment=this.innerFragment);else for(;this.innerFragment.childNodes.length;)this.node.appendChild(this.innerFragment.childNodes[0]);this.replaceWith(this.node)}}connectedCallback(){}}customElements.get("aa-holder")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-HOLDER"),customElements.define("aa-holder",i))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AAChoose}));var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);class AAChoose extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>",this.originalContent=this.innerHTML}_restoreOriginalContent(){}connectedCallback(){if(this._shouldRun=null===this.shouldRun||!0===this.shouldRun,this.sessionElement=this._getParentSession(),this._shouldRun)if(void 0!==this.innerFragment){let e=this._getNodeToInstantiate();if(0==e.length)this._dispatchEndEvent();else{for(let t=0;t<e.length;t++){let n=e[t];void 0!==n&&this.appendChild(n)}this._dispatchEndEvent()}}else 0==this.childNodes.length&&this._dispatchEndEvent()}_getNodeToInstantiate(){this.started=!0;let e=[],t=[];this.myFragmentChildren=[];let n=!1;for(let s=0;s<this.innerFragment.children.length;s++){let i=this.innerFragment.children[s];this.myFragmentChildren.push(i),"AA-WHEN"==i.nodeName&&(n=this.evaluate(i),n&&e.push(this.copy(i))),"AA-OTHERWISE"==i.nodeName&&t.push(this.copy(i))}return 0==e.length?t:e}run(){if(this.started=!0,0===this.myFragmentChildren.length)return;if(this.fragmentChildrenCounter>=this.myFragmentChildren.length)return;let e;this.currentNode||this.formerNodes.push(this.currentNode);let t=this.myFragmentChildren[this.fragmentChildrenCounter];e=this.isHolder(t)?this.replaceHolderWithElement(t):t,this.appendChild(e),this._restoreHeldNodes(e),this.fragmentChildrenCounter+=1}evaluate(e){let t=e.getAttribute("test");return null==t||""==t?null:this.evaluateTestExpression(t)}evaluateTestExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__.a)(expr);if("Literal"==parseTree.left.type&&"Literal"==parseTree.right.type)return eval(expr);throw"unknown identifiers in expression : "+expr}catch(e){console.error("parse error:",e)}}replaceExpressionIdentifiersWithValues(e){let t=this._getParentSession(),n=e.toUpperCase(),s=Object.keys(t.getDataDump()),i=s.map(e=>e.toUpperCase());for(let e in i){let r=t.getData(s[e]),o=parseInt(r);o!=r&&(o="null"===r?"null":"true"===r?"true":"false"===r?"false":`"${r}"`);let a=new RegExp(i[e],"g");n=n.replace(a,o)}return n}}customElements.get("aa-choose")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-CHOOSE"),customElements.define("aa-choose",AAChoose))},function(e,t,n){"use strict";(function(e){t.a=function(t){var n=function(e,t){var n=new Error(e+" at character "+t);throw n.index=t,n.description=e,n},s={"-":!0,"!":!0,"~":!0,"+":!0},i={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},r=function(e){var t,n=0;for(var s in e)(t=s.length)>n&&e.hasOwnProperty(s)&&(n=t);return n},o=r(s),a=r(i),l={true:!0,false:!1,null:null},d=function(e){return i[e]||0},h=function(e,t,n){return{type:"||"===e||"&&"===e?"LogicalExpression":"BinaryExpression",operator:e,left:t,right:n}},u=function(e){return e>=48&&e<=57},c=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=128&&!i[String.fromCharCode(e)]},m=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e>=128&&!i[String.fromCharCode(e)]},p=function(e){for(var t,r,p=0,f=e.charAt,g=e.charCodeAt,A=function(t){return f.call(e,t)},b=function(t){return g.call(e,t)},N=e.length,E=function(){for(var e=b(p);32===e||9===e||10===e||13===e;)e=b(++p)},v=function(){var e,t,s=w();return E(),63!==b(p)?s:(p++,(e=v())||n("Expected expression",p),E(),58===b(p)?(p++,(t=v())||n("Expected expression",p),{type:"ConditionalExpression",test:s,consequent:e,alternate:t}):void n("Expected :",p))},_=function(){E();for(var t=e.substr(p,a),n=t.length;n>0;){if(i.hasOwnProperty(t)&&(!c(b(p))||p+t.length<e.length&&!m(b(p+t.length))))return p+=n,t;t=t.substr(0,--n)}return!1},w=function(){var e,t,s,i,r,o,a,l;if(o=x(),!(t=_()))return o;for(r={value:t,prec:d(t)},(a=x())||n("Expected expression after "+t,p),i=[o,r,a];(t=_())&&0!==(s=d(t));){for(r={value:t,prec:s};i.length>2&&s<=i[i.length-2].prec;)a=i.pop(),t=i.pop().value,o=i.pop(),e=h(t,o,a),i.push(e);(e=x())||n("Expected expression after "+t,p),i.push(r,e)}for(e=i[l=i.length-1];l>1;)e=h(i[l-1].value,i[l-2],e),l-=2;return e},x=function(){var t,n,i;if(E(),t=b(p),u(t)||46===t)return y();if(39===t||34===t)return C();if(91===t)return F();for(i=(n=e.substr(p,o)).length;i>0;){if(s.hasOwnProperty(n)&&(!c(b(p))||p+n.length<e.length&&!m(b(p+n.length))))return p+=i,{type:"UnaryExpression",operator:n,argument:x(),prefix:!0};n=n.substr(0,--i)}return!(!c(t)&&40!==t)&&M()},y=function(){for(var e,t,s="";u(b(p));)s+=A(p++);if(46===b(p))for(s+=A(p++);u(b(p));)s+=A(p++);if("e"===(e=A(p))||"E"===e){for(s+=A(p++),"+"!==(e=A(p))&&"-"!==e||(s+=A(p++));u(b(p));)s+=A(p++);u(b(p-1))||n("Expected exponent ("+s+A(p)+")",p)}return t=b(p),c(t)?n("Variable names cannot start with a number ("+s+A(p)+")",p):46===t&&n("Unexpected period",p),{type:"Literal",value:parseFloat(s),raw:s}},C=function(){for(var e,t="",s=A(p++),i=!1;p<N;){if((e=A(p++))===s){i=!0;break}if("\\"===e)switch(e=A(p++)){case"n":t+="\n";break;case"r":t+="\r";break;case"t":t+="\t";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=e}else t+=e}return i||n('Unclosed quote after "'+t+'"',p),{type:"Literal",value:t,raw:s+t+s}},T=function(){var t,s=b(p),i=p;for(c(s)?p++:n("Unexpected "+A(p),p);p<N&&(s=b(p),m(s));)p++;return t=e.slice(i,p),l.hasOwnProperty(t)?{type:"Literal",value:l[t],raw:t}:"this"===t?{type:"ThisExpression"}:{type:"Identifier",name:t}},O=function(e){for(var t,s,i=[],r=!1;p<N;){if(E(),(t=b(p))===e){r=!0,p++;break}44===t?p++:((s=v())&&"Compound"!==s.type||n("Expected comma",p),i.push(s))}return r||n("Expected "+String.fromCharCode(e),p),i},M=function(){var e,t;for(t=40===(e=b(p))?k():T(),E(),e=b(p);46===e||91===e||40===e;)p++,46===e?(E(),t={type:"MemberExpression",computed:!1,object:t,property:T()}):91===e?(t={type:"MemberExpression",computed:!0,object:t,property:v()},E(),93!==(e=b(p))&&n("Unclosed [",p),p++):40===e&&(t={type:"CallExpression",arguments:O(41),callee:t}),E(),e=b(p);return t},k=function(){p++;var e=v();if(E(),41===b(p))return p++,e;n("Unclosed (",p)},F=function(){return p++,{type:"ArrayExpression",elements:O(93)}},L=[];p<N;)59===(t=b(p))||44===t?p++:(r=v())?L.push(r):p<N&&n('Unexpected "'+A(p)+'"',p);return 1===L.length?L[0]:{type:"Compound",body:L}};if(p.version="0.3.4",p.toString=function(){return"JavaScript Expression Parser (JSEP) v"+p.version},p.addUnaryOp=function(e){return o=Math.max(e.length,o),s[e]=!0,this},p.addBinaryOp=function(e,t){return a=Math.max(e.length,a),i[e]=t,this},p.addLiteral=function(e,t){return l[e]=t,this},p.removeUnaryOp=function(e){return delete s[e],e.length===o&&(o=r(s)),this},p.removeAllUnaryOps=function(){return s={},o=0,this},p.removeBinaryOp=function(e){return delete i[e],e.length===a&&(a=r(i)),this},p.removeAllBinaryOps=function(){return i={},a=0,this},p.removeLiteral=function(e){return delete l[e],this},p.removeAllLiterals=function(){return l={},this},"undefined"==typeof exports){if(!t)return p;var f=t.jsep;t.jsep=p,p.noConflict=function(){return t.jsep===p&&(t.jsep=f),p}}else e.exports?exports=e.exports=p:exports.parse=p}(void 0)}).call(this,n(6)(e))},function(e,t,n){"use strict";var s=n(0),i=n(1);class r extends s.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){this.started||(this.started=!0,void 0!==this.innerFragment&&(i.a.scanAndReplace(this.innerFragment),this.appendChild(this.innerFragment),this._restoreHeldNodes(this)))}}customElements.get("aa-when")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-WHEN"),customElements.define("aa-when",r))},function(e,t,n){"use strict";var s=n(0);class i extends s.a{constructor(){super()}connectedCallback(){this.started||(this.started=!0,void 0!==this.innerFragment&&(this._replaceChildNodesWithHolderElements(this.innerFragment),this.appendChild(this.innerFragment),this._restoreHeldNodes(this)))}}customElements.get("aa-otherwise")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-OTHERWISE"),customElements.define("aa-otherwise",i))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);var s=n(0);class i extends s.a{static get observedAttributes(){return["name","value"]}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){this._getParentSession().setData(this.name,this.value)}}customElements.get("aa-variable")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-VARIABLE"),customElements.define("aa-variable",i));class r extends s.a{static get observedAttributes(){return["name","debug","value","min","max"]}constructor(){super()}connectedCallback(){let e=this._getParentSession();this.value=this.getValue(),e.setData(this.name,this.value),this._dispatchEndEvent()}getValue(){var e=parseFloat(this.min),t=parseFloat(this.max);return this.getRandomInt(e,t)}getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+.5)+e}}customElements.get("aa-function-random")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-FUNCTION-RANDOM"),customElements.define("aa-function-random",r));var o=n(2),a=n(1);class l extends s.a{get observedAttributes(){return["name"]}constructor(){super()}connectedCallback(){}setData(e,t){this.dataset[e]=t}getData(e){return this.dataset[this.toHyphenated(e)]}}customElements.get("aa-memory")||(void 0===window.AANodeNames&&(window.AANodeNames=[]),window.AANodeNames.push("AA-MEMORY"),customElements.define("aa-memory",l));class d extends s.a{static get observedAttributes(){return["submit-button-text","submit-button-hidden","name"]}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this.submitButtonText=this._submitButtonText||"submit",this.root.innerHTML=this.css+this.html,this._started||(this._started=!0,this.submitButtonHidden&&(this.root.querySelector(".submitButtonContainer").style.display="none"),this.root.querySelector(".submitButton").addEventListener("click",this.submitButtonClick.bind(this)))}get css(){return html`
            <style>
                :host {
                    display: block;
                    height: fit-content;
                    border: solid thin;
                }

                .submitButtonContainer{
                    display:flex; 
                    justify-content: space-between; 
                    align-items:center;
                }
            
            </style>
        `}get html(){return html`
            <slot></slot>
            
            <div class='submitButtonContainer'>
                <div>
                    <button class='submitButton'> button: ${this.submitButtonText}</button>
                </div>
                <div id='userMessage'></div>
            </div>
        
        `}attributeChangedCallback(){}hasChildrenThatDemandResponse(){let e=this.getEmaChildren(this),t=!1;for(let n=0;n<e.length;n++){let s=e[n];s.demandsResponse&&null==s.getValue()&&(s.displayAttention&&s.displayAttention(),t=!0)}return t&&(this.userMessage.innerHTML='<div style="display:flex; align-items:center"> <div>please fill out the required fields</div> <div id="attention" style="color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;\n                                            margin-left:20px; height: 20px; \n                                            text-align: center;\n                                            padding: 5px;">!</div></div>',this.userMessage.style.color="red"),t}submitButtonClick(e){if(this.$.userMessage.innerHTML="",this.hasChildrenThatDemandResponse())return;let t=new CustomEvent("valueSubmit",{bubbles:!0,detail:{value:this.getValue()}});this.dispatchEvent(t),this._dispatchEndEvent(this.getValue()),void 0!==e.detail.callback&&e.detail.callback(e),0==this.dontHide&&this.hide()}getChildrenValuesOrder(e){void 0===e&&(e=this);for(var t=this.getEmaChildren(e),n=[],s=0;s<t.length;s++){var i=t[s];void 0!==this.name?n.push(this.name+"$"+i.getName()):n.push(i.getName())}}getValue(){this.attachedTimestamp,(new Date).getTime();return this.getChildrenValues(this)}getValueWithKey(){var e={};return e[this.name]=this.getValue(),e}automate(){for(var e=0;e<this.children.length;e++)this.isEmaElement(this.children[e])&&void 0!==this.children[e].automate&&this.children[e].automate();this.submitButtonClick()}hide(){this.style.display="none"}show(){this.style.display="block"}}customElements.get("aa-screen")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-SCREEN"),customElements.define("aa-screen",d));class h extends s.a{static get observedAttributes(){return["name","goto"]}connectedCallback(){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:{goto:this.goto}}))}}customElements.get("aa-jump")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-JUMP"),customElements.define("aa-jump",h));class u extends s.a{static get observedAttributes(){return["name","write-into","should-run","debug","type","stopped"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){this.root.addEventListener("endEvent",this.endEventListener.bind(this)),this.started=!1,null!==this.shouldRun&&!0!==this.shouldRun||this.init()}get css(){return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `}get html(){return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `}properties(){return{shouldRun:{type:Boolean,value:!0,reflectToAttribute:!1,reflectToConfig:!1},showNextButton:{type:Boolean,value:!1},nextKeyCode:{type:Number,value:0},prevKeyCode:{type:Number,value:0},displayAll:{type:Boolean,value:!1}}}init(){if(this.writeInto?this.target=document.querySelector(this.writeInto):this.target=this,!this.started){if(void 0===this.innerFragment)return console.warn(".innerFragment is undefined"),void this.restoreHeldNodes(this);this.sIndex=0,this.formerNodes=[],this.formerIndex=0,this.nextCalls=[!0],this.nextIndex=0,this.stopped||start()}}start(){this.started||(this.started=!0,this.nextWithTimeout(this.hasNext()))}stop(){this.stopped=!0,this.started=!1}nextWithTimeout(e){setTimeout(()=>{this.next(e);let t=this.hasNext();t?this.nextWithTimeout(t):null==t&&this._dispatchEndEvent()},0)}next(e){if(this.counter?this.counter++:this.counter=1,this.sIndex>=this.innerFragment.childNodes.length)return null;if("string"==typeof e)for(let t=0;t<this.innerFragment.childNodes.length;t++)if(this.innerFragment.childNodes[t].getAttribute&&this.innerFragment.childNodes[t].getAttribute("name")==e){this.sIndex=t;break}let t=this.innerFragment.childNodes[this.sIndex];if("elements"===this.type&&t.nodeType!=Node.ELEMENT_NODE)return this.nextCalls.push(!0),void(this.sIndex+=1);let n=this.copy(t);this.formerNodes.push(n),this.sIndex+=1;let s=this.formerNodes[this.formerIndex];this.target.appendChild(s),this.formerIndex++,a.a.scanAndRestore(this.target.childNodes[this.childNodes.length-1]),s._dispatchEndEvent||this.nextCalls.push(!0),setTimeout(()=>{},0)}hasNext(){if(this.nextCalls.length>1e4)return null;if(!1===this.started)return null;if(this.nextIndex<this.nextCalls.length){let e=this.nextCalls[this.nextIndex];return this.nextIndex++,e}return null}endEventListener(e){e.stopPropagation();let t=null;e.detail&&e.detail.goto?(t=e.detail.goto,this.nextCalls.push(t)):this.nextCalls.push(!0),this.nextCalls[this.nextIndex]||this.nextWithTimeout(this.hasNext())}}customElements.get("aa-sequence")||(void 0===window.AANodeNames&&(window.AANodeNames=[]),window.AANodeNames.push("AA-SEQUENCE"),customElements.define("aa-sequence",u));class c extends s.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this._mem=document.createElement("aa-memory"),this.myTemplate=document.createElement("template"),this.myTemplate.innerHTML=this.innerHTML,this.innerHTML="",this.addEventListener("valueSubmit",e=>{let t={data:e.detail.value,sessionID:this.sessionID,sessionTimestamp:this.sessionTime,sessionName:this.name,variables:Object.keys(e.detail.value)};this._mem.saveReplyValue(e.detail.value,!1);let n=new CustomEvent("inputSubmit",{bubbles:!0,detail:{input:t}});this.dispatchEvent(n)}),this.addEventListener("endEvent",e=>{this.debug||e.stopPropagation();let t=new CustomEvent("sessionEndEvent",{bubbles:!0,detail:"sessionEnd"});this.dispatchEvent(t)})}myIdGenerator(){return 0}connectedCallback(){this.sessionID=this.myIdGenerator(),this.sessionTime=(new Date).getTime();let e=Object.keys(this.dataset);for(let t in e)this.setData(e[t],this.dataset[e[t]]);null!==this.shouldRun&&!0!==this.shouldRun||this.run()}attachTemplateChildNodesToMyself(e){for(;e.content.childNodes.length;)if("TEMPLATE"===e.content.childNodes[0].nodeName){for(;e.content.childNodes[0].content.childNodes.length;)this.appendChild(e.content.childNodes[0].content.childNodes[0]);e.content.childNodes[0].remove()}else this.appendChild(e.content.childNodes[0])}run(){let e=this.myTemplate.cloneNode(!0);a.a.scanAndReplace(e),this.attachTemplateChildNodesToMyself(e);for(let e=0;e<this.childNodes.length;e++)a.a.scanAndRestore(this.childNodes[e])}getData(e){return this._mem.getData(e)}setData(e,t){return this._mem.setData(e,t)}getDataDump(){return this._mem.dataset}}customElements.get("aa-session")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-SESSION"),customElements.define("aa-session",c));let m={BaseElement:s.a,AAChoose:o.a,AAMemory:l,AAScreen:d,AASequence:u,AASession:c,AAVariable:i,AAHolder:a.a};window&&(window.aaCustomElements=m)}]);