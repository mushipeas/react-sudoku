(this["webpackJsonpreact-sudoku"]=this["webpackJsonpreact-sudoku"]||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(12),a=n.n(o),c=(n(19),n(3)),s=n(1),l=n(2),u=n(5),h=n(7),v=n(6),d=(n(20),function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",{className:"title"},"Sudoku!"))}}]),n}(r.Component)),f=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e,t,n){e.preventDefault(),console.log(e.target.value);var r=t,i=n;/^$|[1-9]/.test(e.target.value)&&this.props.updateGrid(r,i,e.target.value)}},{key:"componentDidMount",value:function(){this.props.newGrid("grid_01")}},{key:"clickHandler",value:function(e){e.target.select()}},{key:"col",value:function(e,t){var n=this;return Object(c.a)(Array(9).keys()).map((function(r){return i.a.createElement("textarea",{className:"box",maxLength:"1",onClick:n.clickHandler,key:"col-".concat(r),value:t[9*e+r],onChange:function(t){return n.handleChange(t,e,r)},style:{color:n.props.solved?"Green":""}})}))}},{key:"render",value:function(){var e=this,t=this.props.grid;return i.a.createElement("div",{className:"sudokuBoxContainer"},i.a.createElement("div",{className:"sudokuBox"},Object(c.a)(Array(9).keys()).map((function(n){return i.a.createElement("div",{className:"row",key:"row-".concat(n)},e.col(n,t))}))))}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this;return this.props.solved?e=i.a.createElement("p",null,"Solution is Correct!"):!1===this.props.solved&&(e=i.a.createElement("p",null,"That's not a valid solution! :(")),i.a.createElement("div",{className:"window"},i.a.createElement(f,{grid:this.props.grid,solved:this.props.solved,newGrid:this.props.newGrid,updateGrid:this.props.updateGrid}),i.a.createElement("div",{className:"grid-choices"},i.a.createElement("p",null,"Scenarios:",i.a.createElement("button",{onClick:function(){return t.props.newGrid()}},"Empty Grid"),i.a.createElement("button",{onClick:function(){return t.props.newGrid("grid_01")}},"New Grid 01"),i.a.createElement("button",{onClick:function(){return t.props.newGrid("grid_02")}},"New Grid 02"),i.a.createElement("button",{onClick:function(){return t.props.newGrid("grid_03")}},"New Grid 03"))),i.a.createElement("div",{className:"check-sol-button"},i.a.createElement("button",{onClick:function(){return t.props.checkSolution()}},"Check Solution"),e))}}]),n}(r.Component),b=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"rightBox"},i.a.createElement("p",null,"Console Commands:",i.a.createElement("button",{onClick:function(){return e.props.calcOptions()}},"Calculate Options"),i.a.createElement("button",{onClick:function(){return e.props.calcUniqueOptions()}},"Calculate Unique Options")),i.a.createElement("div",null,"Iterative Solver:",i.a.createElement("div",{className:"brute-sol-button"},i.a.createElement("button",{onClick:function(){return e.props.bruteSolve()}},"Solve!"))))}}]),n}(r.Component),k=n(4),g=n(10),m=n.n(g),O=m.a.mark(E);function y(e){var t,n=[],r=Object(k.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;n.push(Object(c.a)(i))}}catch(o){r.e(o)}finally{r.f()}return n}function w(e,t){return e.slice(9*t,9*t+9)}function j(e,t){for(var n=[],r=t;r<81;r+=9)n.push(e[r]);return n}function C(e,t){for(var n=[],r=0;r<3;r++){var i=27*Math.floor(t/3)+t%3*3+9*r;n.push.apply(n,Object(c.a)(e.slice(i,i+3)))}return n}function E(e,t){var n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e;case 1:if(!(n<t)){r.next=7;break}return r.next=4,n;case 4:n++,r.next=1;break;case 7:case"end":return r.stop()}}),O)}function S(e){for(var t=[],n=0,r=[1,2,3,4,5,6,7,8,9];n<r.length;n++){var i=r[n];e.includes(i)||t.push(i)}return t}var G=function(e){var t,n=[],r=Object(k.a)(E(0,9));try{for(r.s();!(t=r.n()).done;){var i,o=t.value,a=w(e,o),c=Object(k.a)(E(0,9));try{for(c.s();!(i=c.n()).done;){var s=i.value,l=9*Number(o)+Number(s);if(""===e[l]){var u=j(e,s),h=C(e,3*Math.floor(o/3)+Math.floor(s/3)),v=[].concat(a).concat(u).concat(h);n[l]=S(v)}else n[l]=[]}}catch(d){c.e(d)}finally{c.f()}}}catch(d){r.e(d)}finally{r.f()}return n};function N(e,t){var n,r=[],i=e.reduce((function(e,t){return e.concat(t)})),o=Object(k.a)(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;i.includes(a)||r.push(a)}}catch(c){o.e(c)}finally{o.f()}return r}var x=function(e){var t,n=[],r=Object(k.a)(E(0,9));try{for(r.s();!(t=r.n()).done;){var i,o=t.value,a=w(e,o),s=Object(k.a)(E(0,9));try{for(s.s();!(i=s.n()).done;){var l=i.value,u=9*o+l;if(e[u]!==[]){var h=3*Math.floor(o/3)+Math.floor(l/3),v=Object(c.a)(a),d=j(e,l),f=C(e,h);v.splice(l,1),d.splice(o,1),f.splice(h,1),n[u]=N(v,e[u]).concat(N(d,e[u])).concat(N(f,e[u])).splice(0,1)}else n[u]=[]}}catch(p){s.e(p)}finally{s.f()}}}catch(p){r.e(p)}finally{r.f()}return n},q=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"checkGrid",value:function(e){return this.checkRows(e)&&this.checkColumns(e)&&this.checkSquares(e)}},{key:"checkRows",value:function(e){for(var t=0;t<9;t++){var n=w(e,t);if(!this.containsOneToNine(n))return!1}return!0}},{key:"checkColumns",value:function(e){for(var t=0;t<9;t++){var n=j(e,t);if(!this.containsOneToNine(n))return!1}return!0}},{key:"checkSquares",value:function(e){for(var t=0;t<9;t++){var n=C(e,t);if(!this.containsOneToNine(n))return!1}return!0}},{key:"containsOneToNine",value:function(e){for(var t=1;t<=9;t++)if(!e.includes(t))return!1;return!0}}]),e}(),M=n(13),U=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"element",value:function(e,t){return this.checkRow(e,t)&&this.checkColumn(e,t)&&this.checkSquare(e,t)}},{key:"checkRow",value:function(e,t){var n=w(e,Math.floor(t/9));return!this.hasDuplicates(n)}},{key:"checkColumn",value:function(e,t){var n=j(e,t%9);return!this.hasDuplicates(n)}},{key:"checkSquare",value:function(e,t){var n=C(e,3*Math.floor(Math.floor(t/9)/3)+Math.floor(t%9/3));return!this.hasDuplicates(n)}},{key:"hasDuplicates",value:function(e){for(var t=[],n=0;n<=e.length;n++)if(void 0===t[e[n]])t[e[n]]=1;else if(""!==e[n])return!0;return!1}}]),e}(),_=new q,T=new U,I=function(){function e(){Object(s.a)(this,e),this.iterations=0,this.maxIterations=1e5}return Object(l.a)(e,[{key:"solve",value:function(e){this.iterations=0;var t=this.iterativeFill(e);return t?{grid:t}:{grid:e}}},{key:"recursivelyFillGrid",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=Object(M.a)(t,2),r=n[0],i=n[1];if(this.iterations++,this.iterations>this.maxIterations)throw console.table(e),console.log("iterations: ".concat(this.iterations)),new Error("Unsolvable");var o=G(e),a=o[9*r+i];if(o.filter((function(e){return 0!==e.length})).length+e.flat().filter((function(e){return 0!==e.length})).length<81)return!1;if(8===r&&8===i)return""===e[r][i]&&(e[r][i]=o[9*r+i]),console.log("Completed in : ".concat(this.iterations," iterations.")),!!_.checkGrid(e)&&e;if(0===a.length){if(""===e[r][i])return!1;var c=this.recursivelyFillGrid(e,this.nextCoordinate(r,i));if(c)return c}else{var s,l=Object(k.a)(a);try{for(l.s();!(s=l.n()).done;){var u=s.value,h=y(e);h[r][i]=u;var v=this.recursivelyFillGrid(h,this.nextCoordinate(r,i));if(v)return v}}catch(d){l.e(d)}finally{l.f()}}return!1}},{key:"iterativeFill",value:function(e){for(var t=Object(c.a)(e),n=0;n>=0&&n<81;){if(this.iterations++,this.iterations>this.maxIterations)return console.table(t),console.log("Max iterations hit: ".concat(this.iterations)),null;if(""!==e[n]&&n++,""===t[n]&&(t[n]=1),t[n]>9){for(t[n]="",n--;n>=0&&""!==e[n];)n--;if(n<0)return console.log("Unsolvable. Iterations: ".concat(this.iterations)),null;t[n]++}if(T.element(t,n)&&t[n]<=9)for(n++;n<81&&""!==e[n];)n++;else t[n]++}return console.log("Iterations for solution: ".concat(this.iterations)),t}},{key:"nextCoordinate",value:function(e,t){return t<8?t++:(e++,t=0),[e,t]}},{key:"prevCoordinate",value:function(e,t){return t>0?t--:(e--,t=8),[e,t]}},{key:"updateGrid",value:function(e,t){for(var n in t){var r=Math.floor(n/9),i=n-9*r;console.log("Changing ".concat(r,":").concat(i,",(").concat(n,")   :  ").concat(t[n])),e[r][i]=t[n]}return e}}]),e}(),D={grid_empty:Array(81).fill(""),grid_01:[2,"",9,"",8,"",5,"","","","",4,7,6,9,"","","",3,"","","",1,2,"",4,"","","",3,6,"","","",5,4,"",4,"","","","","",8,"",8,5,"","","",7,6,"","","",2,"",8,7,"","","",9,"","","",1,9,6,2,"","","","",5,"",4,"",1,"",8],grid_02:["","","",6,7,"","",4,"",1,"","","","","","",3,6,"",4,2,1,"","","","","",4,"","",7,"","","","","","","",5,"","","",3,"","","","","","","",2,"","",8,"","","","","",1,6,7,"",5,8,"","","","","","",3,"",3,"","",2,9,"","",""],grid_03:[8,"",3,"","","",2,1,9,9,"",5,"",1,"",7,"","","",6,1,9,"","",3,"","",2,3,4,5,6,1,9,"","",1,8,9,4,3,7,5,2,6,"","","","","",9,1,4,3,"","","","","",4,8,9,"","","",8,"",9,"",6,"",5,"",9,2,"","","",4,"",1]},A=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).newGrid=e.newGrid.bind(Object(u.a)(e)),e.updateGrid=e.updateGrid.bind(Object(u.a)(e)),e.calcOptions=e.calcOptions.bind(Object(u.a)(e)),e.calcUniqueOptions=e.calcUniqueOptions.bind(Object(u.a)(e)),e.checkSolution=e.checkSolution.bind(Object(u.a)(e)),e.bruteSolve=e.bruteSolve.bind(Object(u.a)(e)),e.bruteSolver=new I,e.isSolutionCorrect=new q,e.state={grid:D.grid_empty,gridOptions:[],uniqueOptions:[],solved:null},e}return Object(l.a)(n,[{key:"newGrid",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"grid_empty",n=Object(c.a)(D[t]);this.setState({grid:n}),this.setState({solved:e})}},{key:"updateGrid",value:function(e,t,n){var r=Object(c.a)(this.state.grid);r[9*e+t]=""===n?n:1*n,this.setState({grid:r}),this.setState({solved:void 0})}},{key:"calcOptions",value:function(){var e=G(this.state.grid);this.setState({gridOptions:e}),console.table(e)}},{key:"calcUniqueOptions",value:function(){var e=G(this.state.grid),t=x(e);this.setState({uniqueOptions:t}),console.table(t)}},{key:"bruteSolve",value:function(){var e=this.bruteSolver.solve(this.state.grid).grid;this.setState({grid:e})}},{key:"checkSolution",value:function(){var e=!1;this.isSolutionCorrect.checkGrid(this.state.grid)?(console.log("The solution is correct!"),e=!0):console.log("This is not the correct solution!"),this.setState({solved:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement("div",{className:"body"},i.a.createElement(p,{grid:this.state.grid,solved:this.state.solved,updateGrid:this.updateGrid,newGrid:this.newGrid,checkSolution:this.checkSolution}),i.a.createElement(b,{calcOptions:this.calcOptions,calcUniqueOptions:this.calcUniqueOptions,bruteSolve:this.bruteSolve})))}}]),n}(r.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(i.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-sudoku",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-sudoku","/service-worker.js");B?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):F(e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.ac28f5e8.chunk.js.map