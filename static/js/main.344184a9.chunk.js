(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/img/1.png"},{"id":2,"image":"./assets/img/2.png"},{"id":3,"image":"./assets/img/3.png"},{"id":4,"image":"./assets/img/4.png"},{"id":5,"image":"./assets/img/5.png"},{"id":6,"image":"./assets/img/6.png"},{"id":7,"image":"./assets/img/7.png"},{"id":8,"image":"./assets/img/8.png"},{"id":9,"image":"./assets/img/9.png"},{"id":10,"image":"./assets/img/10.png"},{"id":11,"image":"./assets/img/11.png"},{"id":12,"image":"./assets/img/12.png"}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),c=t.n(s),l=(t(15),t(1)),i=t(4),o=t(5),m=t(8),u=t(6),p=t(9),f=(t(16),function(e){return r.a.createElement("div",{className:"navbar navbar-expand-lg p-3 bg-primary text-white"},r.a.createElement("div",{className:"col-4 header-items"},r.a.createElement("button",{type:"button",onClick:e.resetGame,className:"reload-link btn btn-dark btn-lg"},"START GAME")),r.a.createElement("div",{className:"col-4 header-items text-center"},r.a.createElement("span",null,"Click a Cheerleader to Score!!")),r.a.createElement("div",{className:" header-items nav-item ml-auto mr-2"},r.a.createElement("span",{className:"scores"}," Your Score: ",r.a.createElement("span",{className:"num"}," ",e.currentScore," ")," ",r.a.createElement("span",{className:"divide pl-3 pr-3"},"| ")," Top Score: ",r.a.createElement("span",{className:"num"}," ",e.topScore))))}),g=(t(17),function(e){return r.a.createElement("div",{className:"jumbotron text-white bg-dark"},r.a.createElement("span",{class:"fa fa-star fa-lg pr-4 blue"}),r.a.createElement("span",{class:"fa fa-star fa-lg pr-4"}),r.a.createElement("span",{class:"fa fa-star fa-lg pr-4 blue"}),r.a.createElement("span",{class:"fa fa-star fa-lg pr-4"}),r.a.createElement("span",{class:"fa fa-star fa-lg pr-5 blue"}),r.a.createElement("span",null,"Click on a Girl to Score 1 Point!  Don't hit on the same Girl twice! (12 Points Wins!)"),r.a.createElement("span",{class:"fa fa-star fa-lg pl-5 blue"}),r.a.createElement("span",{class:"fa fa-star fa-lg pl-4"}),r.a.createElement("span",{class:"fa fa-star fa-lg pl-4 blue"}),r.a.createElement("span",{class:"fa fa-star fa-lg pl-4"}),r.a.createElement("span",{class:"fa fa-star fa-lg pl-4 blue"}))}),d=t(7),h=(t(18),function(e){return r.a.createElement("div",{className:"col-2 girl-container p-2",onClick:function(){return e.onClick(e.id)}},r.a.createElement("img",{src:e.image,className:"girl shadow-lg mb-3 mt-3",alt:"Cowboy Cheerleader"}))}),E=(t(19),function(e){return r.a.createElement("footer",{class:"footer bg-primary fixed-bottom"},r.a.createElement("div",{class:"container text-center p-2"},r.a.createElement("span",{class:"text"},"Built with React",r.a.createElement("i",{class:"fab fa-react pl-1"}))))}),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={currentScore:0,topScore:0,pictures:[]},t.resetGame=function(){console.log("reloaded!");var e=Object(l.a)(t.state.pictures);e.forEach((function(e){return e.clicked=!1})),e=t.shuffle(e),t.setState({currentScore:0,pictures:e})},t.handlePictureClick=function(e){if(t.state.pictures[e].clicked)alert("You already clicked her, please try again."),t.resetGame();else{console.log(e);var a=Object(l.a)(t.state.pictures);a[e].clicked=!0,console.log(a[e]),a=t.shuffle(a),t.setState({pictures:a,currentScore:t.state.currentScore+1,topScore:t.state.currentScore+1>t.state.topScore?t.state.currentScore+1:t.state.topScore})}},t.renderWinMessage=function(){12===t.state.topScore&&alert("You win!")},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this.shuffle(d);this.setState({pictures:e})}},{key:"shuffle",value:function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{currentScore:this.state.currentScore,topScore:this.state.topScore,resetGame:this.resetGame}),r.a.createElement(g,null),this.state.pictures.map((function(a,t){return r.a.createElement(h,{image:a.image,key:a.id,id:t,onClick:e.handlePictureClick})})),r.a.createElement(E,null))}}]),a}(n.Component),v=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.344184a9.chunk.js.map