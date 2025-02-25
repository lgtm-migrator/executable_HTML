(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["executableHTML"] = factory();
	else
		root["executableHTML"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/customElements/aa-affect-grid/aa-affect-grid.js":
/*!*************************************************************!*\
  !*** ./src/customElements/aa-affect-grid/aa-affect-grid.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAAffectGrid; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AAAffectGrid extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get tag() { 
        return 'aa-affect-grid';
    }

    static get properties() {
        return {

            'top-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'bottom-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'left-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'center-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'right-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'top-left-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'top-right-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'bottom-left-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'bottom-right-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'left-top-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'left-bottom-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'right-top-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'right-bottom-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            rows: {
                type: Number,
                userDefined: true,
                value: 11
            },

            columns: {
                type: Number,
                userDefined: true,
                value: 11
            },

            value:{
                type: Array,

            }

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AAAffectGrid.properties);
    }



    get x(){
        let val = this.getAttribute("value");
        if(!val) return null;
        return parseInt(val.split(",")[0]);
    }

    get y(){
        let val = this.getAttribute("value");
        if(!val) return null;
        return parseInt(val.split(",")[1]);
    }

    get value() {
        let val = this.getAttribute("value");
        if(!val) return null

        let s = val.split(",");
        return [ parseInt(s[0]), parseInt(s[1])];
    }
    set value(val) {
        this.setAttribute('value', val);

    }

    get minLabel() {
        return this.getAttribute('min-label');
    }

    get maxLabel() {
        return this.getAttribute('max-label');
    }

    set minLabel(val) {
        this.setAttribute('min-label', val);
    }

    set maxLabel(val) {
        this.setAttribute('max-label', val);
    }

    set min(val) {
        this.setAttribute('min', val);
    }

    set max(val) {
        this.setAttribute('max', val);
    }


    constructor() {
        super();

        if(this.topLeftLabel === null) this.topLeftLabel='';
        if(this.topLabel === null) this.topLabel='';
        if(this.topRightLabel === null) this.topRightLabel='';
        if(this.leftTopLabel === null) this.leftTopLabel='';
        if(this.leftLabel === null) this.leftLabel='';
        if(this.leftBottomLabel === null) this.leftBottomLabel='';
        if(this.rightTopLabel === null) this.rightTopLabel='';
        if(this.rightLabel === null) this.rightLabel='';
        if(this.rightBottomLabel === null) this.rightBottomLabel='';
        if(this.bottomLeftLabel === null) this.bottomLeftLabel='';
        if(this.bottomLabel === null) this.bottomLabel='';
        if(this.bottomRightLabel === null) this.bottomRightLabel='';
        this.root = this.attachShadow({ mode: 'open' });

        
        
    }



    connectedCallback() {
        super.connectedCallback();


        this.root.innerHTML = this.css + this.html;

        // this.topLeft = this.root.querySelector('.top-left');
       
        // this.topRight = this.root.querySelector('.top-right');
        // this.leftMargin =  this.root.querySelector('.left-margin');
        // this.rightMargin = this.root.querySelector('.right-margin');
        

        

        this.grid = this.root.querySelector('.grid');
        this.grid.addEventListener("mousedown", (e)=>{
            let currentValue = this.value;

            let cell = e.path[0];
            this.value = [cell.dataset.x, cell.dataset.y];
            
            
            if(this.selectedCell){
                this.selectedCell.classList.remove('selected');
            }
            this.selectedCell = cell;
            this.selectedCell.classList.add('selected');

            let newValue = this.value;
            console.log(currentValue, newValue);

            if(!currentValue) this.dispatchEvent(new CustomEvent("change", {bubbles:true}))
            else{
                if((currentValue[0]!=newValue[0])||(currentValue[1]!=newValue[1])){
                    this.dispatchEvent(new CustomEvent("change", {bubbles:true}));
                }
            }
            

        });

        this.totalContainer = this.root.querySelector('.total-container');

        this.totalContainer.style.height = window.getComputedStyle(this.totalContainer).width;
        this.root.querySelector(".leftLabels").style.width = window.getComputedStyle(this.grid).height;
        this.root.querySelector(".rightLabels").style.width = window.getComputedStyle(this.grid).height;
        
        //register a resize observer for top container
        if(ResizeObserver){
            new ResizeObserver( ()=>{

                this.totalContainer.style.height = window.getComputedStyle(this.totalContainer).width;
                this.root.querySelector(".leftLabels").style.width = window.getComputedStyle(this.grid).height;
                this.root.querySelector(".rightLabels").style.width = window.getComputedStyle(this.grid).height;

            }).observe(this.root.querySelector('.top-label'));
        }
        // else{
        //     console.warn("ResizeObserver is not defined here");
        // }

       


        
    }

    get css() {
        return html`<style>
        :host{
            display:block;
            font-family: Roboto, Noto, sans-serif;   
        }
        .top-section{
            height:40px;
            width:100%;
        }
        .top-left{
            text-align:left;
        }
        .top-label{
            text-align:center;
        }
        .top-right{
            text-align:right;
        }
        .bottom-left{
            text-align:left;
        }
        .bottom{
            text-align:center;
        }
        .bottom-right{
            text-align:right;
        }
        .top-left-corner{
            width:40px;
            height:40px;
        }
        .top-right-corner{
            width:40px;
            height:40px;
        }
        .bottom-left-corner{
            width:40px;
            height:40px;
        }
        .bottom-right-corner{
            width:40px;
            height:40px;
        }
        .middle-section{
         
            flex-grow:2;
        }
        .bottom-section{
           
            height:40px;
            width:100%;
        }
        .left-margin{
            width:40px;
            height:100%;
        }
        .right-margin{
            width:40px;
            height:100%;
        }
        .grid{
            display:grid;
            grid-template-columns: repeat(${this.columns}, ${100/this.columns}%);
            
            flex-grow:2;
            width:100%;
            height:100%;
        }
        .cell{
            border:solid thin;
            /* transition:background-color 0.2s; */
        }
        .cell.top{
            border-top:solid 2px;
        }
        .cell.bottom{
            border-bottom:solid 2px;
        }
        .cell.left{
            border-left:solid 2px;
        }
        .cell.right{
            border-right: solid 2px;
        }
        .cell.selected{
            background-color: #3367D6;
            
        }
        .label{
            flex-grow:1
        }
        </style>
        `;
    }

    get html() {
        

        let grid ='';
        for(let j=0; j<this.rows; j++){
            for(let i=0; i<this.columns; i++){
                grid+=html`<div class="cell  ${j==0?'top':''} ${j==this.rows-1?`bottom`:''}  ${i==0?`left`:''}  ${i==this.columns-1?`right`:''}" data-x="${ i+1 - Math.round(this.columns/2) }" data-y="${Math.round(this.rows/2) - j - 1}">
            </div>`;
            }
        }

        let source = html`
            <div class="total-container" style="position:relative; display:flex; flex-direction:column;">
                
                <div class="top-section" style="display:flex; flex-direction:row">
                    <div class="top-left-corner"></div>    
                    <div style="width:100%; display:flex; flex-direction:row; justify-content:space-between">
                        <div class="top-left label" style="width:33.3%">${this.topLeftLabel}</div>
                        <div class="top-label" style="width:33.3%; text-align:center">${this.topLabel}</div>
                        <div class="top-right label" style="width:33.3%">${this.topRightLabel}</div>
                    </div>
                    <div class="top-right-corner"></div>    
                </div>
            
                
                <div class="middle-section" style="display:flex; flex-direction:row">
                    <div class="left-margin" style="display:flex; flex-direction:column;"></div>
                    <div class="grid" style="padding:0px">${grid}</div>
                    <div class="right-margin" style="display:flex; flex-direction:column"></div>
                </div>
                

                <div class="bottom-section" style="display:flex; flex-direction:row;margin-top:10px">
                <div class="bottom-left-corner" ></div>    
                <div style="width:100%; display:flex; flex-direction:row; justify-content:space-between">
                    <div class="bottom-left label" style="width:33.3%">${this.bottomLeftLabel}</div>
                    <div class="bottom label" style="width:33.3%">${this.bottomLabel}</div>
                    <div class="bottom-right label" style="width:33.3%">${this.bottomRightLabel}</div>
                
                </div>
                    <div class="bottom-right-corner"></div>    
                
                </div>

                <div class="leftLabels" style="position:absolute; bottom:30px; left:0px;  display:flex; flex-direction:row; justify-content:space-between; transform:rotate(-90deg); transform-origin:top left;">
                    <div style="width:33.3%; text-align:left; ">${this.leftBottomLabel}</div>    
                    <div style="width:33.3%; text-align:center; flex-grow:2">${this.leftLabel}</div>    
                    <div style="width:33.3%;text-align:right">${this.leftTopLabel}</div>    
                </div>

                <div class="rightLabels" style="position:absolute; bottom:50px; right:20px; display:flex; flex-direction:row; justify-content:space-between; transform:rotate(90deg); transform-origin:bottom right;">
                    <div style="width:33.3%; text-align:left">${this.rightTopLabel}</div>    
                    <div style="width:33.3%; text-align:center; flex-grow:2">${this.rightLabel}</div>    
                    <div style="width:33.3%; text-align:right">${this.rightBottomLabel}</div>    
                </div>

            </div>
        
        `;
               
        return source;
    }


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-affect-grid', AAAffectGrid);

/***/ }),

/***/ "./src/customElements/aa-baseElement/baseElement.js":
/*!**********************************************************!*\
  !*** ./src/customElements/aa-baseElement/baseElement.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseElement; });
/* harmony import */ var _lib_yaml_js_yaml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/yaml/js-yaml.js */ "./src/lib/yaml/js-yaml.js");
/* harmony import */ var _lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/html2jsl/html2jsl.js */ "./src/lib/html2jsl/html2jsl.js");
/* harmony import */ var _lib_mySVG_mySVG_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/mySVG/mySVG.js */ "./src/lib/mySVG/mySVG.js");




var html = function (txt, ...val) {

    let result = txt[0];
    for (let i = 0; i < val.length; i++) {

        result += val[i];
        result += txt[i + 1];
    }
    return result;
}

if (window) window.html = html;

class BaseElement extends HTMLElement {



    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },

            'diagram': {
                type: Boolean,
                value: false,
                userDefined: true
            },

            'diagram-transparent': {
                type: Boolean,
                value: false,
                userDefined: true
            },
        }
    }
    static registerAAElement(name, elem) {       
        if (!customElements.get(name)) {
            window.AANodeNames = window.AANodeNames || [];
            window.AANodeNames.push(name.toUpperCase());
            customElements.define(name, elem);
        }
    }

    static isAAElement(node) {
        if (AANodeNames.indexOf(node.nodeName) != -1) {
            return true;
        }
        return false;
    }

    static createFragmentForNode(node) {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < node.childNodes.length; i++) {
            fragment.append(node.childNodes[i].cloneNode(true));
            // fragment.append(BaseElement.copy(node.childNodes[i])
        }
        return fragment;
    }

    static createHolderForNode(o) {
        let node = o.cloneNode(false);
        node.innerFragment = BaseElement.createFragmentForNode(o);
        return node;
    }

    static scanAndReplace(node) {

        if (node.nodeName === "TEMPLATE") {
            BaseElement.scanAndReplace(node.content);
        }
        else if (BaseElement.isAAElement(node)) {
            // if(node.innerFragment) { return };
            let holder = BaseElement.createHolderForNode(node);
            node.replaceWith(holder);
        } else
            for (let i = 0; i < node.childNodes.length; i++) {
                BaseElement.scanAndReplace(node.childNodes[i]);
            }
    }

    constructor() {
        super();
        this._props = this.makePropertiesFromAttributes();

    }

    connectedCallback() {
        this._attachedTimestamp = new Date().getTime();
        this._debug = (this.debug === true) || (this.debug === null);
        if (this.innerFragment) {

            // I have commented BaseElement.scanAndReplace out because a shallow copy and an innerFragment
            // is already created by BaseElement.copy for childNodes of this.innerFrament
            // as they are appended to this element.
            // BaseElement.scanAndReplace(this.innerFragment);
            for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                this.appendChild(BaseElement.copy(this.innerFragment.childNodes[i]));
            }

        }

        this.setAttributeDefaultValues();
    }

    getMemory() {
        let el = this;
        while (el.parentNode != null) {
            if (el._mem) return el._mem;
            el = el.parentNode;
        }
        return null;
    }

    /**
     * Properties are the member variables of the HTMLElement object.
     * Attributes are the html tag's attributes.
     * By convention, properties are in camelCase, e.g., someMembVariable
     * while the corresponding attribute whould be hyphenated, e.g., some-member-variable.
     * The purpose of this function is, based on the hyphenated attributes 
     * of the element, to generate corresponding camelCase properties
     * 
     * Attribute names are provided by observedAttributes of the HTMLElement object,
     * however objects that inherit from baseElement can also provide a more
     * meaningful declaration, including datatype and default value, in 
     * a static get properties function, like so:
     * 
     *  static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "submit-button-text":{
                type:String,
                value:"submit",
                userDefined:true
            },

    
     * This function also generates corresponding getter and setter functions
     * for each property, so that properties and attributes always remain in sync
     * with each other 
     */
    makePropertiesFromAttributes() {

        let ElementClass = customElements.get(this.tagName.toLowerCase());

        let attr = ElementClass.observedAttributes;
        if (!attr) return null;
        let props = {};
        for (let i = 0; i < attr.length; i++) {
            let prop = this.toCamelCase(attr[i]);
            props[prop] = attr[i];   
            if (typeof this[prop] != 'undefined') {
                continue;
            } else {

                Object.defineProperty(this, prop, {
                    get: () => {

                        let result = this.getAttribute(attr[i]);
                        if (result === 'true') { return true; }
                        else if (result === 'false') { return false; }
                        else { return result; }
                    },
                    set: (value) => {
                        this.setAttribute(attr[i], value);
                    }
                });
            }
        }
        return props;
    }

    toCamelCase(str) {
        let words = str.split('-');
        let result = words[0];
        for (let i = 1; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].substr(1);
        }
        return result;
    }
    toHyphenated(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let letter = str[i];
            if (letter.toLowerCase() !== letter) {
                // letter is uppercase
                result += `-${letter.toLowerCase()}`;
            } else {
                result += letter;
            }
        }
        return result;
    }

    setAttributeDefaultValues() {
        let p = this.constructor.properties;
        if (p) {
            let keys = Object.keys(p);
            for (let i = 0; i < keys.length; i++) {
                let prop = this.toCamelCase(keys[i]);
                if ((typeof this[prop] === 'undefined') || (this[prop] === null) || (this[prop] === '')) {
                    if (p[keys[i]].type === Boolean) {
                        if (this.getAttribute(keys[i]) === '') {
                            this.setAttribute(keys[i], true);

                        } else if (this.getAttribute(keys[i]) === 'true') {
                            this.setAttribute(keys[i], true);

                        } else if (this.getAttribute(keys[i]) === 'false') {
                            this.setAttribute(keys[i], false);

                        } else if (this.getAttribute(keys[i]) === null) {
                            this.setAttribute(keys[i], p[keys[i]].value);
                        }
                    }
                    else {
                        let val = this.getAttribute(keys[i]) || (p[keys[i]].value || null);
                        if (val) this.setAttribute(keys[i], val);
                        if (val === false) this.setAttribute(keys[i], val);
                    }
                }
            }
        }

    }

    static copy(node) {
        let nodeCopy;
        if (BaseElement.isAAElement(node)) {
            if (node.innerFragment) {
                nodeCopy = node.cloneNode();
                nodeCopy.innerFragment = BaseElement.createFragmentForNode(node.innerFragment);
            } else {
                nodeCopy = node.cloneNode();
                nodeCopy.innerFragment = BaseElement.createFragmentForNode(node);
            }
        }
        else {
            nodeCopy = node.cloneNode(true);
        }
        return nodeCopy;
    }

    getAttributes() {
        let result = {};
        let attributes = Object.keys(this.constructor.properties);
        for (let i = 0; i < attributes.length; i++) {
            if (!this.constructor.properties[attributes[i]].userDefined) {
                // users should need not be concerned
                continue;
            }
            if ((typeof this.getAttribute(attributes[i]) !== 'undefined') && (this.getAttribute(attributes[i]) !== 'undefined')) {
                if (this.constructor.properties[attributes[i]].value == this.getAttribute(attributes[i])) {
                    // value is default value, no need to be part of specification
                    continue;
                }
                result[attributes[i]] = this.getAttribute(attributes[i]);
            }
        }
        return result;
    }

    toJSON() {
        let result = {};
        let tagName = this.tagName.toLowerCase()
        result[tagName] = this.getAttributes()
        if(this.childNodes.length){
            result[tagName].childNodes = [];
        
            this.childNodes.forEach(childNode=>{
                result[tagName].childNodes.push(BaseElement.nodeToJSON(childNode))
            });
        }
        return result;
    }

    static nodeToJSON(node) {

        debugger;
        if ((node.nodeType === document.TEXT_NODE) || (node.nodeType === document.COMMENT_NODE)) {
            let result = {};
            let text = node.textContent.replace(/\n/g, ' ').replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
            if (text !== '') {
                result[node.nodeName] = text;
                return result;
            }
            else { return null; }
        }
        else if (node.toJSON) {
            return node.toJSON();
        }
        else try {

            let result = {};

            let attrs = node.getAttributeNames();
            let attrObj = {};
            for (let i = 0; i < attrs.length; i++) {
                attrObj[attrs[i]] = node.getAttribute(attrs[i]);
            }
            let childNodes = [];
            for (let i = 0; i < node.childNodes.length; i++) {
                let el = BaseElement.nodeToJSON(node.childNodes[i]);
                if (el) {
                    childNodes.push(BaseElement.nodeToJSON(node.childNodes[i]));
                }
            }
            result[node.tagName] = attrObj;
            result[node.tagName].childNodes = childNodes;

            return result;
        } catch (e) {
            console.error(e);
        }
    }

    toYAML() {
        return jsyaml.dump(this.toJSON())
    }


    toJSL() {
        return _lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_1__["nodeToJSL"](this);
    }



    produceDiagram() {
        if (!this.root) {
            this.root = this.attachShadow({ mode: 'open' });
        }
        this.root.innerHTML = '<div id="svgContainer" ></div>'
        let div = this.root.childNodes[0];
        let diagram = new _lib_mySVG_mySVG_js__WEBPACK_IMPORTED_MODULE_2__["mySVG"]();
        let svg = diagram.render(this);

        let button = document.createElement('paper-button');
        button.innerHTML = "download";
        button.raised = true;
        button.style.backgroundColor = "#0d47a1";
        button.style.color = "white";
        button.classList.add('indigo');
        div.appendChild(svg);
        div.appendChild(button);
        // div.appendChild(diagram.renderKey());

        let filename = '';
        if (this.name) {
            filename = this.name + "." + this.nodeName.toLowerCase() + ".svg";
        } else {
            filename = this.nodeName.toLowerCase() + ".svg";
        }
        button.addEventListener("click", () => {
            diagram.download(filename);
        })

    }





    static getDomPathAsName(el) {
        var stack = [];
       
        while ((el.nodeName !== "AA-SESSION") && (el.parentNode != null)) {

            var sibCount = 0;
            var sibIndex = 0;
            for (var i = 0; i < el.parentNode.childNodes.length; i++) {
                var sib = el.parentNode.childNodes[i];
                if (sib.nodeName == el.nodeName) {
                    if (sib === el) {
                        sibIndex = sibCount;
                    }
                    sibCount++;
                }
            }
            if (!BaseElement.isAAElement(el)) {
                el = el.parentNode;
                continue;

            }
            if (el.hasAttribute('name') && el.name != '') {
                stack.unshift(el.name);
            } else if (el.hasAttribute('id') && el.id != '') {
                stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
            } else if (sibCount > 1) {
                stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
            } else {
                stack.unshift(el.nodeName.toLowerCase());
            }
            el = el.parentNode;
        }
        if (el.nodeName === "AA-SESSION") {
            if (el.hasAttribute('name') && el.name != '') {
                stack.unshift(el.name);
            } else if (el.hasAttribute('id') && el.id != '') {
                stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
            } else if (sibCount > 1) {
                stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
            } else {
                stack.unshift(el.nodeName.toLowerCase());
            }
        }
        let name = "";
        for (let i = 0; i < stack.length - 1; i++) {
            name += stack[i] + ".";
        }
        name += stack[stack.length - 1];

       
        return name; // removes the html element
    }

    static getVariableName(el) {
        if (el.name) {
            return el.name;
        } else {
            return BaseElement.getDomPathAsName(el);
        }
    }


    _dispatchDebugEvent(detail) {
        if (this.debug) {
            this.dispatchEvent(new CustomEvent('debugEvent', { detail, bubbles: true }));
        }
    }



    _dispatchEndEvent(detail) {
        //  use setTimeout to allow aaSequence.next() to return,
        //  so that calls to aaSequence.next are not recursive
        // setTimeout(()=>{

        this.dispatchEvent(new CustomEvent('endEvent', { bubbles: true, detail }));
        // },0);
    }

    _getParentSession() {
        let _sessionElement = this;
        while ((_sessionElement != null) && (_sessionElement.nodeName != 'AA-SESSION')) {
            _sessionElement = _sessionElement.parentNode;
        }
        return _sessionElement;
    }
}


if (!customElements.get('aa-base-element')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-BASE-ELEMENT');
    customElements.define('aa-base-element', BaseElement);
}


window.nodeToJSON = BaseElement.nodeToJSON;

/***/ }),

/***/ "./src/customElements/aa-checkboxes/aa-checkboxes.js":
/*!***********************************************************!*\
  !*** ./src/customElements/aa-checkboxes/aa-checkboxes.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AACheckboxes; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-choice-item/aa-choice-item.js */ "./src/customElements/aa-choice-item/aa-choice-item.js");



class AACheckboxes extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-checkboxes';
    }

    static get properties() {
        return {
            horizontal: {
                type: Boolean,
                value: false,
                userDefined: true
            },

            vertical: {
                type: Boolean,
                value: true,
                userDefined: true
            },

            name: {
                type: String,
                userDefined: true
            },

            value: {
                type: String,
                userDefined: false
            },
            



        }
    }

    static get acceptsElements() {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes() {
        return Object.keys(AACheckboxes.properties);
    }


    get value() {

        let result = [];
        if (this.boxes) {
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].checked) {
                    result.push(this.boxes[i].value);
                }
                else {
                    result.push(null);
                }
            }

        }
        // console.log(result);
        return result
    }

    set value(val) {
        this.setAttribute('value', val);
        this.boxGroup.selected = val;
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.html;
        this.boxes = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        this.boxes = this.root.querySelectorAll('paper-checkbox')

        let val = this.getAttribute('value');
        if (this.boxes) {
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].value == val) {
                    this.boxes[i].checked = true
                }
            }
        }


    }

    attachToShadowDomAccordingToKind(node) {


        if (!_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node)) {
            this.root.appendChild(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(node));
        } else {
            if (node.tagName === 'AA-CHOICE-ITEM') {
                let child = document.createElement('paper-checkbox');
                if (node.getAttribute('value')) {
                    child.setAttribute('name', node.getAttribute('value'));
                    child.setAttribute('value', node.getAttribute('value'));
                } else {
                    child.setAttribute('name', node.innerText.trim());
                    child.setAttribute('value', node.innerText.trim());
                }
                if (!((this.horizontal === '') || (this.horizontal))) {
                    child.style.display = 'block';
                }
                child.innerHTML = node.innerHTML;
                this.root.appendChild(child);
                this.boxes.push(child);
            }
        }
    }

    get html() {
        return html``;
    }

    get css() {
        return html`
        <style>
            paper-checkbox{
                padding:12px;
            }
        </style>
        
        
        `;
    }

    toJSON(){
        let result = super.toJSON();
        let children = [];
        for(let i=0; i<this.children.length; i++){
            children.push(this.children[i].toJSON());
        }
        
        result[this.tagName.toLowerCase()].items = children;
        return result; 
    }

}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-checkboxes', AACheckboxes);

/***/ }),

/***/ "./src/customElements/aa-choice-item/aa-choice-item.js":
/*!*************************************************************!*\
  !*** ./src/customElements/aa-choice-item/aa-choice-item.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAChoiceItem; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AAChoiceItem extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-choice-item';
    }

    static get properties(){
        return{
            value:{
                type:String,
                userDefined:true
            }           
        }
    }
    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }

    static get acceptsElements(){
        return null;
    }

    constructor() {
        super();

    }

    connectedCallback() {
        super.connectedCallback();

    }

    toJSON(){
        let result= super.toJSON();
        return result;
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-choice-item', AAChoiceItem);

/***/ }),

/***/ "./src/customElements/aa-choose/aa-choose.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-choose/aa-choose.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAChoose; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aa-when/aa-when.js */ "./src/customElements/aa-choose/aa-when/aa-when.js");
/* harmony import */ var _aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aa-otherwise/aa-otherwise.js */ "./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js");
/* harmony import */ var _lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/jsep/jsep.js */ "./src/lib/jsep/jsep.js");





class AAChoose extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-choose';
    }

    static get properties(){
        return {

            ..._aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].properties,

            name:{
                type:String,
                userDefined:true
            },
            "should-run":{
                type:Boolean,
                value:true,
                userDefined:false
            },
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            }
        }
    }

    static get acceptsElements(){
        return[
            "aa-when", "aa-otherwise"
        ]
    }

    static get observedAttributes() {
        return Object.keys(AAChoose.properties);
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>';
        this.originalContent = this.innerHTML;
    }


    connectedCallback() {
        this.setAttributeDefaultValues();

        if(this.diagram){

            this.produceDiagram();
            return;
        }

        this._shouldRun = (this.shouldRun === null) || (this.shouldRun === true);
        this.sessionElement = this._getParentSession();


        if (this._shouldRun) {
            if (typeof this.innerFragment !== 'undefined') {
                _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].scanAndReplace(this.innerFragment);
                let nodes = this._getNodeToInstantiate();
                if (nodes.length === 0) {
                    this._dispatchEndEvent();
                } else {
                    let doesAnyNodeExpectWait = false;
                    for (let i = 0; i < nodes.length; i++) {
                        let node = nodes[i];
                        if (typeof node !== 'undefined') {

                            /**
                             * certain elements, mainly the screen,
                             * are synchronous and need to dispatch
                             * their own "end" events.
                             * 
                             * so look into the list of childNodes
                             * contained into the part of the choose-when-otherwise
                             * block that gets instantiated, and if you see
                             * one with the property expectWait, don't tell
                             * the sequence to move forward.
                             * 
                             * Possibly the architecture for this needs to change,
                             * and have the sequence specifically extract newly
                             * produced nodes and insert them itself
                            **/
                           
                            for(let j=0; j<node.childNodes.length;j++){
                                
                                // the element has not been attached
                                // so we have to access the static properties getter
                                // to get the default value for expectWait
                                if(node.childNodes[j].constructor)
                                if(node.childNodes[j].constructor.properties)
                                if(node.childNodes[j].constructor.properties['expect-wait']){
                                    doesAnyNodeExpectWait = true;
                                }
                            }

                            this.parentNode.insertBefore(node, this.nextSibling);
                        }
                    }
            
                    /** 
                     * so here dispatch evdEvent only if you haven't encountered
                     * something that has expectWait:true
                     */
                    if(!doesAnyNodeExpectWait) {
                        this._dispatchEndEvent();
                    }
                }
            }
            else {
                if (this.childNodes.length === 0) {
                    this._dispatchEndEvent();
                }
            }
        }
        this.remove();
    }

    _getNodeToInstantiate() {
        let nodesToReturn = [];
        let nodeOtherwise = [];
        let isChildTrue = false;
        for (let i = 0; i < this.innerFragment.children.length; i++) {
            let child = this.innerFragment.children[i];
            if (child.nodeName === 'AA-WHEN') {
                isChildTrue = this.evaluate(child);
                if (isChildTrue) {
                    nodesToReturn.push(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(child).innerFragment);
                }
            } else if (child.nodeName === 'AA-OTHERWISE') {
                nodeOtherwise.push(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(child).innerFragment);
            }
        }
        if (nodesToReturn.length === 0) {
            return nodeOtherwise;
        }
        else {
            return nodesToReturn;
        }
    }


    evaluate(element) {
        let test = element.getAttribute('test');
        if ((test == null) || (test == '')) return null;
        return this.evaluateTestExpression(test);
    }

    evaluateTestExpression(test) {
        console.log(test);
        let expr = this.replaceExpressionIdentifiersWithValues(test);
        // after replacing known variable names with their values in the string, test to see if the expression can be parsed


        try {
            var parseTree = Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(expr);
            if ((parseTree.left.type === 'Literal') && (parseTree.right.type === 'Literal')) {
                return eval(expr);
            }
            else {
                // there are still strings in the expression, which are unknown
                // evaluate with values that the parseTreeProvides
                return  eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`);
                //an exception should be raised
                // throw 'unknown identifiers in expression : ' + expr;
            }
        } catch (e) {
            console.error('parse error:', e);
        }
    }

    replaceExpressionIdentifiersWithValues(expression, memoryElement) {

        let memory = this.getMemory() || memoryElement;
        let result = expression.toUpperCase();

        let originalIdentifiers = Object.keys(memory.getDataDump());
        let upperCaseIdentifiers = originalIdentifiers.map(s => s.toUpperCase());
        for (let i in originalIdentifiers) {
            let value = memory.getData(originalIdentifiers[i]);
            let finalValue = parseInt(value);
            if (finalValue != value) {
                if (value === 'null') { finalValue = 'null'; }
                else if (value === 'true') { finalValue = 'true'; }
                else if (value === 'false') { finalValue = 'false'; }
                else finalValue = `"${value}"`;
            }
            let r = new RegExp(upperCaseIdentifiers[i], 'g');
            result = result.replace(r, finalValue);
        }
        return result;
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-choose', AAChoose);



/***/ }),

/***/ "./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js":
/*!*******************************************************************!*\
  !*** ./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAOtherwise; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAOtherwise extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-otherwise';
    }

    static get acceptsElements(){
        return null;
    }
    
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }
}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-otherwise', AAOtherwise);


/***/ }),

/***/ "./src/customElements/aa-choose/aa-when/aa-when.js":
/*!*********************************************************!*\
  !*** ./src/customElements/aa-choose/aa-when/aa-when.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAWhen; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAWhen extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get tag() { 
        return 'aa-when'
    }

    static get properties(){
        return {
            name:{
                type:String,
                userDefined:false
            },
            "should-run":{
                type:Boolean,
                value:true,
                userDefined:false
            },
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },
            "test":{
                type:String,
                userDefined:true
            }
        }
    }
    static get acceptsElements(){
        return null;
    }

    static get observedAttributes() {
        return Object.keys(AAWhen.properties);
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>'
    }

    connectedCallback() {
        super.connectedCallback();
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-when', AAWhen);



/***/ }),

/***/ "./src/customElements/aa-function/aa-function-random.js":
/*!**************************************************************!*\
  !*** ./src/customElements/aa-function/aa-function-random.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAFunctionRandom; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAFunctionRandom extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-function-random'
    }

    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
           
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },

            "value":{
                type:Number,
                userDefined:false,
            },

            "min":{
                type:Number,
                userDefined:true,
            },
            
            "max":{
                type:Number,
                userDefined:true,
            },
            

        }
    }

    static get acceptsElements(){
        return null
    }

    static get observedAttributes() {
        return Object.keys(AAFunctionRandom.properties);
    }



    constructor(){

        super();
    }

    connectedCallback() {

        let memory = this.getMemory();
        if(memory) memory.setData(this.name, this.value);
        this._dispatchEndEvent({ autoDispatch: true });
        if (!this.debug) { this.remove(); }
    }

  
    get value() {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        let val = this.getRandomInt(parsedMin, parsedMax);
        let memory = this.getMemory();
        if(memory) memory.setData(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].getVariableName(this), val);
        return  val;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-function-random', AAFunctionRandom);



/***/ }),

/***/ "./src/customElements/aa-geolocation/aa-geolocation.js":
/*!*************************************************************!*\
  !*** ./src/customElements/aa-geolocation/aa-geolocation.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAGeolocation; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AAGeolocation extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-geolocation';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },


            'get-on-request': {
                type: Boolean,
                userDefined: true,
                value: false
            },

            'ready': {
                type: Boolean,
                userDefined: false,
                value: false
            }
            // 'lat': {
            //     type: String,
            //     userDefined: false
            // },

            // 'lon': {
            //     type: String,
            //     userDefined: false
            // },

            // 'timestamp':{
            //     type: Date,
            //     userDefined: false
            // }

        }
    }

    static get acceptsElements() {
        return []
    }

    static get observedAttributes() {

        return Object.keys(AAGeolocation.properties);

    }

    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });
    }



    get value() {
        return this._getLocation();
    }

    set value(val) {
        this.setAttribute("value", val);
    }

    async _getValue() {
        let location = await this._getLocation();

        console.log(location);
        return location;
    }


    _getLocation() {

        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {

                // resolve("skata");
                navigator.geolocation.getCurrentPosition((position) => {

                    //  in this way it is synchronous, there will be no progression to the next
                    //  item in a sequence unless this callback function is called.

                    //  it could also be made asynchronous, where there will be a progression
                    //  regardless. Perhaps asynchronous components should notify parents
                    //  of their presence.

                    // do_something(position.coords.latitude, position.coords.longitude);

                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    let timestamp = new Date();

                    let val = { lat, lon, timestamp }

                    resolve(val);
                    // var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.value } });
                    // this.dispatchEvent(valueSubmitEvent);
                    // this._dispatchEndEvent({ value: this.value, autoDispatch: true })
                });
            } else {
                reject();
            }
        })
    }
    connectedCallback() {


        super.connectedCallback();
        // let session = this._getParentSession();
        // session.setData(this.name, this.value);
        // this._dispatchEndEvent({autoDispatch:true});
        // if(!this.debug) {this.remove();}

        // if (!this.getOnRequest) {
        //     this._getValue();
        //     var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.value } });
        //     this.dispatchEvent(valueSubmitEvent);
        //     this._dispatchEndEvent({ value: this.value, autoDispatch: true })
        // }

        this._ready = true;
        
        if (!this.getOnRequest) {
            this._getLocation().then(val=>{
                var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value:val } });
                this.dispatchEvent(valueSubmitEvent);
                this._dispatchEndEvent({ value: val, autoDispatch: true })
            });
        }
    }


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-geolocation', AAGeolocation);



/***/ }),

/***/ "./src/customElements/aa-label/aa-label.js":
/*!*************************************************!*\
  !*** ./src/customElements/aa-label/aa-label.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AALabel; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AALabel extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-label';
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.html;
    }

    get css(){
        return html`
            <style>
                    :host{
                        display:block;
                        font-family: Roboto, Noto, sans-serif;
                        font-weight:bold;
                        margin-top:40px;
                        margin-bottom:10px;
                        
                    }

            </style>
        `
    }

    get html(){
        return `<slot></slot>`
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-label', AALabel);

/***/ }),

/***/ "./src/customElements/aa-likert-scale/aa-likert-scale.js":
/*!***************************************************************!*\
  !*** ./src/customElements/aa-likert-scale/aa-likert-scale.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AALikertScale; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_multiple_choice_aa_multiple_choice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-multiple-choice/aa-multiple-choice.js */ "./src/customElements/aa-multiple-choice/aa-multiple-choice.js");



class AALikertScale extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-likert-scale';
    }

    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
           
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },

            "value":{
                type:Number,
                userDefined:false,
            },

            "items":{
                type:String,
                userDefined:true,
            },

            "start-label":{
                type:String,
                userDefined:true,
                value:''
            },

            "middle-label":{
                type:String,
                userDefined:true,
                value:''
            },

            "end-label":{
                type:String,
                userDefined:true,
                value:''
            },

            "start-item":{
                type:Number,
                userDefined:true,
                value:1
            }
            
            

        }
    }

    static get acceptsElements(){
        return [];
    }

    static get observedAttributes() {
        return Object.keys(AALikertScale.properties);
    }



    constructor(){

        super();

        this.root = this.attachShadow({ mode: 'open' });


    }

    connectedCallback() {
        super.connectedCallback();

        
        this.root.innerHTML = this.html;

        this.mChoice = this.root.querySelector("aa-multiple-choice")
        this.choiceItems = this.mChoice.choiceItems


        // this.root.addEventListener("change", ()=>{
        //     debugger;
        // })

        this.addEventListener("click", ()=>{
            if(!this.currentvalue){
                this.dispatchEvent(new CustomEvent("change"))
            }else
            {
                if(this.currentvalue!=this.value){
                    this.dispatchEvent(new CustomEvent("change"))
                }
                this.currentvalue = this.value;
            }
        })
    }


    getTags(){
        
        let c = '';
        let start = `<div style="width:100px; white-space:nowrap">${this.getAttribute("start-label") || ''}</div>`
        let middle = `<div style="width:100px; white-space:nowrap">${this.getAttribute("middle-label") || ''}</div>`
        let end = `<div style="width:100px; white-space:nowrap">${this.getAttribute("end-label") || ''}</div>`
        let placeholder = `<div style="width:50px"></div>`;
        


        let items = parseInt(this.items)
        for(let i=1; i<=items; i++){
            
            
            
            if(i==1) {
                c+=start;
            }
            else if(i==Math.floor((items+1)/2)) {

                c+=middle;
            }
            else if(i==items) {
                c+=end;
            } else{
                c+=placeholder;
            }

            
        }   

        let result = `<div style="font-family: Roboto, Noto, sans-serif; width:100%; display:flex; justify-content:space-evenly; text-align:center">${c}</div>`
        return result;

    }
    get html(){
        let items = ``;

        let startItem = parseFloat(this.startItem)

        if((!this.items)||(this.items==="undefined")) this.items = 5;
        for(let i=0; i<this.items; i++){
            items += `<aa-choice-item name="${i+startItem}">${i+startItem}</aa-choice-item>`;
        }
        let result =  html`<div>
                                <aa-multiple-choice horizontal="true" name="${this.name}">${items}</aa-multiple-choice>
                                ${this.getTags()}    
                            </div>
                                `
        
        return result;
    }


    get value(){

        if(this.mChoice)
        {
            return parseInt(this.mChoice.value);
        } else{
            return parseInt(this.getAttribute('value'));
        }
    }


    getValue() {
       return this.mChoice.value; 
    }

 


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-likert-scale', AALikertScale);



/***/ }),

/***/ "./src/customElements/aa-memory/aa-memory.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-memory/aa-memory.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAMemory; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");




class AAMemory extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-memory';
    }

    get observedAttributes(){
        return ["name"];
    }

    constructor(){
        super();
    }

    connectedCallback(){
        
    }

    
    
    setData(name,value){
        // this.dataset[name] = value;
        localStorage[name] = value;
    }

    getData(name){
        return localStorage[name];
    }

    getDataDump(){
        return localStorage;
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-memory', AAMemory);


/***/ }),

/***/ "./src/customElements/aa-multiple-choice/aa-multiple-choice.js":
/*!*********************************************************************!*\
  !*** ./src/customElements/aa-multiple-choice/aa-multiple-choice.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAMultipleChoice; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-choice-item/aa-choice-item.js */ "./src/customElements/aa-choice-item/aa-choice-item.js");



class AAMultipleChoice extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-multiple-choice';
    }

    static get properties() {
        return {
            horizontal: {
                type: Boolean,
                value: false,
                userDefined: true
            },

            vertical: {
                type: Boolean,
                value: true,
                userDefined: true
            },

            name: {
                type: String,
                userDefined: true
            },

            value: {
                type: String,
                userDefined: true,

            },

        }
    }

    static get acceptsElements() {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes() {
        return Object.keys(AAMultipleChoice.properties);
    }

    get staticObject(){
        return AAMultipleChoice;
    }

    get value() {

        if (this.radioGroup) {
            return this.radioGroup.selected;
        }
        return this.getAttribute('value');
    }

    set value(val) {

        this.setAttribute('value', val);
        this.radioGroup.selected = val;
    }

    constructor() {
        super();

        if(this.horizontal===''){
            this.horizontal = true;
        }
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = this.css + this.html;

        this.radioGroup = this.root.querySelector('#radioGroup');
        this.radioGroup.addEventListener('change', (e) => {
            this.value = e.target.name;
            // console.log(this.value);
        });

    }

    connectedCallback() {

        super.connectedCallback();

        this.choiceItems = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        if ((this.getAttribute('value'))&&(this.getAttribute('value')!=='undefined')) {
            this.radioGroup.setAttribute('selected', this.getAttribute('value'));
        }

        this.style.display = 'block';

        // this.addEventListener("click", ()=>{
        //     if(!this.currentvalue){
        //         this.dispatchEvent(new CustomEvent("change"))
        //     }else
        //     {
        //         if(this.currentvalue!=this.value){
        //             this.dispatchEvent(new CustomEvent("change", {bubbles:true}))
        //         }
        //         this.currentvalue = this.value;
        //     }
        // })
    }

    attachToShadowDomAccordingToKind(node) {

        if (!_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node)) {
            this.root.appendChild(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(node));
        } else {
            if (node.tagName === 'AA-CHOICE-ITEM') {

                let child = document.createElement('paper-radio-button');
                if (node.getAttribute('value')) {
                    child.setAttribute('name', node.getAttribute('value'));
                } else {
                    child.setAttribute('name', node.innerText.trim());
                }
                if (!((this.horizontal === '') || (this.horizontal))) {
                    child.style.display = 'block';
                }

                child.innerHTML = node.innerHTML;
                 
                this.radioGroup.appendChild(child);
                this.choiceItems.push(child);


                if (((this.horizontal === '') || (this.horizontal))) {
                    

                    this.radioGroup.style.display='flex';
                    this.radioGroup.style.justifyContent='space-evenly';
                    this.radioGroup.classList.add("horizontal");

                    let d1 = child.shadowRoot.querySelector('#radioContainer');
                    let d2 = child.shadowRoot.querySelector('#radioLabel');
                    d2.style.textAlign = 'center';
                    d2.style.marginLeft = '0px';
                    d2.style.padding = '5px';
                    // d2.style.whiteSpace = "nowrap";
                    // d2.style.minWidth = "50px";
                    // d2.style.maxWidth = "90px";
                    let newDiv = document.createElement('div');
                    // newDiv.style.marginLeft = 'var(--paper-radio-button-label-spacing,10px)';
                    newDiv.style.display='flex';
                    newDiv.style.flexDirection='column';
                    newDiv.style.alignItems = 'center';
                    newDiv.style.textAlign = 'center';
                    child.shadowRoot.appendChild(newDiv);
                    newDiv.appendChild(d1);
                    newDiv.appendChild(d2);
 
                } 
                // else {

                // }

            }
        }
    }

    get html() {
        return html`<paper-radio-group id='radioGroup'></paper-radio-group>`;
    }

    get css() {
        return html`<style>
            paper-radio-group{
                user-select:none;
            }

        paper-radio-button {
            padding: var(--paper-radio-group-item-padding, 10px);
            user-select:none;
            display: block;
        }
        </style>`;
    }


    toJSON(){
        let result = super.toJSON();
        if((result.horizontal)){
            result.horizontal = true;
        }
        return result; 
    }
}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-multiple-choice', AAMultipleChoice);

/***/ }),

/***/ "./src/customElements/aa-screen/aa-screen.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-screen/aa-screen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAScreen; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AAScreen extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-screen';
    }

    static get properties() {
        return {

            ..._aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].properties,


            "submit-button-text": {
                type: String,
                value: "submit",
                userDefined: true
            },

            "submit-button-hidden": {
                type: Boolean,
                value: false,
                userDefined: true
            },

            'expect-wait': {
                type: Boolean,
                userDefined: false,
                value: true
            },

            'autohide': {
                type: Boolean,
                userDefined: false,
                value: true
            }



        }
    }

    static get acceptsElements() {
        return null;
    }
    static get observedAttributes() {
        return Object.keys(AAScreen.properties);
    }


    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'submit-button-text':
                if (this.submitButton) { this.submitButton.innerHTML = newValue; }
                break;
            case 'submit-button-hidden':
                if (this.submitButtonContainer) {
                    if ((newValue !== true) || (newValue !== 'true')) {
                        this.submitButtonContainer.style.display = 'block';
                    } else {
                        this.submitButtonContainer.style.display = 'none';
                    }
                }
                break;
        }
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.diagram) {
            this.produceDiagram();
            return;
        }
        this.root.innerHTML = this.css + this.html;
        // this.submitButton = this.root.querySelector('.submitButton');
        this.submitButtonContainer = this.root.querySelector('.submitButtonContainer');
        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            if (this.submitButtonContainer) {
                this.submitButtonContainer.style.display = 'none';
            }
        }


        this.root.querySelector('.submitButton').addEventListener('tap', this.submitButtonClick.bind(this));


    }


    get css() {

        return html`<style>
                :host {
                    display: block;
                    height: fit-content;
                    padding:20px;
                    font-family:sans-serif;
                }

                .submitButtonContainer{
                    text-align:right;
                    justify-content: space-between; 
                    align-items:center;
                    padding:20px;
                }


                paper-button.darkBlue {
                    background-color: #0d47a1;
                    color: white;
                 }
  
         </style>`;
    }

    get html() {
        return html`
            <slot></slot>
            <div id='userMessage'>
                <div class='submitButtonContainer'>
                    <div>
                        ${this.getSubmitButton()}
                    </div>
                    <div id='userMessage'></div>
                </div>`;
    }

    getSubmitButton() {
        let buttonText = this.submitButtonText || 'submit';
        if (customElements.get('paper-button')) {
            return html`<paper-button class='submitButton darkBlue' raised class='indigo'>${buttonText}</paper-button>`;
        } else {
            return html`<button class='submitButton'>${buttonText}</button>`;
        }
    }

    submitButtonClick(e) {

        let userMessage = this.querySelector('#userMessage');
        if (this.hasChildrenThatDemandResponse()) {

            userMessage.innerHTML = html`
                    <div style='display:flex; align-items:center'>
                        <div>please fill out the required fields</div>
                        <div id='attention'
                            style='color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                                                                                                                                    margin-left:20px; height: 20px; 
                                                                                                                                                    text-align: center;
                                                                                                                                                    padding: 5px;'>
                            !</div>
                    </div>`;
            return;
        }

        this.collectValues().then(val => {

            try {
                let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: val } });
                this.dispatchEvent(valueSubmitEvent);
                this._dispatchEndEvent(val);
                if (typeof e.detail.callback != 'undefined') {
                    e.detail.callback(e);
                }
                if (this.autohide) {
                    this.hide();
                }
            } catch (e) {
                console.error(e);

            }
        })

    }



    collectValues() {

        return new Promise((resolve, reject) => {
            let __meta = {
                attachedTimestamp: this._attachedTimestamp,
                submitTimestamp: new Date().getTime()
            };
            this.getChildrenValues(this).then(result => {
                result['__meta'] = __meta;
                resolve(result);
            })

        })


    }


    // get value() {
    //     let __meta = {
    //         attachedTimestamp: this._attachedTimestamp,
    //         submitTimestamp: new Date().getTime()
    //     };
    //     let result = this.getChildrenValues(this);
    //     result['__meta'] = __meta;
    //     return result;
    // }

    hasChildrenThatDemandResponse() {

        let aaChildren = this.getAAChildren(this);
        let isMissingValues = false;
        for (let i = 0; i < aaChildren.length; i++) {
            if (aaChildren[i].mandatory) {
                if (child.value === null) {
                    // console.log(child, 'demands response');
                    // TODO : add a class to the child
                    isMissingValues = true;
                }
            }
        }

        return isMissingValues;
    }



    getAAChildren(node, result, nodeName) {

        result = result || [];
        node = node || this;
        for (let i = 0; i < node.children.length; i++) {
            if (_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node.children[i])) {
                if (nodeName) {
                    if (node.children[i].nodeName === nodeName) {
                        result.push(node.children[i]);
                    }
                }
                else {
                    result.push(node.children[i]);
                }
            }
            else {

                this.getAAChildren(node.children[i], result, nodeName)
            }
        }
        return result;
    }



    async getChildrenValues(node, result) {
        // return new Promise((resolve, reject)=>{


        node = node || this;
        result = result || {};

        for (let i = 0; i < node.children.length; i++) {
            let c = node.children[i];


            if (c.nodeName != 'AA-LABEL') {

                let name = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].getVariableName(c);
                console.log(c, name);
                if (c.getValue) {
                    result[name] = c.getValue();
                } else if (c.value) {
                    if (c.value.then) {
                        result[name] = await c.value;
                    } else {
                        result[name] = c.value;
                    }

                } else {
                    result[name] = null;
                }
            }
            else {
                await this.getChildrenValues(c, result);
            }
        }
        return result;
        // })
    }

    // getChildrenValues(node, result) {
    //     node = node || this;
    //     result = result || {};
    //     for (let i = 0; i < node.children.length; i++) {
    //         let c = node.children[i];

    //         if (c.nodeName != 'AA-LABEL') {

    //             let name = BaseElement.getVariableName(c);
    //             console.log(c, name);
    //             if (c.getValue) {
    //                 result[name] = c.getValue();
    //             } else if (c.value) {
    //                 if(c.value.then){
    //                     c.value.then((val)=>{
    //                         result[name] = c.value;    
    //                     })
    //                 }else{
    //                     result[name] = c.value;
    //                 }

    //             } else {
    //                 result[name] = null;
    //             }
    //         }
    //         else {
    //             this.getChildrenValues(c, result);
    //         }
    //     }
    //     return result;
    // }





    get value() {

        return this.collectValues();
        // new Promise(resolve,reject)=>{

        // }
    }

    valueWithKey() {
        return new Promise((resolve, reject) => {
            this.value.then((val) => {
                let result = {};
                result[this.name] = val;
                resolve(result);
            })
        })

    }


    automate() {
        for (let i = 0; i < this.children.length; i++) {
            if (_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(this.children[i])) {
                if (typeof this.children[i].automate != 'undefined') {
                    this.children[i].automate();
                }
            }
        }
        this.submitButtonClick();
    }

    hide() {
        
        let aaChildren = this.getAAChildren(this, []);
        for(let i=0; i<aaChildren.length; i++){
            if(aaChildren[i].stop){
                aaChildren[i].stop();
            }
        }
        this.style.display = 'none';
    }

    show() {
        this.style.display = 'block';
    }





}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-screen', AAScreen);



/***/ }),

/***/ "./src/customElements/aa-sequence/aa-jump/aa-jump.js":
/*!***********************************************************!*\
  !*** ./src/customElements/aa-sequence/aa-jump/aa-jump.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAJump; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAJump extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-jump';
    }

    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "goto":{
                type:String,
                userDefined:true
            },

        }
    }

    static get acceptsElements(){
        return []
    }

    static get observedAttributes() {
        return Object.keys(AAJump.properties);
    }

    connectedCallback() {
        this._dispatchEndEvent({ goto: this.goto, autoDispatch: true });
        this.remove();
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-jump', AAJump);


/***/ }),

/***/ "./src/customElements/aa-sequence/aa-sequence.js":
/*!*******************************************************!*\
  !*** ./src/customElements/aa-sequence/aa-sequence.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASequence; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_jump_aa_jump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aa-jump/aa-jump.js */ "./src/customElements/aa-sequence/aa-jump/aa-jump.js");





class AASequence extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-sequence';
    }

    static get properties() {
        return {

            ..._aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].properties,

            name: {
                type: String,
                userDefined: true
            },
            'write-into': {
                type: String,
                userDefined: true
            },

            'should-run': {
                type: Boolean,
                userDefined: true,
                value: true
            },

            'debug': {
                type: Boolean,
                value: false,
                userDefined: false
            },
            'type': {
                type: String, //there should be an array of options type
                userDefined: false
            },
            'stopped': {
                type: Boolean,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASequence.properties);
    }

    constructor() {
        super();
    }
    connectedCallback() {
        this.setAttributeDefaultValues();
        if(this.diagram){
            this.produceDiagram();
            return;
        }
        this.addEventListener('endEvent', this.endEventListener.bind(this));
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.init()
        }
    }


    get css() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `
    }

    get html() {
        return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `
    }

    init() {
        this.stopped = false;
        if (this.writeInto) {
            this.target = document.querySelector(this.writeInto);
        } else {
            this.target = this;
        }



        if (typeof this.innerFragment === 'undefined') {
            console.warn('.innerFragment is undefined');
            // this.restoreHeldNodes(this)
            return;
        }


        this.sIndex = 0;
        if (!this.stopped) { this.start() }
    }

    start() {
        this.stopped = false;
        this.next();
    }

    stop() {
        this.stopped = true;
    }




    next(name) {

        return new Promise((resolve, reject) => {

            if (this.stopped) { return; }
            if (this.sIndex >= this.innerFragment.childNodes.length) return null;

            if (typeof name === 'string') {
                for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                    if (this.innerFragment.childNodes[i].getAttribute) if (this.innerFragment.childNodes[i].getAttribute('name') == name) {
                        this.sIndex = i;
                        break;
                    }
                }
            }

            let fragmentChild = this.innerFragment.childNodes[this.sIndex];

            // if (fragmentChild.nodeName == "aa-screen") debugger;
            //  if the child is not an element just add it immediately 
            //  and move on to the next, there won't be a connectecCallback Function to execute anyway
            while (fragmentChild.nodeType != Node.ELEMENT_NODE) {

                let fragmentChildCopy = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(fragmentChild);
                this.target.appendChild(fragmentChildCopy);
                this.currentNode = fragmentChildCopy;
                this.sIndex++;
                if (this.sIndex >= this.innerFragment.childNodes.length) { return; }
                fragmentChild = this.innerFragment.childNodes[this.sIndex];
            }
            let fragmentChildCopy = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(fragmentChild);
            this.currentNode = fragmentChildCopy;
            this.sIndex += 1;
            // if (!fragmentChildCopy._dispatchEndEvent) {
            //     this.target.appendChild(fragmentChildCopy);
            //     // resolve(this.next());
            //     resolve();
            // } else {
                this.target.appendChild(fragmentChildCopy);
                setTimeout(() => resolve());
            // }
        })
    }

    endEventListener(e) {
        e.stopPropagation();
        if (e.detail) {
            if (e.detail.goto) { this.next(e.detail.goto); }
            else if (e.detail.autoDispatch) { this.next(true); }
            else { setTimeout(() => this.next(true)); }
        } else {
            setTimeout(() => this.next(true))
        }
    }

}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-sequence', AASequence);




/***/ }),

/***/ "./src/customElements/aa-session/aa-session.js":
/*!*****************************************************!*\
  !*** ./src/customElements/aa-session/aa-session.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASession; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../aa-memory/aa-memory.js */ "./src/customElements/aa-memory/aa-memory.js");
/* harmony import */ var _lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../lib/html2jsl/html2jsl.js */ "./src/lib/html2jsl/html2jsl.js");
/* harmony import */ var _aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aa-sequence/aa-sequence.js */ "./src/customElements/aa-sequence/aa-sequence.js");






class AASession extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-session'
    }

    static get properties() {

        return {
           
            ..._aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].properties,


            'should-run': {
                type: Boolean,
                userDefined: true,
                value:true
            },

            'debug': {
                type: Boolean,
                value: false,
                userDefined: false
            },

          

            

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {

        return Object.keys(AASession.properties);
    }



    constructor() {
        super();


        this.myTemplate = document.createElement('template');
        this.myTemplate.innerHTML = this.innerHTML;


        this.innerHTML = '';

        // this.root = this.attachShadow({ mode: 'closed' });
        // this.root.innerHTML = '<template><slot></slot></template>'
        this._mem = document.createElement('aa-memory');
        this.addEventListener('valueSubmit', (e) => {

            // e.stopPropagation();
            let input = {
                data: e.detail.value,
                sessionID: this.sessionID,
                sessionTimestamp: this.sessionTime,
                sessionName: this.name,
                variables: Object.keys(e.detail.value),
            };
            // TODO:  this._mem.saveReplyValue(e.detail.value, false);
            
        

            let inputSubmitEvent = new CustomEvent('inputSubmit', { bubbles: true, detail: { input } });
            this.dispatchEvent(inputSubmitEvent);
            //  ema-participant-client needs to catch this and either send it to the server,
            //  or store it locally if we are offline
            //  A reason that ema-participant-client needs to do this, is because it cares
            //  about identification tokens


        })

        this.addEventListener('endEvent', (e) => {

            if (!this.debug) e.stopPropagation();
            let sessionEndEvent = new CustomEvent('sessionEndEvent', { bubbles: true, detail: 'sessionEnd' });
            this.dispatchEvent(sessionEndEvent);
        })


    }

    myIdGenerator() {

        return 0;
    }

    connectedCallback() {
        this.setAttributeDefaultValues()

    
        // console.log(this.tagName+"#"+this.id,"connected");
        if(this.diagram===true){
            this.produceDiagram()
            return;
        } 
        this.sessionID = this.myIdGenerator();
        this.sessionTime = new Date().getTime();
        let sessionDatum = Object.keys(this.dataset);
        for (let i in sessionDatum) {
            this.setData(sessionDatum[i], this.dataset[sessionDatum[i]]);
        }
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.run();
        }

        setTimeout( ()=>{
            this.dispatchEvent(new CustomEvent("sessionReady", {bubbles:true}));
        },0);
    }


    attachTemplateChildNodesToMyself(templateClone) {

        while (templateClone.content.childNodes.length) {
            //  if there's a direct template child, we want its children appended too
            if (templateClone.content.childNodes[0].nodeName === "TEMPLATE") {
                while (templateClone.content.childNodes[0].content.childNodes.length) {
                    this.appendChild(templateClone.content.childNodes[0].content.childNodes[0]);
                }
                //  we are not appending the template element elsewhere 
                //  so throw it way so that the childnode count can be reduced
                templateClone.content.childNodes[0].remove();
            } else {
                this.appendChild(templateClone.content.childNodes[0]);
            }
        }
    }

    run() {

        let myTemplateClone = this.myTemplate.cloneNode(true);
        _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].scanAndReplace(myTemplateClone);
        this.attachTemplateChildNodesToMyself(myTemplateClone);
    }

    getData(name) {
        return this._mem.getData(name);
    }

    setData(name, value) {

        return this._mem.setData(name, value);
    }

    getDataDump() {
        return this._mem.getDataDump();
    }


    toJSON() {
        // return super.toJSON();

        let result = {};
        result[this.tagName] = this.getAttributes();

        let childNodes = [];
        for (let i = 0; i < this.originalChildNodes.length; i++) {
            let child = this.originalChildNodes[i];
            let el = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].nodeToJSON(child);
            if (el) {
                childNodes.push(el);
            }
        }
        result[this.tagName].childNodes = [{ "template": { childNodes: childNodes } }];
        return result;

    }

    toJSL() {
        let attrNames = this.getAttributeNames();
        let attrObj = {};
        for (let i = 0; i < attrNames.length; i++) {
            if (this.getAttribute(attrNames[i]) !== 'undefined') {
                attrObj[attrNames[i]] = this.getAttribute(attrNames[i]);
            }
        }

        let argsStrings = [];
        let childNodes = this.myTemplate.content.childNodes[0].content.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let addition = _lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_2__["nodeToJSL"](childNodes[i]);
            if (addition) {
                argsStrings.push(_lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_2__["nodeToJSL"](childNodes[i]));

            }
        }

        

        
        let templateString = _lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_2__["formatJSLResult"]("TEMPLATE", {}, argsStrings);
        let final = _lib_html2jsl_html2jsl_js__WEBPACK_IMPORTED_MODULE_2__["formatJSLResult"]("AA_SESSION", attrObj, [templateString]);

        return final;
    }



    get originalChildNodes(){
        if(this.myTemplate.content.childNodes.length==0) return [];
        if(!this.myTemplate.content.childNodes[0].content) return this.childNodes;
        return this.myTemplate.content.childNodes[0].content.childNodes;
    }




}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-session', AASession);









/***/ }),

/***/ "./src/customElements/aa-slider/aa-slider.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-slider/aa-slider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASlider; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AASlider extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-slider';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'min': {
                type: Number,
                userDefined: true
            },
            'max': {
                type: Number,
                userDefined: true
            },
            'min-label': {
                type: String,
                userDefined: true
            },
            'max-label': {
                type: String,
                userDefined: true
            },
            'value': {
                type: Number,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASlider.properties);
    }


 

    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

    }

    get minLabel() {
        return this.getAttribute('min-label');
    }

    get maxLabel() {
        return this.getAttribute('max-label');
    }

    set minLabel(val) {
        this.setAttribute('min-label', val);
        if (this.inputItem) {
            this.inputItem.minLabel = val;
        }
    }

    set maxLabel(val) {
        this.setAttribute('max-label', val);
        if (this.inputItem) {
            this.inputItem.maxLabel = val;
        }
    }

    set min(val) {
        this.setAttribute('min', val);
        if (this.inputItem) {
            this.inputItem.min = val;
        }
    }

    set max(val) {
        this.setAttribute('max', val);
        if (this.inputItem) {
            this.inputItem.max = val;
        }
    }


    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        
        let innerHTML = this.css + `<div class='inputContainer'>${this.html}</div>`;
        this.root.innerHTML = innerHTML;

        let minLabel = this.minLabel;
        let maxLabel = this.maxLabel;
        // let min = this.min || 0;
        // let max = this.max || 100;
        let value = this.value || (this.min + this.max)/2;
        this.inputItem = this.root.querySelector('.inputItem');
        this.minLabelItem = this.root.querySelector('.minLabel');
        this.maxLabelItem = this.root.querySelector('.maxLabel');
        
        if (minLabel) { this.minLabelItem.innerHTML = minLabel;}
        if (maxLabel) { this.maxLabelItem.innerHTML = maxLabel;}
        if (value) { this.inputItem.value = value; }
        
        this.inputItem.addEventListener('change', (e) => {
            this.value = e.target.value;
        });
    }



    connectedCallback() {
        super.connectedCallback();


    }

    get css() {
        return `<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        </style>
        `;
    }

    get html() {
        let inputElement = customElements.get('paper-slider')
            ? `<paper-slider style="width:100%" class='inputItem min=${this.min} max=${this.max}'></paper-slider>`
            : `<input style="width:100%" type="range" class="inputItem" min="${this.min}" max="${this.max}" value="${(this.max+this.min)/2}">`;
        

        let source = html`
        <div>${inputElement}</div>
        <div style="display:flex; justify-content:space-between">
            <div class="minLabel">${this.minLabel || ''}</div>
            <div style="text-align:right" class="maxLabel">${this.maxLabel || ''}</div>
        </div>
        `
        return source;
    }
   

}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-slider', AASlider);

/***/ }),

/***/ "./src/customElements/aa-text-answer/aa-text-answer.js":
/*!*************************************************************!*\
  !*** ./src/customElements/aa-text-answer/aa-text-answer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AATextAnswer; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AATextAnswer extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-text-answer';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'long': {
                type: Boolean,
                userDefined: true
            },
            label: {
                type: String,
                userDefined: true
            },
            'value': {
                type: String,
                userDefined: false
            },
            'type':{
                type: String,
                userDefined: true,
                value:"text",
                valuesAllowed: ["date", "datetime", "datetime-local", "email", "number", "password", "tel", "text", "time" ]
            }

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AATextAnswer.properties);
    }


    changeInputItem(type) {
        if (type === 'long') {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-textarea') ?
                document.createElement('paper-textarea') : document.createElement('textarea');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.fixBugInPaperTextarea(this.inputItem);
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        } else {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-input') ?
                document.createElement('paper-input') : document.createElement('input');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        }
    }


    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

        let memory = this.getMemory();
        if(memory) memory.setData(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].getVariableName(this), val);

    }

    get label() {
        return this.getAttribute('label');
    }

    set label(val) {
        this.setAttribute('label', val);
        if (this.inputItem) {
            this.inputItem.label = val;
        }
    }

    set long(val) {
        this.setAttribute('long', val);
        if (val) {
            this.changeInputItem('long');
        } else {
            this.changeInputItem('short');
        }
    }

    get long() {
        return this.getAttribute('long');
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let html = (this.long || (this.long === '')) ? this.longHtml : this.html;

        this.root.innerHTML = this.css + `<div class='inputContainer'>${html}</div>`;

        let label = this.label;
        let value = this.value;
        this.inputItem = this.root.querySelector('.inputItem');
        if (label) { this.inputItem.label = label; }
        if (value) { this.inputItem.value = value; }
        this.fixBugInPaperTextarea(this.inputItem);

        this.inputItem.addEventListener('change', (e) => {

            this.value = e.target.value;
            this.dispatchEvent(new CustomEvent("change"))
        });

        this.keyUpTimeout = null;
        this.inputItem.addEventListener('keyup', (e) => {

            this.value = e.target.value;
            if(this.keyUpTimeout){
                clearTimeout(this.keyUpTimeout);
            }
            setTimeout(()=>{
                this.dispatchEvent(new CustomEvent("change"))
            },1500)
            
        });
    }


    fixBugInPaperTextarea(inputItem) {
        // solves issue documented here: https://github.com/PolymerElements/paper-input/issues/125

        setTimeout(() => {
            if (inputItem.tagName === 'PAPER-TEXTAREA') {
                inputItem.root.childNodes[2].children[1].textarea.style.overflow = 'hidden';
                let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;

                inputItem.root.childNodes[2].style.width = width;
                inputItem.addEventListener('focus', (e) => {
                    let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;
                    inputItem.root.childNodes[2].style.width = width;
                })

                window.addEventListener('resize', () => {
                    inputItem.root.childNodes[2].style.width = '';
                    setTimeout(() => {
                        let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;
                        inputItem.root.childNodes[2].style.width = width;
                    }, 100);

                })
            }
        }, 0);

    }

    connectedCallback() {
        super.connectedCallback();


    }

    get css() {
        return `<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        paper-textarea textarea {
           overflow:hidden;
        }
        </style>`;
    }

    get html() {
        let inputElement = customElements.get('paper-input')
            ? `<paper-input type='${this.type}' class='inputItem'></paper-input>`
            : `<input type='${this.type}' class='inputItem'>`;
        return html`${inputElement}`
    }
    get longHtml() {
        let inputElement = customElements.get('paper-input')
            ? `<paper-textarea class='inputItem' style= "background: linear-gradient(180deg, rgba(0,0,0, 0.04) 25%, rgba(0,0,0,0) 75%);"></paper-input>`
            : `<textarea class='inputItem'></textarea`;
        return html`${inputElement}`
    }

}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-text-answer', AATextAnswer);



/***/ }),

/***/ "./src/customElements/aa-variable/aa-variable.js":
/*!*******************************************************!*\
  !*** ./src/customElements/aa-variable/aa-variable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAVariable; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/jsep/jsep.js */ "./src/lib/jsep/jsep.js");



class AAVariable extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get tag() { 
        return 'aa-variable';
    }
    
    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'value': {

                /**
                 * string values should be given in quotes, e.g.,
                 * <aa-variable name="myString" value="'myStringValue'"></aa-variable>
                 * Here 'myStringValue' is passed to the value attribute in single quotes
                 * 
                 * otherwise it will try to find a named variable, e.g.,
                 * <aa-variable name="myOtherSring" value="'myStringValue'"></aa-variable>
                 * <aa-variable name="myString" value="myOtherString"></aa-variable>
                 * Here the value will be the same value as a variable with name="myOtherString"
                 * 
                 */
                type: String,
                userDefined: true
            },

        }
    }

    static get acceptsElements() {
        return []
    }

    static get observedAttributes() {

        return Object.keys(AAVariable.properties);

    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let memory = this.getMemory();

        // TODO:
        // let value = this.evaluateValueExpression(this.value);

        // leave as is for now
        let value = this.value;

        // let _value = valueExpression;
        if(memory) memory.setData(this.name, value);
        this._dispatchEndEvent({autoDispatch:true});
        if(!this.debug) {this.remove();}
    }



    evaluateValueExpression(test) {
        console.log(test);
        let expr = this.replaceExpressionIdentifiersWithValues(test);
        // after replacing known variable names with their values in the string, test to see if the expression can be parsed


        try {
            var parseTree = Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(expr);
            if(parseTree.type==="Identifier"){
                //Best be strict about it from the beginning an Identifier is always expected to be 
                //a reference to another variable

            } else
            if(parseTree.type==="Literal"){
                //there's only a string present, figure out if it's a reference to a variable or a string
            } else 
            if ((parseTree.left.type === 'Literal') && (parseTree.right.type === 'Literal')) {
                return eval(expr);
            }
            else {
                // there are still strings in the expression, which are unknown
                // evaluate with values that the parseTreeProvides
                return  eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`);
                //an exception should be raised
                // throw 'unknown identifiers in expression : ' + expr;
            }
        } catch (e) {
            console.error('parse error:', e);
        }
    }
    replaceExpressionIdentifiersWithValues(expression, memoryElement) {


        let memory = this.getMemory() || memoryElement;
        let result = expression.toUpperCase();

        let originalIdentifiers = Object.keys(memory.getDataDump());
        let upperCaseIdentifiers = originalIdentifiers.map(s => s.toUpperCase());
        for (let i in originalIdentifiers) {
            let value = memory.getData(originalIdentifiers[i]);
            let finalValue = parseInt(value);
            if (finalValue != value) {
                if (value === 'null') { finalValue = 'null'; }
                else if (value === 'true') { finalValue = 'true'; }
                else if (value === 'false') { finalValue = 'false'; }
                else finalValue = `"${value}"`;
            }
            let r = new RegExp(upperCaseIdentifiers[i], 'g');
            result = result.replace(r, finalValue);
        }
        return result;
    }


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-variable', AAVariable);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: AAElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AAElements", function() { return AAElements; });
/* harmony import */ var _customElements_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customElements/aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _customElements_aa_affect_grid_aa_affect_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customElements/aa-affect-grid/aa-affect-grid.js */ "./src/customElements/aa-affect-grid/aa-affect-grid.js");
/* harmony import */ var _customElements_aa_checkboxes_aa_checkboxes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customElements/aa-checkboxes/aa-checkboxes.js */ "./src/customElements/aa-checkboxes/aa-checkboxes.js");
/* harmony import */ var _customElements_aa_choose_aa_choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customElements/aa-choose/aa-choose.js */ "./src/customElements/aa-choose/aa-choose.js");
/* harmony import */ var _customElements_aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customElements/aa-choice-item/aa-choice-item.js */ "./src/customElements/aa-choice-item/aa-choice-item.js");
/* harmony import */ var _customElements_aa_function_aa_function_random_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customElements/aa-function/aa-function-random.js */ "./src/customElements/aa-function/aa-function-random.js");
/* harmony import */ var _customElements_aa_geolocation_aa_geolocation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customElements/aa-geolocation/aa-geolocation.js */ "./src/customElements/aa-geolocation/aa-geolocation.js");
/* harmony import */ var _customElements_aa_label_aa_label_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customElements/aa-label/aa-label.js */ "./src/customElements/aa-label/aa-label.js");
/* harmony import */ var _customElements_aa_likert_scale_aa_likert_scale_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customElements/aa-likert-scale/aa-likert-scale.js */ "./src/customElements/aa-likert-scale/aa-likert-scale.js");
/* harmony import */ var _customElements_aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customElements/aa-memory/aa-memory.js */ "./src/customElements/aa-memory/aa-memory.js");
/* harmony import */ var _customElements_aa_multiple_choice_aa_multiple_choice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customElements/aa-multiple-choice/aa-multiple-choice.js */ "./src/customElements/aa-multiple-choice/aa-multiple-choice.js");
/* harmony import */ var _customElements_aa_choose_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customElements/aa-choose/aa-otherwise/aa-otherwise.js */ "./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js");
/* harmony import */ var _customElements_aa_screen_aa_screen_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customElements/aa-screen/aa-screen.js */ "./src/customElements/aa-screen/aa-screen.js");
/* harmony import */ var _customElements_aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customElements/aa-sequence/aa-sequence.js */ "./src/customElements/aa-sequence/aa-sequence.js");
/* harmony import */ var _customElements_aa_slider_aa_slider_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customElements/aa-slider/aa-slider.js */ "./src/customElements/aa-slider/aa-slider.js");
/* harmony import */ var _customElements_aa_text_answer_aa_text_answer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customElements/aa-text-answer/aa-text-answer.js */ "./src/customElements/aa-text-answer/aa-text-answer.js");
/* harmony import */ var _customElements_aa_variable_aa_variable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customElements/aa-variable/aa-variable.js */ "./src/customElements/aa-variable/aa-variable.js");
/* harmony import */ var _customElements_aa_choose_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customElements/aa-choose/aa-when/aa-when.js */ "./src/customElements/aa-choose/aa-when/aa-when.js");
/* harmony import */ var _customElements_aa_session_aa_session_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customElements/aa-session/aa-session.js */ "./src/customElements/aa-session/aa-session.js");
// import '../dist/paper-polymer.js';




















/**
 * it is important that aa-session is imported last. This way all other elements will
 * have already been registered before a aa-session element gets
 * initialized
 */


const AAElements = {
    BaseElement: _customElements_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"], AAAffectGrid: _customElements_aa_affect_grid_aa_affect_grid_js__WEBPACK_IMPORTED_MODULE_1__["default"], AACheckboxes: _customElements_aa_checkboxes_aa_checkboxes_js__WEBPACK_IMPORTED_MODULE_2__["default"], AAChoose: _customElements_aa_choose_aa_choose_js__WEBPACK_IMPORTED_MODULE_3__["default"], 
    AAChoiceItem: _customElements_aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_4__["default"], AAFunctionRandom: _customElements_aa_function_aa_function_random_js__WEBPACK_IMPORTED_MODULE_5__["default"], AAGeoLocation: _customElements_aa_geolocation_aa_geolocation_js__WEBPACK_IMPORTED_MODULE_6__["default"], AALabel: _customElements_aa_label_aa_label_js__WEBPACK_IMPORTED_MODULE_7__["default"], 
    AALikertScale: _customElements_aa_likert_scale_aa_likert_scale_js__WEBPACK_IMPORTED_MODULE_8__["default"], AAMemory: _customElements_aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_9__["default"], AAMultipleChoice: _customElements_aa_multiple_choice_aa_multiple_choice_js__WEBPACK_IMPORTED_MODULE_10__["default"], AAOtherwise: _customElements_aa_choose_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_11__["default"], 
    AAScreen: _customElements_aa_screen_aa_screen_js__WEBPACK_IMPORTED_MODULE_12__["default"], AASession: _customElements_aa_session_aa_session_js__WEBPACK_IMPORTED_MODULE_18__["default"], AASequence: _customElements_aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_13__["default"], AASlider: _customElements_aa_slider_aa_slider_js__WEBPACK_IMPORTED_MODULE_14__["default"], AATextAnswer: _customElements_aa_text_answer_aa_text_answer_js__WEBPACK_IMPORTED_MODULE_15__["default"], 
    AAVariable: _customElements_aa_variable_aa_variable_js__WEBPACK_IMPORTED_MODULE_16__["default"], AAWhen: _customElements_aa_choose_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_17__["default"]
}

/***/ }),

/***/ "./src/lib/html2jsl/html2jsl.js":
/*!**************************************!*\
  !*** ./src/lib/html2jsl/html2jsl.js ***!
  \**************************************/
/*! exports provided: nodeToJSL, formatJSLResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeToJSL", function() { return nodeToJSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatJSLResult", function() { return formatJSLResult; });

function nodeToJSL(node) {

    if ((node.nodeType === document.TEXT_NODE)||(node.nodeType === document.COMMENT_NODE)) {
        let result = node.textContent.replace(/\n/g, ' ').replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
        if (result === '') {
            return undefined;
        } else { return `"${result}"`; }

    } else {

        
        let attrNames = node.getAttributeNames();
        let attrObj = {};
        for (let i = 0; i < attrNames.length; i++) {
            if (node.getAttribute(attrNames[i]) !== 'undefined') {
                attrObj[attrNames[i]] = node.getAttribute(attrNames[i]);
            }
        }

        let argsStrings = [];
        for (let i = 0; i < node.childNodes.length; i++) {
            let addition = nodeToJSL(node.childNodes[i]);
            if (addition) {
                argsStrings.push(nodeToJSL(node.childNodes[i]));

            }
        }

        let tagName = node.tagName.replace(/\-/g, '_');
        return formatJSLResult(tagName, attrObj, argsStrings);

    }

}



function tab(s) {
    let result = s.replace(/\n/g, '\n\t');
    if (result[0] !== '\n') { result = `\t${result}`; }
    return result;
}


function getAttrsAsString(attrObj) {

    let keys = Object.keys(attrObj);
    if(keys.length>3){
        return JSON.stringify(attrObj, null, 2)
    }else {
        return JSON.stringify(attrObj);
    }
}

function getArgsString(argsStrings) {
    let result = '';
    for (let i = 0; i < argsStrings.length; i++) {
        result += `${argsStrings[i]}`;
        if (i !== argsStrings.length - 1) {result += ',\n';}
    }
    return result;
}

function formatJSLResult(tagName, attrObj, argsStrings) {
    let attrs = getAttrsAsString(attrObj);
    let args = getArgsString(argsStrings);
    let isArgsMultiline = /\n/.test(args);

    //decide if newline for attributes:
    let attrParam;
    let newLineForAttrs = false;
    //do they exist
    let attrsExist = attrs !== '{}';
    if (attrsExist) {
        //do they contain newlines
        if (attrs.indexOf('\n') != -1) {
            newLineForAttrs = true;
        } else {
            //are they long
            if (attrs.length > 50) {
                newLineForAttrs = true;
            }
        }
        if (newLineForAttrs) {
            attrParam = `\n${tab(attrs)}${argsStrings.length ? ',' : ''}`;
        }
        else {
            attrParam = `${attrs}${argsStrings.length ? ',' : ''}`;
        }

    } else {
        //attributes don't exist;
        attrParam = '';
    }
    // let argsParam;
    // let newLineForArgs = false;
    let result = `${tagName}( ${attrParam}${isArgsMultiline ? `\n${tab(args)}\n` : `${attrsExist ? ' ' : ''}${args}`} )`;
    return result;
}


/***/ }),

/***/ "./src/lib/jsep/jsep.js":
/*!******************************!*\
  !*** ./src/lib/jsep/jsep.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/**
 * this is a modified version of the original jsep 
 * which if the root parameter is undefined,
 * the jsep object returned so as to be exported   
 **/ 


//     JavaScript Expression Parser (JSEP) 0.3.4
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/

/*global module: true, exports: true, console: true */
/* harmony default export */ __webpack_exports__["default"] = (function (root) {
	'use strict';
	// Node Types
	// ----------
	
	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------

	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7,
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},
		isIdentifierPart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57) || // 0...9
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9 || ch === 10 || ch === 13) {
						ch = exprICode(++index);
					}
				},

				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var  to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						// Don't accept a binary op when it is an identifier.
						// Binary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
						if(binary_ops.hasOwnProperty(to_check) && (
							!isIdentifierStart(exprICode(index)) ||
							(index+to_check.length< expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
						)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var node, biop, prec, stack, biop_info, left, right, i;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;

					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
						// Don't accept an unary op when it is an identifier.
						// Unary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
							if(unary_ops.hasOwnProperty(to_check) && (
								!isIdentifierStart(exprICode(index)) ||
								(index+to_check.length < expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
							)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}

						if (isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
							// `foo`, `bar.baz`
							return gobbleVariable();
						}
					}

					return false;
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}

					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}


					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
								default : str += ch;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},

				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node, closed = false;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							closed = true;
							index++;
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					if (!closed) {
						throwError('Expected ' + String.fromCharCode(termination), index);
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);

					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;

			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '0.3.4';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		max_unop_len = Math.max(op_name.length, max_unop_len);
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @return jsep
	 */
	jsep.addLiteral = function(literal_name, literal_value) {
		literals[literal_name] = literal_value;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllUnaryOps
	 * @return jsep
	 */
	jsep.removeAllUnaryOps = function() {
		unary_ops = {};
		max_unop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllBinaryOps
	 * @return jsep
	 */
	jsep.removeAllBinaryOps = function() {
		binary_ops = {};
		max_binop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @return jsep
	 */
	jsep.removeLiteral = function(literal_name) {
		delete literals[literal_name];
		return this;
	};

	/**
	 * @method jsep.removeAllLiterals
	 * @return jsep
	 */
	jsep.removeAllLiterals = function() {
		literals = {};

		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	if (typeof exports === 'undefined') {

		if(!root){
			return  jsep;
		}
		var old_jsep = root.jsep;
		// The star of the show! It's a function!
		root.jsep = jsep;
		// And a courteous function willing to move out of the way for other similarly-named objects!
		jsep.noConflict = function() {
			if(root.jsep === jsep) {
				root.jsep = old_jsep;
			}
			return jsep;
		};
	} else {
		// In Node.JS environments
		if ( true && module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}(undefined));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/mySVG/mySVG.js":
/*!********************************!*\
  !*** ./src/lib/mySVG/mySVG.js ***!
  \********************************/
/*! exports provided: mySVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySVG", function() { return mySVG; });
/* harmony import */ var _svg_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/svg.js */ "./src/lib/svg/svg.js");
/* harmony import */ var _lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/jsep/jsep.js */ "./src/lib/jsep/jsep.js");





class Container {


    x(v) {
        if (typeof v !== 'undefined') {
            this._x = v;
            this.group.x(v);
        } else {
            return this.group.x();
        }
    }

    y(v) {
        if (typeof v !== 'undefined') {
            this._y = v;
            this.group.y(v);
        } else {
            return this.group.y();
        }
    }

    dy(v) {
        if (typeof v !== 'undefined') {
            this._y += v;
            this.group.dy(v);
        } else {
            return this._y;
        }
    }

    getItemStartPoints(item) {

        if (item.noStartPoints) return [];
        if (item.getStartPoints) {
            return item.getStartPoints();
        } else {

            return [[item.x(), item.y() + item.height() / 2]];
        }
    }


    getItemEndPoints(item) {
        if (item.getEndPointsFrom) {
            item = item.getEndPointsFrom;
        }
        if (item.noEndPoints) return [];
        if (item.getEndPoints) {
            return item.getEndPoints();
        } else {
            return [[item.x() + item.width(), item.y() + item.height() / 2]];
        }
    }

    getStartPoints() {
        if (this.noStartPoints) return [];
        switch (this.type) {
            case 'serial':
                if (this.c.length) {
                    let firstItem = this.c[0];
                    return this.getItemStartPoints(firstItem);
                } else {
                    return [];
                }


            case 'parallel': {

                let points = [];
                for (let i = 0; i < this.c.length; i++) {
                    points = points.concat(this.getItemStartPoints(this.c[i]));
                }
                return points;
            }

        }
    }

    getEndPoints() {
        if (this.noEndPoints) return [];
        switch (this.type) {
            case 'serial':
                if (this.c.length) {
                    let lastItem = this.c[this.c.length - 1];
                    return this.getItemEndPoints(lastItem);
                } else {
                    return [];
                }


            case 'parallel': {
                let points = [];
                for (let i = 0; i < this.c.length; i++) {
                    points = points.concat(this.getItemEndPoints(this.c[i]));
                }
                return points;

            }

        }
    }


    width(v) {
        if (typeof v === 'undefined') {

            return this.group.width();
        }
    }


    height(v) {
        if (typeof v === 'undefined') {
            return this.group.height();
        }
    }


    addTo(svgjs) {
        this.group.addTo(svgjs);
        return this;
    }




    constructor(type, node) {
        this.gap = 30;
        this.c = [];


        this.type = type;
        this.myNode = node;
        this.group = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();
    }

    push(item) {

        switch (this.type) {

            case 'serial':
                if (this.c.length) {
                    item.x(this.c[this.c.length - 1].x() + this.c[this.c.length - 1].width() + this.gap)
                } else {
                    item.x(10);
                }
                item.y(10);
                this.c.push(item);



                //now ensure everything is centered on the x axis
                let yCenter = 0
                for (let i = 0; i < this.c.length; i++) {
                    yCenter = Math.max(yCenter, this.c[i].height() / 2)
                }
                for (let i = 0; i < this.c.length; i++) {
                    this.c[i].y(yCenter - this.c[i].height() / 2)
                }


                break;
            case 'parallel':
                if (this.c.length) {

                    let y = this.c[this.c.length - 1].y() + this.c[this.c.length - 1].height() + this.gap
                    item.y(y);
                } else {
                    item.y(10);
                }
                item.x(10);
                this.c.push(item);
                break;
        }
        if (item instanceof Container) {
            item.group.addTo(this.group)
        } else {
            item.addTo(this.group);
        }

    }



    makeLines(endPoints, startPoints) {

        let lines = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();
        for (let i = 0; i < endPoints.length; i++) {
            for (let j = 0; j < startPoints.length; j++) {
                let p1 = endPoints[i];
                let p2 = startPoints[j];
                let offset = - 1;
                let path = mySVG.bezier(p1[0], p1[1], p2[0], p2[1], offset);
                if (this.strokeDashArray) path.attr({ 'stroke-dasharray': this.strokeDashArray, });
                if ((this.type == 'serial') && !(this.strokeDashArray)) path.attr({ 'marker-end': 'url(#arrow)' });
                // path.addTo(draw);
                path.addTo(lines);

            }
        }
        return lines;
    }

    renderLines() {


        let lines = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();

        for (let i = 0; i < this.c.length - 1; i++) {

            if (this.c[i] instanceof Container) {
                let l = this.c[i].renderLines();
                l.addTo(lines);
            }
            if (this.type === 'serial') {
                let endPoints = this.getItemEndPoints(this.c[i]);
                let startPoints = this.getItemStartPoints(this.c[i + 1]);

                let l = this.makeLines(endPoints, startPoints);
                if (l) { l.addTo(lines); }

            }
        }
        if (this.c[this.c.length - 1] instanceof Container) {
            let l = this.c[this.c.length - 1].renderLines();
            l.addTo(lines);
        }


        return lines;

    }

    applyItemsAfterwards() {


        // if(this.applyItemsAfterwards){
        //     this.applyItemsAfterwards();
        // }

        if (this.group.applyItemsAfterwards) {

            this.group.applyItemsAfterwards();

        }

        //check also the children
        for (let i = 0; i < this.c.length; i++) {

            if (this.c[i].applyItemsAfterwards) {

                this.c[i].applyItemsAfterwards();
            }
        }
    }


    breakLine() {
        switch (this.type) {
            case 'serial':

                for (let i = 0; i < c.length - 1; i++) {
                    w += c[i].width() + this.gap;
                }
                w += c[c.length - 1].width();
                return w;

            case 'parallel':

            //find the longest member amd break it, then break others progressively
        }
    }



}

class mySVG {




    model(node) {

        if (!node) return;


        if (Object.keys(this.modellingFunctions).indexOf(node.nodeName) === -1) {
            return;
        }
        if (this.elementsFound.indexOf(node.nodeName) == -1) {
            this.elementsFound.push(node.nodeName);
        }
        return this.modellingFunctions[node.nodeName](node);
    }

    constructor() {

        this.elementsFound = [];


    }
    render(node) {

        if (!node) return;

        let draw = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        let defs = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            `<defs>
            <marker id="arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,4 L5,2 z" fill="#000" />
            </marker>
          </defs>`
        );
        defs.addTo(draw);


        let item = this.model(node);
        console.log(this.elementsFound);

        item.addTo(draw);

        if (item.renderLines) {
            let lines = item.renderLines();
            lines.addTo(item.group);
        }
        item.x(10);
        item.y(10);

        if (item.applyItemsAfterwards) {
            item.applyItemsAfterwards();
        };


        draw.node.dataset.source = encodeURIComponent(node.outerHTML.replace(/\n/g, ' ').replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim());
        // mySVG.svg = draw.node;


        draw.size(item.width() + 100, item.height() + 100);
        this.svg = draw.node;
        return draw.node;

    }

    renderKey() {

        let group = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();
        for (let i = 0; i < this.elementsFound.length; i++) {

            let example = this.examples[this.elementsFound[i]];
            if (!example) {
                continue;
            }

            let el = document.createElement('div');

            el.innerHTML = example.html;

            let m = this.model(el);


            // console.log(m);
            m.addTo(group);
            m.y(group.height() + 25);
            if (m.renderLines) {

                let lines = m.renderLines();
                lines.addTo(m.group);
            }

        }
        let svg = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().size(group.width() + 50, group.height() + 50);
        group.x(10);
        group.y(10);
        group.addTo(svg);
        return svg.node;
    }

    download(filename) {

        let blob = new Blob([this.svg.outerHTML]);

        let element = document.createElement("a");
        element.download = filename;
        element.href = window.URL.createObjectURL(blob);
        element.click();
        element.remove();
    }





    static bezier(p1x, p1y, p2x, p2y) {

        let c1x = p1x + (p2x - p1x) / 1.5;
        let c1y = p1y;
        let c2x = p2x - (p2x - p1x) / 1.5;
        let c2y = p2y;

        let curve = `M ${p1x},${p1y} C${c1x},${c1y} ${c2x},${c2y} ${p2x},${p2y}`;


        let path = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().path(curve);
        path.attr({ fill: 'none', stroke: 'black', 'stroke-width': 3 });
        return path;
    }


    get modellingFunctions() {
        return {


            'AA-SESSION': (node) => {
                let row = new Container('parallel', node);
                for (let i = 0; i < node.originalChildNodes.length; i++) {

                    let m = this.model(node.originalChildNodes[i])
                    if (m) row.push(m);

                }

                row.myNode = node;
                return row;

            },


            'AA-SEQUENCE': (node) => {
                // let svgItem = SVG().rect(30,50).attr({fill:'none'});

                let row = new Container('serial', node);
                for (let i = 0; i < node.childNodes.length; i++) {

                    let m = this.model(node.childNodes[i])
                    if (m) row.push(m)
                }

                row.myNode = node;
                return row;

            },

            'AA-SCREEN': (node) => {
                let g = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();
                let rect = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().rect(30, 50).attr({ fill: 'none', stroke: 'black', 'stroke-width': 5, rx: 3 }).addTo(g);
                let text;
                if (node.getAttribute('name')) {
                    let name = node.getAttribute('name');

                    if (name.length > 14) {
                        name = name.substr(0, 11) + "...";

                    }
                    text = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().text(function (add) {
                        add.tspan(name).font({
                            family: 'serif',
                            style: 'italic',
                            size: '12px',
                            weight: 'bold'
                        });
                    })


                    // text.addTo(g);
                    // transparentGap.addTo(g);
                    rect.x(g.x() + g.width() / 2 - rect.width() / 2);
                    rect.y(g.height() / 2 - rect.height() / 2) + 10;
                    text.y(rect.y() + rect.height() + 5);



                }
                g.myNode = node;
                g.nocentering = true;
                g.getEndPoints = () => {
                    return [[rect.x() + rect.width(), rect.y() + rect.height() / 2]]
                }
                g.getStartPoints = () => {
                    return [[rect.x(), rect.y() + rect.height() / 2]]
                }

                if (text) {
                    g.applyItemsAfterwards = () => {
                        text.addTo(g);
                        text.x(rect.x() + rect.width() / 2 - text.bbox().width / 2);
                        text.y(rect.y() + rect.height() + 7);
                    }
                }

                return g;
            },

            'AA-CHOOSE': (node) => {

                let chooseRow = new Container('serial', node);
                chooseRow.strokeDashArray = '3';

                let chooseSVGItemStart = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().circle(20).attr({ fill: 'none', stroke: 'black', 'stroke-width': 5, 'stroke-dasharray': 0 });


                // let chooseSVGItemStart = SVG().group();
                // let pStart = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(chooseSVGItemStart);
                // let text = SVG().text(function (add) {
                //     add.tspan('?').font({
                //         family: 'serif',
                //         style: 'italic',
                //         size: '50px',
                //         weight: 'bold'
                //     });

                // }).addTo(chooseSVGItemStart);
                // pStart.y(chooseSVGItemStart.y() + chooseSVGItemStart.height() / 2 - pStart.height() / 2);
                // window.pStart = pStart;
                // window.text = text;
                // window.g = chooseSVGItemStart;
                // // debugger;

                let chooseSVGItemEnd = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5 });
                let contentsRow = new Container('parallel', node);



                // let hasOtherwiseNode = false;
                let maxContentWidth = 0;
                let hasOtherwiseNode = false;
                let lastChild;
                for (let i = 0; i < node.childNodes.length; i++) {
                    console.log(node.childNodes[i].nodeName);
                    if (node.childNodes[i].nodeName === "AA-OTHERWISE") {
                        hasOtherwiseNode = true;
                    }

                    let m = this.model(node.childNodes[i]);
                    if (m) {
                        contentsRow.push(m);
                        maxContentWidth = Math.max(m.width(), maxContentWidth);
                        lastChild = m
                    }
                }

                console.log(maxContentWidth);
                if (!hasOtherwiseNode) {

                    let defaultPath = new Container('serial');
                    let line = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().line();
                    
                    // line.addTo(defaultPath);
                    defaultPath.push(line);
                    line.plot(10, 100, maxContentWidth, 100);
                    line.attr({ fill: 'black', stroke: 'black', 'stroke-dasharray': 3, 'stroke-width':3 });
                    contentsRow.push(defaultPath);
                    
                    
                }


                //center along y axis
                for (let i = 0; i < contentsRow.c.length; i++) {
                    let c = contentsRow.c[i];
                    c.x(maxContentWidth / 2 - c.width() / 2);
                }

                chooseRow.push(chooseSVGItemStart);
                chooseRow.push(contentsRow);
                chooseRow.push(chooseSVGItemEnd);

                chooseRow.myNode = node;


                chooseRow.applyItemsAfterwards = ()=>{
                    for (let i = 0; i < contentsRow.c.length; i++) {
                        console.log(contentsRow.c[i]);
                        if(contentsRow.c[i].applyItemsAfterwards){
                            
                            contentsRow.c[i].applyItemsAfterwards();
                        }
                        
                    }
                }
                return chooseRow;

            },

            'AA-FUNCTION-RANDOM': (node) => {
                let item = new Container('serial', node);

                let g = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();

                // let rect = SVG().rect(30, 50).attr({ fill: 'none', stroke: 'red', 'stroke-width': 5 }).addTo(g);

                let text = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().text(function (add) {
                    add.tspan('f').font({
                        family: 'serif',
                        style: 'italic',
                        size: '50px',
                        weight: 'bold'
                    });
                    add.tspan('random ').font({
                        family: 'serif',
                        style: 'italic',
                        size: '15px'
                    })
                });
                text.addTo(g);
                let varName = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().text(function (add) {
                    add.tspan(node.getAttribute("name")).font({
                        family: 'monospace',
                        // style: 'italic',
                        size: '12px',
                        weight: 'bold'
                    });
                });
                varName.addTo(g);
                varName.dy(20);
                varName.dx(-10);




                // let pStart = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(g);
                // let pEnd = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(g);


                item.push(g);




                // pStart.x(0);
                // pEnd.x(item.width());
                // pStart.y(item.height() / 2 - pStart.height() / 2);
                // pEnd.y(item.height() / 2 - pStart.height() / 2)


                item.myNode = node;
                return item;
                // return {
                //     node: item,
                //     inputs:()=>{
                //         return [ [item.x(), item.cy()] ]
                //     },
                //     outputs:()=>{
                //         return [ [item.x() + item.width(), item.cy()] ]
                //     },
                // }

            },


            // 'AA-WHEN': (node) => {
            //     let row = new Container('serial', node);

            //     let group = SVG().group();
            //     let rect = SVG().rect(1, 1).attr({stroke:"none", fill:"red"});

            //     rect.addTo(group);
            //     let text = SVG().text(function (add) {
            //         let w = add.tspan('when').font({
            //             family: 'serif',
            //             style: 'italic',
            //             size: '50px',
            //             weight: 'bold'
            //         });
            //         let t= add.tspan(node.getAttribute("test")).font({
            //             family: 'monospace',
            //             // style: 'italic',
            //             size: '12px',
            //             weight: 'bold'
            //         });
            //         t.dy(20);
            //         t.dx(-110);
            //     })
            //     text.addTo(group);

            //     // group.noEndPoints = true;
            //     row.push(group);


            //     let contentsRow = new Container('parallel');
            //     for (let i = 0; i < node.childNodes.length; i++) {

            //         let m = this.model(node.childNodes[i])
            //         if (m) contentsRow.push(m)

            //     }

            //     row.push(contentsRow);
            //     // contentsRow.x(row.width());
            //     row.strokeDashArray = '3';

            //     row.myNode = node;
            //     return row;

            // },

            'AA-WHEN': (node) => {
                let container = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();

                let contentsRow = new Container('parallel');
                for (let i = 0; i < node.childNodes.length; i++) {
                    let m = this.model(node.childNodes[i])
                    if (m) contentsRow.push(m)
                }

                let when = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().text(function (add) {
                    add.tspan('when').font({
                        family: 'serif',
                        style: 'italic',
                        size: '30px',
                        weight: 'bold'
                    });
                });

                let condition = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().text(function (add) {
                    let textToRender = node.getAttribute("test");
                    if(textToRender){
                        let j = Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(textToRender);

                        if(j.left) if(j.left.name) if(j.left.name.length>7){
                            let newName = j.left.name.substr(0,5)+"...";
                            textToRender = textToRender.replace(j.left.name, newName);
                        }
                    }
                    add.tspan(textToRender).font({
                        family: 'monospace',
                        // style: 'italic',
                        size: '12px',
                        weight: 'bold'
                    });

                })





                contentsRow.addTo(container);
                when.addTo(container);
                condition.addTo(container);
                // when.y(contentsRow.y() + contentsRow.height());
                condition.y(when.y() + when.bbox().height);
                contentsRow.x(when.x() + when.bbox().width + 40);
                contentsRow.y(when.y() + when.bbox().height / 1.5 - contentsRow.height()/2);

                container.strokeDashArray = '3';

                container.myNode = node;

                container.getEndPoints = () => {

                    let result = [[contentsRow.x() + contentsRow.width(), contentsRow.y() + contentsRow.height() / 2]];
                    // if(container.renderDefaultPath){
                    //     debugger;
                    //     result.push([container.x()  + container.width()/2, contentsRow.y() + contentsRow.height()*2.5])
                    // }
                    return result;
                }
                container.getStartPoints = () => {

                    // console.log("returning",  [text.bbox().x + text.bbox().width, text.bbox().y + text.bbox().height/2]);
                    let result = [[when.bbox().x, when.bbox().y + when.bbox().height / 2]];
                    // if(container.renderDefaultPath){
                    //     result.push([container.x()  + container.width()/2, contentsRow.y() + contentsRow.height()*2.5])
                    // }

                    return result;
                }

                container.applyItemsAfterwards = ()=>{
                    for (let i = 0; i < contentsRow.c.length; i++) {
                        console.log(contentsRow.c[i]);
                        if(contentsRow.c[i].applyItemsAfterwards){
                            
                            contentsRow.c[i].applyItemsAfterwards();
                        }
                        
                    }
                }
                return container;

            },

            // 'AA-OTHERWISE': (node) => {
            //     let row = new Container('serial', node);

            //     let group = SVG().group();
            //     let rect = SVG().rect(1, 1).attr({ stroke: "none", fill: "red" });

            //     rect.addTo(group);
            //     let text = SVG().text(function (add) {
            //         let w = add.tspan('otrwz').font({
            //             family: 'serif',
            //             style: 'italic',
            //             size: '30px',
            //             weight: 'bold'
            //         });
            //         // let t= add.tspan(node.getAttribute("test")).font({
            //         //     family: 'monospace',
            //         //     // style: 'italic',
            //         //     size: '12px',
            //         //     weight: 'bold'
            //         // });
            //         // t.dy(20);
            //         // t.dx(-110);
            //     })
            //     text.addTo(group);

            //     // group.noEndPoints = true;
            //     row.push(group);


            //     let contentsRow = new Container('parallel');
            //     for (let i = 0; i < node.childNodes.length; i++) {

            //         let m = this.model(node.childNodes[i])
            //         if (m) contentsRow.push(m)

            //     }

            //     row.push(contentsRow);
            //     // contentsRow.x(row.width());
            //     // row.strokeDashArray = '3';
            //     row.myNode = node;

            //     row.applyItemsAfterwards = ()=>{
            //         for (let i = 0; i < contentsRow.c.length; i++) {
            //             console.log(contentsRow.c[i]);
            //             if(contentsRow.c[i].applyItemsAfterwards){
                            
            //                 contentsRow.c[i].applyItemsAfterwards();
            //             }
                        
            //         }
            //     }
            //     return row;
            // },

            'AA-OTHERWISE': (node) => {
                let container = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().group();

                let contentsRow = new Container('parallel');
                for (let i = 0; i < node.childNodes.length; i++) {
                    let m = this.model(node.childNodes[i])
                    if (m) contentsRow.push(m)
                }

                let otherwise = Object(_svg_svg_js__WEBPACK_IMPORTED_MODULE_0__["default"])().text(function (add) {
                    add.tspan('otherwise').font({
                        family: 'serif',
                        style: 'italic',
                        size: '30px',
                        weight: 'bold'
                    });
                });

                // let condition = SVG().text(function (add) {
                //     let textToRender = node.getAttribute("test");
                //     if(textToRender){
                //         let j = jsep(textToRender);

                //         if(j.left) if(j.left.name) if(j.left.name.length>7){
                //             let newName = j.left.name.substr(0,5)+"...";
                //             debugger;
                //             textToRender = textToRender.replace(j.left.name, newName);
                //         }
                //     }
                //     add.tspan(textToRender).font({
                //         family: 'monospace',
                //         // style: 'italic',
                //         size: '12px',
                //         weight: 'bold'
                //     });

                // })





                contentsRow.addTo(container);
                otherwise.addTo(container);
                // condition.addTo(container);
                // when.y(contentsRow.y() + contentsRow.height());
                // condition.y(when.y() + when.bbox().height);
                contentsRow.x(otherwise.x() + otherwise.bbox().width + 10);
                contentsRow.y(otherwise.y() + otherwise.bbox().height / 1.5 - contentsRow.height()/2);

                container.strokeDashArray = '3';

                container.myNode = node;

                container.getEndPoints = () => {

                    let result = [[contentsRow.x() + contentsRow.width(), contentsRow.y() + contentsRow.height() / 2]];
                    // if(container.renderDefaultPath){
                    //     debugger;
                    //     result.push([container.x()  + container.width()/2, contentsRow.y() + contentsRow.height()*2.5])
                    // }
                    return result;
                }
                container.getStartPoints = () => {

                    // console.log("returning",  [text.bbox().x + text.bbox().width, text.bbox().y + text.bbox().height/2]);
                    let result = [[otherwise.bbox().x, otherwise.bbox().y + otherwise.bbox().height / 2]];
                    // if(container.renderDefaultPath){
                    //     result.push([container.x()  + container.width()/2, contentsRow.y() + contentsRow.height()*2.5])
                    // }

                    return result;
                }

                container.applyItemsAfterwards = ()=>{
                    for (let i = 0; i < contentsRow.c.length; i++) {
                        console.log(contentsRow.c[i]);
                        if(contentsRow.c[i].applyItemsAfterwards){
                            
                            contentsRow.c[i].applyItemsAfterwards();
                        }
                        
                    }
                }
                return container;

            },

            'DIV': (node) => {
                // let svgItem = SVG().rect(30,50).attr({fill:'none'});

                let row = new Container('parallel', node);
                for (let i = 0; i < node.childNodes.length; i++) {

                    let m = this.model(node.childNodes[i])
                    if (m) row.push(m)
                }

                row.myNode = node;
                return row;

            },




        }
    }


            get examples() {
                return {

                    'AA-SEQUENCE': {

                        html: '<aa-sequence><aa-screen name="first screen"></aa-screen><aa-screen name="second screen"></aa-screen></aa-sequence>',
                        comment: "sequence",

                    },


                    'AA-SCREEN': {

                        html: '<aa-screen name="<name>"></aa-screen>',
                        comment: "screen",

                    },

                    'AA-FUNCTION-RANDOM': {

                        html: '<aa-function-random></aa-function-random>',
                        comment: "random number generator",

                    },

                    'AA-CHOOSE': {

                        html: '<aa-choose><aa-when><aa-screen></aa-screen></aa-when></aa-choose>',
                        comment: "random number generator",

                    }
                }
            }


        }



        

/***/ }),

/***/ "./src/lib/svg/svg.js":
/*!****************************!*\
  !*** ./src/lib/svg/svg.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.0.16
* https://svgdotjs.github.io/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Tue Nov 12 2019 21:57:16 GMT+0100 (GMT+01:00)
*/;
var SVG = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.3.6',
	  mode:  'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var functionToString = shared('native-function-to-string', Function.toString);

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = new WeakMap$1();
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(functionToString).split('toString');

	shared('inspectSource', function (it) {
	  return functionToString.call(it);
	});

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
	});
	});

	var path = global_1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var nativeAssign = Object.assign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	// should work with symbols and should have deterministic property order (V8 bug)
	var objectAssign = !nativeAssign || fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var Symbol$1 = global_1.Symbol;
	var store$2 = shared('wks');

	var wellKnownSymbol = function (name) {
	  return store$2[name] || (store$2[name] = nativeSymbol && Symbol$1[name]
	    || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
	};

	var userAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var v8Version = version && +version;

	var SPECIES = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return v8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var SPECIES$1 = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES$1];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var defineProperty = objectDefineProperty.f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.github.io/ecma262/#sec-function-instances-name
	if (descriptors && !(NAME in FunctionPrototype)) {
	  defineProperty(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
		f: f$5
	};

	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;

	var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  getOwnPropertyNames: nativeGetOwnPropertyNames$1
	});

	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	var IE_PROTO = sharedKey('IE_PROTO');

	var PROTOTYPE = 'prototype';
	var Empty = function () { /* empty */ };

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var length = enumBugKeys.length;
	  var lt = '<';
	  var script = 'script';
	  var gt = '>';
	  var js = 'java' + script + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = String(js);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
	  return createDict();
	};

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	hiddenKeys[IE_PROTO] = true;

	var f$6 = wellKnownSymbol;

	var wrappedWellKnownSymbol = {
		f: f$6
	};

	var defineProperty$1 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
	    value: wrappedWellKnownSymbol.f(NAME)
	  });
	};

	var defineProperty$2 = objectDefineProperty.f;



	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC) {
	  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
	    defineProperty$2(it, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var bindContext = function (fn, that, length) {
	  aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var SPECIES$2 = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = bindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var $forEach = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE$1];
	var $Symbol = global_1.Symbol;
	var JSON$1 = global_1.JSON;
	var nativeJSONStringify = JSON$1 && JSON$1.stringify;
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty$1 = objectDefineProperty.f;
	var nativeGetOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global_1.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = descriptors && fails(function () {
	  return objectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors) symbol.description = description;
	  return symbol;
	};

	var isSymbol = nativeSymbol && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
	  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$2(toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames$2(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return getInternalState(this).tag;
	  });

	  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
	  objectDefineProperty.f = $defineProperty;
	  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
	  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

	  if (descriptors) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	    {
	      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }

	  wrappedWellKnownSymbol.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };
	}

	_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
	  Symbol: $Symbol
	});

	$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});

	_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return objectGetOwnPropertySymbols.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	JSON$1 && _export({ target: 'JSON', stat: true, forced: !nativeSymbol || fails(function () {
	  var symbol = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  return nativeJSONStringify([symbol]) != '[null]'
	    // WebKit converts symbol values to JSON as null
	    || nativeJSONStringify({ a: symbol }) != '{}'
	    // V8 throws on boxed symbols
	    || nativeJSONStringify(Object(symbol)) != '{}';
	}) }, {
	  stringify: function stringify(it) {
	    var args = [it];
	    var index = 1;
	    var replacer, $replacer;
	    while (arguments.length > index) args.push(arguments[index++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return nativeJSONStringify.apply(JSON$1, args);
	  }
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var defineProperty$3 = objectDefineProperty.f;


	var NativeSymbol = global_1.Symbol;

	if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var result = this instanceof SymbolWrapper
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
	  symbolPrototype.constructor = SymbolWrapper;

	  var symbolToString = symbolPrototype.toString;
	  var native = String(NativeSymbol('test')) == 'Symbol(test)';
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  defineProperty$3(symbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = isObject(this) ? this.valueOf() : this;
	      var string = symbolToString.call(symbol);
	      if (has(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  _export({ global: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, objectCreate(null));
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var iterators = {};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO$1 = sharedKey('IE_PROTO');
	var ObjectPrototype$1 = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype$1 : null;
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	var returnThis = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	if ( !has(IteratorPrototype, ITERATOR)) {
	  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$2 = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
	      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
	        if (objectSetPrototypeOf) {
	          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
	          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$1(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	var objectToString = String(test) !== '[object z]' ? function toString() {
	  return '[object ' + classof(this) + ']';
	} : test.toString;

	var ObjectPrototype$2 = Object.prototype;

	// `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	if (objectToString !== ObjectPrototype$2.toString) {
	  redefine(ObjectPrototype$2, 'toString', objectToString, { unsafe: true });
	}

	var freezing = !fails(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = createCommonjsModule(function (module) {
	var defineProperty = objectDefineProperty.f;



	var METADATA = uid('meta');
	var id = 0;

	var isExtensible = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + ++id, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
	  return it;
	};

	var meta = module.exports = {
	  REQUIRED: false,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;
	});

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};

	var iterate_1 = createCommonjsModule(function (module) {
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
	  var boundFunction = bindContext(fn, that, AS_ENTRIES ? 2 : 1);
	  var iterator, iterFn, index, length, result, next, step;

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = AS_ENTRIES
	          ? boundFunction(anObject(step = iterable[index])[0], step[1])
	          : boundFunction(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	iterate.stop = function (result) {
	  return new Result(true, result);
	};
	});

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$4] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$4] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    objectSetPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) objectSetPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	var collection = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
	  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var nativeMethod = NativePrototype[KEY];
	    redefine(NativePrototype, KEY,
	      KEY == 'add' ? function add(value) {
	        nativeMethod.call(this, value === 0 ? 0 : value);
	        return this;
	      } : KEY == 'delete' ? function (key) {
	        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : KEY == 'get' ? function get(key) {
	        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : KEY == 'has' ? function has(key) {
	        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : function set(key, value) {
	        nativeMethod.call(this, key === 0 ? 0 : key, value);
	        return this;
	      }
	    );
	  };

	  // eslint-disable-next-line max-len
	  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	    new NativeConstructor().entries().next();
	  })))) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    internalMetadata.REQUIRED = true;
	  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
	        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

	  setToStringTag(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var redefineAll = function (target, src, options) {
	  for (var key in src) redefine(target, key, src[key], options);
	  return target;
	};

	var SPECIES$3 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
	    defineProperty(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var defineProperty$4 = objectDefineProperty.f;








	var fastKey = internalMetadata.fastKey;


	var setInternalState$2 = internalState.set;
	var internalStateGetterFor = internalState.getterFor;

	var collectionStrong = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState$2(that, {
	        type: CONSTRUCTOR_NAME,
	        index: objectCreate(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!descriptors) that.size = 0;
	      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
	    });

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (descriptors) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };

	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        if (descriptors) state.size = 0;
	        else that.size = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (descriptors) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = bindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    redefineAll(C.prototype, IS_MAP ? {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (descriptors) defineProperty$4(C.prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return C;
	  },
	  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$2(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return { value: undefined, done: true };
	      }
	      // return step by kind
	      if (kind == 'keys') return { value: entry.key, done: false };
	      if (kind == 'values') return { value: entry.value, done: false };
	      return { value: [entry.key, entry.value], done: false };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	// `Set` constructor
	// https://tc39.github.io/ecma262/#sec-set-objects
	var es_set = collection('Set', function (get) {
	  return function Set() { return get(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$2 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var charAt = stringMultibyte.charAt;



	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$3 = internalState.set;
	var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$3(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$2(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var ITERATOR$5 = wellKnownSymbol('iterator');
	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
	var ArrayValues = es_array_iterator.values;

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$5] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG$3]) {
	      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	    }
	    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
	      }
	    }
	  }
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	var methods = {};
	var names = [];
	function registerMethods(name, m) {
	  if (Array.isArray(name)) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _name = _step.value;
	        registerMethods(_name, m);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return != null) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return;
	  }

	  if (_typeof(name) === 'object') {
	    for (var _name2 in name) {
	      registerMethods(_name2, name[_name2]);
	    }

	    return;
	  }

	  addMethodNames(Object.getOwnPropertyNames(m));
	  methods[name] = Object.assign(methods[name] || {}, m);
	}
	function getMethodsFor(name) {
	  return methods[name] || {};
	}
	function getMethodNames() {
	  return _toConsumableArray(new Set(names));
	}
	function addMethodNames(_names) {
	  names.push.apply(names, _toConsumableArray(_names));
	}

	var $includes = arrayIncludes.includes;


	// `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	_export({ target: 'Array', proto: true }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
	  exec: regexpExec
	});

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	var notARegexp = function (it) {
	  if (isRegexp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};

	var MATCH$1 = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (e) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (f) { /* empty */ }
	  } return false;
	};

	// `String.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.includes
	_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~String(requireObjectCoercible(this))
	      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var SPECIES$4 = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$4] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
	  }
	};

	var charAt$1 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	var advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? charAt$1(S, index).length : 1);
	};

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classofRaw(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};

	var max$2 = Math.max;
	var min$2 = Math.min;
	var floor$1 = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regexpExecAbstract(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max$2(min$2(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	  // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor$1(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$3 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$3(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$3(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$3(3)
	};

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var forcedStringTrimMethod = function (METHOD_NAME) {
	  return fails(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $trim = stringTrim.trim;


	// `String.prototype.trim` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.trim
	_export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	// Map function
	function map(array, block) {
	  var i;
	  var il = array.length;
	  var result = [];

	  for (i = 0; i < il; i++) {
	    result.push(block(array[i]));
	  }

	  return result;
	} // Filter function

	function filter(array, block) {
	  var i;
	  var il = array.length;
	  var result = [];

	  for (i = 0; i < il; i++) {
	    if (block(array[i])) {
	      result.push(array[i]);
	    }
	  }

	  return result;
	} // Degrees to radians

	function radians(d) {
	  return d % 360 * Math.PI / 180;
	} // Radians to degrees

	function degrees(r) {
	  return r * 180 / Math.PI % 360;
	} // Convert dash-separated-string to camelCase

	function camelCase(s) {
	  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
	    return g.toUpperCase();
	  });
	} // Convert camel cased string to string seperated

	function unCamelCase(s) {
	  return s.replace(/([A-Z])/g, function (m, g) {
	    return '-' + g.toLowerCase();
	  });
	} // Capitalize first letter of a string

	function capitalize(s) {
	  return s.charAt(0).toUpperCase() + s.slice(1);
	} // Calculate proportional width and height values when necessary

	function proportionalSize(element, width, height, box) {
	  if (width == null || height == null) {
	    box = box || element.bbox();

	    if (width == null) {
	      width = box.width / box.height * height;
	    } else if (height == null) {
	      height = box.height / box.width * width;
	    }
	  }

	  return {
	    width: width,
	    height: height
	  };
	}
	function getOrigin(o, element) {
	  // Allow origin or around as the names
	  var origin = o.origin; // o.around == null ? o.origin : o.around

	  var ox, oy; // Allow the user to pass a string to rotate around a given point

	  if (typeof origin === 'string' || origin == null) {
	    // Get the bounding box of the element with no transformations applied
	    var string = (origin || 'center').toLowerCase().trim();

	    var _element$bbox = element.bbox(),
	        height = _element$bbox.height,
	        width = _element$bbox.width,
	        x = _element$bbox.x,
	        y = _element$bbox.y; // Calculate the transformed x and y coordinates


	    var bx = string.includes('left') ? x : string.includes('right') ? x + width : x + width / 2;
	    var by = string.includes('top') ? y : string.includes('bottom') ? y + height : y + height / 2; // Set the bounds eg : "bottom-left", "Top right", "middle" etc...

	    ox = o.ox != null ? o.ox : bx;
	    oy = o.oy != null ? o.oy : by;
	  } else {
	    ox = origin[0];
	    oy = origin[1];
	  } // Return the origin as it is if it wasn't a string


	  return [ox, oy];
	}

	var utils = ({
		__proto__: null,
		map: map,
		filter: filter,
		radians: radians,
		degrees: degrees,
		camelCase: camelCase,
		unCamelCase: unCamelCase,
		capitalize: capitalize,
		proportionalSize: proportionalSize,
		getOrigin: getOrigin
	});

	// Default namespaces
	var ns = 'http://www.w3.org/2000/svg';
	var xmlns = 'http://www.w3.org/2000/xmlns/';
	var xlink = 'http://www.w3.org/1999/xlink';
	var svgjs = 'http://svgjs.com/svgjs';

	var namespaces = ({
		__proto__: null,
		ns: ns,
		xmlns: xmlns,
		xlink: xlink,
		svgjs: svgjs
	});

	var globals = {
	  window: typeof window === 'undefined' ? null : window,
	  document: typeof document === 'undefined' ? null : document
	};
	function registerWindow() {
	  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  globals.window = win;
	  globals.document = doc;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var Base = function Base() {
	  _classCallCheck(this, Base);
	};

	var elements = {};
	var root = '___SYMBOL___ROOT___'; // Method for element creation

	function create(name) {
	  // create element
	  return globals.document.createElementNS(ns, name);
	}
	function makeInstance(element) {
	  if (element instanceof Base) return element;

	  if (_typeof(element) === 'object') {
	    return adopter(element);
	  }

	  if (element == null) {
	    return new elements[root]();
	  }

	  if (typeof element === 'string' && element.charAt(0) !== '<') {
	    return adopter(globals.document.querySelector(element));
	  }

	  var node = create('svg');
	  node.innerHTML = element; // We can use firstChild here because we know,
	  // that the first char is < and thus an element

	  element = adopter(node.firstChild);
	  return element;
	}
	function nodeOrNew(name, node) {
	  return node instanceof globals.window.Node ? node : create(name);
	} // Adopt existing svg elements

	function adopt(node) {
	  // check for presence of node
	  if (!node) return null; // make sure a node isn't already adopted

	  if (node.instance instanceof Base) return node.instance; // initialize variables

	  var className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

	  if (className === 'LinearGradient' || className === 'RadialGradient') {
	    className = 'Gradient'; // Fallback to Dom if element is not known
	  } else if (!elements[className]) {
	    className = 'Dom';
	  }

	  return new elements[className](node);
	}
	var adopter = adopt;
	function mockAdopt() {
	  var mock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : adopt;
	  adopter = mock;
	}
	function register(element) {
	  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.name;
	  var asRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  elements[name] = element;
	  if (asRoot) elements[root] = element;
	  addMethodNames(Object.getOwnPropertyNames(element.prototype));
	  return element;
	}
	function getClass(name) {
	  return elements[name];
	} // Element id sequence

	var did = 1000; // Get next named element id

	function eid(name) {
	  return 'Svgjs' + capitalize(name) + did++;
	} // Deep new id assignment

	function assignNewId(node) {
	  // do the same for SVG child nodes as well
	  for (var i = node.children.length - 1; i >= 0; i--) {
	    assignNewId(node.children[i]);
	  }

	  if (node.id) {
	    return adopt(node).id(eid(node.nodeName));
	  }

	  return adopt(node);
	} // Method for extending objects

	function extend(modules, methods, attrCheck) {
	  var key, i;
	  modules = Array.isArray(modules) ? modules : [modules];

	  for (i = modules.length - 1; i >= 0; i--) {
	    for (key in methods) {
	      var method = methods[key];

	      if (attrCheck) {
	        method = wrapWithAttrCheck(methods[key]);
	      }

	      modules[i].prototype[key] = method;
	    }
	  }
	} // export function extendWithAttrCheck (...args) {
	//   extend(...args, true)
	// }

	function wrapWithAttrCheck(fn) {
	  return function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var o = args[args.length - 1];

	    if (o && o.constructor === Object && !(o instanceof Array)) {
	      return fn.apply(this, args.slice(0, -1)).attr(o);
	    } else {
	      return fn.apply(this, args);
	    }
	  };
	}
	function invent(config) {
	  // Create element initializer
	  var initializer = typeof config.create === 'function' ? config.create : function (node) {
	    this.constructor(node || create(config.create));
	  }; // Inherit prototype

	  if (config.inherit) {
	    /* eslint new-cap: off */
	    initializer.prototype = new config.inherit();
	    initializer.prototype.constructor = initializer;
	  } // Extend with methods


	  if (config.extend) {
	    extend(initializer, config.extend);
	  } // Attach construct method to parent


	  if (config.construct) {
	    extend(config.parent || elements.Container, config.construct);
	  }

	  return initializer;
	}

	function siblings() {
	  return this.parent().children();
	} // Get the curent position siblings

	function position() {
	  return this.parent().index(this);
	} // Get the next element (will return null if there is none)

	function next() {
	  return this.siblings()[this.position() + 1];
	} // Get the next element (will return null if there is none)

	function prev() {
	  return this.siblings()[this.position() - 1];
	} // Send given element one step forward

	function forward() {
	  var i = this.position() + 1;
	  var p = this.parent(); // move node one step forward

	  p.removeElement(this).add(this, i); // make sure defs node is always at the top

	  if (typeof p.isRoot === 'function' && p.isRoot()) {
	    p.node.appendChild(p.defs().node);
	  }

	  return this;
	} // Send given element one step backward

	function backward() {
	  var i = this.position();

	  if (i > 0) {
	    this.parent().removeElement(this).add(this, i - 1);
	  }

	  return this;
	} // Send given element all the way to the front

	function front() {
	  var p = this.parent(); // Move node forward

	  p.node.appendChild(this.node); // Make sure defs node is always at the top

	  if (typeof p.isRoot === 'function' && p.isRoot()) {
	    p.node.appendChild(p.defs().node);
	  }

	  return this;
	} // Send given element all the way to the back

	function back() {
	  if (this.position() > 0) {
	    this.parent().removeElement(this).add(this, 0);
	  }

	  return this;
	} // Inserts a given element before the targeted element

	function before(element) {
	  element = makeInstance(element);
	  element.remove();
	  var i = this.position();
	  this.parent().add(element, i);
	  return this;
	} // Inserts a given element after the targeted element

	function after(element) {
	  element = makeInstance(element);
	  element.remove();
	  var i = this.position();
	  this.parent().add(element, i + 1);
	  return this;
	}
	function insertBefore(element) {
	  element = makeInstance(element);
	  element.before(this);
	  return this;
	}
	function insertAfter(element) {
	  element = makeInstance(element);
	  element.after(this);
	  return this;
	}
	registerMethods('Dom', {
	  siblings: siblings,
	  position: position,
	  next: next,
	  prev: prev,
	  forward: forward,
	  backward: backward,
	  front: front,
	  back: back,
	  before: before,
	  after: after,
	  insertBefore: insertBefore,
	  insertAfter: insertAfter
	});

	var $filter = arrayIteration.filter;


	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var sloppyArrayMethod = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !method || !fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $indexOf = arrayIncludes.indexOf;


	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var nativeJoin = [].join;

	var ES3_STRINGS = indexedObject != Object;
	var SLOPPY_METHOD$1 = sloppyArrayMethod('join', ',');

	// `Array.prototype.join` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.join
	_export({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD$1 }, {
	  join: function join(separator) {
	    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var SPECIES$5 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$1(S);
	};

	var arrayPush = [].push;
	var min$3 = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

	// @@split logic
	fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegexp(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output.length > lim ? output.slice(0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	}, !SUPPORTS_Y);

	// Parse unit value
	var numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

	var hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

	var rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

	var reference = /(#[a-z0-9\-_]+)/i; // splits a transformation chain

	var transforms = /\)\s*,?\s*/; // Whitespace

	var whitespace$1 = /\s/g; // Test hex value

	var isHex = /^#[a-f0-9]{3,6}$/i; // Test rgb value

	var isRgb = /^rgb\(/; // Test css declaration

	var isCss = /[^:]+:[^;]+;?/; // Test for blank string

	var isBlank = /^(\s+)?$/; // Test for numeric string

	var isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for percent value

	var isPercent = /^-?[\d.]+%$/; // Test for image url

	var isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

	var delimiter = /[\s,]+/; // The following regex are used to parse the d attribute of a path
	// Matches all hyphens which are not after an exponent

	var hyphen = /([^e])-/gi; // Replaces and tests for all path letters

	var pathLetters = /[MLHVCSQTAZ]/gi; // yes we need this one, too

	var isPathLetter = /[MLHVCSQTAZ]/i; // matches 0.154.23.45

	var numbersWithDots = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi; // matches .

	var dots = /\./g;

	var regex = ({
		__proto__: null,
		numberAndUnit: numberAndUnit,
		hex: hex,
		rgb: rgb,
		reference: reference,
		transforms: transforms,
		whitespace: whitespace$1,
		isHex: isHex,
		isRgb: isRgb,
		isCss: isCss,
		isBlank: isBlank,
		isNumber: isNumber,
		isPercent: isPercent,
		isImage: isImage,
		delimiter: delimiter,
		hyphen: hyphen,
		pathLetters: pathLetters,
		isPathLetter: isPathLetter,
		numbersWithDots: numbersWithDots,
		dots: dots
	});

	function classes() {
	  var attr = this.attr('class');
	  return attr == null ? [] : attr.trim().split(delimiter);
	} // Return true if class exists on the node, false otherwise

	function hasClass(name) {
	  return this.classes().indexOf(name) !== -1;
	} // Add class to the node

	function addClass(name) {
	  if (!this.hasClass(name)) {
	    var array = this.classes();
	    array.push(name);
	    this.attr('class', array.join(' '));
	  }

	  return this;
	} // Remove class from the node

	function removeClass(name) {
	  if (this.hasClass(name)) {
	    this.attr('class', this.classes().filter(function (c) {
	      return c !== name;
	    }).join(' '));
	  }

	  return this;
	} // Toggle the presence of a class on the node

	function toggleClass(name) {
	  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
	}
	registerMethods('Dom', {
	  classes: classes,
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass
	});

	var $forEach$1 = arrayIteration.forEach;


	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	for (var COLLECTION_NAME$1 in domIterables) {
	  var Collection$1 = global_1[COLLECTION_NAME$1];
	  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== arrayForEach) try {
	    createNonEnumerableProperty(CollectionPrototype$1, 'forEach', arrayForEach);
	  } catch (error) {
	    CollectionPrototype$1.forEach = arrayForEach;
	  }
	}

	function css(style, val) {
	  var ret = {};

	  if (arguments.length === 0) {
	    // get full style as object
	    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
	      return !!el.length;
	    }).forEach(function (el) {
	      var t = el.split(/\s*:\s*/);
	      ret[t[0]] = t[1];
	    });
	    return ret;
	  }

	  if (arguments.length < 2) {
	    // get style properties in the array
	    if (Array.isArray(style)) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = style[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var name = _step.value;
	          var cased = camelCase(name);
	          ret[cased] = this.node.style[cased];
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return != null) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return ret;
	    } // get style for property


	    if (typeof style === 'string') {
	      return this.node.style[camelCase(style)];
	    } // set styles in object


	    if (_typeof(style) === 'object') {
	      for (var _name in style) {
	        // set empty string if null/undefined/'' was given
	        this.node.style[camelCase(_name)] = style[_name] == null || isBlank.test(style[_name]) ? '' : style[_name];
	      }
	    }
	  } // set style for property


	  if (arguments.length === 2) {
	    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
	  }

	  return this;
	} // Show element

	function show() {
	  return this.css('display', '');
	} // Hide element

	function hide() {
	  return this.css('display', 'none');
	} // Is element visible?

	function visible() {
	  return this.css('display') !== 'none';
	}
	registerMethods('Dom', {
	  css: css,
	  show: show,
	  hide: hide,
	  visible: visible
	});

	function data$1(a, v, r) {
	  if (_typeof(a) === 'object') {
	    for (v in a) {
	      this.data(v, a[v]);
	    }
	  } else if (arguments.length < 2) {
	    try {
	      return JSON.parse(this.attr('data-' + a));
	    } catch (e) {
	      return this.attr('data-' + a);
	    }
	  } else {
	    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
	  }

	  return this;
	}
	registerMethods('Dom', {
	  data: data$1
	});

	function remember(k, v) {
	  // remember every item in an object individually
	  if (_typeof(arguments[0]) === 'object') {
	    for (var key in k) {
	      this.remember(key, k[key]);
	    }
	  } else if (arguments.length === 1) {
	    // retrieve memory
	    return this.memory()[k];
	  } else {
	    // store memory
	    this.memory()[k] = v;
	  }

	  return this;
	} // Erase a given memory

	function forget() {
	  if (arguments.length === 0) {
	    this._memory = {};
	  } else {
	    for (var i = arguments.length - 1; i >= 0; i--) {
	      delete this.memory()[arguments[i]];
	    }
	  }

	  return this;
	} // This triggers creation of a new hidden class which is not performant
	// However, this function is not rarely used so it will not happen frequently
	// Return local memory object

	function memory() {
	  return this._memory = this._memory || {};
	}
	registerMethods('Dom', {
	  remember: remember,
	  forget: forget,
	  memory: memory
	});

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$4 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$1(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod$4(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$4(true)
	};

	var $reduce = arrayReduce.left;


	// `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	_export({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var listenerId = 0;
	var windowEvents = {};

	function getEvents(instance) {
	  var n = instance.getEventHolder(); // We dont want to save events in global space

	  if (n === globals.window) n = windowEvents;
	  if (!n.events) n.events = {};
	  return n.events;
	}

	function getEventTarget(instance) {
	  return instance.getEventTarget();
	}

	function clearEvents(instance) {
	  var n = instance.getEventHolder();
	  if (n.events) n.events = {};
	} // Add event binder in the SVG namespace


	function on(node, events, listener, binding, options) {
	  var l = listener.bind(binding || node);
	  var instance = makeInstance(node);
	  var bag = getEvents(instance);
	  var n = getEventTarget(instance); // events can be an array of events or a string of events

	  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

	  if (!listener._svgjsListenerId) {
	    listener._svgjsListenerId = ++listenerId;
	  }

	  events.forEach(function (event) {
	    var ev = event.split('.')[0];
	    var ns = event.split('.')[1] || '*'; // ensure valid object

	    bag[ev] = bag[ev] || {};
	    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

	    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

	    n.addEventListener(ev, l, options || false);
	  });
	} // Add event unbinder in the SVG namespace

	function off(node, events, listener, options) {
	  var instance = makeInstance(node);
	  var bag = getEvents(instance);
	  var n = getEventTarget(instance); // listener can be a function or a number

	  if (typeof listener === 'function') {
	    listener = listener._svgjsListenerId;
	    if (!listener) return;
	  } // events can be an array of events or a string or undefined


	  events = Array.isArray(events) ? events : (events || '').split(delimiter);
	  events.forEach(function (event) {
	    var ev = event && event.split('.')[0];
	    var ns = event && event.split('.')[1];
	    var namespace, l;

	    if (listener) {
	      // remove listener reference
	      if (bag[ev] && bag[ev][ns || '*']) {
	        // removeListener
	        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
	        delete bag[ev][ns || '*'][listener];
	      }
	    } else if (ev && ns) {
	      // remove all listeners for a namespaced event
	      if (bag[ev] && bag[ev][ns]) {
	        for (l in bag[ev][ns]) {
	          off(n, [ev, ns].join('.'), l);
	        }

	        delete bag[ev][ns];
	      }
	    } else if (ns) {
	      // remove all listeners for a specific namespace
	      for (event in bag) {
	        for (namespace in bag[event]) {
	          if (ns === namespace) {
	            off(n, [event, ns].join('.'));
	          }
	        }
	      }
	    } else if (ev) {
	      // remove all listeners for the event
	      if (bag[ev]) {
	        for (namespace in bag[ev]) {
	          off(n, [ev, namespace].join('.'));
	        }

	        delete bag[ev];
	      }
	    } else {
	      // remove all listeners on a given node
	      for (event in bag) {
	        off(n, event);
	      }

	      clearEvents(instance);
	    }
	  });
	}
	function dispatch(node, event, data) {
	  var n = getEventTarget(node); // Dispatch event

	  if (event instanceof globals.window.Event) {
	    n.dispatchEvent(event);
	  } else {
	    event = new globals.window.CustomEvent(event, {
	      detail: data,
	      cancelable: true
	    });
	    n.dispatchEvent(event);
	  }

	  return event;
	}

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = v8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var $map = arrayIteration.map;


	// `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var DatePrototype = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var nativeDateToString = DatePrototype[TO_STRING];
	var getTime = DatePrototype.getTime;

	// `Date.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
	if (new Date(NaN) + '' != INVALID_DATE) {
	  redefine(DatePrototype, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
	  });
	}

	var trim = stringTrim.trim;


	var nativeParseInt = global_1.parseInt;
	var hex$1 = /^[+-]?0[Xx]/;
	var FORCED$1 = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

	// `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix
	var _parseInt = FORCED$1 ? function parseInt(string, radix) {
	  var S = trim(String(string));
	  return nativeParseInt(S, (radix >>> 0) || (hex$1.test(S) ? 16 : 10));
	} : nativeParseInt;

	// `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix
	_export({ global: true, forced: parseInt != _parseInt }, {
	  parseInt: _parseInt
	});

	var TO_STRING$1 = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING$1];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING$1;

	// `RegExp.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine(RegExp.prototype, TO_STRING$1, function toString() {
	    var R = anObject(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
	    return;
	  }

	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function sixDigitHex(hex) {
	  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
	}

	function componentHex(component) {
	  var integer = Math.round(component);
	  var bounded = Math.max(0, Math.min(255, integer));
	  var hex = bounded.toString(16);
	  return hex.length === 1 ? '0' + hex : hex;
	}

	function is(object, space) {
	  for (var i = space.length; i--;) {
	    if (object[space[i]] == null) {
	      return false;
	    }
	  }

	  return true;
	}

	function getParameters(a, b) {
	  var params = is(a, 'rgb') ? {
	    _a: a.r,
	    _b: a.g,
	    _c: a.b,
	    space: 'rgb'
	  } : is(a, 'xyz') ? {
	    _a: a.x,
	    _b: a.y,
	    _c: a.z,
	    _d: 0,
	    space: 'xyz'
	  } : is(a, 'hsl') ? {
	    _a: a.h,
	    _b: a.s,
	    _c: a.l,
	    _d: 0,
	    space: 'hsl'
	  } : is(a, 'lab') ? {
	    _a: a.l,
	    _b: a.a,
	    _c: a.b,
	    _d: 0,
	    space: 'lab'
	  } : is(a, 'lch') ? {
	    _a: a.l,
	    _b: a.c,
	    _c: a.h,
	    _d: 0,
	    space: 'lch'
	  } : is(a, 'cmyk') ? {
	    _a: a.c,
	    _b: a.m,
	    _c: a.y,
	    _d: a.k,
	    space: 'cmyk'
	  } : {
	    _a: 0,
	    _b: 0,
	    _c: 0,
	    space: 'rgb'
	  };
	  params.space = b || params.space;
	  return params;
	}

	function cieSpace(space) {
	  if (space === 'lab' || space === 'xyz' || space === 'lch') {
	    return true;
	  } else {
	    return false;
	  }
	}

	function hueToRgb(p, q, t) {
	  if (t < 0) t += 1;
	  if (t > 1) t -= 1;
	  if (t < 1 / 6) return p + (q - p) * 6 * t;
	  if (t < 1 / 2) return q;
	  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	  return p;
	}

	var Color =
	/*#__PURE__*/
	function () {
	  function Color() {
	    _classCallCheck(this, Color);

	    this.init.apply(this, arguments);
	  }

	  _createClass(Color, [{
	    key: "init",
	    value: function init() {
	      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      var space = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgb';
	      // This catches the case when a falsy value is passed like ''
	      a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

	      if (this.space) {
	        for (var component in this.space) {
	          delete this[this.space[component]];
	        }
	      }

	      if (typeof a === 'number') {
	        // Allow for the case that we don't need d...
	        space = typeof d === 'string' ? d : space;
	        d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

	        Object.assign(this, {
	          _a: a,
	          _b: b,
	          _c: c,
	          _d: d,
	          space: space
	        }); // If the user gave us an array, make the color from it
	      } else if (a instanceof Array) {
	        this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
	        Object.assign(this, {
	          _a: a[0],
	          _b: a[1],
	          _c: a[2],
	          _d: a[3] || 0
	        });
	      } else if (a instanceof Object) {
	        // Set the object up and assign its values directly
	        var values = getParameters(a, b);
	        Object.assign(this, values);
	      } else if (typeof a === 'string') {
	        if (isRgb.test(a)) {
	          var noWhitespace = a.replace(whitespace$1, '');

	          var _rgb$exec$slice$map = rgb.exec(noWhitespace).slice(1, 4).map(function (v) {
	            return parseInt(v);
	          }),
	              _rgb$exec$slice$map2 = _slicedToArray(_rgb$exec$slice$map, 3),
	              _a2 = _rgb$exec$slice$map2[0],
	              _b2 = _rgb$exec$slice$map2[1],
	              _c2 = _rgb$exec$slice$map2[2];

	          Object.assign(this, {
	            _a: _a2,
	            _b: _b2,
	            _c: _c2,
	            _d: 0,
	            space: 'rgb'
	          });
	        } else if (isHex.test(a)) {
	          var hexParse = function hexParse(v) {
	            return parseInt(v, 16);
	          };

	          var _hex$exec$map = hex.exec(sixDigitHex(a)).map(hexParse),
	              _hex$exec$map2 = _slicedToArray(_hex$exec$map, 4),
	              _a3 = _hex$exec$map2[1],
	              _b3 = _hex$exec$map2[2],
	              _c3 = _hex$exec$map2[3];

	          Object.assign(this, {
	            _a: _a3,
	            _b: _b3,
	            _c: _c3,
	            _d: 0,
	            space: 'rgb'
	          });
	        } else throw Error('Unsupported string format, can\'t construct Color');
	      } // Now add the components as a convenience


	      var _a = this._a,
	          _b = this._b,
	          _c = this._c,
	          _d = this._d;
	      var components = this.space === 'rgb' ? {
	        r: _a,
	        g: _b,
	        b: _c
	      } : this.space === 'xyz' ? {
	        x: _a,
	        y: _b,
	        z: _c
	      } : this.space === 'hsl' ? {
	        h: _a,
	        s: _b,
	        l: _c
	      } : this.space === 'lab' ? {
	        l: _a,
	        a: _b,
	        b: _c
	      } : this.space === 'lch' ? {
	        l: _a,
	        c: _b,
	        h: _c
	      } : this.space === 'cmyk' ? {
	        c: _a,
	        m: _b,
	        y: _c,
	        k: _d
	      } : {};
	      Object.assign(this, components);
	    }
	    /*
	    Conversion Methods
	    */

	  }, {
	    key: "rgb",
	    value: function rgb() {
	      if (this.space === 'rgb') {
	        return this;
	      } else if (cieSpace(this.space)) {
	        // Convert to the xyz color space
	        var x = this.x,
	            y = this.y,
	            z = this.z;

	        if (this.space === 'lab' || this.space === 'lch') {
	          // Get the values in the lab space
	          var l = this.l,
	              a = this.a,
	              _b4 = this.b;

	          if (this.space === 'lch') {
	            var c = this.c,
	                h = this.h;
	            var dToR = Math.PI / 180;
	            a = c * Math.cos(dToR * h);
	            _b4 = c * Math.sin(dToR * h);
	          } // Undo the nonlinear function


	          var yL = (l + 16) / 116;
	          var xL = a / 500 + yL;
	          var zL = yL - _b4 / 200; // Get the xyz values

	          var ct = 16 / 116;
	          var mx = 0.008856;
	          var nm = 7.787;
	          x = 0.95047 * (Math.pow(xL, 3) > mx ? Math.pow(xL, 3) : (xL - ct) / nm);
	          y = 1.00000 * (Math.pow(yL, 3) > mx ? Math.pow(yL, 3) : (yL - ct) / nm);
	          z = 1.08883 * (Math.pow(zL, 3) > mx ? Math.pow(zL, 3) : (zL - ct) / nm);
	        } // Convert xyz to unbounded rgb values


	        var rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
	        var gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
	        var bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

	        var pow = Math.pow;
	        var bd = 0.0031308;
	        var r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
	        var g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
	        var b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

	        var color = new Color(255 * r, 255 * g, 255 * b);
	        return color;
	      } else if (this.space === 'hsl') {
	        // https://bgrins.github.io/TinyColor/docs/tinycolor.html
	        // Get the current hsl values
	        var _h = this.h,
	            s = this.s,
	            _l = this.l;
	        _h /= 360;
	        s /= 100;
	        _l /= 100; // If we are grey, then just make the color directly

	        if (s === 0) {
	          _l *= 255;

	          var _color2 = new Color(_l, _l, _l);

	          return _color2;
	        } // TODO I have no idea what this does :D If you figure it out, tell me!


	        var q = _l < 0.5 ? _l * (1 + s) : _l + s - _l * s;
	        var p = 2 * _l - q; // Get the rgb values

	        var _r = 255 * hueToRgb(p, q, _h + 1 / 3);

	        var _g = 255 * hueToRgb(p, q, _h);

	        var _b5 = 255 * hueToRgb(p, q, _h - 1 / 3); // Make a new color


	        var _color = new Color(_r, _g, _b5);

	        return _color;
	      } else if (this.space === 'cmyk') {
	        // https://gist.github.com/felipesabino/5066336
	        // Get the normalised cmyk values
	        var _c4 = this.c,
	            m = this.m,
	            _y = this.y,
	            k = this.k; // Get the rgb values

	        var _r2 = 255 * (1 - Math.min(1, _c4 * (1 - k) + k));

	        var _g2 = 255 * (1 - Math.min(1, m * (1 - k) + k));

	        var _b6 = 255 * (1 - Math.min(1, _y * (1 - k) + k)); // Form the color and return it


	        var _color3 = new Color(_r2, _g2, _b6);

	        return _color3;
	      } else {
	        return this;
	      }
	    }
	  }, {
	    key: "lab",
	    value: function lab() {
	      // Get the xyz color
	      var _this$xyz = this.xyz(),
	          x = _this$xyz.x,
	          y = _this$xyz.y,
	          z = _this$xyz.z; // Get the lab components


	      var l = 116 * y - 16;
	      var a = 500 * (x - y);
	      var b = 200 * (y - z); // Construct and return a new color

	      var color = new Color(l, a, b, 'lab');
	      return color;
	    }
	  }, {
	    key: "xyz",
	    value: function xyz() {
	      // Normalise the red, green and blue values
	      var _this$rgb = this.rgb(),
	          r255 = _this$rgb._a,
	          g255 = _this$rgb._b,
	          b255 = _this$rgb._c;

	      var _map = [r255, g255, b255].map(function (v) {
	        return v / 255;
	      }),
	          _map2 = _slicedToArray(_map, 3),
	          r = _map2[0],
	          g = _map2[1],
	          b = _map2[2]; // Convert to the lab rgb space


	      var rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
	      var gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
	      var bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

	      var xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
	      var yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
	      var zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

	      var x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
	      var y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
	      var z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

	      var color = new Color(x, y, z, 'xyz');
	      return color;
	    }
	  }, {
	    key: "lch",
	    value: function lch() {
	      // Get the lab color directly
	      var _this$lab = this.lab(),
	          l = _this$lab.l,
	          a = _this$lab.a,
	          b = _this$lab.b; // Get the chromaticity and the hue using polar coordinates


	      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	      var h = 180 * Math.atan2(b, a) / Math.PI;

	      if (h < 0) {
	        h *= -1;
	        h = 360 - h;
	      } // Make a new color and return it


	      var color = new Color(l, c, h, 'lch');
	      return color;
	    }
	  }, {
	    key: "hsl",
	    value: function hsl() {
	      // Get the rgb values
	      var _this$rgb2 = this.rgb(),
	          _a = _this$rgb2._a,
	          _b = _this$rgb2._b,
	          _c = _this$rgb2._c;

	      var _map3 = [_a, _b, _c].map(function (v) {
	        return v / 255;
	      }),
	          _map4 = _slicedToArray(_map3, 3),
	          r = _map4[0],
	          g = _map4[1],
	          b = _map4[2]; // Find the maximum and minimum values to get the lightness


	      var max = Math.max(r, g, b);
	      var min = Math.min(r, g, b);
	      var l = (max + min) / 2; // If the r, g, v values are identical then we are grey

	      var isGrey = max === min; // Calculate the hue and saturation

	      var delta = max - min;
	      var s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
	      var h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

	      var color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
	      return color;
	    }
	  }, {
	    key: "cmyk",
	    value: function cmyk() {
	      // Get the rgb values for the current color
	      var _this$rgb3 = this.rgb(),
	          _a = _this$rgb3._a,
	          _b = _this$rgb3._b,
	          _c = _this$rgb3._c;

	      var _map5 = [_a, _b, _c].map(function (v) {
	        return v / 255;
	      }),
	          _map6 = _slicedToArray(_map5, 3),
	          r = _map6[0],
	          g = _map6[1],
	          b = _map6[2]; // Get the cmyk values in an unbounded format


	      var k = Math.min(1 - r, 1 - g, 1 - b);

	      if (k === 1) {
	        // Catch the black case
	        return new Color(0, 0, 0, 1, 'cmyk');
	      }

	      var c = (1 - r - k) / (1 - k);
	      var m = (1 - g - k) / (1 - k);
	      var y = (1 - b - k) / (1 - k); // Construct the new color

	      var color = new Color(c, m, y, k, 'cmyk');
	      return color;
	    }
	    /*
	    Input and Output methods
	    */

	  }, {
	    key: "_clamped",
	    value: function _clamped() {
	      var _this$rgb4 = this.rgb(),
	          _a = _this$rgb4._a,
	          _b = _this$rgb4._b,
	          _c = _this$rgb4._c;

	      var max = Math.max,
	          min = Math.min,
	          round = Math.round;

	      var format = function format(v) {
	        return max(0, min(round(v), 255));
	      };

	      return [_a, _b, _c].map(format);
	    }
	  }, {
	    key: "toHex",
	    value: function toHex() {
	      var _this$_clamped$map = this._clamped().map(componentHex),
	          _this$_clamped$map2 = _slicedToArray(_this$_clamped$map, 3),
	          r = _this$_clamped$map2[0],
	          g = _this$_clamped$map2[1],
	          b = _this$_clamped$map2[2];

	      return "#".concat(r).concat(g).concat(b);
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.toHex();
	    }
	  }, {
	    key: "toRgb",
	    value: function toRgb() {
	      var _this$_clamped = this._clamped(),
	          _this$_clamped2 = _slicedToArray(_this$_clamped, 3),
	          rV = _this$_clamped2[0],
	          gV = _this$_clamped2[1],
	          bV = _this$_clamped2[2];

	      var string = "rgb(".concat(rV, ",").concat(gV, ",").concat(bV, ")");
	      return string;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      var _a = this._a,
	          _b = this._b,
	          _c = this._c,
	          _d = this._d,
	          space = this.space;
	      return [_a, _b, _c, _d, space];
	    }
	    /*
	    Generating random colors
	    */

	  }], [{
	    key: "random",
	    value: function random() {
	      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vibrant';
	      var t = arguments.length > 1 ? arguments[1] : undefined;
	      // Get the math modules
	      var random = Math.random,
	          round = Math.round,
	          sin = Math.sin,
	          pi = Math.PI; // Run the correct generator

	      if (mode === 'vibrant') {
	        var l = (81 - 57) * random() + 57;
	        var c = (83 - 45) * random() + 45;
	        var h = 360 * random();
	        var color = new Color(l, c, h, 'lch');
	        return color;
	      } else if (mode === 'sine') {
	        t = t == null ? random() : t;
	        var r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
	        var g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
	        var b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);

	        var _color4 = new Color(r, g, b);

	        return _color4;
	      } else if (mode === 'pastel') {
	        var _l2 = (94 - 86) * random() + 86;

	        var _c5 = (26 - 9) * random() + 9;

	        var _h2 = 360 * random();

	        var _color5 = new Color(_l2, _c5, _h2, 'lch');

	        return _color5;
	      } else if (mode === 'dark') {
	        var _l3 = 10 + 10 * random();

	        var _c6 = (125 - 75) * random() + 86;

	        var _h3 = 360 * random();

	        var _color6 = new Color(_l3, _c6, _h3, 'lch');

	        return _color6;
	      } else if (mode === 'rgb') {
	        var _r3 = 255 * random();

	        var _g3 = 255 * random();

	        var _b7 = 255 * random();

	        var _color7 = new Color(_r3, _g3, _b7);

	        return _color7;
	      } else if (mode === 'lab') {
	        var _l4 = 100 * random();

	        var a = 256 * random() - 128;

	        var _b8 = 256 * random() - 128;

	        var _color8 = new Color(_l4, a, _b8, 'lab');

	        return _color8;
	      } else if (mode === 'grey') {
	        var grey = 255 * random();

	        var _color9 = new Color(grey, grey, grey);

	        return _color9;
	      }
	    }
	    /*
	    Constructing colors
	    */
	    // Test if given value is a color string

	  }, {
	    key: "test",
	    value: function test(color) {
	      return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
	    } // Test if given value is an rgb object

	  }, {
	    key: "isRgb",
	    value: function isRgb(color) {
	      return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
	    } // Test if given value is a color

	  }, {
	    key: "isColor",
	    value: function isColor(color) {
	      return color && (color instanceof Color || this.isRgb(color) || this.test(color));
	    }
	  }]);

	  return Color;
	}();

	var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	// @@match logic
	fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible(this);
	      var matcher = regexp == undefined ? undefined : regexp[MATCH];
	      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative(nativeMatch, regexp, this);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      if (!rx.global) return regexpExecAbstract(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regexpExecAbstract(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);
	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$5 = objectDefineProperty.f;
	var trim$1 = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global_1[NUMBER];
	var NumberPrototype = NativeNumber.prototype;

	// Opera ~12 has broken Object#toString
	var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

	// `ToNumber` abstract operation
	// https://tc39.github.io/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim$1(it);
	    first = it.charCodeAt(0);
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
	        default: return +it;
	      }
	      digits = it.slice(2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = digits.charCodeAt(index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	// `Number` constructor
	// https://tc39.github.io/ecma262/#sec-number-constructor
	if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var dummy = this;
	    return dummy instanceof NumberWrapper
	      // check on 1..constructor(foo) case
	      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
	        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
	  };
	  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys$1.length > j; j++) {
	    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
	      defineProperty$5(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
	    }
	  }
	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  redefine(global_1, NUMBER, NumberWrapper);
	}

	var trim$2 = stringTrim.trim;


	var nativeParseFloat = global_1.parseFloat;
	var FORCED$2 = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

	// `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string
	var _parseFloat = FORCED$2 ? function parseFloat(string) {
	  var trimmedString = trim$2(String(string));
	  var result = nativeParseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : nativeParseFloat;

	// `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string
	_export({ global: true, forced: parseFloat != _parseFloat }, {
	  parseFloat: _parseFloat
	});

	var Point =
	/*#__PURE__*/
	function () {
	  // Initialize
	  function Point() {
	    _classCallCheck(this, Point);

	    this.init.apply(this, arguments);
	  }

	  _createClass(Point, [{
	    key: "init",
	    value: function init(x, y) {
	      var base = {
	        x: 0,
	        y: 0
	      }; // ensure source as object

	      var source = Array.isArray(x) ? {
	        x: x[0],
	        y: x[1]
	      } : _typeof(x) === 'object' ? {
	        x: x.x,
	        y: x.y
	      } : {
	        x: x,
	        y: y
	      }; // merge source

	      this.x = source.x == null ? base.x : source.x;
	      this.y = source.y == null ? base.y : source.y;
	      return this;
	    } // Clone point

	  }, {
	    key: "clone",
	    value: function clone() {
	      return new Point(this);
	    }
	  }, {
	    key: "transform",
	    value: function transform(m) {
	      return this.clone().transformO(m);
	    } // Transform point with matrix

	  }, {
	    key: "transformO",
	    value: function transformO(m) {
	      if (!Matrix.isMatrixLike(m)) {
	        m = new Matrix(m);
	      }

	      var x = this.x,
	          y = this.y; // Perform the matrix multiplication

	      this.x = m.a * x + m.c * y + m.e;
	      this.y = m.b * x + m.d * y + m.f;
	      return this;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      return [this.x, this.y];
	    }
	  }]);

	  return Point;
	}();
	function point(x, y) {
	  return new Point(x, y).transform(this.screenCTM().inverse());
	}

	function closeEnough(a, b, threshold) {
	  return Math.abs(b - a) < (threshold || 1e-6);
	}

	var Matrix =
	/*#__PURE__*/
	function () {
	  function Matrix() {
	    _classCallCheck(this, Matrix);

	    this.init.apply(this, arguments);
	  } // Initialize


	  _createClass(Matrix, [{
	    key: "init",
	    value: function init(source) {
	      var base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

	      source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : _typeof(source) === 'object' && Matrix.isMatrixLike(source) ? source : _typeof(source) === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

	      this.a = source.a != null ? source.a : base.a;
	      this.b = source.b != null ? source.b : base.b;
	      this.c = source.c != null ? source.c : base.c;
	      this.d = source.d != null ? source.d : base.d;
	      this.e = source.e != null ? source.e : base.e;
	      this.f = source.f != null ? source.f : base.f;
	      return this;
	    } // Clones this matrix

	  }, {
	    key: "clone",
	    value: function clone() {
	      return new Matrix(this);
	    } // Transform a matrix into another matrix by manipulating the space

	  }, {
	    key: "transform",
	    value: function transform(o) {
	      // Check if o is a matrix and then left multiply it directly
	      if (Matrix.isMatrixLike(o)) {
	        var matrix = new Matrix(o);
	        return matrix.multiplyO(this);
	      } // Get the proposed transformations and the current transformations


	      var t = Matrix.formatTransforms(o);
	      var current = this;

	      var _transform = new Point(t.ox, t.oy).transform(current),
	          ox = _transform.x,
	          oy = _transform.y; // Construct the resulting matrix


	      var transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

	      if (isFinite(t.px) || isFinite(t.py)) {
	        var origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)

	        var dx = t.px ? t.px - origin.x : 0;
	        var dy = t.py ? t.py - origin.y : 0;
	        transformer.translateO(dx, dy);
	      } // Translate now after positioning


	      transformer.translateO(t.tx, t.ty);
	      return transformer;
	    } // Applies a matrix defined by its affine parameters

	  }, {
	    key: "compose",
	    value: function compose(o) {
	      if (o.origin) {
	        o.originX = o.origin[0];
	        o.originY = o.origin[1];
	      } // Get the parameters


	      var ox = o.originX || 0;
	      var oy = o.originY || 0;
	      var sx = o.scaleX || 1;
	      var sy = o.scaleY || 1;
	      var lam = o.shear || 0;
	      var theta = o.rotate || 0;
	      var tx = o.translateX || 0;
	      var ty = o.translateY || 0; // Apply the standard matrix

	      var result = new Matrix().translateO(-ox, -oy).scaleO(sx, sy).shearO(lam).rotateO(theta).translateO(tx, ty).lmultiplyO(this).translateO(ox, oy);
	      return result;
	    } // Decomposes this matrix into its affine parameters

	  }, {
	    key: "decompose",
	    value: function decompose() {
	      var cx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var cy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      // Get the parameters from the matrix
	      var a = this.a;
	      var b = this.b;
	      var c = this.c;
	      var d = this.d;
	      var e = this.e;
	      var f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

	      var determinant = a * d - b * c;
	      var ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
	      // and the rotation of the resulting matrix

	      var sx = ccw * Math.sqrt(a * a + b * b);
	      var thetaRad = Math.atan2(ccw * b, ccw * a);
	      var theta = 180 / Math.PI * thetaRad;
	      var ct = Math.cos(thetaRad);
	      var st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
	      // two affine parameters directly from these parameters

	      var lam = (a * c + b * d) / determinant;
	      var sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

	      var tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
	      var ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

	      return {
	        // Return the affine parameters
	        scaleX: sx,
	        scaleY: sy,
	        shear: lam,
	        rotate: theta,
	        translateX: tx,
	        translateY: ty,
	        originX: cx,
	        originY: cy,
	        // Return the matrix parameters
	        a: this.a,
	        b: this.b,
	        c: this.c,
	        d: this.d,
	        e: this.e,
	        f: this.f
	      };
	    } // Left multiplies by the given matrix

	  }, {
	    key: "multiply",
	    value: function multiply(matrix) {
	      return this.clone().multiplyO(matrix);
	    }
	  }, {
	    key: "multiplyO",
	    value: function multiplyO(matrix) {
	      // Get the matrices
	      var l = this;
	      var r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
	      return Matrix.matrixMultiply(l, r, this);
	    }
	  }, {
	    key: "lmultiply",
	    value: function lmultiply(matrix) {
	      return this.clone().lmultiplyO(matrix);
	    }
	  }, {
	    key: "lmultiplyO",
	    value: function lmultiplyO(matrix) {
	      var r = this;
	      var l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
	      return Matrix.matrixMultiply(l, r, this);
	    } // Inverses matrix

	  }, {
	    key: "inverseO",
	    value: function inverseO() {
	      // Get the current parameters out of the matrix
	      var a = this.a;
	      var b = this.b;
	      var c = this.c;
	      var d = this.d;
	      var e = this.e;
	      var f = this.f; // Invert the 2x2 matrix in the top left

	      var det = a * d - b * c;
	      if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

	      var na = d / det;
	      var nb = -b / det;
	      var nc = -c / det;
	      var nd = a / det; // Apply the inverted matrix to the top right

	      var ne = -(na * e + nc * f);
	      var nf = -(nb * e + nd * f); // Construct the inverted matrix

	      this.a = na;
	      this.b = nb;
	      this.c = nc;
	      this.d = nd;
	      this.e = ne;
	      this.f = nf;
	      return this;
	    }
	  }, {
	    key: "inverse",
	    value: function inverse() {
	      return this.clone().inverseO();
	    } // Translate matrix

	  }, {
	    key: "translate",
	    value: function translate(x, y) {
	      return this.clone().translateO(x, y);
	    }
	  }, {
	    key: "translateO",
	    value: function translateO(x, y) {
	      this.e += x || 0;
	      this.f += y || 0;
	      return this;
	    } // Scale matrix

	  }, {
	    key: "scale",
	    value: function scale(x, y, cx, cy) {
	      var _this$clone;

	      return (_this$clone = this.clone()).scaleO.apply(_this$clone, arguments);
	    }
	  }, {
	    key: "scaleO",
	    value: function scaleO(x) {
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
	      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      // Support uniform scaling
	      if (arguments.length === 3) {
	        cy = cx;
	        cx = y;
	        y = x;
	      }

	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f;
	      this.a = a * x;
	      this.b = b * y;
	      this.c = c * x;
	      this.d = d * y;
	      this.e = e * x - cx * x + cx;
	      this.f = f * y - cy * y + cy;
	      return this;
	    } // Rotate matrix

	  }, {
	    key: "rotate",
	    value: function rotate(r, cx, cy) {
	      return this.clone().rotateO(r, cx, cy);
	    }
	  }, {
	    key: "rotateO",
	    value: function rotateO(r) {
	      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      // Convert degrees to radians
	      r = radians(r);
	      var cos = Math.cos(r);
	      var sin = Math.sin(r);
	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f;
	      this.a = a * cos - b * sin;
	      this.b = b * cos + a * sin;
	      this.c = c * cos - d * sin;
	      this.d = d * cos + c * sin;
	      this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
	      this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
	      return this;
	    } // Flip matrix on x or y, at a given offset

	  }, {
	    key: "flip",
	    value: function flip(axis, around) {
	      return this.clone().flipO(axis, around);
	    }
	  }, {
	    key: "flipO",
	    value: function flipO(axis, around) {
	      return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
	    } // Shear matrix

	  }, {
	    key: "shear",
	    value: function shear(a, cx, cy) {
	      return this.clone().shearO(a, cx, cy);
	    }
	  }, {
	    key: "shearO",
	    value: function shearO(lx) {
	      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f;
	      this.a = a + b * lx;
	      this.c = c + d * lx;
	      this.e = e + f * lx - cy * lx;
	      return this;
	    } // Skew Matrix

	  }, {
	    key: "skew",
	    value: function skew(x, y, cx, cy) {
	      var _this$clone2;

	      return (_this$clone2 = this.clone()).skewO.apply(_this$clone2, arguments);
	    }
	  }, {
	    key: "skewO",
	    value: function skewO(x) {
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
	      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      // support uniformal skew
	      if (arguments.length === 3) {
	        cy = cx;
	        cx = y;
	        y = x;
	      } // Convert degrees to radians


	      x = radians(x);
	      y = radians(y);
	      var lx = Math.tan(x);
	      var ly = Math.tan(y);
	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f;
	      this.a = a + b * lx;
	      this.b = b + a * ly;
	      this.c = c + d * lx;
	      this.d = d + c * ly;
	      this.e = e + f * lx - cy * lx;
	      this.f = f + e * ly - cx * ly;
	      return this;
	    } // SkewX

	  }, {
	    key: "skewX",
	    value: function skewX(x, cx, cy) {
	      return this.skew(x, 0, cx, cy);
	    }
	  }, {
	    key: "skewXO",
	    value: function skewXO(x, cx, cy) {
	      return this.skewO(x, 0, cx, cy);
	    } // SkewY

	  }, {
	    key: "skewY",
	    value: function skewY(y, cx, cy) {
	      return this.skew(0, y, cx, cy);
	    }
	  }, {
	    key: "skewYO",
	    value: function skewYO(y, cx, cy) {
	      return this.skewO(0, y, cx, cy);
	    } // Transform around a center point

	  }, {
	    key: "aroundO",
	    value: function aroundO(cx, cy, matrix) {
	      var dx = cx || 0;
	      var dy = cy || 0;
	      return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
	    }
	  }, {
	    key: "around",
	    value: function around(cx, cy, matrix) {
	      return this.clone().aroundO(cx, cy, matrix);
	    } // Check if two matrices are equal

	  }, {
	    key: "equals",
	    value: function equals(other) {
	      var comp = new Matrix(other);
	      return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
	    } // Convert matrix to string

	  }, {
	    key: "toString",
	    value: function toString() {
	      return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      return [this.a, this.b, this.c, this.d, this.e, this.f];
	    }
	  }, {
	    key: "valueOf",
	    value: function valueOf() {
	      return {
	        a: this.a,
	        b: this.b,
	        c: this.c,
	        d: this.d,
	        e: this.e,
	        f: this.f
	      };
	    }
	  }], [{
	    key: "fromArray",
	    value: function fromArray(a) {
	      return {
	        a: a[0],
	        b: a[1],
	        c: a[2],
	        d: a[3],
	        e: a[4],
	        f: a[5]
	      };
	    }
	  }, {
	    key: "isMatrixLike",
	    value: function isMatrixLike(o) {
	      return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
	    }
	  }, {
	    key: "formatTransforms",
	    value: function formatTransforms(o) {
	      // Get all of the parameters required to form the matrix
	      var flipBoth = o.flip === 'both' || o.flip === true;
	      var flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
	      var flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
	      var skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
	      var skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
	      var scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
	      var scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
	      var shear = o.shear || 0;
	      var theta = o.rotate || o.theta || 0;
	      var origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
	      var ox = origin.x;
	      var oy = origin.y;
	      var position = new Point(o.position || o.px || o.positionX, o.py || o.positionY);
	      var px = position.x;
	      var py = position.y;
	      var translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
	      var tx = translate.x;
	      var ty = translate.y;
	      var relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
	      var rx = relative.x;
	      var ry = relative.y; // Populate all of the values

	      return {
	        scaleX: scaleX,
	        scaleY: scaleY,
	        skewX: skewX,
	        skewY: skewY,
	        shear: shear,
	        theta: theta,
	        rx: rx,
	        ry: ry,
	        tx: tx,
	        ty: ty,
	        ox: ox,
	        oy: oy,
	        px: px,
	        py: py
	      };
	    } // left matrix, right matrix, target matrix which is overwritten

	  }, {
	    key: "matrixMultiply",
	    value: function matrixMultiply(l, r, o) {
	      // Work out the product directly
	      var a = l.a * r.a + l.c * r.b;
	      var b = l.b * r.a + l.d * r.b;
	      var c = l.a * r.c + l.c * r.d;
	      var d = l.b * r.c + l.d * r.d;
	      var e = l.e + l.a * r.e + l.c * r.f;
	      var f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

	      o.a = a;
	      o.b = b;
	      o.c = c;
	      o.d = d;
	      o.e = e;
	      o.f = f;
	      return o;
	    }
	  }]);

	  return Matrix;
	}();
	function ctm() {
	  return new Matrix(this.node.getCTM());
	}
	function screenCTM() {
	  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
	     This is needed because FF does not return the transformation matrix
	     for the inner coordinate system when getScreenCTM() is called on nested svgs.
	     However all other Browsers do that */
	  if (typeof this.isRoot === 'function' && !this.isRoot()) {
	    var rect = this.rect(1, 1);
	    var m = rect.node.getScreenCTM();
	    rect.remove();
	    return new Matrix(m);
	  }

	  return new Matrix(this.node.getScreenCTM());
	}
	register(Matrix, 'Matrix');

	function parser() {
	  // Reuse cached element if possible
	  if (!parser.nodes) {
	    var svg = makeInstance().size(2, 0);
	    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
	    svg.attr('focusable', 'false');
	    svg.attr('aria-hidden', 'true');
	    var path = svg.path().node;
	    parser.nodes = {
	      svg: svg,
	      path: path
	    };
	  }

	  if (!parser.nodes.svg.node.parentNode) {
	    var b = globals.document.body || globals.document.documentElement;
	    parser.nodes.svg.addTo(b);
	  }

	  return parser.nodes;
	}

	function isNulledBox(box) {
	  return !box.width && !box.height && !box.x && !box.y;
	}

	function domContains(node) {
	  return node === globals.document || (globals.document.documentElement.contains || function (node) {
	    // This is IE - it does not support contains() for top-level SVGs
	    while (node.parentNode) {
	      node = node.parentNode;
	    }

	    return node === globals.document;
	  }).call(globals.document.documentElement, node);
	}

	var Box =
	/*#__PURE__*/
	function () {
	  function Box() {
	    _classCallCheck(this, Box);

	    this.init.apply(this, arguments);
	  }

	  _createClass(Box, [{
	    key: "init",
	    value: function init(source) {
	      var base = [0, 0, 0, 0];
	      source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : _typeof(source) === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
	      this.x = source[0] || 0;
	      this.y = source[1] || 0;
	      this.width = this.w = source[2] || 0;
	      this.height = this.h = source[3] || 0; // Add more bounding box properties

	      this.x2 = this.x + this.w;
	      this.y2 = this.y + this.h;
	      this.cx = this.x + this.w / 2;
	      this.cy = this.y + this.h / 2;
	      return this;
	    } // Merge rect box with another, return a new instance

	  }, {
	    key: "merge",
	    value: function merge(box) {
	      var x = Math.min(this.x, box.x);
	      var y = Math.min(this.y, box.y);
	      var width = Math.max(this.x + this.width, box.x + box.width) - x;
	      var height = Math.max(this.y + this.height, box.y + box.height) - y;
	      return new Box(x, y, width, height);
	    }
	  }, {
	    key: "transform",
	    value: function transform(m) {
	      if (!(m instanceof Matrix)) {
	        m = new Matrix(m);
	      }

	      var xMin = Infinity;
	      var xMax = -Infinity;
	      var yMin = Infinity;
	      var yMax = -Infinity;
	      var pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
	      pts.forEach(function (p) {
	        p = p.transform(m);
	        xMin = Math.min(xMin, p.x);
	        xMax = Math.max(xMax, p.x);
	        yMin = Math.min(yMin, p.y);
	        yMax = Math.max(yMax, p.y);
	      });
	      return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
	    }
	  }, {
	    key: "addOffset",
	    value: function addOffset() {
	      // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
	      this.x += globals.window.pageXOffset;
	      this.y += globals.window.pageYOffset;
	      return this;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      return [this.x, this.y, this.width, this.height];
	    }
	  }, {
	    key: "isNulled",
	    value: function isNulled() {
	      return isNulledBox(this);
	    }
	  }]);

	  return Box;
	}();

	function getBox(cb, retry) {
	  var box;

	  try {
	    box = cb(this.node);

	    if (isNulledBox(box) && !domContains(this.node)) {
	      throw new Error('Element not in the dom');
	    }
	  } catch (e) {
	    box = retry(this);
	  }

	  return box;
	}

	function bbox() {
	  return new Box(getBox.call(this, function (node) {
	    return node.getBBox();
	  }, function (el) {
	    try {
	      var clone = el.clone().addTo(parser().svg).show();
	      var box = clone.node.getBBox();
	      clone.remove();
	      return box;
	    } catch (e) {
	      throw new Error('Getting bbox of element "' + el.node.nodeName + '" is not possible. ' + e.toString());
	    }
	  }));
	}
	function rbox(el) {
	  var box = new Box(getBox.call(this, function (node) {
	    return node.getBoundingClientRect();
	  }, function (el) {
	    throw new Error('Getting rbox of element "' + el.node.nodeName + '" is not possible');
	  }));
	  if (el) return box.transform(el.screenCTM().inverse());
	  return box.addOffset();
	}
	registerMethods({
	  viewbox: {
	    viewbox: function viewbox(x, y, width, height) {
	      // act as getter
	      if (x == null) return new Box(this.attr('viewBox')); // act as setter

	      return this.attr('viewBox', new Box(x, y, width, height));
	    },
	    zoom: function zoom(level, point) {
	      var width = this.node.clientWidth;
	      var height = this.node.clientHeight;
	      var v = this.viewbox(); // Firefox does not support clientHeight and returns 0
	      // https://bugzilla.mozilla.org/show_bug.cgi?id=874811

	      if (!width && !height) {
	        var style = window.getComputedStyle(this.node);
	        width = parseFloat(style.getPropertyValue('width'));
	        height = parseFloat(style.getPropertyValue('height'));
	      }

	      var zoomX = width / v.width;
	      var zoomY = height / v.height;
	      var zoom = Math.min(zoomX, zoomY);

	      if (level == null) {
	        return zoom;
	      }

	      var zoomAmount = zoom / level;
	      if (zoomAmount === Infinity) zoomAmount = Number.MIN_VALUE;
	      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
	      var box = new Box(v).transform(new Matrix({
	        scale: zoomAmount,
	        origin: point
	      }));
	      return this.viewbox(box);
	    }
	  }
	});
	register(Box, 'Box');

	/* eslint no-new-func: "off" */
	var subClassArray = function () {
	  try {
	    // try es6 subclassing
	    return Function('name', 'baseClass', '_constructor', ['baseClass = baseClass || Array', 'return {', '  [name]: class extends baseClass {', '    constructor (...args) {', '      super(...args)', '      _constructor && _constructor.apply(this, args)', '    }', '  }', '}[name]'].join('\n'));
	  } catch (e) {
	    // Use es5 approach
	    return function (name) {
	      var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;

	      var _constructor = arguments.length > 2 ? arguments[2] : undefined;

	      var Arr = function Arr() {
	        baseClass.apply(this, arguments);
	        _constructor && _constructor.apply(this, arguments);
	      };

	      Arr.prototype = Object.create(baseClass.prototype);
	      Arr.prototype.constructor = Arr;

	      Arr.prototype.map = function (fn) {
	        var arr = new Arr();
	        arr.push.apply(arr, Array.prototype.map.call(this, fn));
	        return arr;
	      };

	      return Arr;
	    };
	  }
	}();

	var List = subClassArray('List', Array, function () {
	  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  // This catches the case, that native map tries to create an array with new Array(1)
	  if (typeof arr === 'number') return this;
	  this.length = 0;
	  this.push.apply(this, _toConsumableArray(arr));
	});
	extend(List, {
	  each: function each(fnOrMethodName) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (typeof fnOrMethodName === 'function') {
	      return this.map(function (el) {
	        return fnOrMethodName.call(el, el);
	      });
	    } else {
	      return this.map(function (el) {
	        return el[fnOrMethodName].apply(el, args);
	      });
	    }
	  },
	  toArray: function toArray() {
	    return Array.prototype.concat.apply([], this);
	  }
	});
	var reserved = ['toArray', 'constructor', 'each'];

	List.extend = function (methods) {
	  methods = methods.reduce(function (obj, name) {
	    // Don't overwrite own methods
	    if (reserved.includes(name)) return obj; // Don't add private methods

	    if (name[0] === '_') return obj; // Relay every call to each()

	    obj[name] = function () {
	      for (var _len2 = arguments.length, attrs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        attrs[_key2] = arguments[_key2];
	      }

	      return this.each.apply(this, [name].concat(attrs));
	    };

	    return obj;
	  }, {});
	  extend(List, methods);
	};

	function baseFind(query, parent) {
	  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
	    return adopt(node);
	  }));
	} // Scoped find method

	function find(query) {
	  return baseFind(query, this.node);
	}
	function findOne(query) {
	  return adopt(this.node.querySelector(query));
	}

	var EventTarget =
	/*#__PURE__*/
	function (_Base) {
	  _inherits(EventTarget, _Base);

	  function EventTarget() {
	    var _this;

	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$events = _ref.events,
	        events = _ref$events === void 0 ? {} : _ref$events;

	    _classCallCheck(this, EventTarget);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventTarget).call(this));
	    _this.events = events;
	    return _this;
	  }

	  _createClass(EventTarget, [{
	    key: "addEventListener",
	    value: function addEventListener() {}
	  }, {
	    key: "dispatch",
	    value: function dispatch$1(event, data) {
	      return dispatch(this, event, data);
	    }
	  }, {
	    key: "dispatchEvent",
	    value: function dispatchEvent(event) {
	      var bag = this.getEventHolder().events;
	      if (!bag) return true;
	      var events = bag[event.type];

	      for (var i in events) {
	        for (var j in events[i]) {
	          events[i][j](event);
	        }
	      }

	      return !event.defaultPrevented;
	    } // Fire given event

	  }, {
	    key: "fire",
	    value: function fire(event, data) {
	      this.dispatch(event, data);
	      return this;
	    }
	  }, {
	    key: "getEventHolder",
	    value: function getEventHolder() {
	      return this;
	    }
	  }, {
	    key: "getEventTarget",
	    value: function getEventTarget() {
	      return this;
	    } // Unbind event from listener

	  }, {
	    key: "off",
	    value: function off$1(event, listener) {
	      off(this, event, listener);

	      return this;
	    } // Bind given event to listener

	  }, {
	    key: "on",
	    value: function on$1(event, listener, binding, options) {
	      on(this, event, listener, binding, options);

	      return this;
	    }
	  }, {
	    key: "removeEventListener",
	    value: function removeEventListener() {}
	  }]);

	  return EventTarget;
	}(Base);
	register(EventTarget, 'EventTarget');

	function noop() {} // Default animation values

	var timeline = {
	  duration: 400,
	  ease: '>',
	  delay: 0
	}; // Default attribute values

	var attrs = {
	  // fill and stroke
	  'fill-opacity': 1,
	  'stroke-opacity': 1,
	  'stroke-width': 0,
	  'stroke-linejoin': 'miter',
	  'stroke-linecap': 'butt',
	  fill: '#000000',
	  stroke: '#000000',
	  opacity: 1,
	  // position
	  x: 0,
	  y: 0,
	  cx: 0,
	  cy: 0,
	  // size
	  width: 0,
	  height: 0,
	  // radius
	  r: 0,
	  rx: 0,
	  ry: 0,
	  // gradient
	  offset: 0,
	  'stop-opacity': 1,
	  'stop-color': '#000000',
	  // text
	  'text-anchor': 'start'
	};

	var defaults = ({
		__proto__: null,
		noop: noop,
		timeline: timeline,
		attrs: attrs
	});

	var SVGArray = subClassArray('SVGArray', Array, function (arr) {
	  this.init(arr);
	});
	extend(SVGArray, {
	  init: function init(arr) {
	    // This catches the case, that native map tries to create an array with new Array(1)
	    if (typeof arr === 'number') return this;
	    this.length = 0;
	    this.push.apply(this, _toConsumableArray(this.parse(arr)));
	    return this;
	  },
	  toArray: function toArray() {
	    return Array.prototype.concat.apply([], this);
	  },
	  toString: function toString() {
	    return this.join(' ');
	  },
	  // Flattens the array if needed
	  valueOf: function valueOf() {
	    var ret = [];
	    ret.push.apply(ret, _toConsumableArray(this));
	    return ret;
	  },
	  // Parse whitespace separated string
	  parse: function parse() {
	    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    // If already is an array, no need to parse it
	    if (array instanceof Array) return array;
	    return array.trim().split(delimiter).map(parseFloat);
	  },
	  clone: function clone() {
	    return new this.constructor(this);
	  },
	  toSet: function toSet() {
	    return new Set(this);
	  }
	});

	var SVGNumber =
	/*#__PURE__*/
	function () {
	  // Initialize
	  function SVGNumber() {
	    _classCallCheck(this, SVGNumber);

	    this.init.apply(this, arguments);
	  }

	  _createClass(SVGNumber, [{
	    key: "init",
	    value: function init(value, unit) {
	      unit = Array.isArray(value) ? value[1] : unit;
	      value = Array.isArray(value) ? value[0] : value; // initialize defaults

	      this.value = 0;
	      this.unit = unit || ''; // parse value

	      if (typeof value === 'number') {
	        // ensure a valid numeric value
	        this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
	      } else if (typeof value === 'string') {
	        unit = value.match(numberAndUnit);

	        if (unit) {
	          // make value numeric
	          this.value = parseFloat(unit[1]); // normalize

	          if (unit[5] === '%') {
	            this.value /= 100;
	          } else if (unit[5] === 's') {
	            this.value *= 1000;
	          } // store unit


	          this.unit = unit[5];
	        }
	      } else {
	        if (value instanceof SVGNumber) {
	          this.value = value.valueOf();
	          this.unit = value.unit;
	        }
	      }

	      return this;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
	    }
	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.toString();
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      return [this.value, this.unit];
	    }
	  }, {
	    key: "valueOf",
	    value: function valueOf() {
	      return this.value;
	    } // Add number

	  }, {
	    key: "plus",
	    value: function plus(number) {
	      number = new SVGNumber(number);
	      return new SVGNumber(this + number, this.unit || number.unit);
	    } // Subtract number

	  }, {
	    key: "minus",
	    value: function minus(number) {
	      number = new SVGNumber(number);
	      return new SVGNumber(this - number, this.unit || number.unit);
	    } // Multiply number

	  }, {
	    key: "times",
	    value: function times(number) {
	      number = new SVGNumber(number);
	      return new SVGNumber(this * number, this.unit || number.unit);
	    } // Divide number

	  }, {
	    key: "divide",
	    value: function divide(number) {
	      number = new SVGNumber(number);
	      return new SVGNumber(this / number, this.unit || number.unit);
	    }
	  }, {
	    key: "convert",
	    value: function convert(unit) {
	      return new SVGNumber(this.value, unit);
	    }
	  }]);

	  return SVGNumber;
	}();

	var hooks = [];
	function registerAttrHook(fn) {
	  hooks.push(fn);
	} // Set svg element attribute

	function attr(attr, val, ns) {
	  var _this = this;

	  // act as full getter
	  if (attr == null) {
	    // get an object of attributes
	    attr = {};
	    val = this.node.attributes;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var node = _step.value;
	        attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return != null) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return attr;
	  } else if (attr instanceof Array) {
	    // loop through array and get all values
	    return attr.reduce(function (last, curr) {
	      last[curr] = _this.attr(curr);
	      return last;
	    }, {});
	  } else if (_typeof(attr) === 'object' && attr.constructor === Object) {
	    // apply every attribute individually if an object is passed
	    for (val in attr) {
	      this.attr(val, attr[val]);
	    }
	  } else if (val === null) {
	    // remove value
	    this.node.removeAttribute(attr);
	  } else if (val == null) {
	    // act as a getter if the first and only argument is not an object
	    val = this.node.getAttribute(attr);
	    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
	  } else {
	    // Loop through hooks and execute them to convert value
	    val = hooks.reduce(function (_val, hook) {
	      return hook(attr, _val, _this);
	    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

	    if (typeof val === 'number') {
	      val = new SVGNumber(val);
	    } else if (Color.isColor(val)) {
	      // ensure full hex color
	      val = new Color(val);
	    } else if (val.constructor === Array) {
	      // Check for plain arrays and parse array values
	      val = new SVGArray(val);
	    } // if the passed attribute is leading...


	    if (attr === 'leading') {
	      // ... call the leading method instead
	      if (this.leading) {
	        this.leading(val);
	      }
	    } else {
	      // set given attribute on node
	      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
	    } // rebuild if required


	    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
	      this.rebuild();
	    }
	  }

	  return this;
	}

	var Dom =
	/*#__PURE__*/
	function (_EventTarget) {
	  _inherits(Dom, _EventTarget);

	  function Dom(node, attrs) {
	    var _this2;

	    _classCallCheck(this, Dom);

	    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Dom).call(this, node));
	    _this2.node = node;
	    _this2.type = node.nodeName;

	    if (attrs && node !== attrs) {
	      _this2.attr(attrs);
	    }

	    return _this2;
	  } // Add given element at a position


	  _createClass(Dom, [{
	    key: "add",
	    value: function add(element, i) {
	      element = makeInstance(element);

	      if (i == null) {
	        this.node.appendChild(element.node);
	      } else if (element.node !== this.node.childNodes[i]) {
	        this.node.insertBefore(element.node, this.node.childNodes[i]);
	      }

	      return this;
	    } // Add element to given container and return self

	  }, {
	    key: "addTo",
	    value: function addTo(parent) {
	      return makeInstance(parent).put(this);
	    } // Returns all child elements

	  }, {
	    key: "children",
	    value: function children() {
	      return new List(map(this.node.children, function (node) {
	        return adopt(node);
	      }));
	    } // Remove all elements in this container

	  }, {
	    key: "clear",
	    value: function clear() {
	      // remove children
	      while (this.node.hasChildNodes()) {
	        this.node.removeChild(this.node.lastChild);
	      }

	      return this;
	    } // Clone element

	  }, {
	    key: "clone",
	    value: function clone() {
	      // write dom data to the dom so the clone can pickup the data
	      this.writeDataToDom(); // clone element and assign new id

	      return assignNewId(this.node.cloneNode(true));
	    } // Iterates over all children and invokes a given block

	  }, {
	    key: "each",
	    value: function each(block, deep) {
	      var children = this.children();
	      var i, il;

	      for (i = 0, il = children.length; i < il; i++) {
	        block.apply(children[i], [i, children]);

	        if (deep) {
	          children[i].each(block, deep);
	        }
	      }

	      return this;
	    }
	  }, {
	    key: "element",
	    value: function element(nodeName) {
	      return this.put(new Dom(create(nodeName)));
	    } // Get first child

	  }, {
	    key: "first",
	    value: function first() {
	      return adopt(this.node.firstChild);
	    } // Get a element at the given index

	  }, {
	    key: "get",
	    value: function get(i) {
	      return adopt(this.node.childNodes[i]);
	    }
	  }, {
	    key: "getEventHolder",
	    value: function getEventHolder() {
	      return this.node;
	    }
	  }, {
	    key: "getEventTarget",
	    value: function getEventTarget() {
	      return this.node;
	    } // Checks if the given element is a child

	  }, {
	    key: "has",
	    value: function has(element) {
	      return this.index(element) >= 0;
	    } // Get / set id

	  }, {
	    key: "id",
	    value: function id(_id) {
	      // generate new id if no id set
	      if (typeof _id === 'undefined' && !this.node.id) {
	        this.node.id = eid(this.type);
	      } // dont't set directly width this.node.id to make `null` work correctly


	      return this.attr('id', _id);
	    } // Gets index of given element

	  }, {
	    key: "index",
	    value: function index(element) {
	      return [].slice.call(this.node.childNodes).indexOf(element.node);
	    } // Get the last child

	  }, {
	    key: "last",
	    value: function last() {
	      return adopt(this.node.lastChild);
	    } // matches the element vs a css selector

	  }, {
	    key: "matches",
	    value: function matches(selector) {
	      var el = this.node;
	      return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
	    } // Returns the parent element instance

	  }, {
	    key: "parent",
	    value: function parent(type) {
	      var parent = this; // check for parent

	      if (!parent.node.parentNode) return null; // get parent element

	      parent = adopt(parent.node.parentNode);
	      if (!type) return parent; // loop trough ancestors if type is given

	      while (parent) {
	        if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
	        if (!parent.node.parentNode || parent.node.parentNode.nodeName === '#document' || parent.node.parentNode.nodeName === '#document-fragment') return null; // #759, #720

	        parent = adopt(parent.node.parentNode);
	      }
	    } // Basically does the same as `add()` but returns the added element instead

	  }, {
	    key: "put",
	    value: function put(element, i) {
	      this.add(element, i);
	      return element;
	    } // Add element to given container and return container

	  }, {
	    key: "putIn",
	    value: function putIn(parent) {
	      return makeInstance(parent).add(this);
	    } // Remove element

	  }, {
	    key: "remove",
	    value: function remove() {
	      if (this.parent()) {
	        this.parent().removeElement(this);
	      }

	      return this;
	    } // Remove a given child

	  }, {
	    key: "removeElement",
	    value: function removeElement(element) {
	      this.node.removeChild(element.node);
	      return this;
	    } // Replace this with element

	  }, {
	    key: "replace",
	    value: function replace(element) {
	      element = makeInstance(element);
	      this.node.parentNode.replaceChild(element.node, this.node);
	      return element;
	    }
	  }, {
	    key: "round",
	    value: function round() {
	      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
	      var map = arguments.length > 1 ? arguments[1] : undefined;
	      var factor = Math.pow(10, precision);
	      var attrs = this.attr(); // If we have no map, build one from attrs

	      if (!map) {
	        map = Object.keys(attrs);
	      } // Holds rounded attributes


	      var newAttrs = {};
	      map.forEach(function (key) {
	        newAttrs[key] = Math.round(attrs[key] * factor) / factor;
	      });
	      this.attr(newAttrs);
	      return this;
	    } // Return id on string conversion

	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.id();
	    } // Import raw svg

	  }, {
	    key: "svg",
	    value: function svg(svgOrFn, outerHTML) {
	      var well, len, fragment;

	      if (svgOrFn === false) {
	        outerHTML = false;
	        svgOrFn = null;
	      } // act as getter if no svg string is given


	      if (svgOrFn == null || typeof svgOrFn === 'function') {
	        // The default for exports is, that the outerNode is included
	        outerHTML = outerHTML == null ? true : outerHTML; // write svgjs data to the dom

	        this.writeDataToDom();
	        var current = this; // An export modifier was passed

	        if (svgOrFn != null) {
	          current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

	          if (outerHTML) {
	            var result = svgOrFn(current);
	            current = result || current; // The user does not want this node? Well, then he gets nothing

	            if (result === false) return '';
	          } // Deep loop through all children and apply modifier


	          current.each(function () {
	            var result = svgOrFn(this);

	            var _this = result || this; // If modifier returns false, discard node


	            if (result === false) {
	              this.remove(); // If modifier returns new node, use it
	            } else if (result && this !== _this) {
	              this.replace(_this);
	            }
	          }, true);
	        } // Return outer or inner content


	        return outerHTML ? current.node.outerHTML : current.node.innerHTML;
	      } // Act as setter if we got a string
	      // The default for import is, that the current node is not replaced


	      outerHTML = outerHTML == null ? false : outerHTML; // Create temporary holder

	      well = globals.document.createElementNS(ns, 'svg');
	      fragment = globals.document.createDocumentFragment(); // Dump raw svg

	      well.innerHTML = svgOrFn; // Transplant nodes into the fragment

	      for (len = well.children.length; len--;) {
	        fragment.appendChild(well.firstElementChild);
	      }

	      var parent = this.parent(); // Add the whole fragment at once

	      return outerHTML ? this.replace(fragment) && parent : this.add(fragment);
	    }
	  }, {
	    key: "words",
	    value: function words(text) {
	      // This is faster than removing all children and adding a new one
	      this.node.textContent = text;
	      return this;
	    } // write svgjs data to the dom

	  }, {
	    key: "writeDataToDom",
	    value: function writeDataToDom() {
	      // dump variables recursively
	      this.each(function () {
	        this.writeDataToDom();
	      });
	      return this;
	    }
	  }]);

	  return Dom;
	}(EventTarget);
	extend(Dom, {
	  attr: attr,
	  find: find,
	  findOne: findOne
	});
	register(Dom, 'Dom');

	var Element =
	/*#__PURE__*/
	function (_Dom) {
	  _inherits(Element, _Dom);

	  function Element(node, attrs) {
	    var _this;

	    _classCallCheck(this, Element);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, node, attrs)); // initialize data object

	    _this.dom = {}; // create circular reference

	    _this.node.instance = _assertThisInitialized(_this);

	    if (node.hasAttribute('svgjs:data')) {
	      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
	      _this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
	    }

	    return _this;
	  } // Move element by its center


	  _createClass(Element, [{
	    key: "center",
	    value: function center(x, y) {
	      return this.cx(x).cy(y);
	    } // Move by center over x-axis

	  }, {
	    key: "cx",
	    value: function cx(x) {
	      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
	    } // Move by center over y-axis

	  }, {
	    key: "cy",
	    value: function cy(y) {
	      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
	    } // Get defs

	  }, {
	    key: "defs",
	    value: function defs() {
	      return this.root().defs();
	    } // Relative move over x and y axes

	  }, {
	    key: "dmove",
	    value: function dmove(x, y) {
	      return this.dx(x).dy(y);
	    } // Relative move over x axis

	  }, {
	    key: "dx",
	    value: function dx() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      return this.x(new SVGNumber(x).plus(this.x()));
	    } // Relative move over y axis

	  }, {
	    key: "dy",
	    value: function dy() {
	      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      return this.y(new SVGNumber(y).plus(this.y()));
	    } // Get parent document

	  }, {
	    key: "root",
	    value: function root$1() {
	      var p = this.parent(getClass(root));
	      return p && p.root();
	    }
	  }, {
	    key: "getEventHolder",
	    value: function getEventHolder() {
	      return this;
	    } // Set height of element

	  }, {
	    key: "height",
	    value: function height(_height) {
	      return this.attr('height', _height);
	    } // Checks whether the given point inside the bounding box of the element

	  }, {
	    key: "inside",
	    value: function inside(x, y) {
	      var box = this.bbox();
	      return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
	    } // Move element to given x and y values

	  }, {
	    key: "move",
	    value: function move(x, y) {
	      return this.x(x).y(y);
	    } // return array of all ancestors of given type up to the root svg

	  }, {
	    key: "parents",
	    value: function parents() {
	      var until = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globals.document;
	      until = makeInstance(until);
	      var parents = new List();
	      var parent = this;

	      while ((parent = parent.parent()) && parent.node !== until.node && parent.node !== globals.document) {
	        parents.push(parent);
	      }

	      return parents;
	    } // Get referenced element form attribute value

	  }, {
	    key: "reference",
	    value: function reference$1(attr) {
	      attr = this.attr(attr);
	      if (!attr) return null;
	      var m = attr.match(reference);
	      return m ? makeInstance(m[1]) : null;
	    } // set given data to the elements data property

	  }, {
	    key: "setData",
	    value: function setData(o) {
	      this.dom = o;
	      return this;
	    } // Set element size to given width and height

	  }, {
	    key: "size",
	    value: function size(width, height) {
	      var p = proportionalSize(this, width, height);
	      return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
	    } // Set width of element

	  }, {
	    key: "width",
	    value: function width(_width) {
	      return this.attr('width', _width);
	    } // write svgjs data to the dom

	  }, {
	    key: "writeDataToDom",
	    value: function writeDataToDom() {
	      // remove previously set data
	      this.node.removeAttribute('svgjs:data');

	      if (Object.keys(this.dom).length) {
	        this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
	      }

	      return _get(_getPrototypeOf(Element.prototype), "writeDataToDom", this).call(this);
	    } // Move over x-axis

	  }, {
	    key: "x",
	    value: function x(_x) {
	      return this.attr('x', _x);
	    } // Move over y-axis

	  }, {
	    key: "y",
	    value: function y(_y) {
	      return this.attr('y', _y);
	    }
	  }]);

	  return Element;
	}(Dom);
	extend(Element, {
	  bbox: bbox,
	  rbox: rbox,
	  point: point,
	  ctm: ctm,
	  screenCTM: screenCTM
	});
	register(Element, 'Element');

	var sugar = {
	  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
	  fill: ['color', 'opacity', 'rule'],
	  prefix: function prefix(t, a) {
	    return a === 'color' ? t : t + '-' + a;
	  }
	} // Add sugar for fill and stroke
	;
	['fill', 'stroke'].forEach(function (m) {
	  var extension = {};
	  var i;

	  extension[m] = function (o) {
	    if (typeof o === 'undefined') {
	      return this.attr(m);
	    }

	    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
	      this.attr(m, o);
	    } else {
	      // set all attributes from sugar.fill and sugar.stroke list
	      for (i = sugar[m].length - 1; i >= 0; i--) {
	        if (o[sugar[m][i]] != null) {
	          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
	        }
	      }
	    }

	    return this;
	  };

	  registerMethods(['Element', 'Runner'], extension);
	});
	registerMethods(['Element', 'Runner'], {
	  // Let the user set the matrix directly
	  matrix: function matrix(mat, b, c, d, e, f) {
	    // Act as a getter
	    if (mat == null) {
	      return new Matrix(this);
	    } // Act as a setter, the user can pass a matrix or a set of numbers


	    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
	  },
	  // Map rotation to transform
	  rotate: function rotate(angle, cx, cy) {
	    return this.transform({
	      rotate: angle,
	      ox: cx,
	      oy: cy
	    }, true);
	  },
	  // Map skew to transform
	  skew: function skew(x, y, cx, cy) {
	    return arguments.length === 1 || arguments.length === 3 ? this.transform({
	      skew: x,
	      ox: y,
	      oy: cx
	    }, true) : this.transform({
	      skew: [x, y],
	      ox: cx,
	      oy: cy
	    }, true);
	  },
	  shear: function shear(lam, cx, cy) {
	    return this.transform({
	      shear: lam,
	      ox: cx,
	      oy: cy
	    }, true);
	  },
	  // Map scale to transform
	  scale: function scale(x, y, cx, cy) {
	    return arguments.length === 1 || arguments.length === 3 ? this.transform({
	      scale: x,
	      ox: y,
	      oy: cx
	    }, true) : this.transform({
	      scale: [x, y],
	      ox: cx,
	      oy: cy
	    }, true);
	  },
	  // Map translate to transform
	  translate: function translate(x, y) {
	    return this.transform({
	      translate: [x, y]
	    }, true);
	  },
	  // Map relative translations to transform
	  relative: function relative(x, y) {
	    return this.transform({
	      relative: [x, y]
	    }, true);
	  },
	  // Map flip to transform
	  flip: function flip(direction, around) {
	    var directionString = typeof direction === 'string' ? direction : isFinite(direction) ? 'both' : 'both';
	    var origin = direction === 'both' && isFinite(around) ? [around, around] : direction === 'x' ? [around, 0] : direction === 'y' ? [0, around] : isFinite(direction) ? [direction, direction] : [0, 0];
	    return this.transform({
	      flip: directionString,
	      origin: origin
	    }, true);
	  },
	  // Opacity
	  opacity: function opacity(value) {
	    return this.attr('opacity', value);
	  }
	});
	registerMethods('radius', {
	  // Add x and y radius
	  radius: function radius(x, y) {
	    var type = (this._element || this).type;
	    return type === 'radialGradient' || type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y == null ? x : y);
	  }
	});
	registerMethods('Path', {
	  // Get path length
	  length: function length() {
	    return this.node.getTotalLength();
	  },
	  // Get point at length
	  pointAt: function pointAt(length) {
	    return new Point(this.node.getPointAtLength(length));
	  }
	});
	registerMethods(['Element', 'Runner'], {
	  // Set font
	  font: function font(a, v) {
	    if (_typeof(a) === 'object') {
	      for (v in a) {
	        this.font(v, a[v]);
	      }

	      return this;
	    }

	    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
	  }
	});
	registerMethods('Text', {
	  ax: function ax(x) {
	    return this.attr('x', x);
	  },
	  ay: function ay(y) {
	    return this.attr('y', y);
	  },
	  amove: function amove(x, y) {
	    return this.ax(x).ay(y);
	  }
	}); // Add events to elements

	var methods$1 = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
	  // add event to Element
	  var fn = function fn(f) {
	    if (f === null) {
	      off(this, event);
	    } else {
	      on(this, event, f);
	    }

	    return this;
	  };

	  last[event] = fn;
	  return last;
	}, {});
	registerMethods('Element', methods$1);

	var nativeReverse = [].reverse;
	var test$1 = [1, 2];

	// `Array.prototype.reverse` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794
	_export({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign
	    if (isArray(this)) this.length = this.length;
	    return nativeReverse.call(this);
	  }
	});

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
	  defineProperties: objectDefineProperties
	});

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
	  defineProperty: objectDefineProperty.f
	});

	var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;


	var FAILS_ON_PRIMITIVES$2 = fails(function () { nativeGetOwnPropertyDescriptor$2(1); });
	var FORCED$3 = !descriptors || FAILS_ON_PRIMITIVES$2;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	_export({ target: 'Object', stat: true, forced: FORCED$3, sham: !descriptors }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
	  }
	});

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	_export({ target: 'Object', stat: true, sham: !descriptors }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function untransform() {
	  return this.attr('transform', null);
	} // merge the whole transformation chain into one matrix and returns it

	function matrixify() {
	  var matrix = (this.attr('transform') || ''). // split transformations
	  split(transforms).slice(0, -1).map(function (str) {
	    // generate key => value pairs
	    var kv = str.trim().split('(');
	    return [kv[0], kv[1].split(delimiter).map(function (str) {
	      return parseFloat(str);
	    })];
	  }).reverse() // merge every transformation into one matrix
	  .reduce(function (matrix, transform) {
	    if (transform[0] === 'matrix') {
	      return matrix.lmultiply(Matrix.fromArray(transform[1]));
	    }

	    return matrix[transform[0]].apply(matrix, transform[1]);
	  }, new Matrix());
	  return matrix;
	} // add an element to another parent without changing the visual representation on the screen

	function toParent(parent) {
	  if (this === parent) return this;
	  var ctm = this.screenCTM();
	  var pCtm = parent.screenCTM().inverse();
	  this.addTo(parent).untransform().transform(pCtm.multiply(ctm));
	  return this;
	} // same as above with parent equals root-svg

	function toRoot() {
	  return this.toParent(this.root());
	} // Add transformations

	function transform(o, relative) {
	  // Act as a getter if no object was passed
	  if (o == null || typeof o === 'string') {
	    var decomposed = new Matrix(this).decompose();
	    return o == null ? decomposed : decomposed[o];
	  }

	  if (!Matrix.isMatrixLike(o)) {
	    // Set the origin according to the defined transform
	    o = _objectSpread({}, o, {
	      origin: getOrigin(o, this)
	    });
	  } // The user can pass a boolean, an Element or an Matrix or nothing


	  var cleanRelative = relative === true ? this : relative || false;
	  var result = new Matrix(cleanRelative).transform(o);
	  return this.attr('transform', result);
	}
	registerMethods('Element', {
	  untransform: untransform,
	  matrixify: matrixify,
	  toParent: toParent,
	  toRoot: toRoot,
	  transform: transform
	});

	function rx(rx) {
	  return this.attr('rx', rx);
	} // Radius y value

	function ry(ry) {
	  return this.attr('ry', ry);
	} // Move over x-axis

	function x(x) {
	  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
	} // Move over y-axis

	function y(y) {
	  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
	} // Move by center over x-axis

	function cx(x) {
	  return x == null ? this.attr('cx') : this.attr('cx', x);
	} // Move by center over y-axis

	function cy(y) {
	  return y == null ? this.attr('cy') : this.attr('cy', y);
	} // Set width of element

	function width(width) {
	  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
	} // Set height of element

	function height(height) {
	  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
	}

	var circled = ({
		__proto__: null,
		rx: rx,
		ry: ry,
		x: x,
		y: y,
		cx: cx,
		cy: cy,
		width: width,
		height: height
	});

	var Shape =
	/*#__PURE__*/
	function (_Element) {
	  _inherits(Shape, _Element);

	  function Shape() {
	    _classCallCheck(this, Shape);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Shape).apply(this, arguments));
	  }

	  return Shape;
	}(Element);
	register(Shape, 'Shape');

	var Circle =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Circle, _Shape);

	  function Circle(node) {
	    _classCallCheck(this, Circle);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, nodeOrNew('circle', node), node));
	  }

	  _createClass(Circle, [{
	    key: "radius",
	    value: function radius(r) {
	      return this.attr('r', r);
	    } // Radius x value

	  }, {
	    key: "rx",
	    value: function rx(_rx) {
	      return this.attr('r', _rx);
	    } // Alias radius x value

	  }, {
	    key: "ry",
	    value: function ry(_ry) {
	      return this.rx(_ry);
	    }
	  }, {
	    key: "size",
	    value: function size(_size) {
	      return this.radius(new SVGNumber(_size).divide(2));
	    }
	  }]);

	  return Circle;
	}(Shape);
	extend(Circle, {
	  x: x,
	  y: y,
	  cx: cx,
	  cy: cy,
	  width: width,
	  height: height
	});
	registerMethods({
	  Container: {
	    // Create circle element
	    circle: wrapWithAttrCheck(function (size) {
	      return this.put(new Circle()).size(size).move(0, 0);
	    })
	  }
	});
	register(Circle, 'Circle');

	var Container =
	/*#__PURE__*/
	function (_Element) {
	  _inherits(Container, _Element);

	  function Container() {
	    _classCallCheck(this, Container);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
	  }

	  _createClass(Container, [{
	    key: "flatten",
	    value: function flatten(parent) {
	      this.each(function () {
	        if (this instanceof Container) return this.flatten(parent).ungroup(parent);
	        return this.toParent(parent);
	      }); // we need this so that the root does not get removed

	      this.node.firstElementChild || this.remove();
	      return this;
	    }
	  }, {
	    key: "ungroup",
	    value: function ungroup(parent) {
	      parent = parent || this.parent();
	      this.each(function () {
	        return this.toParent(parent);
	      });
	      this.remove();
	      return this;
	    }
	  }]);

	  return Container;
	}(Element);
	register(Container, 'Container');

	var Defs =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(Defs, _Container);

	  function Defs(node) {
	    _classCallCheck(this, Defs);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Defs).call(this, nodeOrNew('defs', node), node));
	  }

	  _createClass(Defs, [{
	    key: "flatten",
	    value: function flatten() {
	      return this;
	    }
	  }, {
	    key: "ungroup",
	    value: function ungroup() {
	      return this;
	    }
	  }]);

	  return Defs;
	}(Container);
	register(Defs, 'Defs');

	var Ellipse =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Ellipse, _Shape);

	  function Ellipse(node) {
	    _classCallCheck(this, Ellipse);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Ellipse).call(this, nodeOrNew('ellipse', node), node));
	  }

	  _createClass(Ellipse, [{
	    key: "size",
	    value: function size(width, height) {
	      var p = proportionalSize(this, width, height);
	      return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
	    }
	  }]);

	  return Ellipse;
	}(Shape);
	extend(Ellipse, circled);
	registerMethods('Container', {
	  // Create an ellipse
	  ellipse: wrapWithAttrCheck(function () {
	    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
	    return this.put(new Ellipse()).size(width, height).move(0, 0);
	  })
	});
	register(Ellipse, 'Ellipse');

	var Stop =
	/*#__PURE__*/
	function (_Element) {
	  _inherits(Stop, _Element);

	  function Stop(node) {
	    _classCallCheck(this, Stop);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Stop).call(this, nodeOrNew('stop', node), node));
	  } // add color stops


	  _createClass(Stop, [{
	    key: "update",
	    value: function update(o) {
	      if (typeof o === 'number' || o instanceof SVGNumber) {
	        o = {
	          offset: arguments[0],
	          color: arguments[1],
	          opacity: arguments[2]
	        };
	      } // set attributes


	      if (o.opacity != null) this.attr('stop-opacity', o.opacity);
	      if (o.color != null) this.attr('stop-color', o.color);
	      if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
	      return this;
	    }
	  }]);

	  return Stop;
	}(Element);
	register(Stop, 'Stop');

	function from(x, y) {
	  return (this._element || this).type === 'radialGradient' ? this.attr({
	    fx: new SVGNumber(x),
	    fy: new SVGNumber(y)
	  }) : this.attr({
	    x1: new SVGNumber(x),
	    y1: new SVGNumber(y)
	  });
	}
	function to(x, y) {
	  return (this._element || this).type === 'radialGradient' ? this.attr({
	    cx: new SVGNumber(x),
	    cy: new SVGNumber(y)
	  }) : this.attr({
	    x2: new SVGNumber(x),
	    y2: new SVGNumber(y)
	  });
	}

	var gradiented = ({
		__proto__: null,
		from: from,
		to: to
	});

	var Gradient =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(Gradient, _Container);

	  function Gradient(type, attrs) {
	    _classCallCheck(this, Gradient);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Gradient).call(this, nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs));
	  } // Add a color stop


	  _createClass(Gradient, [{
	    key: "stop",
	    value: function stop(offset, color, opacity) {
	      return this.put(new Stop()).update(offset, color, opacity);
	    } // Update gradient

	  }, {
	    key: "update",
	    value: function update(block) {
	      // remove all stops
	      this.clear(); // invoke passed block

	      if (typeof block === 'function') {
	        block.call(this, this);
	      }

	      return this;
	    } // Return the fill id

	  }, {
	    key: "url",
	    value: function url() {
	      return 'url(#' + this.id() + ')';
	    } // Alias string convertion to fill

	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.url();
	    } // custom attr to handle transform

	  }, {
	    key: "attr",
	    value: function attr(a, b, c) {
	      if (a === 'transform') a = 'gradientTransform';
	      return _get(_getPrototypeOf(Gradient.prototype), "attr", this).call(this, a, b, c);
	    }
	  }, {
	    key: "targets",
	    value: function targets() {
	      return baseFind('svg [fill*="' + this.id() + '"]');
	    }
	  }, {
	    key: "bbox",
	    value: function bbox() {
	      return new Box();
	    }
	  }]);

	  return Gradient;
	}(Container);
	extend(Gradient, gradiented);
	registerMethods({
	  Container: {
	    // Create gradient element in defs
	    gradient: wrapWithAttrCheck(function (type, block) {
	      return this.defs().gradient(type, block);
	    })
	  },
	  // define gradient
	  Defs: {
	    gradient: wrapWithAttrCheck(function (type, block) {
	      return this.put(new Gradient(type)).update(block);
	    })
	  }
	});
	register(Gradient, 'Gradient');

	var Pattern =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(Pattern, _Container);

	  // Initialize node
	  function Pattern(node) {
	    _classCallCheck(this, Pattern);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Pattern).call(this, nodeOrNew('pattern', node), node));
	  } // Return the fill id


	  _createClass(Pattern, [{
	    key: "url",
	    value: function url() {
	      return 'url(#' + this.id() + ')';
	    } // Update pattern by rebuilding

	  }, {
	    key: "update",
	    value: function update(block) {
	      // remove content
	      this.clear(); // invoke passed block

	      if (typeof block === 'function') {
	        block.call(this, this);
	      }

	      return this;
	    } // Alias string convertion to fill

	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.url();
	    } // custom attr to handle transform

	  }, {
	    key: "attr",
	    value: function attr(a, b, c) {
	      if (a === 'transform') a = 'patternTransform';
	      return _get(_getPrototypeOf(Pattern.prototype), "attr", this).call(this, a, b, c);
	    }
	  }, {
	    key: "targets",
	    value: function targets() {
	      return baseFind('svg [fill*="' + this.id() + '"]');
	    }
	  }, {
	    key: "bbox",
	    value: function bbox() {
	      return new Box();
	    }
	  }]);

	  return Pattern;
	}(Container);
	registerMethods({
	  Container: {
	    // Create pattern element in defs
	    pattern: function pattern() {
	      var _this$defs;

	      return (_this$defs = this.defs()).pattern.apply(_this$defs, arguments);
	    }
	  },
	  Defs: {
	    pattern: wrapWithAttrCheck(function (width, height, block) {
	      return this.put(new Pattern()).update(block).attr({
	        x: 0,
	        y: 0,
	        width: width,
	        height: height,
	        patternUnits: 'userSpaceOnUse'
	      });
	    })
	  }
	});
	register(Pattern, 'Pattern');

	var Image =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Image, _Shape);

	  function Image(node) {
	    _classCallCheck(this, Image);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, nodeOrNew('image', node), node));
	  } // (re)load image


	  _createClass(Image, [{
	    key: "load",
	    value: function load(url, callback) {
	      if (!url) return this;
	      var img = new globals.window.Image();
	      on(img, 'load', function (e) {
	        var p = this.parent(Pattern); // ensure image size

	        if (this.width() === 0 && this.height() === 0) {
	          this.size(img.width, img.height);
	        }

	        if (p instanceof Pattern) {
	          // ensure pattern size if not set
	          if (p.width() === 0 && p.height() === 0) {
	            p.size(this.width(), this.height());
	          }
	        }

	        if (typeof callback === 'function') {
	          callback.call(this, e);
	        }
	      }, this);
	      on(img, 'load error', function () {
	        // dont forget to unbind memory leaking events
	        off(img);
	      });
	      return this.attr('href', img.src = url, xlink);
	    }
	  }]);

	  return Image;
	}(Shape);
	registerAttrHook(function (attr, val, _this) {
	  // convert image fill and stroke to patterns
	  if (attr === 'fill' || attr === 'stroke') {
	    if (isImage.test(val)) {
	      val = _this.root().defs().image(val);
	    }
	  }

	  if (val instanceof Image) {
	    val = _this.root().defs().pattern(0, 0, function (pattern) {
	      pattern.add(val);
	    });
	  }

	  return val;
	});
	registerMethods({
	  Container: {
	    // create image element, load image and set its size
	    image: wrapWithAttrCheck(function (source, callback) {
	      return this.put(new Image()).size(0, 0).load(source, callback);
	    })
	  }
	});
	register(Image, 'Image');

	var PointArray = subClassArray('PointArray', SVGArray);
	extend(PointArray, {
	  // Convert array to string
	  toString: function toString() {
	    // convert to a poly point string
	    for (var i = 0, il = this.length, array = []; i < il; i++) {
	      array.push(this[i].join(','));
	    }

	    return array.join(' ');
	  },
	  // Convert array to line object
	  toLine: function toLine() {
	    return {
	      x1: this[0][0],
	      y1: this[0][1],
	      x2: this[1][0],
	      y2: this[1][1]
	    };
	  },
	  // Get morphed array at given position
	  at: function at(pos) {
	    // make sure a destination is defined
	    if (!this.destination) return this; // generate morphed point string

	    for (var i = 0, il = this.length, array = []; i < il; i++) {
	      array.push([this[i][0] + (this.destination[i][0] - this[i][0]) * pos, this[i][1] + (this.destination[i][1] - this[i][1]) * pos]);
	    }

	    return new PointArray(array);
	  },
	  // Parse point string and flat array
	  parse: function parse() {
	    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[0, 0]];
	    var points = []; // if it is an array

	    if (array instanceof Array) {
	      // and it is not flat, there is no need to parse it
	      if (array[0] instanceof Array) {
	        return array;
	      }
	    } else {
	      // Else, it is considered as a string
	      // parse points
	      array = array.trim().split(delimiter).map(parseFloat);
	    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
	    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


	    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

	    for (var i = 0, len = array.length; i < len; i = i + 2) {
	      points.push([array[i], array[i + 1]]);
	    }

	    return points;
	  },
	  // transform points with matrix (similar to Point.transform)
	  transform: function transform(m) {
	    var points = [];

	    for (var i = 0; i < this.length; i++) {
	      var point = this[i]; // Perform the matrix multiplication

	      points.push([m.a * point[0] + m.c * point[1] + m.e, m.b * point[0] + m.d * point[1] + m.f]);
	    } // Return the required point


	    return new PointArray(points);
	  },
	  // Move point string
	  move: function move(x, y) {
	    var box = this.bbox(); // get relative offset

	    x -= box.x;
	    y -= box.y; // move every point

	    if (!isNaN(x) && !isNaN(y)) {
	      for (var i = this.length - 1; i >= 0; i--) {
	        this[i] = [this[i][0] + x, this[i][1] + y];
	      }
	    }

	    return this;
	  },
	  // Resize poly string
	  size: function size(width, height) {
	    var i;
	    var box = this.bbox(); // recalculate position of all points according to new size

	    for (i = this.length - 1; i >= 0; i--) {
	      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
	      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
	    }

	    return this;
	  },
	  // Get bounding box of points
	  bbox: function bbox() {
	    var maxX = -Infinity;
	    var maxY = -Infinity;
	    var minX = Infinity;
	    var minY = Infinity;
	    this.forEach(function (el) {
	      maxX = Math.max(el[0], maxX);
	      maxY = Math.max(el[1], maxY);
	      minX = Math.min(el[0], minX);
	      minY = Math.min(el[1], minY);
	    });
	    return {
	      x: minX,
	      y: minY,
	      width: maxX - minX,
	      height: maxY - minY
	    };
	  }
	});

	var MorphArray = PointArray; // Move by left top corner over x-axis

	function x$1(x) {
	  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
	} // Move by left top corner over y-axis

	function y$1(y) {
	  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
	} // Set width of element

	function width$1(width) {
	  var b = this.bbox();
	  return width == null ? b.width : this.size(width, b.height);
	} // Set height of element

	function height$1(height) {
	  var b = this.bbox();
	  return height == null ? b.height : this.size(b.width, height);
	}

	var pointed = ({
		__proto__: null,
		MorphArray: MorphArray,
		x: x$1,
		y: y$1,
		width: width$1,
		height: height$1
	});

	var Line =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Line, _Shape);

	  // Initialize node
	  function Line(node) {
	    _classCallCheck(this, Line);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, nodeOrNew('line', node), node));
	  } // Get array


	  _createClass(Line, [{
	    key: "array",
	    value: function array() {
	      return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
	    } // Overwrite native plot() method

	  }, {
	    key: "plot",
	    value: function plot(x1, y1, x2, y2) {
	      if (x1 == null) {
	        return this.array();
	      } else if (typeof y1 !== 'undefined') {
	        x1 = {
	          x1: x1,
	          y1: y1,
	          x2: x2,
	          y2: y2
	        };
	      } else {
	        x1 = new PointArray(x1).toLine();
	      }

	      return this.attr(x1);
	    } // Move by left top corner

	  }, {
	    key: "move",
	    value: function move(x, y) {
	      return this.attr(this.array().move(x, y).toLine());
	    } // Set element size to given width and height

	  }, {
	    key: "size",
	    value: function size(width, height) {
	      var p = proportionalSize(this, width, height);
	      return this.attr(this.array().size(p.width, p.height).toLine());
	    }
	  }]);

	  return Line;
	}(Shape);
	extend(Line, pointed);
	registerMethods({
	  Container: {
	    // Create a line element
	    line: wrapWithAttrCheck(function () {
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      // make sure plot is called as a setter
	      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
	      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
	    })
	  }
	});
	register(Line, 'Line');

	var Marker =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(Marker, _Container);

	  // Initialize node
	  function Marker(node) {
	    _classCallCheck(this, Marker);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).call(this, nodeOrNew('marker', node), node));
	  } // Set width of element


	  _createClass(Marker, [{
	    key: "width",
	    value: function width(_width) {
	      return this.attr('markerWidth', _width);
	    } // Set height of element

	  }, {
	    key: "height",
	    value: function height(_height) {
	      return this.attr('markerHeight', _height);
	    } // Set marker refX and refY

	  }, {
	    key: "ref",
	    value: function ref(x, y) {
	      return this.attr('refX', x).attr('refY', y);
	    } // Update marker

	  }, {
	    key: "update",
	    value: function update(block) {
	      // remove all content
	      this.clear(); // invoke passed block

	      if (typeof block === 'function') {
	        block.call(this, this);
	      }

	      return this;
	    } // Return the fill id

	  }, {
	    key: "toString",
	    value: function toString() {
	      return 'url(#' + this.id() + ')';
	    }
	  }]);

	  return Marker;
	}(Container);
	registerMethods({
	  Container: {
	    marker: function marker() {
	      var _this$defs;

	      // Create marker element in defs
	      return (_this$defs = this.defs()).marker.apply(_this$defs, arguments);
	    }
	  },
	  Defs: {
	    // Create marker
	    marker: wrapWithAttrCheck(function (width, height, block) {
	      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
	      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
	    })
	  },
	  marker: {
	    // Create and attach markers
	    marker: function marker(_marker, width, height, block) {
	      var attr = ['marker']; // Build attribute name

	      if (_marker !== 'all') attr.push(_marker);
	      attr = attr.join('-'); // Set marker attribute

	      _marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
	      return this.attr(attr, _marker);
	    }
	  }
	});
	register(Marker, 'Marker');

	var nativeSort = [].sort;
	var test$2 = [1, 2, 3];

	// IE8-
	var FAILS_ON_UNDEFINED = fails(function () {
	  test$2.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails(function () {
	  test$2.sort(null);
	});
	// Old WebKit
	var SLOPPY_METHOD$2 = sloppyArrayMethod('sort');

	var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD$2;

	// `Array.prototype.sort` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.sort
	_export({ target: 'Array', proto: true, forced: FORCED$4 }, {
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? nativeSort.call(toObject(this))
	      : nativeSort.call(toObject(this), aFunction$1(comparefn));
	  }
	});

	/***
	Base Class
	==========
	The base stepper class that will be
	***/

	function makeSetterGetter(k, f) {
	  return function (v) {
	    if (v == null) return this[v];
	    this[k] = v;
	    if (f) f.call(this);
	    return this;
	  };
	}

	var easing = {
	  '-': function _(pos) {
	    return pos;
	  },
	  '<>': function _(pos) {
	    return -Math.cos(pos * Math.PI) / 2 + 0.5;
	  },
	  '>': function _(pos) {
	    return Math.sin(pos * Math.PI / 2);
	  },
	  '<': function _(pos) {
	    return -Math.cos(pos * Math.PI / 2) + 1;
	  },
	  bezier: function bezier(x1, y1, x2, y2) {
	    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
	    return function (t) {
	      if (t < 0) {
	        if (x1 > 0) {
	          return y1 / x1 * t;
	        } else if (x2 > 0) {
	          return y2 / x2 * t;
	        } else {
	          return 0;
	        }
	      } else if (t > 1) {
	        if (x2 < 1) {
	          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
	        } else if (x1 < 1) {
	          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
	        } else {
	          return 1;
	        }
	      } else {
	        return 3 * t * Math.pow(1 - t, 2) * y1 + 3 * Math.pow(t, 2) * (1 - t) * y2 + Math.pow(t, 3);
	      }
	    };
	  },
	  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
	  steps: function steps(_steps) {
	    var stepPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';
	    // deal with "jump-" prefix
	    stepPosition = stepPosition.split('-').reverse()[0];
	    var jumps = _steps;

	    if (stepPosition === 'none') {
	      --jumps;
	    } else if (stepPosition === 'both') {
	      ++jumps;
	    } // The beforeFlag is essentially useless


	    return function (t) {
	      var beforeFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      // Step is called currentStep in referenced url
	      var step = Math.floor(t * _steps);
	      var jumping = t * step % 1 === 0;

	      if (stepPosition === 'start' || stepPosition === 'both') {
	        ++step;
	      }

	      if (beforeFlag && jumping) {
	        --step;
	      }

	      if (t >= 0 && step < 0) {
	        step = 0;
	      }

	      if (t <= 1 && step > jumps) {
	        step = jumps;
	      }

	      return step / jumps;
	    };
	  }
	};
	var Stepper =
	/*#__PURE__*/
	function () {
	  function Stepper() {
	    _classCallCheck(this, Stepper);
	  }

	  _createClass(Stepper, [{
	    key: "done",
	    value: function done() {
	      return false;
	    }
	  }]);

	  return Stepper;
	}();
	/***
	Easing Functions
	================
	***/

	var Ease =
	/*#__PURE__*/
	function (_Stepper) {
	  _inherits(Ease, _Stepper);

	  function Ease(fn) {
	    var _this;

	    _classCallCheck(this, Ease);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ease).call(this));
	    _this.ease = easing[fn || timeline.ease] || fn;
	    return _this;
	  }

	  _createClass(Ease, [{
	    key: "step",
	    value: function step(from, to, pos) {
	      if (typeof from !== 'number') {
	        return pos < 1 ? from : to;
	      }

	      return from + (to - from) * this.ease(pos);
	    }
	  }]);

	  return Ease;
	}(Stepper);
	/***
	Controller Types
	================
	***/

	var Controller =
	/*#__PURE__*/
	function (_Stepper2) {
	  _inherits(Controller, _Stepper2);

	  function Controller(fn) {
	    var _this2;

	    _classCallCheck(this, Controller);

	    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this));
	    _this2.stepper = fn;
	    return _this2;
	  }

	  _createClass(Controller, [{
	    key: "step",
	    value: function step(current, target, dt, c) {
	      return this.stepper(current, target, dt, c);
	    }
	  }, {
	    key: "done",
	    value: function done(c) {
	      return c.done;
	    }
	  }]);

	  return Controller;
	}(Stepper);

	function recalculate() {
	  // Apply the default parameters
	  var duration = (this._duration || 500) / 1000;
	  var overshoot = this._overshoot || 0; // Calculate the PID natural response

	  var eps = 1e-10;
	  var pi = Math.PI;
	  var os = Math.log(overshoot / 100 + eps);
	  var zeta = -os / Math.sqrt(pi * pi + os * os);
	  var wn = 3.9 / (zeta * duration); // Calculate the Spring values

	  this.d = 2 * zeta * wn;
	  this.k = wn * wn;
	}

	var Spring =
	/*#__PURE__*/
	function (_Controller) {
	  _inherits(Spring, _Controller);

	  function Spring(duration, overshoot) {
	    var _this3;

	    _classCallCheck(this, Spring);

	    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Spring).call(this));

	    _this3.duration(duration || 500).overshoot(overshoot || 0);

	    return _this3;
	  }

	  _createClass(Spring, [{
	    key: "step",
	    value: function step(current, target, dt, c) {
	      if (typeof current === 'string') return current;
	      c.done = dt === Infinity;
	      if (dt === Infinity) return target;
	      if (dt === 0) return current;
	      if (dt > 100) dt = 16;
	      dt /= 1000; // Get the previous velocity

	      var velocity = c.velocity || 0; // Apply the control to get the new position and store it

	      var acceleration = -this.d * velocity - this.k * (current - target);
	      var newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

	      c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

	      c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
	      return c.done ? target : newPosition;
	    }
	  }]);

	  return Spring;
	}(Controller);
	extend(Spring, {
	  duration: makeSetterGetter('_duration', recalculate),
	  overshoot: makeSetterGetter('_overshoot', recalculate)
	});
	var PID =
	/*#__PURE__*/
	function (_Controller2) {
	  _inherits(PID, _Controller2);

	  function PID(p, i, d, windup) {
	    var _this4;

	    _classCallCheck(this, PID);

	    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PID).call(this));
	    p = p == null ? 0.1 : p;
	    i = i == null ? 0.01 : i;
	    d = d == null ? 0 : d;
	    windup = windup == null ? 1000 : windup;

	    _this4.p(p).i(i).d(d).windup(windup);

	    return _this4;
	  }

	  _createClass(PID, [{
	    key: "step",
	    value: function step(current, target, dt, c) {
	      if (typeof current === 'string') return current;
	      c.done = dt === Infinity;
	      if (dt === Infinity) return target;
	      if (dt === 0) return current;
	      var p = target - current;
	      var i = (c.integral || 0) + p * dt;
	      var d = (p - (c.error || 0)) / dt;
	      var windup = this.windup; // antiwindup

	      if (windup !== false) {
	        i = Math.max(-windup, Math.min(i, windup));
	      }

	      c.error = p;
	      c.integral = i;
	      c.done = Math.abs(p) < 0.001;
	      return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
	    }
	  }]);

	  return PID;
	}(Controller);
	extend(PID, {
	  windup: makeSetterGetter('windup'),
	  p: makeSetterGetter('P'),
	  i: makeSetterGetter('I'),
	  d: makeSetterGetter('D')
	});

	var PathArray = subClassArray('PathArray', SVGArray);
	function pathRegReplace(a, b, c, d) {
	  return c + d.replace(dots, ' .');
	}

	function arrayToString(a) {
	  for (var i = 0, il = a.length, s = ''; i < il; i++) {
	    s += a[i][0];

	    if (a[i][1] != null) {
	      s += a[i][1];

	      if (a[i][2] != null) {
	        s += ' ';
	        s += a[i][2];

	        if (a[i][3] != null) {
	          s += ' ';
	          s += a[i][3];
	          s += ' ';
	          s += a[i][4];

	          if (a[i][5] != null) {
	            s += ' ';
	            s += a[i][5];
	            s += ' ';
	            s += a[i][6];

	            if (a[i][7] != null) {
	              s += ' ';
	              s += a[i][7];
	            }
	          }
	        }
	      }
	    }
	  }

	  return s + ' ';
	}

	var pathHandlers = {
	  M: function M(c, p, p0) {
	    p.x = p0.x = c[0];
	    p.y = p0.y = c[1];
	    return ['M', p.x, p.y];
	  },
	  L: function L(c, p) {
	    p.x = c[0];
	    p.y = c[1];
	    return ['L', c[0], c[1]];
	  },
	  H: function H(c, p) {
	    p.x = c[0];
	    return ['H', c[0]];
	  },
	  V: function V(c, p) {
	    p.y = c[0];
	    return ['V', c[0]];
	  },
	  C: function C(c, p) {
	    p.x = c[4];
	    p.y = c[5];
	    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
	  },
	  S: function S(c, p) {
	    p.x = c[2];
	    p.y = c[3];
	    return ['S', c[0], c[1], c[2], c[3]];
	  },
	  Q: function Q(c, p) {
	    p.x = c[2];
	    p.y = c[3];
	    return ['Q', c[0], c[1], c[2], c[3]];
	  },
	  T: function T(c, p) {
	    p.x = c[0];
	    p.y = c[1];
	    return ['T', c[0], c[1]];
	  },
	  Z: function Z(c, p, p0) {
	    p.x = p0.x;
	    p.y = p0.y;
	    return ['Z'];
	  },
	  A: function A(c, p) {
	    p.x = c[5];
	    p.y = c[6];
	    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
	  }
	};
	var mlhvqtcsaz = 'mlhvqtcsaz'.split('');

	for (var i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
	  pathHandlers[mlhvqtcsaz[i]] = function (i) {
	    return function (c, p, p0) {
	      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
	        c[5] = c[5] + p.x;
	        c[6] = c[6] + p.y;
	      } else {
	        for (var j = 0, jl = c.length; j < jl; ++j) {
	          c[j] = c[j] + (j % 2 ? p.y : p.x);
	        }
	      }
	      return pathHandlers[i](c, p, p0);
	    };
	  }(mlhvqtcsaz[i].toUpperCase());
	}

	extend(PathArray, {
	  // Convert array to string
	  toString: function toString() {
	    return arrayToString(this);
	  },
	  // Move path string
	  move: function move(x, y) {
	    // get bounding box of current situation
	    var box = this.bbox(); // get relative offset

	    x -= box.x;
	    y -= box.y;

	    if (!isNaN(x) && !isNaN(y)) {
	      // move every point
	      for (var l, i = this.length - 1; i >= 0; i--) {
	        l = this[i][0];

	        if (l === 'M' || l === 'L' || l === 'T') {
	          this[i][1] += x;
	          this[i][2] += y;
	        } else if (l === 'H') {
	          this[i][1] += x;
	        } else if (l === 'V') {
	          this[i][1] += y;
	        } else if (l === 'C' || l === 'S' || l === 'Q') {
	          this[i][1] += x;
	          this[i][2] += y;
	          this[i][3] += x;
	          this[i][4] += y;

	          if (l === 'C') {
	            this[i][5] += x;
	            this[i][6] += y;
	          }
	        } else if (l === 'A') {
	          this[i][6] += x;
	          this[i][7] += y;
	        }
	      }
	    }

	    return this;
	  },
	  // Resize path string
	  size: function size(width, height) {
	    // get bounding box of current situation
	    var box = this.bbox();
	    var i, l; // If the box width or height is 0 then we ignore
	    // transformations on the respective axis

	    box.width = box.width === 0 ? 1 : box.width;
	    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

	    for (i = this.length - 1; i >= 0; i--) {
	      l = this[i][0];

	      if (l === 'M' || l === 'L' || l === 'T') {
	        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
	        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
	      } else if (l === 'H') {
	        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
	      } else if (l === 'V') {
	        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
	      } else if (l === 'C' || l === 'S' || l === 'Q') {
	        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
	        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
	        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
	        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

	        if (l === 'C') {
	          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
	          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
	        }
	      } else if (l === 'A') {
	        // resize radii
	        this[i][1] = this[i][1] * width / box.width;
	        this[i][2] = this[i][2] * height / box.height; // move position values

	        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
	        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
	      }
	    }

	    return this;
	  },
	  // Test if the passed path array use the same path data commands as this path array
	  equalCommands: function equalCommands(pathArray) {
	    var i, il, equalCommands;
	    pathArray = new PathArray(pathArray);
	    equalCommands = this.length === pathArray.length;

	    for (i = 0, il = this.length; equalCommands && i < il; i++) {
	      equalCommands = this[i][0] === pathArray[i][0];
	    }

	    return equalCommands;
	  },
	  // Make path array morphable
	  morph: function morph(pathArray) {
	    pathArray = new PathArray(pathArray);

	    if (this.equalCommands(pathArray)) {
	      this.destination = pathArray;
	    } else {
	      this.destination = null;
	    }

	    return this;
	  },
	  // Get morphed path array at given position
	  at: function at(pos) {
	    // make sure a destination is defined
	    if (!this.destination) return this;
	    var sourceArray = this;
	    var destinationArray = this.destination.value;
	    var array = [];
	    var pathArray = new PathArray();
	    var i, il, j, jl; // Animate has specified in the SVG spec
	    // See: https://www.w3.org/TR/SVG11/paths.html#PathElement

	    for (i = 0, il = sourceArray.length; i < il; i++) {
	      array[i] = [sourceArray[i][0]];

	      for (j = 1, jl = sourceArray[i].length; j < jl; j++) {
	        array[i][j] = sourceArray[i][j] + (destinationArray[i][j] - sourceArray[i][j]) * pos;
	      } // For the two flags of the elliptical arc command, the SVG spec say:
	      // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
	      // Elliptical arc command as an array followed by corresponding indexes:
	      // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
	      //   0    1   2        3                 4             5      6  7


	      if (array[i][0] === 'A') {
	        array[i][4] = +(array[i][4] !== 0);
	        array[i][5] = +(array[i][5] !== 0);
	      }
	    } // Directly modify the value of a path array, this is done this way for performance


	    pathArray.value = array;
	    return pathArray;
	  },
	  // Absolutize and parse path to array
	  parse: function parse() {
	    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [['M', 0, 0]];
	    // if it's already a patharray, no need to parse it
	    if (array instanceof PathArray) return array; // prepare for parsing

	    var s;
	    var paramCnt = {
	      M: 2,
	      L: 2,
	      H: 1,
	      V: 1,
	      C: 6,
	      S: 4,
	      Q: 4,
	      T: 2,
	      A: 7,
	      Z: 0
	    };

	    if (typeof array === 'string') {
	      array = array.replace(numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
	      .replace(pathLetters, ' $& ') // put some room between letters and numbers
	      .replace(hyphen, '$1 -') // add space before hyphen
	      .trim() // trim
	      .split(delimiter); // split into array
	    } else {
	      array = array.reduce(function (prev, curr) {
	        return [].concat.call(prev, curr);
	      }, []);
	    } // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]


	    var result = [];
	    var p = new Point();
	    var p0 = new Point();
	    var index = 0;
	    var len = array.length;

	    do {
	      // Test if we have a path letter
	      if (isPathLetter.test(array[index])) {
	        s = array[index];
	        ++index; // If last letter was a move command and we got no new, it defaults to [L]ine
	      } else if (s === 'M') {
	        s = 'L';
	      } else if (s === 'm') {
	        s = 'l';
	      }

	      result.push(pathHandlers[s].call(null, array.slice(index, index = index + paramCnt[s.toUpperCase()]).map(parseFloat), p, p0));
	    } while (len > index);

	    return result;
	  },
	  // Get bounding box of path
	  bbox: function bbox() {
	    parser().path.setAttribute('d', this.toString());
	    return parser.nodes.path.getBBox();
	  }
	});

	var Morphable =
	/*#__PURE__*/
	function () {
	  function Morphable(stepper) {
	    _classCallCheck(this, Morphable);

	    this._stepper = stepper || new Ease('-');
	    this._from = null;
	    this._to = null;
	    this._type = null;
	    this._context = null;
	    this._morphObj = null;
	  }

	  _createClass(Morphable, [{
	    key: "from",
	    value: function from(val) {
	      if (val == null) {
	        return this._from;
	      }

	      this._from = this._set(val);
	      return this;
	    }
	  }, {
	    key: "to",
	    value: function to(val) {
	      if (val == null) {
	        return this._to;
	      }

	      this._to = this._set(val);
	      return this;
	    }
	  }, {
	    key: "type",
	    value: function type(_type) {
	      // getter
	      if (_type == null) {
	        return this._type;
	      } // setter


	      this._type = _type;
	      return this;
	    }
	  }, {
	    key: "_set",
	    value: function _set(value) {
	      if (!this._type) {
	        var type = _typeof(value);

	        if (type === 'number') {
	          this.type(SVGNumber);
	        } else if (type === 'string') {
	          if (Color.isColor(value)) {
	            this.type(Color);
	          } else if (delimiter.test(value)) {
	            this.type(pathLetters.test(value) ? PathArray : SVGArray);
	          } else if (numberAndUnit.test(value)) {
	            this.type(SVGNumber);
	          } else {
	            this.type(NonMorphable);
	          }
	        } else if (morphableTypes.indexOf(value.constructor) > -1) {
	          this.type(value.constructor);
	        } else if (Array.isArray(value)) {
	          this.type(SVGArray);
	        } else if (type === 'object') {
	          this.type(ObjectBag);
	        } else {
	          this.type(NonMorphable);
	        }
	      }

	      var result = new this._type(value);

	      if (this._type === Color) {
	        result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
	      }

	      result = result.toArray();
	      this._morphObj = this._morphObj || new this._type();
	      this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
	        o.done = true;
	        return o;
	      });
	      return result;
	    }
	  }, {
	    key: "stepper",
	    value: function stepper(_stepper) {
	      if (_stepper == null) return this._stepper;
	      this._stepper = _stepper;
	      return this;
	    }
	  }, {
	    key: "done",
	    value: function done() {
	      var complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
	        return last && curr;
	      }, true);

	      return complete;
	    }
	  }, {
	    key: "at",
	    value: function at(pos) {
	      var _this = this;

	      return this._morphObj.fromArray(this._from.map(function (i, index) {
	        return _this._stepper.step(i, _this._to[index], pos, _this._context[index], _this._context);
	      }));
	    }
	  }]);

	  return Morphable;
	}();
	var NonMorphable =
	/*#__PURE__*/
	function () {
	  function NonMorphable() {
	    _classCallCheck(this, NonMorphable);

	    this.init.apply(this, arguments);
	  }

	  _createClass(NonMorphable, [{
	    key: "init",
	    value: function init(val) {
	      val = Array.isArray(val) ? val[0] : val;
	      this.value = val;
	      return this;
	    }
	  }, {
	    key: "valueOf",
	    value: function valueOf() {
	      return this.value;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      return [this.value];
	    }
	  }]);

	  return NonMorphable;
	}();
	var TransformBag =
	/*#__PURE__*/
	function () {
	  function TransformBag() {
	    _classCallCheck(this, TransformBag);

	    this.init.apply(this, arguments);
	  }

	  _createClass(TransformBag, [{
	    key: "init",
	    value: function init(obj) {
	      if (Array.isArray(obj)) {
	        obj = {
	          scaleX: obj[0],
	          scaleY: obj[1],
	          shear: obj[2],
	          rotate: obj[3],
	          translateX: obj[4],
	          translateY: obj[5],
	          originX: obj[6],
	          originY: obj[7]
	        };
	      }

	      Object.assign(this, TransformBag.defaults, obj);
	      return this;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      var v = this;
	      return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
	    }
	  }]);

	  return TransformBag;
	}();
	TransformBag.defaults = {
	  scaleX: 1,
	  scaleY: 1,
	  shear: 0,
	  rotate: 0,
	  translateX: 0,
	  translateY: 0,
	  originX: 0,
	  originY: 0
	};
	var ObjectBag =
	/*#__PURE__*/
	function () {
	  function ObjectBag() {
	    _classCallCheck(this, ObjectBag);

	    this.init.apply(this, arguments);
	  }

	  _createClass(ObjectBag, [{
	    key: "init",
	    value: function init(objOrArr) {
	      this.values = [];

	      if (Array.isArray(objOrArr)) {
	        this.values = objOrArr;
	        return;
	      }

	      objOrArr = objOrArr || {};
	      var entries = [];

	      for (var i in objOrArr) {
	        entries.push([i, objOrArr[i]]);
	      }

	      entries.sort(function (a, b) {
	        return a[0] - b[0];
	      });
	      this.values = entries.reduce(function (last, curr) {
	        return last.concat(curr);
	      }, []);
	      return this;
	    }
	  }, {
	    key: "valueOf",
	    value: function valueOf() {
	      var obj = {};
	      var arr = this.values;

	      for (var i = 0, len = arr.length; i < len; i += 2) {
	        obj[arr[i]] = arr[i + 1];
	      }

	      return obj;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      return this.values;
	    }
	  }]);

	  return ObjectBag;
	}();
	var morphableTypes = [NonMorphable, TransformBag, ObjectBag];
	function registerMorphableType() {
	  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  morphableTypes.push.apply(morphableTypes, _toConsumableArray([].concat(type)));
	}
	function makeMorphable() {
	  extend(morphableTypes, {
	    to: function to(val) {
	      return new Morphable().type(this.constructor).from(this.valueOf()).to(val);
	    },
	    fromArray: function fromArray(arr) {
	      this.init(arr);
	      return this;
	    }
	  });
	}

	var Path =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Path, _Shape);

	  // Initialize node
	  function Path(node) {
	    _classCallCheck(this, Path);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Path).call(this, nodeOrNew('path', node), node));
	  } // Get array


	  _createClass(Path, [{
	    key: "array",
	    value: function array() {
	      return this._array || (this._array = new PathArray(this.attr('d')));
	    } // Plot new path

	  }, {
	    key: "plot",
	    value: function plot(d) {
	      return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
	    } // Clear array cache

	  }, {
	    key: "clear",
	    value: function clear() {
	      delete this._array;
	      return this;
	    } // Move by left top corner

	  }, {
	    key: "move",
	    value: function move(x, y) {
	      return this.attr('d', this.array().move(x, y));
	    } // Move by left top corner over x-axis

	  }, {
	    key: "x",
	    value: function x(_x) {
	      return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
	    } // Move by left top corner over y-axis

	  }, {
	    key: "y",
	    value: function y(_y) {
	      return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
	    } // Set element size to given width and height

	  }, {
	    key: "size",
	    value: function size(width, height) {
	      var p = proportionalSize(this, width, height);
	      return this.attr('d', this.array().size(p.width, p.height));
	    } // Set width of element

	  }, {
	    key: "width",
	    value: function width(_width) {
	      return _width == null ? this.bbox().width : this.size(_width, this.bbox().height);
	    } // Set height of element

	  }, {
	    key: "height",
	    value: function height(_height) {
	      return _height == null ? this.bbox().height : this.size(this.bbox().width, _height);
	    }
	  }, {
	    key: "targets",
	    value: function targets() {
	      return baseFind('svg textpath [href*="' + this.id() + '"]');
	    }
	  }]);

	  return Path;
	}(Shape); // Define morphable array
	Path.prototype.MorphArray = PathArray; // Add parent method

	registerMethods({
	  Container: {
	    // Create a wrapped path element
	    path: wrapWithAttrCheck(function (d) {
	      // make sure plot is called as a setter
	      return this.put(new Path()).plot(d || new PathArray());
	    })
	  }
	});
	register(Path, 'Path');

	function array() {
	  return this._array || (this._array = new PointArray(this.attr('points')));
	} // Plot new path

	function plot(p) {
	  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
	} // Clear array cache

	function clear() {
	  delete this._array;
	  return this;
	} // Move by left top corner

	function move(x, y) {
	  return this.attr('points', this.array().move(x, y));
	} // Set element size to given width and height

	function size(width, height) {
	  var p = proportionalSize(this, width, height);
	  return this.attr('points', this.array().size(p.width, p.height));
	}

	var poly = ({
		__proto__: null,
		array: array,
		plot: plot,
		clear: clear,
		move: move,
		size: size
	});

	var Polygon =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Polygon, _Shape);

	  // Initialize node
	  function Polygon(node) {
	    _classCallCheck(this, Polygon);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, nodeOrNew('polygon', node), node));
	  }

	  return Polygon;
	}(Shape);
	registerMethods({
	  Container: {
	    // Create a wrapped polygon element
	    polygon: wrapWithAttrCheck(function (p) {
	      // make sure plot is called as a setter
	      return this.put(new Polygon()).plot(p || new PointArray());
	    })
	  }
	});
	extend(Polygon, pointed);
	extend(Polygon, poly);
	register(Polygon, 'Polygon');

	var Polyline =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Polyline, _Shape);

	  // Initialize node
	  function Polyline(node) {
	    _classCallCheck(this, Polyline);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Polyline).call(this, nodeOrNew('polyline', node), node));
	  }

	  return Polyline;
	}(Shape);
	registerMethods({
	  Container: {
	    // Create a wrapped polygon element
	    polyline: wrapWithAttrCheck(function (p) {
	      // make sure plot is called as a setter
	      return this.put(new Polyline()).plot(p || new PointArray());
	    })
	  }
	});
	extend(Polyline, pointed);
	extend(Polyline, poly);
	register(Polyline, 'Polyline');

	var Rect =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Rect, _Shape);

	  // Initialize node
	  function Rect(node) {
	    _classCallCheck(this, Rect);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, nodeOrNew('rect', node), node));
	  }

	  return Rect;
	}(Shape);
	extend(Rect, {
	  rx: rx,
	  ry: ry
	});
	registerMethods({
	  Container: {
	    // Create a rect element
	    rect: wrapWithAttrCheck(function (width, height) {
	      return this.put(new Rect()).size(width, height);
	    })
	  }
	});
	register(Rect, 'Rect');

	var max$3 = Math.max;
	var min$4 = Math.min;
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$4(max$3(toInteger(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var Queue =
	/*#__PURE__*/
	function () {
	  function Queue() {
	    _classCallCheck(this, Queue);

	    this._first = null;
	    this._last = null;
	  }

	  _createClass(Queue, [{
	    key: "push",
	    value: function push(value) {
	      // An item stores an id and the provided value
	      var item = value.next ? value : {
	        value: value,
	        next: null,
	        prev: null
	      }; // Deal with the queue being empty or populated

	      if (this._last) {
	        item.prev = this._last;
	        this._last.next = item;
	        this._last = item;
	      } else {
	        this._last = item;
	        this._first = item;
	      } // Return the current item


	      return item;
	    }
	  }, {
	    key: "shift",
	    value: function shift() {
	      // Check if we have a value
	      var remove = this._first;
	      if (!remove) return null; // If we do, remove it and relink things

	      this._first = remove.next;
	      if (this._first) this._first.prev = null;
	      this._last = this._first ? this._last : null;
	      return remove.value;
	    } // Shows us the first item in the list

	  }, {
	    key: "first",
	    value: function first() {
	      return this._first && this._first.value;
	    } // Shows us the last item in the list

	  }, {
	    key: "last",
	    value: function last() {
	      return this._last && this._last.value;
	    } // Removes the item that was returned from the push

	  }, {
	    key: "remove",
	    value: function remove(item) {
	      // Relink the previous item
	      if (item.prev) item.prev.next = item.next;
	      if (item.next) item.next.prev = item.prev;
	      if (item === this._last) this._last = item.prev;
	      if (item === this._first) this._first = item.next; // Invalidate item

	      item.prev = null;
	      item.next = null;
	    }
	  }]);

	  return Queue;
	}();

	var Animator = {
	  nextDraw: null,
	  frames: new Queue(),
	  timeouts: new Queue(),
	  immediates: new Queue(),
	  timer: function timer() {
	    return globals.window.performance || globals.window.Date;
	  },
	  transforms: [],
	  frame: function frame(fn) {
	    // Store the node
	    var node = Animator.frames.push({
	      run: fn
	    }); // Request an animation frame if we don't have one

	    if (Animator.nextDraw === null) {
	      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
	    } // Return the node so we can remove it easily


	    return node;
	  },
	  timeout: function timeout(fn, delay) {
	    delay = delay || 0; // Work out when the event should fire

	    var time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

	    var node = Animator.timeouts.push({
	      run: fn,
	      time: time
	    }); // Request another animation frame if we need one

	    if (Animator.nextDraw === null) {
	      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
	    }

	    return node;
	  },
	  immediate: function immediate(fn) {
	    // Add the immediate fn to the end of the queue
	    var node = Animator.immediates.push(fn); // Request another animation frame if we need one

	    if (Animator.nextDraw === null) {
	      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
	    }

	    return node;
	  },
	  cancelFrame: function cancelFrame(node) {
	    node != null && Animator.frames.remove(node);
	  },
	  clearTimeout: function clearTimeout(node) {
	    node != null && Animator.timeouts.remove(node);
	  },
	  cancelImmediate: function cancelImmediate(node) {
	    node != null && Animator.immediates.remove(node);
	  },
	  _draw: function _draw(now) {
	    // Run all the timeouts we can run, if they are not ready yet, add them
	    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
	    var nextTimeout = null;
	    var lastTimeout = Animator.timeouts.last();

	    while (nextTimeout = Animator.timeouts.shift()) {
	      // Run the timeout if its time, or push it to the end
	      if (now >= nextTimeout.time) {
	        nextTimeout.run();
	      } else {
	        Animator.timeouts.push(nextTimeout);
	      } // If we hit the last item, we should stop shifting out more items


	      if (nextTimeout === lastTimeout) break;
	    } // Run all of the animation frames


	    var nextFrame = null;
	    var lastFrame = Animator.frames.last();

	    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
	      nextFrame.run(now);
	    }

	    var nextImmediate = null;

	    while (nextImmediate = Animator.immediates.shift()) {
	      nextImmediate();
	    } // If we have remaining timeouts or frames, draw until we don't anymore


	    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
	  }
	};

	var makeSchedule = function makeSchedule(runnerInfo) {
	  var start = runnerInfo.start;
	  var duration = runnerInfo.runner.duration();
	  var end = start + duration;
	  return {
	    start: start,
	    duration: duration,
	    end: end,
	    runner: runnerInfo.runner
	  };
	};

	var defaultSource = function defaultSource() {
	  var w = globals.window;
	  return (w.performance || w.Date).now();
	};

	var Timeline =
	/*#__PURE__*/
	function (_EventTarget) {
	  _inherits(Timeline, _EventTarget);

	  // Construct a new timeline on the given element
	  function Timeline() {
	    var _this;

	    var timeSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSource;

	    _classCallCheck(this, Timeline);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this));
	    _this._timeSource = timeSource; // Store the timing variables

	    _this._startTime = 0;
	    _this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

	    _this._persist = 0; // Keep track of the running animations and their starting parameters

	    _this._nextFrame = null;
	    _this._paused = true;
	    _this._runners = [];
	    _this._runnerIds = [];
	    _this._lastRunnerId = -1;
	    _this._time = 0;
	    _this._lastSourceTime = 0;
	    _this._lastStepTime = 0; // Make sure that step is always called in class context

	    _this._step = _this._stepFn.bind(_assertThisInitialized(_this), false);
	    _this._stepImmediate = _this._stepFn.bind(_assertThisInitialized(_this), true);
	    return _this;
	  } // schedules a runner on the timeline


	  _createClass(Timeline, [{
	    key: "schedule",
	    value: function schedule(runner, delay, when) {
	      if (runner == null) {
	        return this._runners.map(makeSchedule);
	      } // The start time for the next animation can either be given explicitly,
	      // derived from the current timeline time or it can be relative to the
	      // last start time to chain animations direclty


	      var absoluteStartTime = 0;
	      var endTime = this.getEndTime();
	      delay = delay || 0; // Work out when to start the animation

	      if (when == null || when === 'last' || when === 'after') {
	        // Take the last time and increment
	        absoluteStartTime = endTime;
	      } else if (when === 'absolute' || when === 'start') {
	        absoluteStartTime = delay;
	        delay = 0;
	      } else if (when === 'now') {
	        absoluteStartTime = this._time;
	      } else if (when === 'relative') {
	        var _runnerInfo = this._runners[runner.id];

	        if (_runnerInfo) {
	          absoluteStartTime = _runnerInfo.start + delay;
	          delay = 0;
	        }
	      } else {
	        throw new Error('Invalid value for the "when" parameter');
	      } // Manage runner


	      runner.unschedule();
	      runner.timeline(this);
	      var persist = runner.persist();
	      var runnerInfo = {
	        persist: persist === null ? this._persist : persist,
	        start: absoluteStartTime + delay,
	        runner: runner
	      };
	      this._lastRunnerId = runner.id;

	      this._runners.push(runnerInfo);

	      this._runners.sort(function (a, b) {
	        return a.start - b.start;
	      });

	      this._runnerIds = this._runners.map(function (info) {
	        return info.runner.id;
	      });

	      this.updateTime()._continue();

	      return this;
	    } // Remove the runner from this timeline

	  }, {
	    key: "unschedule",
	    value: function unschedule(runner) {
	      var index = this._runnerIds.indexOf(runner.id);

	      if (index < 0) return this;

	      this._runners.splice(index, 1);

	      this._runnerIds.splice(index, 1);

	      runner.timeline(null);
	      return this;
	    } // Calculates the end of the timeline

	  }, {
	    key: "getEndTime",
	    value: function getEndTime() {
	      var lastRunnerInfo = this._runners[this._runnerIds.indexOf(this._lastRunnerId)];

	      var lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
	      var lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : 0;
	      return lastStartTime + lastDuration;
	    }
	  }, {
	    key: "getEndTimeOfTimeline",
	    value: function getEndTimeOfTimeline() {
	      var lastEndTime = 0;

	      for (var i = 0; i < this._runners.length; i++) {
	        var runnerInfo = this._runners[i];
	        var duration = runnerInfo ? runnerInfo.runner.duration() : 0;
	        var startTime = runnerInfo ? runnerInfo.start : 0;
	        var endTime = startTime + duration;

	        if (endTime > lastEndTime) {
	          lastEndTime = endTime;
	        }
	      }

	      return lastEndTime;
	    } // Makes sure, that after pausing the time doesn't jump

	  }, {
	    key: "updateTime",
	    value: function updateTime() {
	      if (!this.active()) {
	        this._lastSourceTime = this._timeSource();
	      }

	      return this;
	    }
	  }, {
	    key: "play",
	    value: function play() {
	      // Now make sure we are not paused and continue the animation
	      this._paused = false;
	      return this.updateTime()._continue();
	    }
	  }, {
	    key: "pause",
	    value: function pause() {
	      this._paused = true;
	      return this._continue();
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      // Go to start and pause
	      this.time(0);
	      return this.pause();
	    }
	  }, {
	    key: "finish",
	    value: function finish() {
	      // Go to end and pause
	      this.time(this.getEndTimeOfTimeline() + 1);
	      return this.pause();
	    }
	  }, {
	    key: "speed",
	    value: function speed(_speed) {
	      if (_speed == null) return this._speed;
	      this._speed = _speed;
	      return this;
	    }
	  }, {
	    key: "reverse",
	    value: function reverse(yes) {
	      var currentSpeed = this.speed();
	      if (yes == null) return this.speed(-currentSpeed);
	      var positive = Math.abs(currentSpeed);
	      return this.speed(yes ? positive : -positive);
	    }
	  }, {
	    key: "seek",
	    value: function seek(dt) {
	      return this.time(this._time + dt);
	    }
	  }, {
	    key: "time",
	    value: function time(_time) {
	      if (_time == null) return this._time;
	      this._time = _time;
	      return this._continue(true);
	    }
	  }, {
	    key: "persist",
	    value: function persist(dtOrForever) {
	      if (dtOrForever == null) return this._persist;
	      this._persist = dtOrForever;
	      return this;
	    }
	  }, {
	    key: "source",
	    value: function source(fn) {
	      if (fn == null) return this._timeSource;
	      this._timeSource = fn;
	      return this;
	    }
	  }, {
	    key: "_stepFn",
	    value: function _stepFn() {
	      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      // Get the time delta from the last time and update the time
	      var time = this._timeSource();

	      var dtSource = time - this._lastSourceTime;
	      if (immediateStep) dtSource = 0;
	      var dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
	      this._lastSourceTime = time; // Only update the time if we use the timeSource.
	      // Otherwise use the current time

	      if (!immediateStep) {
	        // Update the time
	        this._time += dtTime;
	        this._time = this._time < 0 ? 0 : this._time;
	      }

	      this._lastStepTime = this._time;
	      this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
	      // is now before the startTime of the runner. Thats why we need to set
	      // the runner to position 0
	      // FIXME:
	      // However, reseting in insertion order leads to bugs. Considering the case,
	      // where 2 runners change the same attriute but in different times,
	      // reseting both of them will lead to the case where the later defined
	      // runner always wins the reset even if the other runner started earlier
	      // and therefore should win the attribute battle
	      // this can be solved by reseting them backwards

	      for (var k = this._runners.length; k--;) {
	        // Get and run the current runner and ignore it if its inactive
	        var runnerInfo = this._runners[k];
	        var runner = runnerInfo.runner; // Make sure that we give the actual difference
	        // between runner start time and now

	        var dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
	        // and try to reset it

	        if (dtToStart <= 0) {
	          runner.reset();
	        }
	      } // Run all of the runners directly


	      var runnersLeft = false;

	      for (var i = 0, len = this._runners.length; i < len; i++) {
	        // Get and run the current runner and ignore it if its inactive
	        var _runnerInfo2 = this._runners[i];
	        var _runner = _runnerInfo2.runner;
	        var dt = dtTime; // Make sure that we give the actual difference
	        // between runner start time and now

	        var _dtToStart = this._time - _runnerInfo2.start; // Dont run runner if not started yet


	        if (_dtToStart <= 0) {
	          runnersLeft = true;
	          continue;
	        } else if (_dtToStart < dt) {
	          // Adjust dt to make sure that animation is on point
	          dt = _dtToStart;
	        }

	        if (!_runner.active()) continue; // If this runner is still going, signal that we need another animation
	        // frame, otherwise, remove the completed runner

	        var finished = _runner.step(dt).done;

	        if (!finished) {
	          runnersLeft = true; // continue
	        } else if (_runnerInfo2.persist !== true) {
	          // runner is finished. And runner might get removed
	          var endTime = _runner.duration() - _runner.time() + this._time;

	          if (endTime + _runnerInfo2.persist < this._time) {
	            // Delete runner and correct index
	            _runner.unschedule();

	            --i;
	            --len;
	          }
	        }
	      } // Basically: we continue when there are runners right from us in time
	      // when -->, and when runners are left from us when <--


	      if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
	        this._continue();
	      } else {
	        this.pause();
	        this.fire('finished');
	      }

	      return this;
	    } // Checks if we are running and continues the animation

	  }, {
	    key: "_continue",
	    value: function _continue() {
	      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      Animator.cancelFrame(this._nextFrame);
	      this._nextFrame = null;
	      if (immediateStep) return this._stepImmediate();
	      if (this._paused) return this;
	      this._nextFrame = Animator.frame(this._step);
	      return this;
	    }
	  }, {
	    key: "active",
	    value: function active() {
	      return !!this._nextFrame;
	    }
	  }]);

	  return Timeline;
	}(EventTarget);
	registerMethods({
	  Element: {
	    timeline: function timeline(_timeline) {
	      if (_timeline == null) {
	        this._timeline = this._timeline || new Timeline();
	        return this._timeline;
	      } else {
	        this._timeline = _timeline;
	        return this;
	      }
	    }
	  }
	});

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var Runner =
	/*#__PURE__*/
	function (_EventTarget) {
	  _inherits(Runner, _EventTarget);

	  function Runner(options) {
	    var _this;

	    _classCallCheck(this, Runner);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Runner).call(this)); // Store a unique id on the runner, so that we can identify it later

	    _this.id = Runner.id++; // Ensure a default value

	    options = options == null ? timeline.duration : options; // Ensure that we get a controller

	    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

	    _this._element = null;
	    _this._timeline = null;
	    _this.done = false;
	    _this._queue = []; // Work out the stepper and the duration

	    _this._duration = typeof options === 'number' && options;
	    _this._isDeclarative = options instanceof Controller;
	    _this._stepper = _this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

	    _this._history = {}; // Store the state of the runner

	    _this.enabled = true;
	    _this._time = 0;
	    _this._lastTime = 0; // At creation, the runner is in reseted state

	    _this._reseted = true; // Save transforms applied to this runner

	    _this.transforms = new Matrix();
	    _this.transformId = 1; // Looping variables

	    _this._haveReversed = false;
	    _this._reverse = false;
	    _this._loopsDone = 0;
	    _this._swing = false;
	    _this._wait = 0;
	    _this._times = 1;
	    _this._frameId = null; // Stores how long a runner is stored after beeing done

	    _this._persist = _this._isDeclarative ? true : null;
	    return _this;
	  }
	  /*
	  Runner Definitions
	  ==================
	  These methods help us define the runtime behaviour of the Runner or they
	  help us make new runners from the current runner
	  */


	  _createClass(Runner, [{
	    key: "element",
	    value: function element(_element) {
	      if (_element == null) return this._element;
	      this._element = _element;

	      _element._prepareRunner();

	      return this;
	    }
	  }, {
	    key: "timeline",
	    value: function timeline(_timeline) {
	      // check explicitly for undefined so we can set the timeline to null
	      if (typeof _timeline === 'undefined') return this._timeline;
	      this._timeline = _timeline;
	      return this;
	    }
	  }, {
	    key: "animate",
	    value: function animate(duration, delay, when) {
	      var o = Runner.sanitise(duration, delay, when);
	      var runner = new Runner(o.duration);
	      if (this._timeline) runner.timeline(this._timeline);
	      if (this._element) runner.element(this._element);
	      return runner.loop(o).schedule(o.delay, o.when);
	    }
	  }, {
	    key: "schedule",
	    value: function schedule(timeline, delay, when) {
	      // The user doesn't need to pass a timeline if we already have one
	      if (!(timeline instanceof Timeline)) {
	        when = delay;
	        delay = timeline;
	        timeline = this.timeline();
	      } // If there is no timeline, yell at the user...


	      if (!timeline) {
	        throw Error('Runner cannot be scheduled without timeline');
	      } // Schedule the runner on the timeline provided


	      timeline.schedule(this, delay, when);
	      return this;
	    }
	  }, {
	    key: "unschedule",
	    value: function unschedule() {
	      var timeline = this.timeline();
	      timeline && timeline.unschedule(this);
	      return this;
	    }
	  }, {
	    key: "loop",
	    value: function loop(times, swing, wait) {
	      // Deal with the user passing in an object
	      if (_typeof(times) === 'object') {
	        swing = times.swing;
	        wait = times.wait;
	        times = times.times;
	      } // Sanitise the values and store them


	      this._times = times || Infinity;
	      this._swing = swing || false;
	      this._wait = wait || 0; // Allow true to be passed

	      if (this._times === true) {
	        this._times = Infinity;
	      }

	      return this;
	    }
	  }, {
	    key: "delay",
	    value: function delay(_delay) {
	      return this.animate(0, _delay);
	    }
	    /*
	    Basic Functionality
	    ===================
	    These methods allow us to attach basic functions to the runner directly
	    */

	  }, {
	    key: "queue",
	    value: function queue(initFn, runFn, retargetFn, isTransform) {
	      this._queue.push({
	        initialiser: initFn || noop,
	        runner: runFn || noop,
	        retarget: retargetFn,
	        isTransform: isTransform,
	        initialised: false,
	        finished: false
	      });

	      var timeline = this.timeline();
	      timeline && this.timeline()._continue();
	      return this;
	    }
	  }, {
	    key: "during",
	    value: function during(fn) {
	      return this.queue(null, fn);
	    }
	  }, {
	    key: "after",
	    value: function after(fn) {
	      return this.on('finished', fn);
	    }
	    /*
	    Runner animation methods
	    ========================
	    Control how the animation plays
	    */

	  }, {
	    key: "time",
	    value: function time(_time) {
	      if (_time == null) {
	        return this._time;
	      }

	      var dt = _time - this._time;
	      this.step(dt);
	      return this;
	    }
	  }, {
	    key: "duration",
	    value: function duration() {
	      return this._times * (this._wait + this._duration) - this._wait;
	    }
	  }, {
	    key: "loops",
	    value: function loops(p) {
	      var loopDuration = this._duration + this._wait;

	      if (p == null) {
	        var loopsDone = Math.floor(this._time / loopDuration);
	        var relativeTime = this._time - loopsDone * loopDuration;
	        var position = relativeTime / this._duration;
	        return Math.min(loopsDone + position, this._times);
	      }

	      var whole = Math.floor(p);
	      var partial = p % 1;
	      var time = loopDuration * whole + this._duration * partial;
	      return this.time(time);
	    }
	  }, {
	    key: "persist",
	    value: function persist(dtOrForever) {
	      if (dtOrForever == null) return this._persist;
	      this._persist = dtOrForever;
	      return this;
	    }
	  }, {
	    key: "position",
	    value: function position(p) {
	      // Get all of the variables we need
	      var x = this._time;
	      var d = this._duration;
	      var w = this._wait;
	      var t = this._times;
	      var s = this._swing;
	      var r = this._reverse;
	      var position;

	      if (p == null) {
	        /*
	        This function converts a time to a position in the range [0, 1]
	        The full explanation can be found in this desmos demonstration
	          https://www.desmos.com/calculator/u4fbavgche
	        The logic is slightly simplified here because we can use booleans
	        */
	        // Figure out the value without thinking about the start or end time
	        var f = function f(x) {
	          var swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
	          var backwards = swinging && !r || !swinging && r;
	          var uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
	          var clipped = Math.max(Math.min(uncliped, 1), 0);
	          return clipped;
	        }; // Figure out the value by incorporating the start time


	        var endTime = t * (w + d) - w;
	        position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
	        return position;
	      } // Work out the loops done and add the position to the loops done


	      var loopsDone = Math.floor(this.loops());
	      var swingForward = s && loopsDone % 2 === 0;
	      var forwards = swingForward && !r || r && swingForward;
	      position = loopsDone + (forwards ? p : 1 - p);
	      return this.loops(position);
	    }
	  }, {
	    key: "progress",
	    value: function progress(p) {
	      if (p == null) {
	        return Math.min(1, this._time / this.duration());
	      }

	      return this.time(p * this.duration());
	    }
	  }, {
	    key: "step",
	    value: function step(dt) {
	      // If we are inactive, this stepper just gets skipped
	      if (!this.enabled) return this; // Update the time and get the new position

	      dt = dt == null ? 16 : dt;
	      this._time += dt;
	      var position = this.position(); // Figure out if we need to run the stepper in this frame

	      var running = this._lastPosition !== position && this._time >= 0;
	      this._lastPosition = position; // Figure out if we just started

	      var duration = this.duration();
	      var justStarted = this._lastTime <= 0 && this._time > 0;
	      var justFinished = this._lastTime < duration && this._time >= duration;
	      this._lastTime = this._time;

	      if (justStarted) {
	        this.fire('start', this);
	      } // Work out if the runner is finished set the done flag here so animations
	      // know, that they are running in the last step (this is good for
	      // transformations which can be merged)


	      var declarative = this._isDeclarative;
	      this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

	      this._reseted = false; // Call initialise and the run function

	      if (running || declarative) {
	        this._initialise(running); // clear the transforms on this runner so they dont get added again and again


	        this.transforms = new Matrix();

	        var converged = this._run(declarative ? dt : position);

	        this.fire('step', this);
	      } // correct the done flag here
	      // declaritive animations itself know when they converged


	      this.done = this.done || converged && declarative;

	      if (justFinished) {
	        this.fire('finished', this);
	      }

	      return this;
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      if (this._reseted) return this;
	      this.time(0);
	      this._reseted = true;
	      return this;
	    }
	  }, {
	    key: "finish",
	    value: function finish() {
	      return this.step(Infinity);
	    }
	  }, {
	    key: "reverse",
	    value: function reverse(_reverse) {
	      this._reverse = _reverse == null ? !this._reverse : _reverse;
	      return this;
	    }
	  }, {
	    key: "ease",
	    value: function ease(fn) {
	      this._stepper = new Ease(fn);
	      return this;
	    }
	  }, {
	    key: "active",
	    value: function active(enabled) {
	      if (enabled == null) return this.enabled;
	      this.enabled = enabled;
	      return this;
	    }
	    /*
	    Private Methods
	    ===============
	    Methods that shouldn't be used externally
	    */
	    // Save a morpher to the morpher list so that we can retarget it later

	  }, {
	    key: "_rememberMorpher",
	    value: function _rememberMorpher(method, morpher) {
	      this._history[method] = {
	        morpher: morpher,
	        caller: this._queue[this._queue.length - 1]
	      }; // We have to resume the timeline in case a controller
	      // is already done without beeing ever run
	      // This can happen when e.g. this is done:
	      //    anim = el.animate(new SVG.Spring)
	      // and later
	      //    anim.move(...)

	      if (this._isDeclarative) {
	        var timeline = this.timeline();
	        timeline && timeline.play();
	      }
	    } // Try to set the target for a morpher if the morpher exists, otherwise
	    // do nothing and return false

	  }, {
	    key: "_tryRetarget",
	    value: function _tryRetarget(method, target, extra) {
	      if (this._history[method]) {
	        // if the last method wasnt even initialised, throw it away
	        if (!this._history[method].caller.initialised) {
	          var index = this._queue.indexOf(this._history[method].caller);

	          this._queue.splice(index, 1);

	          return false;
	        } // for the case of transformations, we use the special retarget function
	        // which has access to the outer scope


	        if (this._history[method].caller.retarget) {
	          this._history[method].caller.retarget(target, extra); // for everything else a simple morpher change is sufficient

	        } else {
	          this._history[method].morpher.to(target);
	        }

	        this._history[method].caller.finished = false;
	        var timeline = this.timeline();
	        timeline && timeline.play();
	        return true;
	      }

	      return false;
	    } // Run each initialise function in the runner if required

	  }, {
	    key: "_initialise",
	    value: function _initialise(running) {
	      // If we aren't running, we shouldn't initialise when not declarative
	      if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

	      for (var i = 0, len = this._queue.length; i < len; ++i) {
	        // Get the current initialiser
	        var current = this._queue[i]; // Determine whether we need to initialise

	        var needsIt = this._isDeclarative || !current.initialised && running;
	        running = !current.finished; // Call the initialiser if we need to

	        if (needsIt && running) {
	          current.initialiser.call(this);
	          current.initialised = true;
	        }
	      }
	    } // Run each run function for the position or dt given

	  }, {
	    key: "_run",
	    value: function _run(positionOrDt) {
	      // Run all of the _queue directly
	      var allfinished = true;

	      for (var i = 0, len = this._queue.length; i < len; ++i) {
	        // Get the current function to run
	        var current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
	        // flag for the sake of declarative _queue

	        var converged = current.runner.call(this, positionOrDt);
	        current.finished = current.finished || converged === true;
	        allfinished = allfinished && current.finished;
	      } // We report when all of the constructors are finished


	      return allfinished;
	    }
	  }, {
	    key: "addTransform",
	    value: function addTransform(transform, index) {
	      this.transforms.lmultiplyO(transform);
	      return this;
	    }
	  }, {
	    key: "clearTransform",
	    value: function clearTransform() {
	      this.transforms = new Matrix();
	      return this;
	    } // TODO: Keep track of all transformations so that deletion is faster

	  }, {
	    key: "clearTransformsFromQueue",
	    value: function clearTransformsFromQueue() {
	      if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
	        this._queue = this._queue.filter(function (item) {
	          return !item.isTransform;
	        });
	      }
	    }
	  }], [{
	    key: "sanitise",
	    value: function sanitise(duration, delay, when) {
	      // Initialise the default parameters
	      var times = 1;
	      var swing = false;
	      var wait = 0;
	      duration = duration || timeline.duration;
	      delay = delay || timeline.delay;
	      when = when || 'last'; // If we have an object, unpack the values

	      if (_typeof(duration) === 'object' && !(duration instanceof Stepper)) {
	        delay = duration.delay || delay;
	        when = duration.when || when;
	        swing = duration.swing || swing;
	        times = duration.times || times;
	        wait = duration.wait || wait;
	        duration = duration.duration || timeline.duration;
	      }

	      return {
	        duration: duration,
	        delay: delay,
	        swing: swing,
	        times: times,
	        wait: wait,
	        when: when
	      };
	    }
	  }]);

	  return Runner;
	}(EventTarget);
	Runner.id = 0;

	var FakeRunner =
	/*#__PURE__*/
	function () {
	  function FakeRunner() {
	    var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Matrix();
	    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
	    var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	    _classCallCheck(this, FakeRunner);

	    this.transforms = transforms;
	    this.id = id;
	    this.done = done;
	  }

	  _createClass(FakeRunner, [{
	    key: "clearTransformsFromQueue",
	    value: function clearTransformsFromQueue() {}
	  }]);

	  return FakeRunner;
	}();

	extend([Runner, FakeRunner], {
	  mergeWith: function mergeWith(runner) {
	    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
	  }
	}); // FakeRunner.emptyRunner = new FakeRunner()

	var lmultiply = function lmultiply(last, curr) {
	  return last.lmultiplyO(curr);
	};

	var getRunnerTransform = function getRunnerTransform(runner) {
	  return runner.transforms;
	};

	function mergeTransforms() {
	  // Find the matrix to apply to the element and apply it
	  var runners = this._transformationRunners.runners;
	  var netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
	  this.transform(netTransform);

	  this._transformationRunners.merge();

	  if (this._transformationRunners.length() === 1) {
	    this._frameId = null;
	  }
	}

	var RunnerArray =
	/*#__PURE__*/
	function () {
	  function RunnerArray() {
	    _classCallCheck(this, RunnerArray);

	    this.runners = [];
	    this.ids = [];
	  }

	  _createClass(RunnerArray, [{
	    key: "add",
	    value: function add(runner) {
	      if (this.runners.includes(runner)) return;
	      var id = runner.id + 1;
	      this.runners.push(runner);
	      this.ids.push(id);
	      return this;
	    }
	  }, {
	    key: "getByID",
	    value: function getByID(id) {
	      return this.runners[this.ids.indexOf(id + 1)];
	    }
	  }, {
	    key: "remove",
	    value: function remove(id) {
	      var index = this.ids.indexOf(id + 1);
	      this.ids.splice(index, 1);
	      this.runners.splice(index, 1);
	      return this;
	    }
	  }, {
	    key: "merge",
	    value: function merge() {
	      var _this2 = this;

	      var lastRunner = null;
	      this.runners.forEach(function (runner, i) {
	        var condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
	        && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

	        if (condition) {
	          // the +1 happens in the function
	          _this2.remove(runner.id);

	          _this2.edit(lastRunner.id, runner.mergeWith(lastRunner));
	        }

	        lastRunner = runner;
	      });
	      return this;
	    }
	  }, {
	    key: "edit",
	    value: function edit(id, newRunner) {
	      var index = this.ids.indexOf(id + 1);
	      this.ids.splice(index, 1, id + 1);
	      this.runners.splice(index, 1, newRunner);
	      return this;
	    }
	  }, {
	    key: "length",
	    value: function length() {
	      return this.ids.length;
	    }
	  }, {
	    key: "clearBefore",
	    value: function clearBefore(id) {
	      var deleteCnt = this.ids.indexOf(id + 1) || 1;
	      this.ids.splice(0, deleteCnt, 0);
	      this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(function (r) {
	        return r.clearTransformsFromQueue();
	      });
	      return this;
	    }
	  }]);

	  return RunnerArray;
	}();

	registerMethods({
	  Element: {
	    animate: function animate(duration, delay, when) {
	      var o = Runner.sanitise(duration, delay, when);
	      var timeline = this.timeline();
	      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
	    },
	    delay: function delay(by, when) {
	      return this.animate(0, by, when);
	    },
	    // this function searches for all runners on the element and deletes the ones
	    // which run before the current one. This is because absolute transformations
	    // overwfrite anything anyway so there is no need to waste time computing
	    // other runners
	    _clearTransformRunnersBefore: function _clearTransformRunnersBefore(currentRunner) {
	      this._transformationRunners.clearBefore(currentRunner.id);
	    },
	    _currentTransform: function _currentTransform(current) {
	      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
	      // on the same runner which execute before the current transformation are
	      // taken into account
	      .filter(function (runner) {
	        return runner.id <= current.id;
	      }).map(getRunnerTransform).reduce(lmultiply, new Matrix());
	    },
	    _addRunner: function _addRunner(runner) {
	      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
	      // all Animator functions. Thats why we use immediate here to execute
	      // the merge right after all frames are run


	      Animator.cancelImmediate(this._frameId);
	      this._frameId = Animator.immediate(mergeTransforms.bind(this));
	    },
	    _prepareRunner: function _prepareRunner() {
	      if (this._frameId == null) {
	        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
	      }
	    }
	  }
	});
	extend(Runner, {
	  attr: function attr(a, v) {
	    return this.styleAttr('attr', a, v);
	  },
	  // Add animatable styles
	  css: function css(s, v) {
	    return this.styleAttr('css', s, v);
	  },
	  styleAttr: function styleAttr(type, name, val) {
	    // apply attributes individually
	    if (_typeof(name) === 'object') {
	      for (var key in name) {
	        this.styleAttr(type, key, name[key]);
	      }

	      return this;
	    }

	    var morpher = new Morphable(this._stepper).to(val);
	    this.queue(function () {
	      morpher = morpher.from(this.element()[type](name));
	    }, function (pos) {
	      this.element()[type](name, morpher.at(pos));
	      return morpher.done();
	    });
	    return this;
	  },
	  zoom: function zoom(level, point) {
	    if (this._tryRetarget('zoom', to, point)) return this;
	    var morpher = new Morphable(this._stepper).to(new SVGNumber(level));
	    this.queue(function () {
	      morpher = morpher.from(this.element().zoom());
	    }, function (pos) {
	      this.element().zoom(morpher.at(pos), point);
	      return morpher.done();
	    }, function (newLevel, newPoint) {
	      point = newPoint;
	      morpher.to(newLevel);
	    });

	    this._rememberMorpher('zoom', morpher);

	    return this;
	  },

	  /**
	   ** absolute transformations
	   **/
	  //
	  // M v -----|-----(D M v = F v)------|----->  T v
	  //
	  // 1. define the final state (T) and decompose it (once)
	  //    t = [tx, ty, the, lam, sy, sx]
	  // 2. on every frame: pull the current state of all previous transforms
	  //    (M - m can change)
	  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
	  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
	  //   - Note F(0) = M
	  //   - Note F(1) = T
	  // 4. Now you get the delta matrix as a result: D = F * inv(M)
	  transform: function transform(transforms, relative, affine) {
	    // If we have a declarative function, we should retarget it if possible
	    relative = transforms.relative || relative;

	    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
	      return this;
	    } // Parse the parameters


	    var isMatrix = Matrix.isMatrixLike(transforms);
	    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

	    var morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
	    var origin;
	    var element;
	    var current;
	    var currentAngle;
	    var startTransform;

	    function setup() {
	      // make sure element and origin is defined
	      element = element || this.element();
	      origin = origin || getOrigin(transforms, element);
	      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

	      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


	      if (!relative) {
	        element._clearTransformRunnersBefore(this);
	      }
	    }

	    function run(pos) {
	      // clear all other transforms before this in case something is saved
	      // on this runner. We are absolute. We dont need these!
	      if (!relative) this.clearTransform();

	      var _transform = new Point(origin).transform(element._currentTransform(this)),
	          x = _transform.x,
	          y = _transform.y;

	      var target = new Matrix(_objectSpread$1({}, transforms, {
	        origin: [x, y]
	      }));
	      var start = this._isDeclarative && current ? current : startTransform;

	      if (affine) {
	        target = target.decompose(x, y);
	        start = start.decompose(x, y); // Get the current and target angle as it was set

	        var rTarget = target.rotate;
	        var rCurrent = start.rotate; // Figure out the shortest path to rotate directly

	        var possibilities = [rTarget - 360, rTarget, rTarget + 360];
	        var distances = possibilities.map(function (a) {
	          return Math.abs(a - rCurrent);
	        });
	        var shortest = Math.min.apply(Math, _toConsumableArray(distances));
	        var index = distances.indexOf(shortest);
	        target.rotate = possibilities[index];
	      }

	      if (relative) {
	        // we have to be careful here not to overwrite the rotation
	        // with the rotate method of Matrix
	        if (!isMatrix) {
	          target.rotate = transforms.rotate || 0;
	        }

	        if (this._isDeclarative && currentAngle) {
	          start.rotate = currentAngle;
	        }
	      }

	      morpher.from(start);
	      morpher.to(target);
	      var affineParameters = morpher.at(pos);
	      currentAngle = affineParameters.rotate;
	      current = new Matrix(affineParameters);
	      this.addTransform(current);

	      element._addRunner(this);

	      return morpher.done();
	    }

	    function retarget(newTransforms) {
	      // only get a new origin if it changed since the last call
	      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
	        origin = getOrigin(transforms, element);
	      } // overwrite the old transformations with the new ones


	      transforms = _objectSpread$1({}, newTransforms, {
	        origin: origin
	      });
	    }

	    this.queue(setup, run, retarget, true);
	    this._isDeclarative && this._rememberMorpher('transform', morpher);
	    return this;
	  },
	  // Animatable x-axis
	  x: function x(_x, relative) {
	    return this._queueNumber('x', _x);
	  },
	  // Animatable y-axis
	  y: function y(_y) {
	    return this._queueNumber('y', _y);
	  },
	  dx: function dx() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    return this._queueNumberDelta('x', x);
	  },
	  dy: function dy() {
	    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    return this._queueNumberDelta('y', y);
	  },
	  dmove: function dmove(x, y) {
	    return this.dx(x).dy(y);
	  },
	  _queueNumberDelta: function _queueNumberDelta(method, to) {
	    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

	    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

	    var morpher = new Morphable(this._stepper).to(to);
	    var from = null;
	    this.queue(function () {
	      from = this.element()[method]();
	      morpher.from(from);
	      morpher.to(from + to);
	    }, function (pos) {
	      this.element()[method](morpher.at(pos));
	      return morpher.done();
	    }, function (newTo) {
	      morpher.to(from + new SVGNumber(newTo));
	    }); // Register the morpher so that if it is changed again, we can retarget it

	    this._rememberMorpher(method, morpher);

	    return this;
	  },
	  _queueObject: function _queueObject(method, to) {
	    // Try to change the target if we have this method already registerd
	    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

	    var morpher = new Morphable(this._stepper).to(to);
	    this.queue(function () {
	      morpher.from(this.element()[method]());
	    }, function (pos) {
	      this.element()[method](morpher.at(pos));
	      return morpher.done();
	    }); // Register the morpher so that if it is changed again, we can retarget it

	    this._rememberMorpher(method, morpher);

	    return this;
	  },
	  _queueNumber: function _queueNumber(method, value) {
	    return this._queueObject(method, new SVGNumber(value));
	  },
	  // Animatable center x-axis
	  cx: function cx(x) {
	    return this._queueNumber('cx', x);
	  },
	  // Animatable center y-axis
	  cy: function cy(y) {
	    return this._queueNumber('cy', y);
	  },
	  // Add animatable move
	  move: function move(x, y) {
	    return this.x(x).y(y);
	  },
	  // Add animatable center
	  center: function center(x, y) {
	    return this.cx(x).cy(y);
	  },
	  // Add animatable size
	  size: function size(width, height) {
	    // animate bbox based size for all other elements
	    var box;

	    if (!width || !height) {
	      box = this._element.bbox();
	    }

	    if (!width) {
	      width = box.width / box.height * height;
	    }

	    if (!height) {
	      height = box.height / box.width * width;
	    }

	    return this.width(width).height(height);
	  },
	  // Add animatable width
	  width: function width(_width) {
	    return this._queueNumber('width', _width);
	  },
	  // Add animatable height
	  height: function height(_height) {
	    return this._queueNumber('height', _height);
	  },
	  // Add animatable plot
	  plot: function plot(a, b, c, d) {
	    // Lines can be plotted with 4 arguments
	    if (arguments.length === 4) {
	      return this.plot([a, b, c, d]);
	    }

	    if (this._tryRetarget('plot', a)) return this;
	    var morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
	    this.queue(function () {
	      morpher.from(this._element.array());
	    }, function (pos) {
	      this._element.plot(morpher.at(pos));

	      return morpher.done();
	    });

	    this._rememberMorpher('plot', morpher);

	    return this;
	  },
	  // Add leading method
	  leading: function leading(value) {
	    return this._queueNumber('leading', value);
	  },
	  // Add animatable viewbox
	  viewbox: function viewbox(x, y, width, height) {
	    return this._queueObject('viewbox', new Box(x, y, width, height));
	  },
	  update: function update(o) {
	    if (_typeof(o) !== 'object') {
	      return this.update({
	        offset: arguments[0],
	        color: arguments[1],
	        opacity: arguments[2]
	      });
	    }

	    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
	    if (o.color != null) this.attr('stop-color', o.color);
	    if (o.offset != null) this.attr('offset', o.offset);
	    return this;
	  }
	});
	extend(Runner, {
	  rx: rx,
	  ry: ry,
	  from: from,
	  to: to
	});
	register(Runner, 'Runner');

	var Svg =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(Svg, _Container);

	  function Svg(node) {
	    var _this;

	    _classCallCheck(this, Svg);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Svg).call(this, nodeOrNew('svg', node), node));

	    _this.namespace();

	    return _this;
	  }

	  _createClass(Svg, [{
	    key: "isRoot",
	    value: function isRoot() {
	      return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) || this.node.parentNode.nodeName === '#document';
	    } // Check if this is a root svg
	    // If not, call docs from this element

	  }, {
	    key: "root",
	    value: function root() {
	      if (this.isRoot()) return this;
	      return _get(_getPrototypeOf(Svg.prototype), "root", this).call(this);
	    } // Add namespaces

	  }, {
	    key: "namespace",
	    value: function namespace() {
	      if (!this.isRoot()) return this.root().namespace();
	      return this.attr({
	        xmlns: ns,
	        version: '1.1'
	      }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
	    } // Creates and returns defs element

	  }, {
	    key: "defs",
	    value: function defs() {
	      if (!this.isRoot()) return this.root().defs();
	      return adopt(this.node.querySelector('defs')) || this.put(new Defs());
	    } // custom parent method

	  }, {
	    key: "parent",
	    value: function parent(type) {
	      if (this.isRoot()) {
	        return this.node.parentNode.nodeName === '#document' ? null : adopt(this.node.parentNode);
	      }

	      return _get(_getPrototypeOf(Svg.prototype), "parent", this).call(this, type);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      // remove children
	      while (this.node.hasChildNodes()) {
	        this.node.removeChild(this.node.lastChild);
	      } // remove defs reference


	      delete this._defs;
	      return this;
	    }
	  }]);

	  return Svg;
	}(Container);
	registerMethods({
	  Container: {
	    // Create nested svg document
	    nested: wrapWithAttrCheck(function () {
	      return this.put(new Svg());
	    })
	  }
	});
	register(Svg, 'Svg', true);

	var _Symbol =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(_Symbol, _Container);

	  // Initialize node
	  function _Symbol(node) {
	    _classCallCheck(this, _Symbol);

	    return _possibleConstructorReturn(this, _getPrototypeOf(_Symbol).call(this, nodeOrNew('symbol', node), node));
	  }

	  return _Symbol;
	}(Container);
	registerMethods({
	  Container: {
	    symbol: wrapWithAttrCheck(function () {
	      return this.put(new _Symbol());
	    })
	  }
	});
	register(_Symbol, 'Symbol');

	function plain(text) {
	  // clear if build mode is disabled
	  if (this._build === false) {
	    this.clear();
	  } // create text node


	  this.node.appendChild(globals.document.createTextNode(text));
	  return this;
	} // Get length of text element

	function length() {
	  return this.node.getComputedTextLength();
	}

	var textable = ({
		__proto__: null,
		plain: plain,
		length: length
	});

	var Text =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Text, _Shape);

	  // Initialize node
	  function Text(node) {
	    var _this;

	    _classCallCheck(this, Text);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, nodeOrNew('text', node), node));
	    _this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

	    _this._rebuild = true; // enable automatic updating of dy values

	    _this._build = false; // disable build mode for adding multiple lines

	    return _this;
	  } // Move over x-axis
	  // Text is moved its bounding box
	  // text-anchor does NOT matter


	  _createClass(Text, [{
	    key: "x",
	    value: function x(_x) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

	      if (_x == null) {
	        return box.x;
	      }

	      return this.attr('x', this.attr('x') + _x - box.x);
	    } // Move over y-axis

	  }, {
	    key: "y",
	    value: function y(_y) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

	      if (_y == null) {
	        return box.y;
	      }

	      return this.attr('y', this.attr('y') + _y - box.y);
	    }
	  }, {
	    key: "move",
	    value: function move(x, y) {
	      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
	      return this.x(x, box).y(y, box);
	    } // Move center over x-axis

	  }, {
	    key: "cx",
	    value: function cx(x) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

	      if (x == null) {
	        return box.cx;
	      }

	      return this.attr('x', this.attr('x') + x - box.cx);
	    } // Move center over y-axis

	  }, {
	    key: "cy",
	    value: function cy(y) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

	      if (y == null) {
	        return box.cy;
	      }

	      return this.attr('y', this.attr('y') + y - box.cy);
	    }
	  }, {
	    key: "center",
	    value: function center(x, y) {
	      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
	      return this.cx(x, box).cy(y, box);
	    } // Set the text content

	  }, {
	    key: "text",
	    value: function text(_text) {
	      // act as getter
	      if (_text === undefined) {
	        var children = this.node.childNodes;
	        var firstLine = 0;
	        _text = '';

	        for (var i = 0, len = children.length; i < len; ++i) {
	          // skip textPaths - they are no lines
	          if (children[i].nodeName === 'textPath') {
	            if (i === 0) firstLine = 1;
	            continue;
	          } // add newline if its not the first child and newLined is set to true


	          if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
	            _text += '\n';
	          } // add content of this node


	          _text += children[i].textContent;
	        }

	        return _text;
	      } // remove existing content


	      this.clear().build(true);

	      if (typeof _text === 'function') {
	        // call block
	        _text.call(this, this);
	      } else {
	        // store text and make sure text is not blank
	        _text = _text.split('\n'); // build new lines

	        for (var j = 0, jl = _text.length; j < jl; j++) {
	          this.tspan(_text[j]).newLine();
	        }
	      } // disable build mode and rebuild lines


	      return this.build(false).rebuild();
	    } // Set / get leading

	  }, {
	    key: "leading",
	    value: function leading(value) {
	      // act as getter
	      if (value == null) {
	        return this.dom.leading;
	      } // act as setter


	      this.dom.leading = new SVGNumber(value);
	      return this.rebuild();
	    } // Rebuild appearance type

	  }, {
	    key: "rebuild",
	    value: function rebuild(_rebuild) {
	      // store new rebuild flag if given
	      if (typeof _rebuild === 'boolean') {
	        this._rebuild = _rebuild;
	      } // define position of all lines


	      if (this._rebuild) {
	        var self = this;
	        var blankLineOffset = 0;
	        var leading = this.dom.leading;
	        this.each(function () {
	          var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
	          var dy = leading * new SVGNumber(fontSize);

	          if (this.dom.newLined) {
	            this.attr('x', self.attr('x'));

	            if (this.text() === '\n') {
	              blankLineOffset += dy;
	            } else {
	              this.attr('dy', dy + blankLineOffset);
	              blankLineOffset = 0;
	            }
	          }
	        });
	        this.fire('rebuild');
	      }

	      return this;
	    } // Enable / disable build mode

	  }, {
	    key: "build",
	    value: function build(_build) {
	      this._build = !!_build;
	      return this;
	    } // overwrite method from parent to set data properly

	  }, {
	    key: "setData",
	    value: function setData(o) {
	      this.dom = o;
	      this.dom.leading = new SVGNumber(o.leading || 1.3);
	      return this;
	    }
	  }]);

	  return Text;
	}(Shape);
	extend(Text, textable);
	registerMethods({
	  Container: {
	    // Create text element
	    text: wrapWithAttrCheck(function (text) {
	      return this.put(new Text()).text(text);
	    }),
	    // Create plain text element
	    plain: wrapWithAttrCheck(function (text) {
	      return this.put(new Text()).plain(text);
	    })
	  }
	});
	register(Text, 'Text');

	var Tspan =
	/*#__PURE__*/
	function (_Text) {
	  _inherits(Tspan, _Text);

	  // Initialize node
	  function Tspan(node) {
	    _classCallCheck(this, Tspan);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Tspan).call(this, nodeOrNew('tspan', node), node));
	  } // Set text content


	  _createClass(Tspan, [{
	    key: "text",
	    value: function text(_text) {
	      if (_text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');
	      typeof _text === 'function' ? _text.call(this, this) : this.plain(_text);
	      return this;
	    } // Shortcut dx

	  }, {
	    key: "dx",
	    value: function dx(_dx) {
	      return this.attr('dx', _dx);
	    } // Shortcut dy

	  }, {
	    key: "dy",
	    value: function dy(_dy) {
	      return this.attr('dy', _dy);
	    }
	  }, {
	    key: "x",
	    value: function x(_x) {
	      return this.attr('x', _x);
	    }
	  }, {
	    key: "y",
	    value: function y(_y) {
	      return this.attr('x', _y);
	    }
	  }, {
	    key: "move",
	    value: function move(x, y) {
	      return this.x(x).y(y);
	    } // Create new line

	  }, {
	    key: "newLine",
	    value: function newLine() {
	      // fetch text parent
	      var t = this.parent(Text); // mark new line

	      this.dom.newLined = true;
	      var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
	      var dy = t.dom.leading * new SVGNumber(fontSize); // apply new position

	      return this.dy(dy).attr('x', t.x());
	    }
	  }]);

	  return Tspan;
	}(Text);
	extend(Tspan, textable);
	registerMethods({
	  Tspan: {
	    tspan: wrapWithAttrCheck(function (text) {
	      var tspan = new Tspan(); // clear if build mode is disabled

	      if (!this._build) {
	        this.clear();
	      } // add new tspan


	      this.node.appendChild(tspan.node);
	      return tspan.text(text);
	    })
	  }
	});
	register(Tspan, 'Tspan');

	var ClipPath =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(ClipPath, _Container);

	  function ClipPath(node) {
	    _classCallCheck(this, ClipPath);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ClipPath).call(this, nodeOrNew('clipPath', node), node));
	  } // Unclip all clipped elements and remove itself


	  _createClass(ClipPath, [{
	    key: "remove",
	    value: function remove() {
	      // unclip all targets
	      this.targets().forEach(function (el) {
	        el.unclip();
	      }); // remove clipPath from parent

	      return _get(_getPrototypeOf(ClipPath.prototype), "remove", this).call(this);
	    }
	  }, {
	    key: "targets",
	    value: function targets() {
	      return baseFind('svg [clip-path*="' + this.id() + '"]');
	    }
	  }]);

	  return ClipPath;
	}(Container);
	registerMethods({
	  Container: {
	    // Create clipping element
	    clip: wrapWithAttrCheck(function () {
	      return this.defs().put(new ClipPath());
	    })
	  },
	  Element: {
	    // Distribute clipPath to svg element
	    clipWith: function clipWith(element) {
	      // use given clip or create a new one
	      var clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

	      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
	    },
	    // Unclip element
	    unclip: function unclip() {
	      return this.attr('clip-path', null);
	    },
	    clipper: function clipper() {
	      return this.reference('clip-path');
	    }
	  }
	});
	register(ClipPath, 'ClipPath');

	var ForeignObject =
	/*#__PURE__*/
	function (_Element) {
	  _inherits(ForeignObject, _Element);

	  function ForeignObject(node) {
	    _classCallCheck(this, ForeignObject);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ForeignObject).call(this, nodeOrNew('foreignObject', node), node));
	  }

	  return ForeignObject;
	}(Element);
	registerMethods({
	  Container: {
	    foreignObject: wrapWithAttrCheck(function (width, height) {
	      return this.put(new ForeignObject()).size(width, height);
	    })
	  }
	});
	register(ForeignObject, 'ForeignObject');

	var G =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(G, _Container);

	  function G(node) {
	    _classCallCheck(this, G);

	    return _possibleConstructorReturn(this, _getPrototypeOf(G).call(this, nodeOrNew('g', node), node));
	  }

	  _createClass(G, [{
	    key: "x",
	    value: function x(_x) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
	      if (_x == null) return box.x;
	      return this.move(_x, box.y, box);
	    }
	  }, {
	    key: "y",
	    value: function y(_y) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
	      if (_y == null) return box.y;
	      return this.move(box.x, _y, box);
	    }
	  }, {
	    key: "move",
	    value: function move() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
	      var dx = x - box.x;
	      var dy = y - box.y;
	      return this.dmove(dx, dy);
	    }
	  }, {
	    key: "dx",
	    value: function dx(_dx) {
	      return this.dmove(_dx, 0);
	    }
	  }, {
	    key: "dy",
	    value: function dy(_dy) {
	      return this.dmove(0, _dy);
	    }
	  }, {
	    key: "dmove",
	    value: function dmove(dx, dy) {
	      this.children().forEach(function (child, i) {
	        // Get the childs bbox
	        var bbox = child.bbox(); // Get childs matrix

	        var m = new Matrix(child); // Translate childs matrix by amount and
	        // transform it back into parents space

	        var matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

	        var p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

	        child.move(p.x, p.y);
	      });
	      return this;
	    }
	  }, {
	    key: "width",
	    value: function width(_width) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
	      if (_width == null) return box.width;
	      return this.size(_width, box.height, box);
	    }
	  }, {
	    key: "height",
	    value: function height(_height) {
	      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
	      if (_height == null) return box.height;
	      return this.size(box.width, _height, box);
	    }
	  }, {
	    key: "size",
	    value: function size(width, height) {
	      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
	      var p = proportionalSize(this, width, height, box);
	      var scaleX = p.width / box.width;
	      var scaleY = p.height / box.height;
	      this.children().forEach(function (child, i) {
	        var o = new Point(box).transform(new Matrix(child).inverse());
	        child.scale(scaleX, scaleY, o.x, o.y);
	      });
	      return this;
	    }
	  }]);

	  return G;
	}(Container);
	registerMethods({
	  Container: {
	    // Create a group element
	    group: wrapWithAttrCheck(function () {
	      return this.put(new G());
	    })
	  }
	});
	register(G, 'G');

	var A =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(A, _Container);

	  function A(node) {
	    _classCallCheck(this, A);

	    return _possibleConstructorReturn(this, _getPrototypeOf(A).call(this, nodeOrNew('a', node), node));
	  } // Link url


	  _createClass(A, [{
	    key: "to",
	    value: function to(url) {
	      return this.attr('href', url, xlink);
	    } // Link target attribute

	  }, {
	    key: "target",
	    value: function target(_target) {
	      return this.attr('target', _target);
	    }
	  }]);

	  return A;
	}(Container);
	registerMethods({
	  Container: {
	    // Create a hyperlink element
	    link: wrapWithAttrCheck(function (url) {
	      return this.put(new A()).to(url);
	    })
	  },
	  Element: {
	    // Create a hyperlink element
	    linkTo: function linkTo(url) {
	      var link = new A();

	      if (typeof url === 'function') {
	        url.call(link, link);
	      } else {
	        link.to(url);
	      }

	      return this.parent().put(link).put(this);
	    }
	  }
	});
	register(A, 'A');

	var Mask =
	/*#__PURE__*/
	function (_Container) {
	  _inherits(Mask, _Container);

	  // Initialize node
	  function Mask(node) {
	    _classCallCheck(this, Mask);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this, nodeOrNew('mask', node), node));
	  } // Unmask all masked elements and remove itself


	  _createClass(Mask, [{
	    key: "remove",
	    value: function remove() {
	      // unmask all targets
	      this.targets().forEach(function (el) {
	        el.unmask();
	      }); // remove mask from parent

	      return _get(_getPrototypeOf(Mask.prototype), "remove", this).call(this);
	    }
	  }, {
	    key: "targets",
	    value: function targets() {
	      return baseFind('svg [mask*="' + this.id() + '"]');
	    }
	  }]);

	  return Mask;
	}(Container);
	registerMethods({
	  Container: {
	    mask: wrapWithAttrCheck(function () {
	      return this.defs().put(new Mask());
	    })
	  },
	  Element: {
	    // Distribute mask to svg element
	    maskWith: function maskWith(element) {
	      // use given mask or create a new one
	      var masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

	      return this.attr('mask', 'url("#' + masker.id() + '")');
	    },
	    // Unmask element
	    unmask: function unmask() {
	      return this.attr('mask', null);
	    },
	    masker: function masker() {
	      return this.reference('mask');
	    }
	  }
	});
	register(Mask, 'Mask');

	function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function cssRule(selector, rule) {
	  if (!selector) return '';
	  if (!rule) return selector;
	  var ret = selector + '{';

	  for (var i in rule) {
	    ret += unCamelCase(i) + ':' + rule[i] + ';';
	  }

	  ret += '}';
	  return ret;
	}

	var Style =
	/*#__PURE__*/
	function (_Element) {
	  _inherits(Style, _Element);

	  function Style(node) {
	    _classCallCheck(this, Style);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Style).call(this, nodeOrNew('style', node), node));
	  }

	  _createClass(Style, [{
	    key: "addText",
	    value: function addText() {
	      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      this.node.textContent += w;
	      return this;
	    }
	  }, {
	    key: "font",
	    value: function font(name, src) {
	      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return this.rule('@font-face', _objectSpread$2({
	        fontFamily: name,
	        src: src
	      }, params));
	    }
	  }, {
	    key: "rule",
	    value: function rule(selector, obj) {
	      return this.addText(cssRule(selector, obj));
	    }
	  }]);

	  return Style;
	}(Element);
	registerMethods('Dom', {
	  style: wrapWithAttrCheck(function (selector, obj) {
	    return this.put(new Style()).rule(selector, obj);
	  }),
	  fontface: wrapWithAttrCheck(function (name, src, params) {
	    return this.put(new Style()).font(name, src, params);
	  })
	});
	register(Style, 'Style');

	var TextPath =
	/*#__PURE__*/
	function (_Text) {
	  _inherits(TextPath, _Text);

	  // Initialize node
	  function TextPath(node) {
	    _classCallCheck(this, TextPath);

	    return _possibleConstructorReturn(this, _getPrototypeOf(TextPath).call(this, nodeOrNew('textPath', node), node));
	  } // return the array of the path track element


	  _createClass(TextPath, [{
	    key: "array",
	    value: function array() {
	      var track = this.track();
	      return track ? track.array() : null;
	    } // Plot path if any

	  }, {
	    key: "plot",
	    value: function plot(d) {
	      var track = this.track();
	      var pathArray = null;

	      if (track) {
	        pathArray = track.plot(d);
	      }

	      return d == null ? pathArray : this;
	    } // Get the path element

	  }, {
	    key: "track",
	    value: function track() {
	      return this.reference('href');
	    }
	  }]);

	  return TextPath;
	}(Text);
	registerMethods({
	  Container: {
	    textPath: wrapWithAttrCheck(function (text, path) {
	      // Convert text to instance if needed
	      if (!(text instanceof Text)) {
	        text = this.text(text);
	      }

	      return text.path(path);
	    })
	  },
	  Text: {
	    // Create path for text to run on
	    path: wrapWithAttrCheck(function (track) {
	      var importNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var textPath = new TextPath(); // if track is a path, reuse it

	      if (!(track instanceof Path)) {
	        // create path element
	        track = this.defs().path(track);
	      } // link textPath to path and add content


	      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

	      var node;

	      if (importNodes) {
	        while (node = this.node.firstChild) {
	          textPath.node.appendChild(node);
	        }
	      } // add textPath element as child node and return textPath


	      return this.put(textPath);
	    }),
	    // Get the textPath children
	    textPath: function textPath() {
	      return this.findOne('textPath');
	    }
	  },
	  Path: {
	    // creates a textPath from this path
	    text: wrapWithAttrCheck(function (text) {
	      // Convert text to instance if needed
	      if (!(text instanceof Text)) {
	        text = new Text().addTo(this.parent()).text(text);
	      } // Create textPath from text and path and return


	      return text.path(this);
	    }),
	    targets: function targets() {
	      return baseFind('svg [href*="' + this.id() + '"]');
	    }
	  }
	});
	TextPath.prototype.MorphArray = PathArray;
	register(TextPath, 'TextPath');

	var Use =
	/*#__PURE__*/
	function (_Shape) {
	  _inherits(Use, _Shape);

	  function Use(node) {
	    _classCallCheck(this, Use);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Use).call(this, nodeOrNew('use', node), node));
	  } // Use element as a reference


	  _createClass(Use, [{
	    key: "element",
	    value: function element(_element, file) {
	      // Set lined element
	      return this.attr('href', (file || '') + '#' + _element, xlink);
	    }
	  }]);

	  return Use;
	}(Shape);
	registerMethods({
	  Container: {
	    // Create a use element
	    use: wrapWithAttrCheck(function (element, file) {
	      return this.put(new Use()).element(element, file);
	    })
	  }
	});
	register(Use, 'Use');

	/* Optional Modules */
	var SVG = makeInstance;
	extend([Svg, _Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
	extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
	extend(Text, getMethodsFor('Text'));
	extend(Path, getMethodsFor('Path'));
	extend(Defs, getMethodsFor('Defs'));
	extend([Text, Tspan], getMethodsFor('Tspan'));
	extend([Rect, Ellipse, Circle, Gradient], getMethodsFor('radius'));
	extend(EventTarget, getMethodsFor('EventTarget'));
	extend(Dom, getMethodsFor('Dom'));
	extend(Element, getMethodsFor('Element'));
	extend(Shape, getMethodsFor('Shape')); // extend(Element, getConstructor('Memory'))

	extend(Container, getMethodsFor('Container'));
	extend(Runner, getMethodsFor('Runner'));
	List.extend(getMethodNames());
	registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray]);
	makeMorphable();

	var svgMembers = ({
		__proto__: null,
		Morphable: Morphable,
		registerMorphableType: registerMorphableType,
		makeMorphable: makeMorphable,
		TransformBag: TransformBag,
		ObjectBag: ObjectBag,
		NonMorphable: NonMorphable,
		defaults: defaults,
		utils: utils,
		namespaces: namespaces,
		regex: regex,
		SVG: SVG,
		parser: parser,
		find: baseFind,
		registerWindow: registerWindow,
		Animator: Animator,
		Controller: Controller,
		Ease: Ease,
		PID: PID,
		Spring: Spring,
		easing: easing,
		Queue: Queue,
		Runner: Runner,
		Timeline: Timeline,
		Array: SVGArray,
		Box: Box,
		Color: Color,
		EventTarget: EventTarget,
		Matrix: Matrix,
		Number: SVGNumber,
		PathArray: PathArray,
		Point: Point,
		PointArray: PointArray,
		List: List,
		Circle: Circle,
		ClipPath: ClipPath,
		Container: Container,
		Defs: Defs,
		Dom: Dom,
		Element: Element,
		Ellipse: Ellipse,
		ForeignObject: ForeignObject,
		Gradient: Gradient,
		G: G,
		A: A,
		Image: Image,
		Line: Line,
		Marker: Marker,
		Mask: Mask,
		Path: Path,
		Pattern: Pattern,
		Polygon: Polygon,
		Polyline: Polyline,
		Rect: Rect,
		Shape: Shape,
		Stop: Stop,
		Style: Style,
		Svg: Svg,
		Symbol: _Symbol,
		Text: Text,
		TextPath: TextPath,
		Tspan: Tspan,
		Use: Use,
		on: on,
		off: off,
		dispatch: dispatch,
		root: root,
		create: create,
		makeInstance: makeInstance,
		nodeOrNew: nodeOrNew,
		adopt: adopt,
		mockAdopt: mockAdopt,
		register: register,
		getClass: getClass,
		eid: eid,
		assignNewId: assignNewId,
		extend: extend,
		wrapWithAttrCheck: wrapWithAttrCheck,
		invent: invent
	});

	function SVG$1(element) {
	  return makeInstance(element);
	}
	Object.assign(SVG$1, svgMembers);

	return SVG$1;

}());
//# sourceMappingURL=svg.js.map

/* harmony default export */ __webpack_exports__["default"] = (SVG.SVG);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/lib/yaml/js-yaml.js":
/*!*********************************!*\
  !*** ./src/lib/yaml/js-yaml.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {var require;var require;/* js-yaml 3.14.0 https://github.com/nodeca/js-yaml */

/* harmony default export */ __webpack_exports__["default"] = ((function (f) { if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f() } else if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) { define([], f) } else { var g; if (typeof window !== "undefined") { g = window } else if (typeof global !== "undefined") { g = global } else if (typeof self !== "undefined") { g = self } else { g = this } g.jsyaml = f() } })(function () {
   return (function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return require(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
      'use strict';


      var loader = require('./js-yaml/loader');
      var dumper = require('./js-yaml/dumper');


      function deprecated(name) {
        return function () {
          throw new Error('Function ' + name + ' is deprecated and cannot be used.');
        };
      }


      module.exports.Type = require('./js-yaml/type');
      module.exports.Schema = require('./js-yaml/schema');
      module.exports.FAILSAFE_SCHEMA = require('./js-yaml/schema/failsafe');
      module.exports.JSON_SCHEMA = require('./js-yaml/schema/json');
      module.exports.CORE_SCHEMA = require('./js-yaml/schema/core');
      module.exports.DEFAULT_SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
      module.exports.DEFAULT_FULL_SCHEMA = require('./js-yaml/schema/default_full');
      module.exports.load = loader.load;
      module.exports.loadAll = loader.loadAll;
      module.exports.safeLoad = loader.safeLoad;
      module.exports.safeLoadAll = loader.safeLoadAll;
      module.exports.dump = dumper.dump;
      module.exports.safeDump = dumper.safeDump;
      module.exports.YAMLException = require('./js-yaml/exception');

      // Deprecated schema names from JS-YAML 2.0.x
      module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
      module.exports.SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
      module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');

      // Deprecated functions from JS-YAML 1.x.x
      module.exports.scan = deprecated('scan');
      module.exports.parse = deprecated('parse');
      module.exports.compose = deprecated('compose');
      module.exports.addConstructor = deprecated('addConstructor');

    }, { "./js-yaml/dumper": 3, "./js-yaml/exception": 4, "./js-yaml/loader": 5, "./js-yaml/schema": 7, "./js-yaml/schema/core": 8, "./js-yaml/schema/default_full": 9, "./js-yaml/schema/default_safe": 10, "./js-yaml/schema/failsafe": 11, "./js-yaml/schema/json": 12, "./js-yaml/type": 13 }], 2: [function (require, module, exports) {
      'use strict';


      function isNothing(subject) {
        return (typeof subject === 'undefined') || (subject === null);
      }


      function isObject(subject) {
        return (typeof subject === 'object') && (subject !== null);
      }


      function toArray(sequence) {
        if (Array.isArray(sequence)) return sequence;
        else if (isNothing(sequence)) return [];

        return [sequence];
      }


      function extend(target, source) {
        var index, length, key, sourceKeys;

        if (source) {
          sourceKeys = Object.keys(source);

          for (index = 0, length = sourceKeys.length; index < length; index += 1) {
            key = sourceKeys[index];
            target[key] = source[key];
          }
        }

        return target;
      }


      function repeat(string, count) {
        var result = '', cycle;

        for (cycle = 0; cycle < count; cycle += 1) {
          result += string;
        }

        return result;
      }


      function isNegativeZero(number) {
        return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
      }


      module.exports.isNothing = isNothing;
      module.exports.isObject = isObject;
      module.exports.toArray = toArray;
      module.exports.repeat = repeat;
      module.exports.isNegativeZero = isNegativeZero;
      module.exports.extend = extend;

    }, {}], 3: [function (require, module, exports) {
      'use strict';

      /*eslint-disable no-use-before-define*/

      var common = require('./common');
      var YAMLException = require('./exception');
      var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
      var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');

      var _toString = Object.prototype.toString;
      var _hasOwnProperty = Object.prototype.hasOwnProperty;

      var CHAR_TAB = 0x09; /* Tab */
      var CHAR_LINE_FEED = 0x0A; /* LF */
      var CHAR_CARRIAGE_RETURN = 0x0D; /* CR */
      var CHAR_SPACE = 0x20; /* Space */
      var CHAR_EXCLAMATION = 0x21; /* ! */
      var CHAR_DOUBLE_QUOTE = 0x22; /* " */
      var CHAR_SHARP = 0x23; /* # */
      var CHAR_PERCENT = 0x25; /* % */
      var CHAR_AMPERSAND = 0x26; /* & */
      var CHAR_SINGLE_QUOTE = 0x27; /* ' */
      var CHAR_ASTERISK = 0x2A; /* * */
      var CHAR_COMMA = 0x2C; /* , */
      var CHAR_MINUS = 0x2D; /* - */
      var CHAR_COLON = 0x3A; /* : */
      var CHAR_EQUALS = 0x3D; /* = */
      var CHAR_GREATER_THAN = 0x3E; /* > */
      var CHAR_QUESTION = 0x3F; /* ? */
      var CHAR_COMMERCIAL_AT = 0x40; /* @ */
      var CHAR_LEFT_SQUARE_BRACKET = 0x5B; /* [ */
      var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
      var CHAR_GRAVE_ACCENT = 0x60; /* ` */
      var CHAR_LEFT_CURLY_BRACKET = 0x7B; /* { */
      var CHAR_VERTICAL_LINE = 0x7C; /* | */
      var CHAR_RIGHT_CURLY_BRACKET = 0x7D; /* } */

      var ESCAPE_SEQUENCES = {};

      ESCAPE_SEQUENCES[0x00] = '\\0';
      ESCAPE_SEQUENCES[0x07] = '\\a';
      ESCAPE_SEQUENCES[0x08] = '\\b';
      ESCAPE_SEQUENCES[0x09] = '\\t';
      ESCAPE_SEQUENCES[0x0A] = '\\n';
      ESCAPE_SEQUENCES[0x0B] = '\\v';
      ESCAPE_SEQUENCES[0x0C] = '\\f';
      ESCAPE_SEQUENCES[0x0D] = '\\r';
      ESCAPE_SEQUENCES[0x1B] = '\\e';
      ESCAPE_SEQUENCES[0x22] = '\\"';
      ESCAPE_SEQUENCES[0x5C] = '\\\\';
      ESCAPE_SEQUENCES[0x85] = '\\N';
      ESCAPE_SEQUENCES[0xA0] = '\\_';
      ESCAPE_SEQUENCES[0x2028] = '\\L';
      ESCAPE_SEQUENCES[0x2029] = '\\P';

      var DEPRECATED_BOOLEANS_SYNTAX = [
        'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
        'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
      ];

      function compileStyleMap(schema, map) {
        var result, keys, index, length, tag, style, type;

        if (map === null) return {};

        result = {};
        keys = Object.keys(map);

        for (index = 0, length = keys.length; index < length; index += 1) {
          tag = keys[index];
          style = String(map[tag]);

          if (tag.slice(0, 2) === '!!') {
            tag = 'tag:yaml.org,2002:' + tag.slice(2);
          }
          type = schema.compiledTypeMap['fallback'][tag];

          if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style];
          }

          result[tag] = style;
        }

        return result;
      }

      function encodeHex(character) {
        var string, handle, length;

        string = character.toString(16).toUpperCase();

        if (character <= 0xFF) {
          handle = 'x';
          length = 2;
        } else if (character <= 0xFFFF) {
          handle = 'u';
          length = 4;
        } else if (character <= 0xFFFFFFFF) {
          handle = 'U';
          length = 8;
        } else {
          throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
        }

        return '\\' + handle + common.repeat('0', length - string.length) + string;
      }

      function State(options) {
        this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
        this.indent = Math.max(1, (options['indent'] || 2));
        this.noArrayIndent = options['noArrayIndent'] || false;
        this.skipInvalid = options['skipInvalid'] || false;
        this.flowLevel = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
        this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
        this.sortKeys = options['sortKeys'] || false;
        this.lineWidth = options['lineWidth'] || 80;
        this.noRefs = options['noRefs'] || false;
        this.noCompatMode = options['noCompatMode'] || false;
        this.condenseFlow = options['condenseFlow'] || false;

        this.implicitTypes = this.schema.compiledImplicit;
        this.explicitTypes = this.schema.compiledExplicit;

        this.tag = null;
        this.result = '';

        this.duplicates = [];
        this.usedDuplicates = null;
      }

      // Indents every line in a string. Empty lines (\n only) are not indented.
      function indentString(string, spaces) {
        var ind = common.repeat(' ', spaces),
          position = 0,
          next = -1,
          result = '',
          line,
          length = string.length;

        while (position < length) {
          next = string.indexOf('\n', position);
          if (next === -1) {
            line = string.slice(position);
            position = length;
          } else {
            line = string.slice(position, next + 1);
            position = next + 1;
          }

          if (line.length && line !== '\n') result += ind;

          result += line;
        }

        return result;
      }

      function generateNextLine(state, level) {
        return '\n' + common.repeat(' ', state.indent * level);
      }

      function testImplicitResolving(state, str) {
        var index, length, type;

        for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
          type = state.implicitTypes[index];

          if (type.resolve(str)) {
            return true;
          }
        }

        return false;
      }

      // [33] s-white ::= s-space | s-tab
      function isWhitespace(c) {
        return c === CHAR_SPACE || c === CHAR_TAB;
      }

      // Returns true if the character can be printed without escaping.
      // From YAML 1.2: "any allowed characters known to be non-printable
      // should also be escaped. [However,] This isn’t mandatory"
      // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
      function isPrintable(c) {
        return (0x00020 <= c && c <= 0x00007E)
          || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
          || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
          || (0x10000 <= c && c <= 0x10FFFF);
      }

      // [34] ns-char ::= nb-char - s-white
      // [27] nb-char ::= c-printable - b-char - c-byte-order-mark
      // [26] b-char  ::= b-line-feed | b-carriage-return
      // [24] b-line-feed       ::=     #xA    /* LF */
      // [25] b-carriage-return ::=     #xD    /* CR */
      // [3]  c-byte-order-mark ::=     #xFEFF
      function isNsChar(c) {
        return isPrintable(c) && !isWhitespace(c)
          // byte-order-mark
          && c !== 0xFEFF
          // b-char
          && c !== CHAR_CARRIAGE_RETURN
          && c !== CHAR_LINE_FEED;
      }

      // Simplified test for values allowed after the first character in plain style.
      function isPlainSafe(c, prev) {
        // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
        // where nb-char ::= c-printable - b-char - c-byte-order-mark.
        return isPrintable(c) && c !== 0xFEFF
          // - c-flow-indicator
          && c !== CHAR_COMMA
          && c !== CHAR_LEFT_SQUARE_BRACKET
          && c !== CHAR_RIGHT_SQUARE_BRACKET
          && c !== CHAR_LEFT_CURLY_BRACKET
          && c !== CHAR_RIGHT_CURLY_BRACKET
          // - ":" - "#"
          // /* An ns-char preceding */ "#"
          && c !== CHAR_COLON
          && ((c !== CHAR_SHARP) || (prev && isNsChar(prev)));
      }

      // Simplified test for values allowed as the first character in plain style.
      function isPlainSafeFirst(c) {
        // Uses a subset of ns-char - c-indicator
        // where ns-char = nb-char - s-white.
        return isPrintable(c) && c !== 0xFEFF
          && !isWhitespace(c) // - s-white
          // - (c-indicator ::=
          // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
          && c !== CHAR_MINUS
          && c !== CHAR_QUESTION
          && c !== CHAR_COLON
          && c !== CHAR_COMMA
          && c !== CHAR_LEFT_SQUARE_BRACKET
          && c !== CHAR_RIGHT_SQUARE_BRACKET
          && c !== CHAR_LEFT_CURLY_BRACKET
          && c !== CHAR_RIGHT_CURLY_BRACKET
          // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
          && c !== CHAR_SHARP
          && c !== CHAR_AMPERSAND
          && c !== CHAR_ASTERISK
          && c !== CHAR_EXCLAMATION
          && c !== CHAR_VERTICAL_LINE
          && c !== CHAR_EQUALS
          && c !== CHAR_GREATER_THAN
          && c !== CHAR_SINGLE_QUOTE
          && c !== CHAR_DOUBLE_QUOTE
          // | “%” | “@” | “`”)
          && c !== CHAR_PERCENT
          && c !== CHAR_COMMERCIAL_AT
          && c !== CHAR_GRAVE_ACCENT;
      }

      // Determines whether block indentation indicator is required.
      function needIndentIndicator(string) {
        var leadingSpaceRe = /^\n* /;
        return leadingSpaceRe.test(string);
      }

      var STYLE_PLAIN = 1,
        STYLE_SINGLE = 2,
        STYLE_LITERAL = 3,
        STYLE_FOLDED = 4,
        STYLE_DOUBLE = 5;

      // Determines which scalar styles are possible and returns the preferred style.
      // lineWidth = -1 => no limit.
      // Pre-conditions: str.length > 0.
      // Post-conditions:
      //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
      //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
      //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
      function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
        var i;
        var char, prev_char;
        var hasLineBreak = false;
        var hasFoldableLine = false; // only checked if shouldTrackWidth
        var shouldTrackWidth = lineWidth !== -1;
        var previousLineBreak = -1; // count the first line correctly
        var plain = isPlainSafeFirst(string.charCodeAt(0))
          && !isWhitespace(string.charCodeAt(string.length - 1));

        if (singleLineOnly) {
          // Case: no block styles.
          // Check for disallowed characters to rule out plain and single.
          for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            if (!isPrintable(char)) {
              return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
          }
        } else {
          // Case: block styles permitted.
          for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            if (char === CHAR_LINE_FEED) {
              hasLineBreak = true;
              // Check if any line can be folded.
              if (shouldTrackWidth) {
                hasFoldableLine = hasFoldableLine ||
                  // Foldable line = too long, and not more-indented.
                  (i - previousLineBreak - 1 > lineWidth &&
                    string[previousLineBreak + 1] !== ' ');
                previousLineBreak = i;
              }
            } else if (!isPrintable(char)) {
              return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
          }
          // in case the end is missing a \n
          hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
            (i - previousLineBreak - 1 > lineWidth &&
              string[previousLineBreak + 1] !== ' '));
        }
        // Although every style can represent \n without escaping, prefer block styles
        // for multiline, since they're more readable and they don't add empty lines.
        // Also prefer folding a super-long line.
        if (!hasLineBreak && !hasFoldableLine) {
          // Strings interpretable as another type have to be quoted;
          // e.g. the string 'true' vs. the boolean true.
          return plain && !testAmbiguousType(string)
            ? STYLE_PLAIN : STYLE_SINGLE;
        }
        // Edge case: block indentation indicator can only have one digit.
        if (indentPerLevel > 9 && needIndentIndicator(string)) {
          return STYLE_DOUBLE;
        }
        // At this point we know block styles are valid.
        // Prefer literal style unless we want to fold.
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
      }

      // Note: line breaking/folding is implemented for only the folded style.
      // NB. We drop the last trailing newline (if any) of a returned block scalar
      //  since the dumper adds its own newline. This always works:
      //    • No ending newline => unaffected; already using strip "-" chomping.
      //    • Ending newline    => removed then restored.
      //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
      function writeScalar(state, string, level, iskey) {
        state.dump = (function () {
          if (string.length === 0) {
            return "''";
          }
          if (!state.noCompatMode &&
            DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
            return "'" + string + "'";
          }

          var indent = state.indent * Math.max(1, level); // no 0-indent scalars
          // As indentation gets deeper, let the width decrease monotonically
          // to the lower bound min(state.lineWidth, 40).
          // Note that this implies
          //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
          //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
          // This behaves better than a constant minimum width which disallows narrower options,
          // or an indent threshold which causes the width to suddenly increase.
          var lineWidth = state.lineWidth === -1
            ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

          // Without knowing if keys are implicit/explicit, assume implicit for safety.
          var singleLineOnly = iskey
            // No block styles in flow mode.
            || (state.flowLevel > -1 && level >= state.flowLevel);
          function testAmbiguity(string) {
            return testImplicitResolving(state, string);
          }

          switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
            case STYLE_PLAIN:
              return string;
            case STYLE_SINGLE:
              return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
              return '|' + blockHeader(string, state.indent)
                + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
              return '>' + blockHeader(string, state.indent)
                + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
              return '"' + escapeString(string) + '"';
            default:
              throw new YAMLException('impossible error: invalid scalar style');
          }
        }());
      }

      // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
      function blockHeader(string, indentPerLevel) {
        var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

        // note the special case: the string '\n' counts as a "trailing" empty line.
        var clip = string[string.length - 1] === '\n';
        var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
        var chomp = keep ? '+' : (clip ? '' : '-');

        return indentIndicator + chomp + '\n';
      }

      // (See the note for writeScalar.)
      function dropEndingNewline(string) {
        return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
      }

      // Note: a long line without a suitable break point will exceed the width limit.
      // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
      function foldString(string, width) {
        // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
        // unless they're before or after a more-indented line, or at the very
        // beginning or end, in which case $k$ maps to $k$.
        // Therefore, parse each chunk as newline(s) followed by a content line.
        var lineRe = /(\n+)([^\n]*)/g;

        // first line (possibly an empty line)
        var result = (function () {
          var nextLF = string.indexOf('\n');
          nextLF = nextLF !== -1 ? nextLF : string.length;
          lineRe.lastIndex = nextLF;
          return foldLine(string.slice(0, nextLF), width);
        }());
        // If we haven't reached the first content line yet, don't add an extra \n.
        var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
        var moreIndented;

        // rest of the lines
        var match;
        while ((match = lineRe.exec(string))) {
          var prefix = match[1], line = match[2];
          moreIndented = (line[0] === ' ');
          result += prefix
            + (!prevMoreIndented && !moreIndented && line !== ''
              ? '\n' : '')
            + foldLine(line, width);
          prevMoreIndented = moreIndented;
        }

        return result;
      }

      // Greedy line breaking.
      // Picks the longest line under the limit each time,
      // otherwise settles for the shortest line over the limit.
      // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
      function foldLine(line, width) {
        if (line === '' || line[0] === ' ') return line;

        // Since a more-indented line adds a \n, breaks can't be followed by a space.
        var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
        var match;
        // start is an inclusive index. end, curr, and next are exclusive.
        var start = 0, end, curr = 0, next = 0;
        var result = '';

        // Invariants: 0 <= start <= length-1.
        //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
        // Inside the loop:
        //   A match implies length >= 2, so curr and next are <= length-2.
        while ((match = breakRe.exec(line))) {
          next = match.index;
          // maintain invariant: curr - start <= width
          if (next - start > width) {
            end = (curr > start) ? curr : next; // derive end <= length-2
            result += '\n' + line.slice(start, end);
            // skip the space that was output as \n
            start = end + 1;                    // derive start <= length-1
          }
          curr = next;
        }

        // By the invariants, start <= length-1, so there is something left over.
        // It is either the whole string or a part starting from non-whitespace.
        result += '\n';
        // Insert a break if the remainder is too long and there is a break available.
        if (line.length - start > width && curr > start) {
          result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
        } else {
          result += line.slice(start);
        }

        return result.slice(1); // drop extra \n joiner
      }

      // Escapes a double-quoted string.
      function escapeString(string) {
        var result = '';
        var char, nextChar;
        var escapeSeq;

        for (var i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
          if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
            nextChar = string.charCodeAt(i + 1);
            if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
              // Combine the surrogate pair and store it escaped.
              result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
              // Advance index one extra since we already used that char here.
              i++; continue;
            }
          }
          escapeSeq = ESCAPE_SEQUENCES[char];
          result += !escapeSeq && isPrintable(char)
            ? string[i]
            : escapeSeq || encodeHex(char);
        }

        return result;
      }

      function writeFlowSequence(state, level, object) {
        var _result = '',
          _tag = state.tag,
          index,
          length;

        for (index = 0, length = object.length; index < length; index += 1) {
          // Write only valid elements.
          if (writeNode(state, level, object[index], false, false)) {
            if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
            _result += state.dump;
          }
        }

        state.tag = _tag;
        state.dump = '[' + _result + ']';
      }

      function writeBlockSequence(state, level, object, compact) {
        var _result = '',
          _tag = state.tag,
          index,
          length;

        for (index = 0, length = object.length; index < length; index += 1) {
          // Write only valid elements.
          if (writeNode(state, level + 1, object[index], true, true)) {
            if (!compact || index !== 0) {
              _result += generateNextLine(state, level);
            }

            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              _result += '-';
            } else {
              _result += '- ';
            }

            _result += state.dump;
          }
        }

        state.tag = _tag;
        state.dump = _result || '[]'; // Empty sequence if no valid values.
      }

      function writeFlowMapping(state, level, object) {
        var _result = '',
          _tag = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          pairBuffer;

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {

          pairBuffer = '';
          if (index !== 0) pairBuffer += ', ';

          if (state.condenseFlow) pairBuffer += '"';

          objectKey = objectKeyList[index];
          objectValue = object[objectKey];

          if (!writeNode(state, level, objectKey, false, false)) {
            continue; // Skip this pair because of invalid key;
          }

          if (state.dump.length > 1024) pairBuffer += '? ';

          pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

          if (!writeNode(state, level, objectValue, false, false)) {
            continue; // Skip this pair because of invalid value.
          }

          pairBuffer += state.dump;

          // Both key and value are valid.
          _result += pairBuffer;
        }

        state.tag = _tag;
        state.dump = '{' + _result + '}';
      }

      function writeBlockMapping(state, level, object, compact) {
        var _result = '',
          _tag = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          explicitPair,
          pairBuffer;

        // Allow sorting keys so that the output file is deterministic
        if (state.sortKeys === true) {
          // Default sorting
          objectKeyList.sort();
        } else if (typeof state.sortKeys === 'function') {
          // Custom sort function
          objectKeyList.sort(state.sortKeys);
        } else if (state.sortKeys) {
          // Something is wrong
          throw new YAMLException('sortKeys must be a boolean or a function');
        }

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          pairBuffer = '';

          if (!compact || index !== 0) {
            pairBuffer += generateNextLine(state, level);
          }

          objectKey = objectKeyList[index];
          objectValue = object[objectKey];

          if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue; // Skip this pair because of invalid key.
          }

          explicitPair = (state.tag !== null && state.tag !== '?') ||
            (state.dump && state.dump.length > 1024);

          if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              pairBuffer += '?';
            } else {
              pairBuffer += '? ';
            }
          }

          pairBuffer += state.dump;

          if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
          }

          if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue; // Skip this pair because of invalid value.
          }

          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ':';
          } else {
            pairBuffer += ': ';
          }

          pairBuffer += state.dump;

          // Both key and value are valid.
          _result += pairBuffer;
        }

        state.tag = _tag;
        state.dump = _result || '{}'; // Empty mapping if no valid pairs.
      }

      function detectType(state, object, explicit) {
        var _result, typeList, index, length, type, style;

        typeList = explicit ? state.explicitTypes : state.implicitTypes;

        for (index = 0, length = typeList.length; index < length; index += 1) {
          type = typeList[index];

          if ((type.instanceOf || type.predicate) &&
            (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
            (!type.predicate || type.predicate(object))) {

            state.tag = explicit ? type.tag : '?';

            if (type.represent) {
              style = state.styleMap[type.tag] || type.defaultStyle;

              if (_toString.call(type.represent) === '[object Function]') {
                _result = type.represent(object, style);
              } else if (_hasOwnProperty.call(type.represent, style)) {
                _result = type.represent[style](object, style);
              } else {
                throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
              }

              state.dump = _result;
            }

            return true;
          }
        }

        return false;
      }

      // Serializes `object` and writes it to global `result`.
      // Returns true on success, or false on invalid object.
      //
      function writeNode(state, level, object, block, compact, iskey) {
        state.tag = null;
        state.dump = object;

        if (!detectType(state, object, false)) {
          detectType(state, object, true);
        }

        var type = _toString.call(state.dump);

        if (block) {
          block = (state.flowLevel < 0 || state.flowLevel > level);
        }

        var objectOrArray = type === '[object Object]' || type === '[object Array]',
          duplicateIndex,
          duplicate;

        if (objectOrArray) {
          duplicateIndex = state.duplicates.indexOf(object);
          duplicate = duplicateIndex !== -1;
        }

        if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
          compact = false;
        }

        if (duplicate && state.usedDuplicates[duplicateIndex]) {
          state.dump = '*ref_' + duplicateIndex;
        } else {
          if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
          }
          if (type === '[object Object]') {
            if (block && (Object.keys(state.dump).length !== 0)) {
              writeBlockMapping(state, level, state.dump, compact);
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + state.dump;
              }
            } else {
              writeFlowMapping(state, level, state.dump);
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
              }
            }
          } else if (type === '[object Array]') {
            var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
            if (block && (state.dump.length !== 0)) {
              writeBlockSequence(state, arrayLevel, state.dump, compact);
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + state.dump;
              }
            } else {
              writeFlowSequence(state, arrayLevel, state.dump);
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
              }
            }
          } else if (type === '[object String]') {
            if (state.tag !== '?') {
              writeScalar(state, state.dump, level, iskey);
            }
          } else {
            if (state.skipInvalid) return false;
            throw new YAMLException('unacceptable kind of an object to dump ' + type);
          }

          if (state.tag !== null && state.tag !== '?') {
            state.dump = '!<' + state.tag + '> ' + state.dump;
          }
        }

        return true;
      }

      function getDuplicateReferences(object, state) {
        var objects = [],
          duplicatesIndexes = [],
          index,
          length;

        inspectNode(object, objects, duplicatesIndexes);

        for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
          state.duplicates.push(objects[duplicatesIndexes[index]]);
        }
        state.usedDuplicates = new Array(length);
      }

      function inspectNode(object, objects, duplicatesIndexes) {
        var objectKeyList,
          index,
          length;

        if (object !== null && typeof object === 'object') {
          index = objects.indexOf(object);
          if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
              duplicatesIndexes.push(index);
            }
          } else {
            objects.push(object);

            if (Array.isArray(object)) {
              for (index = 0, length = object.length; index < length; index += 1) {
                inspectNode(object[index], objects, duplicatesIndexes);
              }
            } else {
              objectKeyList = Object.keys(object);

              for (index = 0, length = objectKeyList.length; index < length; index += 1) {
                inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
              }
            }
          }
        }
      }

      function dump(input, options) {
        options = options || {};

        var state = new State(options);

        if (!state.noRefs) getDuplicateReferences(input, state);

        if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

        return '';
      }

      function safeDump(input, options) {
        return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
      }

      module.exports.dump = dump;
      module.exports.safeDump = safeDump;

    }, { "./common": 2, "./exception": 4, "./schema/default_full": 9, "./schema/default_safe": 10 }], 4: [function (require, module, exports) {
      // YAML error class. http://stackoverflow.com/questions/8458984
      //
      'use strict';

      function YAMLException(reason, mark) {
        // Super constructor
        Error.call(this);

        this.name = 'YAMLException';
        this.reason = reason;
        this.mark = mark;
        this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

        // Include stack trace in error object
        if (Error.captureStackTrace) {
          // Chrome and NodeJS
          Error.captureStackTrace(this, this.constructor);
        } else {
          // FF, IE 10+ and Safari 6+. Fallback for others
          this.stack = (new Error()).stack || '';
        }
      }


      // Inherit from Error
      YAMLException.prototype = Object.create(Error.prototype);
      YAMLException.prototype.constructor = YAMLException;


      YAMLException.prototype.toString = function toString(compact) {
        var result = this.name + ': ';

        result += this.reason || '(unknown reason)';

        if (!compact && this.mark) {
          result += ' ' + this.mark.toString();
        }

        return result;
      };


      module.exports = YAMLException;

    }, {}], 5: [function (require, module, exports) {
      'use strict';

      /*eslint-disable max-len,no-use-before-define*/

      var common = require('./common');
      var YAMLException = require('./exception');
      var Mark = require('./mark');
      var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
      var DEFAULT_FULL_SCHEMA = require('./schema/default_full');


      var _hasOwnProperty = Object.prototype.hasOwnProperty;


      var CONTEXT_FLOW_IN = 1;
      var CONTEXT_FLOW_OUT = 2;
      var CONTEXT_BLOCK_IN = 3;
      var CONTEXT_BLOCK_OUT = 4;


      var CHOMPING_CLIP = 1;
      var CHOMPING_STRIP = 2;
      var CHOMPING_KEEP = 3;


      var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
      var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
      var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
      var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


      function _class(obj) { return Object.prototype.toString.call(obj); }

      function is_EOL(c) {
        return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
      }

      function is_WHITE_SPACE(c) {
        return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
      }

      function is_WS_OR_EOL(c) {
        return (c === 0x09/* Tab */) ||
          (c === 0x20/* Space */) ||
          (c === 0x0A/* LF */) ||
          (c === 0x0D/* CR */);
      }

      function is_FLOW_INDICATOR(c) {
        return c === 0x2C/* , */ ||
          c === 0x5B/* [ */ ||
          c === 0x5D/* ] */ ||
          c === 0x7B/* { */ ||
          c === 0x7D/* } */;
      }

      function fromHexCode(c) {
        var lc;

        if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
          return c - 0x30;
        }

        /*eslint-disable no-bitwise*/
        lc = c | 0x20;

        if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
          return lc - 0x61 + 10;
        }

        return -1;
      }

      function escapedHexLen(c) {
        if (c === 0x78/* x */) { return 2; }
        if (c === 0x75/* u */) { return 4; }
        if (c === 0x55/* U */) { return 8; }
        return 0;
      }

      function fromDecimalCode(c) {
        if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
          return c - 0x30;
        }

        return -1;
      }

      function simpleEscapeSequence(c) {
        /* eslint-disable indent */
        return (c === 0x30/* 0 */) ? '\x00' :
          (c === 0x61/* a */) ? '\x07' :
            (c === 0x62/* b */) ? '\x08' :
              (c === 0x74/* t */) ? '\x09' :
                (c === 0x09/* Tab */) ? '\x09' :
                  (c === 0x6E/* n */) ? '\x0A' :
                    (c === 0x76/* v */) ? '\x0B' :
                      (c === 0x66/* f */) ? '\x0C' :
                        (c === 0x72/* r */) ? '\x0D' :
                          (c === 0x65/* e */) ? '\x1B' :
                            (c === 0x20/* Space */) ? ' ' :
                              (c === 0x22/* " */) ? '\x22' :
                                (c === 0x2F/* / */) ? '/' :
                                  (c === 0x5C/* \ */) ? '\x5C' :
                                    (c === 0x4E/* N */) ? '\x85' :
                                      (c === 0x5F/* _ */) ? '\xA0' :
                                        (c === 0x4C/* L */) ? '\u2028' :
                                          (c === 0x50/* P */) ? '\u2029' : '';
      }

      function charFromCodepoint(c) {
        if (c <= 0xFFFF) {
          return String.fromCharCode(c);
        }
        // Encode UTF-16 surrogate pair
        // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
        return String.fromCharCode(
          ((c - 0x010000) >> 10) + 0xD800,
          ((c - 0x010000) & 0x03FF) + 0xDC00
        );
      }

      var simpleEscapeCheck = new Array(256); // integer, for fast access
      var simpleEscapeMap = new Array(256);
      for (var i = 0; i < 256; i++) {
        simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
        simpleEscapeMap[i] = simpleEscapeSequence(i);
      }


      function State(input, options) {
        this.input = input;

        this.filename = options['filename'] || null;
        this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
        this.onWarning = options['onWarning'] || null;
        this.legacy = options['legacy'] || false;
        this.json = options['json'] || false;
        this.listener = options['listener'] || null;

        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;

        this.length = input.length;
        this.position = 0;
        this.line = 0;
        this.lineStart = 0;
        this.lineIndent = 0;

        this.documents = [];

        /*
        this.version;
        this.checkLineBreaks;
        this.tagMap;
        this.anchorMap;
        this.tag;
        this.anchor;
        this.kind;
        this.result;*/

      }


      function generateError(state, message) {
        return new YAMLException(
          message,
          new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
      }

      function throwError(state, message) {
        throw generateError(state, message);
      }

      function throwWarning(state, message) {
        if (state.onWarning) {
          state.onWarning.call(null, generateError(state, message));
        }
      }


      var directiveHandlers = {

        YAML: function handleYamlDirective(state, name, args) {

          var match, major, minor;

          if (state.version !== null) {
            throwError(state, 'duplication of %YAML directive');
          }

          if (args.length !== 1) {
            throwError(state, 'YAML directive accepts exactly one argument');
          }

          match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

          if (match === null) {
            throwError(state, 'ill-formed argument of the YAML directive');
          }

          major = parseInt(match[1], 10);
          minor = parseInt(match[2], 10);

          if (major !== 1) {
            throwError(state, 'unacceptable YAML version of the document');
          }

          state.version = args[0];
          state.checkLineBreaks = (minor < 2);

          if (minor !== 1 && minor !== 2) {
            throwWarning(state, 'unsupported YAML version of the document');
          }
        },

        TAG: function handleTagDirective(state, name, args) {

          var handle, prefix;

          if (args.length !== 2) {
            throwError(state, 'TAG directive accepts exactly two arguments');
          }

          handle = args[0];
          prefix = args[1];

          if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
          }

          if (_hasOwnProperty.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
          }

          if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
          }

          state.tagMap[handle] = prefix;
        }
      };


      function captureSegment(state, start, end, checkJson) {
        var _position, _length, _character, _result;

        if (start < end) {
          _result = state.input.slice(start, end);

          if (checkJson) {
            for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
              _character = _result.charCodeAt(_position);
              if (!(_character === 0x09 ||
                (0x20 <= _character && _character <= 0x10FFFF))) {
                throwError(state, 'expected valid JSON character');
              }
            }
          } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, 'the stream contains non-printable characters');
          }

          state.result += _result;
        }
      }

      function mergeMappings(state, destination, source, overridableKeys) {
        var sourceKeys, key, index, quantity;

        if (!common.isObject(source)) {
          throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
        }

        sourceKeys = Object.keys(source);

        for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
          key = sourceKeys[index];

          if (!_hasOwnProperty.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
          }
        }
      }

      function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
        var index, quantity;

        // The output is a plain object here, so keys can only be strings.
        // We need to convert keyNode to a string, but doing so can hang the process
        // (deeply nested arrays that explode exponentially using aliases).
        if (Array.isArray(keyNode)) {
          keyNode = Array.prototype.slice.call(keyNode);

          for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
            if (Array.isArray(keyNode[index])) {
              throwError(state, 'nested arrays are not supported inside keys');
            }

            if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
              keyNode[index] = '[object Object]';
            }
          }
        }

        // Avoid code execution in load() via toString property
        // (still use its own toString for arrays, timestamps,
        // and whatever user schema extensions happen to have @@toStringTag)
        if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
          keyNode = '[object Object]';
        }


        keyNode = String(keyNode);

        if (_result === null) {
          _result = {};
        }

        if (keyTag === 'tag:yaml.org,2002:merge') {
          if (Array.isArray(valueNode)) {
            for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
              mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
          } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
          }
        } else {
          if (!state.json &&
            !_hasOwnProperty.call(overridableKeys, keyNode) &&
            _hasOwnProperty.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.position = startPos || state.position;
            throwError(state, 'duplicated mapping key');
          }
          _result[keyNode] = valueNode;
          delete overridableKeys[keyNode];
        }

        return _result;
      }

      function readLineBreak(state) {
        var ch;

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x0A/* LF */) {
          state.position++;
        } else if (ch === 0x0D/* CR */) {
          state.position++;
          if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
            state.position++;
          }
        } else {
          throwError(state, 'a line break is expected');
        }

        state.line += 1;
        state.lineStart = state.position;
      }

      function skipSeparationSpace(state, allowComments, checkIndent) {
        var lineBreaks = 0,
          ch = state.input.charCodeAt(state.position);

        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          if (allowComments && ch === 0x23/* # */) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
          }

          if (is_EOL(ch)) {
            readLineBreak(state);

            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;

            while (ch === 0x20/* Space */) {
              state.lineIndent++;
              ch = state.input.charCodeAt(++state.position);
            }
          } else {
            break;
          }
        }

        if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
          throwWarning(state, 'deficient indentation');
        }

        return lineBreaks;
      }

      function testDocumentSeparator(state) {
        var _position = state.position,
          ch;

        ch = state.input.charCodeAt(_position);

        // Condition state.position === state.lineStart is tested
        // in parent on each call, for efficiency. No needs to test here again.
        if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
          ch === state.input.charCodeAt(_position + 1) &&
          ch === state.input.charCodeAt(_position + 2)) {

          _position += 3;

          ch = state.input.charCodeAt(_position);

          if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
          }
        }

        return false;
      }

      function writeFoldedLines(state, count) {
        if (count === 1) {
          state.result += ' ';
        } else if (count > 1) {
          state.result += common.repeat('\n', count - 1);
        }
      }


      function readPlainScalar(state, nodeIndent, withinFlowCollection) {
        var preceding,
          following,
          captureStart,
          captureEnd,
          hasPendingContent,
          _line,
          _lineStart,
          _lineIndent,
          _kind = state.kind,
          _result = state.result,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (is_WS_OR_EOL(ch) ||
          is_FLOW_INDICATOR(ch) ||
          ch === 0x23/* # */ ||
          ch === 0x26/* & */ ||
          ch === 0x2A/* * */ ||
          ch === 0x21/* ! */ ||
          ch === 0x7C/* | */ ||
          ch === 0x3E/* > */ ||
          ch === 0x27/* ' */ ||
          ch === 0x22/* " */ ||
          ch === 0x25/* % */ ||
          ch === 0x40/* @ */ ||
          ch === 0x60/* ` */) {
          return false;
        }

        if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
          following = state.input.charCodeAt(state.position + 1);

          if (is_WS_OR_EOL(following) ||
            withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
          }
        }

        state.kind = 'scalar';
        state.result = '';
        captureStart = captureEnd = state.position;
        hasPendingContent = false;

        while (ch !== 0) {
          if (ch === 0x3A/* : */) {
            following = state.input.charCodeAt(state.position + 1);

            if (is_WS_OR_EOL(following) ||
              withinFlowCollection && is_FLOW_INDICATOR(following)) {
              break;
            }

          } else if (ch === 0x23/* # */) {
            preceding = state.input.charCodeAt(state.position - 1);

            if (is_WS_OR_EOL(preceding)) {
              break;
            }

          } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
            withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;

          } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);

            if (state.lineIndent >= nodeIndent) {
              hasPendingContent = true;
              ch = state.input.charCodeAt(state.position);
              continue;
            } else {
              state.position = captureEnd;
              state.line = _line;
              state.lineStart = _lineStart;
              state.lineIndent = _lineIndent;
              break;
            }
          }

          if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
          }

          if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
          }

          ch = state.input.charCodeAt(++state.position);
        }

        captureSegment(state, captureStart, captureEnd, false);

        if (state.result) {
          return true;
        }

        state.kind = _kind;
        state.result = _result;
        return false;
      }

      function readSingleQuotedScalar(state, nodeIndent) {
        var ch,
          captureStart, captureEnd;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x27/* ' */) {
          return false;
        }

        state.kind = 'scalar';
        state.result = '';
        state.position++;
        captureStart = captureEnd = state.position;

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 0x27/* ' */) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);

            if (ch === 0x27/* ' */) {
              captureStart = state.position;
              state.position++;
              captureEnd = state.position;
            } else {
              return true;
            }

          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;

          } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, 'unexpected end of the document within a single quoted scalar');

          } else {
            state.position++;
            captureEnd = state.position;
          }
        }

        throwError(state, 'unexpected end of the stream within a single quoted scalar');
      }

      function readDoubleQuotedScalar(state, nodeIndent) {
        var captureStart,
          captureEnd,
          hexLength,
          hexResult,
          tmp,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x22/* " */) {
          return false;
        }

        state.kind = 'scalar';
        state.result = '';
        state.position++;
        captureStart = captureEnd = state.position;

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 0x22/* " */) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;

          } else if (ch === 0x5C/* \ */) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);

            if (is_EOL(ch)) {
              skipSeparationSpace(state, false, nodeIndent);

              // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
              state.result += simpleEscapeMap[ch];
              state.position++;

            } else if ((tmp = escapedHexLen(ch)) > 0) {
              hexLength = tmp;
              hexResult = 0;

              for (; hexLength > 0; hexLength--) {
                ch = state.input.charCodeAt(++state.position);

                if ((tmp = fromHexCode(ch)) >= 0) {
                  hexResult = (hexResult << 4) + tmp;

                } else {
                  throwError(state, 'expected hexadecimal character');
                }
              }

              state.result += charFromCodepoint(hexResult);

              state.position++;

            } else {
              throwError(state, 'unknown escape sequence');
            }

            captureStart = captureEnd = state.position;

          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;

          } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, 'unexpected end of the document within a double quoted scalar');

          } else {
            state.position++;
            captureEnd = state.position;
          }
        }

        throwError(state, 'unexpected end of the stream within a double quoted scalar');
      }

      function readFlowCollection(state, nodeIndent) {
        var readNext = true,
          _line,
          _tag = state.tag,
          _result,
          _anchor = state.anchor,
          following,
          terminator,
          isPair,
          isExplicitPair,
          isMapping,
          overridableKeys = {},
          keyNode,
          keyTag,
          valueNode,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x5B/* [ */) {
          terminator = 0x5D;/* ] */
          isMapping = false;
          _result = [];
        } else if (ch === 0x7B/* { */) {
          terminator = 0x7D;/* } */
          isMapping = true;
          _result = {};
        } else {
          return false;
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }

        ch = state.input.charCodeAt(++state.position);

        while (ch !== 0) {
          skipSeparationSpace(state, true, nodeIndent);

          ch = state.input.charCodeAt(state.position);

          if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? 'mapping' : 'sequence';
            state.result = _result;
            return true;
          } else if (!readNext) {
            throwError(state, 'missed comma between flow collection entries');
          }

          keyTag = keyNode = valueNode = null;
          isPair = isExplicitPair = false;

          if (ch === 0x3F/* ? */) {
            following = state.input.charCodeAt(state.position + 1);

            if (is_WS_OR_EOL(following)) {
              isPair = isExplicitPair = true;
              state.position++;
              skipSeparationSpace(state, true, nodeIndent);
            }
          }

          _line = state.line;
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          keyTag = state.tag;
          keyNode = state.result;
          skipSeparationSpace(state, true, nodeIndent);

          ch = state.input.charCodeAt(state.position);

          if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
            isPair = true;
            state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
          }

          if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
          } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
          } else {
            _result.push(keyNode);
          }

          skipSeparationSpace(state, true, nodeIndent);

          ch = state.input.charCodeAt(state.position);

          if (ch === 0x2C/* , */) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
          } else {
            readNext = false;
          }
        }

        throwError(state, 'unexpected end of the stream within a flow collection');
      }

      function readBlockScalar(state, nodeIndent) {
        var captureStart,
          folding,
          chomping = CHOMPING_CLIP,
          didReadContent = false,
          detectedIndent = false,
          textIndent = nodeIndent,
          emptyLines = 0,
          atMoreIndented = false,
          tmp,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x7C/* | */) {
          folding = false;
        } else if (ch === 0x3E/* > */) {
          folding = true;
        } else {
          return false;
        }

        state.kind = 'scalar';
        state.result = '';

        while (ch !== 0) {
          ch = state.input.charCodeAt(++state.position);

          if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
            if (CHOMPING_CLIP === chomping) {
              chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
              throwError(state, 'repeat of a chomping mode identifier');
            }

          } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
              throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
            } else if (!detectedIndent) {
              textIndent = nodeIndent + tmp - 1;
              detectedIndent = true;
            } else {
              throwError(state, 'repeat of an indentation width identifier');
            }

          } else {
            break;
          }
        }

        if (is_WHITE_SPACE(ch)) {
          do { ch = state.input.charCodeAt(++state.position); }
          while (is_WHITE_SPACE(ch));

          if (ch === 0x23/* # */) {
            do { ch = state.input.charCodeAt(++state.position); }
            while (!is_EOL(ch) && (ch !== 0));
          }
        }

        while (ch !== 0) {
          readLineBreak(state);
          state.lineIndent = 0;

          ch = state.input.charCodeAt(state.position);

          while ((!detectedIndent || state.lineIndent < textIndent) &&
            (ch === 0x20/* Space */)) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }

          if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
          }

          if (is_EOL(ch)) {
            emptyLines++;
            continue;
          }

          // End of the scalar.
          if (state.lineIndent < textIndent) {

            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
              state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
              if (didReadContent) { // i.e. only if the scalar is not empty.
                state.result += '\n';
              }
            }

            // Break this `while` cycle and go to the funciton's epilogue.
            break;
          }

          // Folded style: use fancy rules to handle line breaks.
          if (folding) {

            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
              atMoreIndented = true;
              // except for the first content line (cf. Example 8.1)
              state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

              // End of more-indented block.
            } else if (atMoreIndented) {
              atMoreIndented = false;
              state.result += common.repeat('\n', emptyLines + 1);

              // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
              if (didReadContent) { // i.e. only if we have already read some scalar content.
                state.result += ' ';
              }

              // Several line breaks - perceive as different lines.
            } else {
              state.result += common.repeat('\n', emptyLines);
            }

            // Literal style: just add exact number of line breaks between content lines.
          } else {
            // Keep all line breaks except the header line break.
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
          }

          didReadContent = true;
          detectedIndent = true;
          emptyLines = 0;
          captureStart = state.position;

          while (!is_EOL(ch) && (ch !== 0)) {
            ch = state.input.charCodeAt(++state.position);
          }

          captureSegment(state, captureStart, state.position, false);
        }

        return true;
      }

      function readBlockSequence(state, nodeIndent) {
        var _line,
          _tag = state.tag,
          _anchor = state.anchor,
          _result = [],
          following,
          detected = false,
          ch;

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }

        ch = state.input.charCodeAt(state.position);

        while (ch !== 0) {

          if (ch !== 0x2D/* - */) {
            break;
          }

          following = state.input.charCodeAt(state.position + 1);

          if (!is_WS_OR_EOL(following)) {
            break;
          }

          detected = true;
          state.position++;

          if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
              _result.push(null);
              ch = state.input.charCodeAt(state.position);
              continue;
            }
          }

          _line = state.line;
          composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
          _result.push(state.result);
          skipSeparationSpace(state, true, -1);

          ch = state.input.charCodeAt(state.position);

          if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
            throwError(state, 'bad indentation of a sequence entry');
          } else if (state.lineIndent < nodeIndent) {
            break;
          }
        }

        if (detected) {
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = 'sequence';
          state.result = _result;
          return true;
        }
        return false;
      }

      function readBlockMapping(state, nodeIndent, flowIndent) {
        var following,
          allowCompact,
          _line,
          _pos,
          _tag = state.tag,
          _anchor = state.anchor,
          _result = {},
          overridableKeys = {},
          keyTag = null,
          keyNode = null,
          valueNode = null,
          atExplicitKey = false,
          detected = false,
          ch;

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }

        ch = state.input.charCodeAt(state.position);

        while (ch !== 0) {
          following = state.input.charCodeAt(state.position + 1);
          _line = state.line; // Save the current line.
          _pos = state.position;

          //
          // Explicit notation case. There are two separate blocks:
          // first for the key (denoted by "?") and second for the value (denoted by ":")
          //
          if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

            if (ch === 0x3F/* ? */) {
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }

              detected = true;
              atExplicitKey = true;
              allowCompact = true;

            } else if (atExplicitKey) {
              // i.e. 0x3A/* : */ === character after the explicit key.
              atExplicitKey = false;
              allowCompact = true;

            } else {
              throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
            }

            state.position += 1;
            ch = following;

            //
            // Implicit notation case. Flow-style node as the key first, then ":", and the value.
            //
          } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

            if (state.line === _line) {
              ch = state.input.charCodeAt(state.position);

              while (is_WHITE_SPACE(ch)) {
                ch = state.input.charCodeAt(++state.position);
              }

              if (ch === 0x3A/* : */) {
                ch = state.input.charCodeAt(++state.position);

                if (!is_WS_OR_EOL(ch)) {
                  throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
                }

                if (atExplicitKey) {
                  storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                  keyTag = keyNode = valueNode = null;
                }

                detected = true;
                atExplicitKey = false;
                allowCompact = false;
                keyTag = state.tag;
                keyNode = state.result;

              } else if (detected) {
                throwError(state, 'can not read an implicit mapping pair; a colon is missed');

              } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true; // Keep the result of `composeNode`.
              }

            } else if (detected) {
              throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true; // Keep the result of `composeNode`.
            }

          } else {
            break; // Reading is done. Go to the epilogue.
          }

          //
          // Common reading code for both explicit and implicit notations.
          //
          if (state.line === _line || state.lineIndent > nodeIndent) {
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
              if (atExplicitKey) {
                keyNode = state.result;
              } else {
                valueNode = state.result;
              }
            }

            if (!atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
              keyTag = keyNode = valueNode = null;
            }

            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
          }

          if (state.lineIndent > nodeIndent && (ch !== 0)) {
            throwError(state, 'bad indentation of a mapping entry');
          } else if (state.lineIndent < nodeIndent) {
            break;
          }
        }

        //
        // Epilogue.
        //

        // Special case: last mapping's node contains only the key in explicit notation.
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
        }

        // Expose the resulting mapping.
        if (detected) {
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = 'mapping';
          state.result = _result;
        }

        return detected;
      }

      function readTagProperty(state) {
        var _position,
          isVerbatim = false,
          isNamed = false,
          tagHandle,
          tagName,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x21/* ! */) return false;

        if (state.tag !== null) {
          throwError(state, 'duplication of a tag property');
        }

        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x3C/* < */) {
          isVerbatim = true;
          ch = state.input.charCodeAt(++state.position);

        } else if (ch === 0x21/* ! */) {
          isNamed = true;
          tagHandle = '!!';
          ch = state.input.charCodeAt(++state.position);

        } else {
          tagHandle = '!';
        }

        _position = state.position;

        if (isVerbatim) {
          do { ch = state.input.charCodeAt(++state.position); }
          while (ch !== 0 && ch !== 0x3E/* > */);

          if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            state.input.charCodeAt(++state.position);
          } else {
            throwError(state, 'unexpected end of the stream within a verbatim tag');
          }
        } else {
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {

            if (ch === 0x21/* ! */) {
              if (!isNamed) {
                tagHandle = state.input.slice(_position - 1, state.position + 1);

                if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                  throwError(state, 'named tag handle cannot contain such characters');
                }

                isNamed = true;
                _position = state.position + 1;
              } else {
                throwError(state, 'tag suffix cannot contain exclamation marks');
              }
            }

            ch = state.input.charCodeAt(++state.position);
          }

          tagName = state.input.slice(_position, state.position);

          if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, 'tag suffix cannot contain flow indicator characters');
          }
        }

        if (tagName && !PATTERN_TAG_URI.test(tagName)) {
          throwError(state, 'tag name cannot contain such characters: ' + tagName);
        }

        if (isVerbatim) {
          state.tag = tagName;

        } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
          state.tag = state.tagMap[tagHandle] + tagName;

        } else if (tagHandle === '!') {
          state.tag = '!' + tagName;

        } else if (tagHandle === '!!') {
          state.tag = 'tag:yaml.org,2002:' + tagName;

        } else {
          throwError(state, 'undeclared tag handle "' + tagHandle + '"');
        }

        return true;
      }

      function readAnchorProperty(state) {
        var _position,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x26/* & */) return false;

        if (state.anchor !== null) {
          throwError(state, 'duplication of an anchor property');
        }

        ch = state.input.charCodeAt(++state.position);
        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (state.position === _position) {
          throwError(state, 'name of an anchor node must contain at least one character');
        }

        state.anchor = state.input.slice(_position, state.position);
        return true;
      }

      function readAlias(state) {
        var _position, alias,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x2A/* * */) return false;

        ch = state.input.charCodeAt(++state.position);
        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (state.position === _position) {
          throwError(state, 'name of an alias node must contain at least one character');
        }

        alias = state.input.slice(_position, state.position);

        if (!state.anchorMap.hasOwnProperty(alias)) {
          throwError(state, 'unidentified alias "' + alias + '"');
        }

        state.result = state.anchorMap[alias];
        skipSeparationSpace(state, true, -1);
        return true;
      }

      function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
        var allowBlockStyles,
          allowBlockScalars,
          allowBlockCollections,
          indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
          atNewLine = false,
          hasContent = false,
          typeIndex,
          typeQuantity,
          type,
          flowIndent,
          blockIndent;

        if (state.listener !== null) {
          state.listener('open', state);
        }

        state.tag = null;
        state.anchor = null;
        state.kind = null;
        state.result = null;

        allowBlockStyles = allowBlockScalars = allowBlockCollections =
          CONTEXT_BLOCK_OUT === nodeContext ||
          CONTEXT_BLOCK_IN === nodeContext;

        if (allowToSeek) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;

            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          }
        }

        if (indentStatus === 1) {
          while (readTagProperty(state) || readAnchorProperty(state)) {
            if (skipSeparationSpace(state, true, -1)) {
              atNewLine = true;
              allowBlockCollections = allowBlockStyles;

              if (state.lineIndent > parentIndent) {
                indentStatus = 1;
              } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
              } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
              }
            } else {
              allowBlockCollections = false;
            }
          }
        }

        if (allowBlockCollections) {
          allowBlockCollections = atNewLine || allowCompact;
        }

        if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
          if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
          } else {
            flowIndent = parentIndent + 1;
          }

          blockIndent = state.position - state.lineStart;

          if (indentStatus === 1) {
            if (allowBlockCollections &&
              (readBlockSequence(state, blockIndent) ||
                readBlockMapping(state, blockIndent, flowIndent)) ||
              readFlowCollection(state, flowIndent)) {
              hasContent = true;
            } else {
              if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
                readSingleQuotedScalar(state, flowIndent) ||
                readDoubleQuotedScalar(state, flowIndent)) {
                hasContent = true;

              } else if (readAlias(state)) {
                hasContent = true;

                if (state.tag !== null || state.anchor !== null) {
                  throwError(state, 'alias node should not have any properties');
                }

              } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                hasContent = true;

                if (state.tag === null) {
                  state.tag = '?';
                }
              }

              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
            }
          } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
          }
        }

        if (state.tag !== null && state.tag !== '!') {
          if (state.tag === '?') {
            // Implicit resolving is not allowed for non-scalar types, and '?'
            // non-specific tag is only automatically assigned to plain scalars.
            //
            // We only need to check kind conformity in case user explicitly assigns '?'
            // tag, for example like this: "!<?> [0]"
            //
            if (state.result !== null && state.kind !== 'scalar') {
              throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
            }

            for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
              type = state.implicitTypes[typeIndex];

              if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
                state.result = type.construct(state.result);
                state.tag = type.tag;
                if (state.anchor !== null) {
                  state.anchorMap[state.anchor] = state.result;
                }
                break;
              }
            }
          } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
            type = state.typeMap[state.kind || 'fallback'][state.tag];

            if (state.result !== null && type.kind !== state.kind) {
              throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
            }

            if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
              throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
            } else {
              state.result = type.construct(state.result);
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
            }
          } else {
            throwError(state, 'unknown tag !<' + state.tag + '>');
          }
        }

        if (state.listener !== null) {
          state.listener('close', state);
        }
        return state.tag !== null || state.anchor !== null || hasContent;
      }

      function readDocument(state) {
        var documentStart = state.position,
          _position,
          directiveName,
          directiveArgs,
          hasDirectives = false,
          ch;

        state.version = null;
        state.checkLineBreaks = state.legacy;
        state.tagMap = {};
        state.anchorMap = {};

        while ((state.input.charCodeAt(state.position)) !== 0) {
          skipSeparationSpace(state, true, -1);

          ch = state.input.charCodeAt(state.position);

          if (state.lineIndent > 0 || ch !== 0x25/* % */) {
            break;
          }

          hasDirectives = true;
          ch = state.input.charCodeAt(++state.position);
          _position = state.position;

          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          directiveName = state.input.slice(_position, state.position);
          directiveArgs = [];

          if (directiveName.length < 1) {
            throwError(state, 'directive name must not be less than one character in length');
          }

          while (ch !== 0) {
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }

            if (ch === 0x23/* # */) {
              do { ch = state.input.charCodeAt(++state.position); }
              while (ch !== 0 && !is_EOL(ch));
              break;
            }

            if (is_EOL(ch)) break;

            _position = state.position;

            while (ch !== 0 && !is_WS_OR_EOL(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }

            directiveArgs.push(state.input.slice(_position, state.position));
          }

          if (ch !== 0) readLineBreak(state);

          if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
          } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
          }
        }

        skipSeparationSpace(state, true, -1);

        if (state.lineIndent === 0 &&
          state.input.charCodeAt(state.position) === 0x2D/* - */ &&
          state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
          state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);

        } else if (hasDirectives) {
          throwError(state, 'directives end mark is expected');
        }

        composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
        skipSeparationSpace(state, true, -1);

        if (state.checkLineBreaks &&
          PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
          throwWarning(state, 'non-ASCII line breaks are interpreted as content');
        }

        state.documents.push(state.result);

        if (state.position === state.lineStart && testDocumentSeparator(state)) {

          if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
          }
          return;
        }

        if (state.position < (state.length - 1)) {
          throwError(state, 'end of the stream or a document separator is expected');
        } else {
          return;
        }
      }


      function loadDocuments(input, options) {
        input = String(input);
        options = options || {};

        if (input.length !== 0) {

          // Add tailing `\n` if not exists
          if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
            input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
            input += '\n';
          }

          // Strip BOM
          if (input.charCodeAt(0) === 0xFEFF) {
            input = input.slice(1);
          }
        }

        var state = new State(input, options);

        var nullpos = input.indexOf('\0');

        if (nullpos !== -1) {
          state.position = nullpos;
          throwError(state, 'null byte is not allowed in input');
        }

        // Use 0 as string terminator. That significantly simplifies bounds check.
        state.input += '\0';

        while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
          state.lineIndent += 1;
          state.position += 1;
        }

        while (state.position < (state.length - 1)) {
          readDocument(state);
        }

        return state.documents;
      }


      function loadAll(input, iterator, options) {
        if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
          options = iterator;
          iterator = null;
        }

        var documents = loadDocuments(input, options);

        if (typeof iterator !== 'function') {
          return documents;
        }

        for (var index = 0, length = documents.length; index < length; index += 1) {
          iterator(documents[index]);
        }
      }


      function load(input, options) {
        var documents = loadDocuments(input, options);

        if (documents.length === 0) {
          /*eslint-disable no-undefined*/
          return undefined;
        } else if (documents.length === 1) {
          return documents[0];
        }
        throw new YAMLException('expected a single document in the stream, but found more');
      }


      function safeLoadAll(input, iterator, options) {
        if (typeof iterator === 'object' && iterator !== null && typeof options === 'undefined') {
          options = iterator;
          iterator = null;
        }

        return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
      }


      function safeLoad(input, options) {
        return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
      }


      module.exports.loadAll = loadAll;
      module.exports.load = load;
      module.exports.safeLoadAll = safeLoadAll;
      module.exports.safeLoad = safeLoad;

    }, { "./common": 2, "./exception": 4, "./mark": 6, "./schema/default_full": 9, "./schema/default_safe": 10 }], 6: [function (require, module, exports) {
      'use strict';


      var common = require('./common');


      function Mark(name, buffer, position, line, column) {
        this.name = name;
        this.buffer = buffer;
        this.position = position;
        this.line = line;
        this.column = column;
      }


      Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
        var head, start, tail, end, snippet;

        if (!this.buffer) return null;

        indent = indent || 4;
        maxLength = maxLength || 75;

        head = '';
        start = this.position;

        while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
          start -= 1;
          if (this.position - start > (maxLength / 2 - 1)) {
            head = ' ... ';
            start += 5;
            break;
          }
        }

        tail = '';
        end = this.position;

        while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
          end += 1;
          if (end - this.position > (maxLength / 2 - 1)) {
            tail = ' ... ';
            end -= 5;
            break;
          }
        }

        snippet = this.buffer.slice(start, end);

        return common.repeat(' ', indent) + head + snippet + tail + '\n' +
          common.repeat(' ', indent + this.position - start + head.length) + '^';
      };


      Mark.prototype.toString = function toString(compact) {
        var snippet, where = '';

        if (this.name) {
          where += 'in "' + this.name + '" ';
        }

        where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

        if (!compact) {
          snippet = this.getSnippet();

          if (snippet) {
            where += ':\n' + snippet;
          }
        }

        return where;
      };


      module.exports = Mark;

    }, { "./common": 2 }], 7: [function (require, module, exports) {
      'use strict';

      /*eslint-disable max-len*/

      var common = require('./common');
      var YAMLException = require('./exception');
      var Type = require('./type');


      function compileList(schema, name, result) {
        var exclude = [];

        schema.include.forEach(function (includedSchema) {
          result = compileList(includedSchema, name, result);
        });

        schema[name].forEach(function (currentType) {
          result.forEach(function (previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
              exclude.push(previousIndex);
            }
          });

          result.push(currentType);
        });

        return result.filter(function (type, index) {
          return exclude.indexOf(index) === -1;
        });
      }


      function compileMap(/* lists... */) {
        var result = {
          scalar: {},
          sequence: {},
          mapping: {},
          fallback: {}
        }, index, length;

        function collectType(type) {
          result[type.kind][type.tag] = result['fallback'][type.tag] = type;
        }

        for (index = 0, length = arguments.length; index < length; index += 1) {
          arguments[index].forEach(collectType);
        }
        return result;
      }


      function Schema(definition) {
        this.include = definition.include || [];
        this.implicit = definition.implicit || [];
        this.explicit = definition.explicit || [];

        this.implicit.forEach(function (type) {
          if (type.loadKind && type.loadKind !== 'scalar') {
            throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
          }
        });

        this.compiledImplicit = compileList(this, 'implicit', []);
        this.compiledExplicit = compileList(this, 'explicit', []);
        this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
      }


      Schema.DEFAULT = null;


      Schema.create = function createSchema() {
        var schemas, types;

        switch (arguments.length) {
          case 1:
            schemas = Schema.DEFAULT;
            types = arguments[0];
            break;

          case 2:
            schemas = arguments[0];
            types = arguments[1];
            break;

          default:
            throw new YAMLException('Wrong number of arguments for Schema.create function');
        }

        schemas = common.toArray(schemas);
        types = common.toArray(types);

        if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
          throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
        }

        if (!types.every(function (type) { return type instanceof Type; })) {
          throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
        }

        return new Schema({
          include: schemas,
          explicit: types
        });
      };


      module.exports = Schema;

    }, { "./common": 2, "./exception": 4, "./type": 13 }], 8: [function (require, module, exports) {
      // Standard YAML's Core schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2804923
      //
      // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
      // So, Core schema has no distinctions from JSON schema is JS-YAML.


      'use strict';


      var Schema = require('../schema');


      module.exports = new Schema({
        include: [
          require('./json')
        ]
      });

    }, { "../schema": 7, "./json": 12 }], 9: [function (require, module, exports) {
      // JS-YAML's default schema for `load` function.
      // It is not described in the YAML specification.
      //
      // This schema is based on JS-YAML's default safe schema and includes
      // JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
      //
      // Also this schema is used as default base schema at `Schema.create` function.


      'use strict';


      var Schema = require('../schema');


      module.exports = Schema.DEFAULT = new Schema({
        include: [
          require('./default_safe')
        ],
        explicit: [
          require('../type/js/undefined'),
          require('../type/js/regexp'),
          require('../type/js/function')
        ]
      });

    }, { "../schema": 7, "../type/js/function": 18, "../type/js/regexp": 19, "../type/js/undefined": 20, "./default_safe": 10 }], 10: [function (require, module, exports) {
      // JS-YAML's default schema for `safeLoad` function.
      // It is not described in the YAML specification.
      //
      // This schema is based on standard YAML's Core schema and includes most of
      // extra types described at YAML tag repository. (http://yaml.org/type/)


      'use strict';


      var Schema = require('../schema');


      module.exports = new Schema({
        include: [
          require('./core')
        ],
        implicit: [
          require('../type/timestamp'),
          require('../type/merge')
        ],
        explicit: [
          require('../type/binary'),
          require('../type/omap'),
          require('../type/pairs'),
          require('../type/set')
        ]
      });

    }, { "../schema": 7, "../type/binary": 14, "../type/merge": 22, "../type/omap": 24, "../type/pairs": 25, "../type/set": 27, "../type/timestamp": 29, "./core": 8 }], 11: [function (require, module, exports) {
      // Standard YAML's Failsafe schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2802346


      'use strict';


      var Schema = require('../schema');


      module.exports = new Schema({
        explicit: [
          require('../type/str'),
          require('../type/seq'),
          require('../type/map')
        ]
      });

    }, { "../schema": 7, "../type/map": 21, "../type/seq": 26, "../type/str": 28 }], 12: [function (require, module, exports) {
      // Standard YAML's JSON schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2803231
      //
      // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
      // So, this schema is not such strict as defined in the YAML specification.
      // It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.


      'use strict';


      var Schema = require('../schema');


      module.exports = new Schema({
        include: [
          require('./failsafe')
        ],
        implicit: [
          require('../type/null'),
          require('../type/bool'),
          require('../type/int'),
          require('../type/float')
        ]
      });

    }, { "../schema": 7, "../type/bool": 15, "../type/float": 16, "../type/int": 17, "../type/null": 23, "./failsafe": 11 }], 13: [function (require, module, exports) {
      'use strict';

      var YAMLException = require('./exception');

      var TYPE_CONSTRUCTOR_OPTIONS = [
        'kind',
        'resolve',
        'construct',
        'instanceOf',
        'predicate',
        'represent',
        'defaultStyle',
        'styleAliases'
      ];

      var YAML_NODE_KINDS = [
        'scalar',
        'sequence',
        'mapping'
      ];

      function compileStyleAliases(map) {
        var result = {};

        if (map !== null) {
          Object.keys(map).forEach(function (style) {
            map[style].forEach(function (alias) {
              result[String(alias)] = style;
            });
          });
        }

        return result;
      }

      function Type(tag, options) {
        options = options || {};

        Object.keys(options).forEach(function (name) {
          if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
          }
        });

        // TODO: Add tag format check.
        this.tag = tag;
        this.kind = options['kind'] || null;
        this.resolve = options['resolve'] || function () { return true; };
        this.construct = options['construct'] || function (data) { return data; };
        this.instanceOf = options['instanceOf'] || null;
        this.predicate = options['predicate'] || null;
        this.represent = options['represent'] || null;
        this.defaultStyle = options['defaultStyle'] || null;
        this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

        if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
          throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
        }
      }

      module.exports = Type;

    }, { "./exception": 4 }], 14: [function (require, module, exports) {
      'use strict';

      /*eslint-disable no-bitwise*/

      var NodeBuffer;

      try {
        // A trick for browserified version, to not include `Buffer` shim
        var _require = require;
        NodeBuffer = _require('buffer').Buffer;
      } catch (__) { }

      var Type = require('../type');


      // [ 64, 65, 66 ] -> [ padding, CR, LF ]
      var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


      function resolveYamlBinary(data) {
        if (data === null) return false;

        var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

        // Convert one by one.
        for (idx = 0; idx < max; idx++) {
          code = map.indexOf(data.charAt(idx));

          // Skip CR/LF
          if (code > 64) continue;

          // Fail on illegal characters
          if (code < 0) return false;

          bitlen += 6;
        }

        // If there are any bits left, source was corrupted
        return (bitlen % 8) === 0;
      }

      function constructYamlBinary(data) {
        var idx, tailbits,
          input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
          max = input.length,
          map = BASE64_MAP,
          bits = 0,
          result = [];

        // Collect by 6*4 bits (3 bytes)

        for (idx = 0; idx < max; idx++) {
          if ((idx % 4 === 0) && idx) {
            result.push((bits >> 16) & 0xFF);
            result.push((bits >> 8) & 0xFF);
            result.push(bits & 0xFF);
          }

          bits = (bits << 6) | map.indexOf(input.charAt(idx));
        }

        // Dump tail

        tailbits = (max % 4) * 6;

        if (tailbits === 0) {
          result.push((bits >> 16) & 0xFF);
          result.push((bits >> 8) & 0xFF);
          result.push(bits & 0xFF);
        } else if (tailbits === 18) {
          result.push((bits >> 10) & 0xFF);
          result.push((bits >> 2) & 0xFF);
        } else if (tailbits === 12) {
          result.push((bits >> 4) & 0xFF);
        }

        // Wrap into Buffer for NodeJS and leave Array for browser
        if (NodeBuffer) {
          // Support node 6.+ Buffer API when available
          return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
        }

        return result;
      }

      function representYamlBinary(object /*, style*/) {
        var result = '', bits = 0, idx, tail,
          max = object.length,
          map = BASE64_MAP;

        // Convert every three bytes to 4 ASCII characters.

        for (idx = 0; idx < max; idx++) {
          if ((idx % 3 === 0) && idx) {
            result += map[(bits >> 18) & 0x3F];
            result += map[(bits >> 12) & 0x3F];
            result += map[(bits >> 6) & 0x3F];
            result += map[bits & 0x3F];
          }

          bits = (bits << 8) + object[idx];
        }

        // Dump tail

        tail = max % 3;

        if (tail === 0) {
          result += map[(bits >> 18) & 0x3F];
          result += map[(bits >> 12) & 0x3F];
          result += map[(bits >> 6) & 0x3F];
          result += map[bits & 0x3F];
        } else if (tail === 2) {
          result += map[(bits >> 10) & 0x3F];
          result += map[(bits >> 4) & 0x3F];
          result += map[(bits << 2) & 0x3F];
          result += map[64];
        } else if (tail === 1) {
          result += map[(bits >> 2) & 0x3F];
          result += map[(bits << 4) & 0x3F];
          result += map[64];
          result += map[64];
        }

        return result;
      }

      function isBinary(object) {
        return NodeBuffer && NodeBuffer.isBuffer(object);
      }

      module.exports = new Type('tag:yaml.org,2002:binary', {
        kind: 'scalar',
        resolve: resolveYamlBinary,
        construct: constructYamlBinary,
        predicate: isBinary,
        represent: representYamlBinary
      });

    }, { "../type": 13 }], 15: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      function resolveYamlBoolean(data) {
        if (data === null) return false;

        var max = data.length;

        return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
          (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
      }

      function constructYamlBoolean(data) {
        return data === 'true' ||
          data === 'True' ||
          data === 'TRUE';
      }

      function isBoolean(object) {
        return Object.prototype.toString.call(object) === '[object Boolean]';
      }

      module.exports = new Type('tag:yaml.org,2002:bool', {
        kind: 'scalar',
        resolve: resolveYamlBoolean,
        construct: constructYamlBoolean,
        predicate: isBoolean,
        represent: {
          lowercase: function (object) { return object ? 'true' : 'false'; },
          uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
          camelcase: function (object) { return object ? 'True' : 'False'; }
        },
        defaultStyle: 'lowercase'
      });

    }, { "../type": 13 }], 16: [function (require, module, exports) {
      'use strict';

      var common = require('../common');
      var Type = require('../type');

      var YAML_FLOAT_PATTERN = new RegExp(
        // 2.5e4, 2.5 and integers
        '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
        // .2e4, .2
        // special case, seems not from spec
        '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
        // 20:59
        '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
        // .inf
        '|[-+]?\\.(?:inf|Inf|INF)' +
        // .nan
        '|\\.(?:nan|NaN|NAN))$');

      function resolveYamlFloat(data) {
        if (data === null) return false;

        if (!YAML_FLOAT_PATTERN.test(data) ||
          // Quick hack to not allow integers end with `_`
          // Probably should update regexp & check speed
          data[data.length - 1] === '_') {
          return false;
        }

        return true;
      }

      function constructYamlFloat(data) {
        var value, sign, base, digits;

        value = data.replace(/_/g, '').toLowerCase();
        sign = value[0] === '-' ? -1 : 1;
        digits = [];

        if ('+-'.indexOf(value[0]) >= 0) {
          value = value.slice(1);
        }

        if (value === '.inf') {
          return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

        } else if (value === '.nan') {
          return NaN;

        } else if (value.indexOf(':') >= 0) {
          value.split(':').forEach(function (v) {
            digits.unshift(parseFloat(v));
          });

          value = 0.0;
          base = 1;

          digits.forEach(function (d) {
            value += d * base;
            base *= 60;
          });

          return sign * value;

        }
        return sign * parseFloat(value);
      }


      var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

      function representYamlFloat(object, style) {
        var res;

        if (isNaN(object)) {
          switch (style) {
            case 'lowercase': return '.nan';
            case 'uppercase': return '.NAN';
            case 'camelcase': return '.NaN';
          }
        } else if (Number.POSITIVE_INFINITY === object) {
          switch (style) {
            case 'lowercase': return '.inf';
            case 'uppercase': return '.INF';
            case 'camelcase': return '.Inf';
          }
        } else if (Number.NEGATIVE_INFINITY === object) {
          switch (style) {
            case 'lowercase': return '-.inf';
            case 'uppercase': return '-.INF';
            case 'camelcase': return '-.Inf';
          }
        } else if (common.isNegativeZero(object)) {
          return '-0.0';
        }

        res = object.toString(10);

        // JS stringifier can build scientific format without dots: 5e-100,
        // while YAML requres dot: 5.e-100. Fix it with simple hack

        return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
      }

      function isFloat(object) {
        return (Object.prototype.toString.call(object) === '[object Number]') &&
          (object % 1 !== 0 || common.isNegativeZero(object));
      }

      module.exports = new Type('tag:yaml.org,2002:float', {
        kind: 'scalar',
        resolve: resolveYamlFloat,
        construct: constructYamlFloat,
        predicate: isFloat,
        represent: representYamlFloat,
        defaultStyle: 'lowercase'
      });

    }, { "../common": 2, "../type": 13 }], 17: [function (require, module, exports) {
      'use strict';

      var common = require('../common');
      var Type = require('../type');

      function isHexCode(c) {
        return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
          ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
          ((0x61/* a */ <= c) && (c <= 0x66/* f */));
      }

      function isOctCode(c) {
        return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
      }

      function isDecCode(c) {
        return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
      }

      function resolveYamlInteger(data) {
        if (data === null) return false;

        var max = data.length,
          index = 0,
          hasDigits = false,
          ch;

        if (!max) return false;

        ch = data[index];

        // sign
        if (ch === '-' || ch === '+') {
          ch = data[++index];
        }

        if (ch === '0') {
          // 0
          if (index + 1 === max) return true;
          ch = data[++index];

          // base 2, base 8, base 16

          if (ch === 'b') {
            // base 2
            index++;

            for (; index < max; index++) {
              ch = data[index];
              if (ch === '_') continue;
              if (ch !== '0' && ch !== '1') return false;
              hasDigits = true;
            }
            return hasDigits && ch !== '_';
          }


          if (ch === 'x') {
            // base 16
            index++;

            for (; index < max; index++) {
              ch = data[index];
              if (ch === '_') continue;
              if (!isHexCode(data.charCodeAt(index))) return false;
              hasDigits = true;
            }
            return hasDigits && ch !== '_';
          }

          // base 8
          for (; index < max; index++) {
            ch = data[index];
            if (ch === '_') continue;
            if (!isOctCode(data.charCodeAt(index))) return false;
            hasDigits = true;
          }
          return hasDigits && ch !== '_';
        }

        // base 10 (except 0) or base 60

        // value should not start with `_`;
        if (ch === '_') return false;

        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_') continue;
          if (ch === ':') break;
          if (!isDecCode(data.charCodeAt(index))) {
            return false;
          }
          hasDigits = true;
        }

        // Should have digits and should not end with `_`
        if (!hasDigits || ch === '_') return false;

        // if !base60 - done;
        if (ch !== ':') return true;

        // base60 almost not used, no needs to optimize
        return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
      }

      function constructYamlInteger(data) {
        var value = data, sign = 1, ch, base, digits = [];

        if (value.indexOf('_') !== -1) {
          value = value.replace(/_/g, '');
        }

        ch = value[0];

        if (ch === '-' || ch === '+') {
          if (ch === '-') sign = -1;
          value = value.slice(1);
          ch = value[0];
        }

        if (value === '0') return 0;

        if (ch === '0') {
          if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
          if (value[1] === 'x') return sign * parseInt(value, 16);
          return sign * parseInt(value, 8);
        }

        if (value.indexOf(':') !== -1) {
          value.split(':').forEach(function (v) {
            digits.unshift(parseInt(v, 10));
          });

          value = 0;
          base = 1;

          digits.forEach(function (d) {
            value += (d * base);
            base *= 60;
          });

          return sign * value;

        }

        return sign * parseInt(value, 10);
      }

      function isInteger(object) {
        return (Object.prototype.toString.call(object)) === '[object Number]' &&
          (object % 1 === 0 && !common.isNegativeZero(object));
      }

      module.exports = new Type('tag:yaml.org,2002:int', {
        kind: 'scalar',
        resolve: resolveYamlInteger,
        construct: constructYamlInteger,
        predicate: isInteger,
        represent: {
          binary: function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
          octal: function (obj) { return obj >= 0 ? '0' + obj.toString(8) : '-0' + obj.toString(8).slice(1); },
          decimal: function (obj) { return obj.toString(10); },
          /* eslint-disable max-len */
          hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() : '-0x' + obj.toString(16).toUpperCase().slice(1); }
        },
        defaultStyle: 'decimal',
        styleAliases: {
          binary: [2, 'bin'],
          octal: [8, 'oct'],
          decimal: [10, 'dec'],
          hexadecimal: [16, 'hex']
        }
      });

    }, { "../common": 2, "../type": 13 }], 18: [function (require, module, exports) {
      'use strict';

      var esprima;

      // Browserified version does not have esprima
      //
      // 1. For node.js just require module as deps
      // 2. For browser try to require mudule via external AMD system.
      //    If not found - try to fallback to window.esprima. If not
      //    found too - then fail to parse.
      //
      try {
        // workaround to exclude package from browserify list.
        var _require = require;
        esprima = _require('esprima');
      } catch (_) {
        /* eslint-disable no-redeclare */
        /* global window */
        if (typeof window !== 'undefined') esprima = window.esprima;
      }

      var Type = require('../../type');

      function resolveJavascriptFunction(data) {
        if (data === null) return false;

        try {
          var source = '(' + data + ')',
            ast = esprima.parse(source, { range: true });

          if (ast.type !== 'Program' ||
            ast.body.length !== 1 ||
            ast.body[0].type !== 'ExpressionStatement' ||
            (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
              ast.body[0].expression.type !== 'FunctionExpression')) {
            return false;
          }

          return true;
        } catch (err) {
          return false;
        }
      }

      function constructJavascriptFunction(data) {
        /*jslint evil:true*/

        var source = '(' + data + ')',
          ast = esprima.parse(source, { range: true }),
          params = [],
          body;

        if (ast.type !== 'Program' ||
          ast.body.length !== 1 ||
          ast.body[0].type !== 'ExpressionStatement' ||
          (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
            ast.body[0].expression.type !== 'FunctionExpression')) {
          throw new Error('Failed to resolve function');
        }

        ast.body[0].expression.params.forEach(function (param) {
          params.push(param.name);
        });

        body = ast.body[0].expression.body.range;

        // Esprima's ranges include the first '{' and the last '}' characters on
        // function expressions. So cut them out.
        if (ast.body[0].expression.body.type === 'BlockStatement') {
          /*eslint-disable no-new-func*/
          return new Function(params, source.slice(body[0] + 1, body[1] - 1));
        }
        // ES6 arrow functions can omit the BlockStatement. In that case, just return
        // the body.
        /*eslint-disable no-new-func*/
        return new Function(params, 'return ' + source.slice(body[0], body[1]));
      }

      function representJavascriptFunction(object /*, style*/) {
        return object.toString();
      }

      function isFunction(object) {
        return Object.prototype.toString.call(object) === '[object Function]';
      }

      module.exports = new Type('tag:yaml.org,2002:js/function', {
        kind: 'scalar',
        resolve: resolveJavascriptFunction,
        construct: constructJavascriptFunction,
        predicate: isFunction,
        represent: representJavascriptFunction
      });

    }, { "../../type": 13 }], 19: [function (require, module, exports) {
      'use strict';

      var Type = require('../../type');

      function resolveJavascriptRegExp(data) {
        if (data === null) return false;
        if (data.length === 0) return false;

        var regexp = data,
          tail = /\/([gim]*)$/.exec(data),
          modifiers = '';

        // if regexp starts with '/' it can have modifiers and must be properly closed
        // `/foo/gim` - modifiers tail can be maximum 3 chars
        if (regexp[0] === '/') {
          if (tail) modifiers = tail[1];

          if (modifiers.length > 3) return false;
          // if expression starts with /, is should be properly terminated
          if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
        }

        return true;
      }

      function constructJavascriptRegExp(data) {
        var regexp = data,
          tail = /\/([gim]*)$/.exec(data),
          modifiers = '';

        // `/foo/gim` - tail can be maximum 4 chars
        if (regexp[0] === '/') {
          if (tail) modifiers = tail[1];
          regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
        }

        return new RegExp(regexp, modifiers);
      }

      function representJavascriptRegExp(object /*, style*/) {
        var result = '/' + object.source + '/';

        if (object.global) result += 'g';
        if (object.multiline) result += 'm';
        if (object.ignoreCase) result += 'i';

        return result;
      }

      function isRegExp(object) {
        return Object.prototype.toString.call(object) === '[object RegExp]';
      }

      module.exports = new Type('tag:yaml.org,2002:js/regexp', {
        kind: 'scalar',
        resolve: resolveJavascriptRegExp,
        construct: constructJavascriptRegExp,
        predicate: isRegExp,
        represent: representJavascriptRegExp
      });

    }, { "../../type": 13 }], 20: [function (require, module, exports) {
      'use strict';

      var Type = require('../../type');

      function resolveJavascriptUndefined() {
        return true;
      }

      function constructJavascriptUndefined() {
        /*eslint-disable no-undefined*/
        return undefined;
      }

      function representJavascriptUndefined() {
        return '';
      }

      function isUndefined(object) {
        return typeof object === 'undefined';
      }

      module.exports = new Type('tag:yaml.org,2002:js/undefined', {
        kind: 'scalar',
        resolve: resolveJavascriptUndefined,
        construct: constructJavascriptUndefined,
        predicate: isUndefined,
        represent: representJavascriptUndefined
      });

    }, { "../../type": 13 }], 21: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      module.exports = new Type('tag:yaml.org,2002:map', {
        kind: 'mapping',
        construct: function (data) { return data !== null ? data : {}; }
      });

    }, { "../type": 13 }], 22: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      function resolveYamlMerge(data) {
        return data === '<<' || data === null;
      }

      module.exports = new Type('tag:yaml.org,2002:merge', {
        kind: 'scalar',
        resolve: resolveYamlMerge
      });

    }, { "../type": 13 }], 23: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      function resolveYamlNull(data) {
        if (data === null) return true;

        var max = data.length;

        return (max === 1 && data === '~') ||
          (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
      }

      function constructYamlNull() {
        return null;
      }

      function isNull(object) {
        return object === null;
      }

      module.exports = new Type('tag:yaml.org,2002:null', {
        kind: 'scalar',
        resolve: resolveYamlNull,
        construct: constructYamlNull,
        predicate: isNull,
        represent: {
          canonical: function () { return '~'; },
          lowercase: function () { return 'null'; },
          uppercase: function () { return 'NULL'; },
          camelcase: function () { return 'Null'; }
        },
        defaultStyle: 'lowercase'
      });

    }, { "../type": 13 }], 24: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var _toString = Object.prototype.toString;

      function resolveYamlOmap(data) {
        if (data === null) return true;

        var objectKeys = [], index, length, pair, pairKey, pairHasKey,
          object = data;

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];
          pairHasKey = false;

          if (_toString.call(pair) !== '[object Object]') return false;

          for (pairKey in pair) {
            if (_hasOwnProperty.call(pair, pairKey)) {
              if (!pairHasKey) pairHasKey = true;
              else return false;
            }
          }

          if (!pairHasKey) return false;

          if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
          else return false;
        }

        return true;
      }

      function constructYamlOmap(data) {
        return data !== null ? data : [];
      }

      module.exports = new Type('tag:yaml.org,2002:omap', {
        kind: 'sequence',
        resolve: resolveYamlOmap,
        construct: constructYamlOmap
      });

    }, { "../type": 13 }], 25: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      var _toString = Object.prototype.toString;

      function resolveYamlPairs(data) {
        if (data === null) return true;

        var index, length, pair, keys, result,
          object = data;

        result = new Array(object.length);

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];

          if (_toString.call(pair) !== '[object Object]') return false;

          keys = Object.keys(pair);

          if (keys.length !== 1) return false;

          result[index] = [keys[0], pair[keys[0]]];
        }

        return true;
      }

      function constructYamlPairs(data) {
        if (data === null) return [];

        var index, length, pair, keys, result,
          object = data;

        result = new Array(object.length);

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];

          keys = Object.keys(pair);

          result[index] = [keys[0], pair[keys[0]]];
        }

        return result;
      }

      module.exports = new Type('tag:yaml.org,2002:pairs', {
        kind: 'sequence',
        resolve: resolveYamlPairs,
        construct: constructYamlPairs
      });

    }, { "../type": 13 }], 26: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      module.exports = new Type('tag:yaml.org,2002:seq', {
        kind: 'sequence',
        construct: function (data) { return data !== null ? data : []; }
      });

    }, { "../type": 13 }], 27: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      var _hasOwnProperty = Object.prototype.hasOwnProperty;

      function resolveYamlSet(data) {
        if (data === null) return true;

        var key, object = data;

        for (key in object) {
          if (_hasOwnProperty.call(object, key)) {
            if (object[key] !== null) return false;
          }
        }

        return true;
      }

      function constructYamlSet(data) {
        return data !== null ? data : {};
      }

      module.exports = new Type('tag:yaml.org,2002:set', {
        kind: 'mapping',
        resolve: resolveYamlSet,
        construct: constructYamlSet
      });

    }, { "../type": 13 }], 28: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      module.exports = new Type('tag:yaml.org,2002:str', {
        kind: 'scalar',
        construct: function (data) { return data !== null ? data : ''; }
      });

    }, { "../type": 13 }], 29: [function (require, module, exports) {
      'use strict';

      var Type = require('../type');

      var YAML_DATE_REGEXP = new RegExp(
        '^([0-9][0-9][0-9][0-9])' + // [1] year
        '-([0-9][0-9])' + // [2] month
        '-([0-9][0-9])$');                   // [3] day

      var YAML_TIMESTAMP_REGEXP = new RegExp(
        '^([0-9][0-9][0-9][0-9])' + // [1] year
        '-([0-9][0-9]?)' + // [2] month
        '-([0-9][0-9]?)' + // [3] day
        '(?:[Tt]|[ \\t]+)' + // ...
        '([0-9][0-9]?)' + // [4] hour
        ':([0-9][0-9])' + // [5] minute
        ':([0-9][0-9])' + // [6] second
        '(?:\\.([0-9]*))?' + // [7] fraction
        '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
        '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

      function resolveYamlTimestamp(data) {
        if (data === null) return false;
        if (YAML_DATE_REGEXP.exec(data) !== null) return true;
        if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
        return false;
      }

      function constructYamlTimestamp(data) {
        var match, year, month, day, hour, minute, second, fraction = 0,
          delta = null, tz_hour, tz_minute, date;

        match = YAML_DATE_REGEXP.exec(data);
        if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

        if (match === null) throw new Error('Date resolve error');

        // match: [1] year [2] month [3] day

        year = +(match[1]);
        month = +(match[2]) - 1; // JS month starts with 0
        day = +(match[3]);

        if (!match[4]) { // no hour
          return new Date(Date.UTC(year, month, day));
        }

        // match: [4] hour [5] minute [6] second [7] fraction

        hour = +(match[4]);
        minute = +(match[5]);
        second = +(match[6]);

        if (match[7]) {
          fraction = match[7].slice(0, 3);
          while (fraction.length < 3) { // milli-seconds
            fraction += '0';
          }
          fraction = +fraction;
        }

        // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

        if (match[9]) {
          tz_hour = +(match[10]);
          tz_minute = +(match[11] || 0);
          delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
          if (match[9] === '-') delta = -delta;
        }

        date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

        if (delta) date.setTime(date.getTime() - delta);

        return date;
      }

      function representYamlTimestamp(object /*, style*/) {
        return object.toISOString();
      }

      module.exports = new Type('tag:yaml.org,2002:timestamp', {
        kind: 'scalar',
        resolve: resolveYamlTimestamp,
        construct: constructYamlTimestamp,
        instanceOf: Date,
        represent: representYamlTimestamp
      });

    }, { "../type": 13 }], "/": [function (require, module, exports) {
      'use strict';


      var yaml = require('./lib/js-yaml.js');


      module.exports = yaml;

    }, { "./lib/js-yaml.js": 1 }]
  }, {}, [])("/")
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=aaCustomElements.js.map