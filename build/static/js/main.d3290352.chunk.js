(this.webpackJsonpedumato=this.webpackJsonpedumato||[]).push([[0],{31:function(e,a,t){},35:function(e,a,t){e.exports=t(71)},40:function(e,a,t){},41:function(e,a,t){},47:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),c=t.n(r),o=t(7),s=t(1),m=t(2),i=t(3),u=t(5),d=t(4),p=(t(40),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e.city},e.city_name)}))},e.renderRestaurants=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name," - ",e.locality)}))},e.handleCity=function(a){fetch("".concat("https://edumato-app.herokuapp.com/restaurants?city=").concat(a.target.value),{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({restaurants:a})}))},e.handleRestaurant=function(a){e.props.restId(a.target.value)},e.state={title:"Find the best restaurants, cafe's and bars.",location:"",restaurants:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-area"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron text-center "},l.a.createElement("div",{id:"logo",className:"mb-sm-5"},l.a.createElement("b",null,"e!")),l.a.createElement("h1",{className:"mb-sm-5"},this.state.title),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2 ml-sm-5"}),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("select",{className:"locationDropDown form-control col-12",onChange:this.handleCity},l.a.createElement("option",null,"Select your location"),this.renderCity(this.state.location))),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("select",{className:"locationDropDown form-control col-12",onChange:this.handleRestaurant},l.a.createElement("option",null,"Select your restaurant"),this.renderRestaurants(this.state.restaurants)))),l.a.createElement("div",{className:"col-sm-3"}))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumato-app.herokuapp.com/location/",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({location:a})}))}}]),t}(n.Component)),E=(t(41),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container search-box"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",{className:"componentHeading"},"Quick Searches"),l.a.createElement("p",{className:"componentSubHeading1"},"Discover restaurants by type of meal")))),function(e){var a=e.mealData;if(a)return a.map((function(e){return l.a.createElement(o.b,{to:"/list/".concat(e.mealtype)},l.a.createElement("div",{className:"container quicksearch-container ml-lg"},l.a.createElement("div",{className:"col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-0 pl-sm-0 col-xl-3 ml-xl-5 product"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-7 img-box"},l.a.createElement("img",{src:"".concat(e.url),alt:"breakfast",border:"0"})),l.a.createElement("div",{className:"col-sm-5 pl-0"},l.a.createElement("h3",{className:"componentHeading"},e.name),l.a.createElement("p",{className:"componentSubHeading"},e.message))))))}))}(e),l.a.createElement("div",{className:"empty-container"}))}),h=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={mealType:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(E,{mealData:this.state.mealType})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumato-app.herokuapp.com/mealtype",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({mealType:a})}))}}]),t}(n.Component),v=function(e){return l.a.createElement("div",null,l.a.createElement(p,{restId:function(a){!function(a){e.history.push("/rest/".concat(a))}(a)}}),l.a.createElement(h,null))},f=(t(47),function(){return l.a.createElement("nav",{className:"navbar1 navbar navbar-expand-lg navbar-light"},l.a.createElement(o.b,{className:"logo",to:"/"}," e! ",l.a.createElement("span",{className:"tooltiptext"},"Home")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"}),l.a.createElement("div",{className:"navbar-links"},l.a.createElement(o.b,{to:"/login"},"Login"),l.a.createElement("a",{href:"#"},"Create an account"),l.a.createElement(o.b,{to:"/vieworder"},l.a.createElement("ion-icon",{name:"cart"})))))}),b=t(11),g=t.n(b),N=(t(65),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"col-md-9"},function(e){var a=e.restData;return a?a.length>0?a.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid col-sm-12 col-lg- rest-display"},l.a.createElement("div",{className:"container-fluid bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 col-md-6 col-lg-4 p-2"},l.a.createElement("div",{className:"image-box"},l.a.createElement("img",{src:e.thumb,alt:"some image"}))),l.a.createElement("div",{className:"col-sm-7 col-md-6 col-lg-8 p-2"},l.a.createElement("div",{className:"content-box"},l.a.createElement("p",{className:"top-heading"},l.a.createElement(o.b,{to:"/rest/".concat(e._id)},e.name)),l.a.createElement("p",{className:"top-subheading"},"FORT"),l.a.createElement("p",{className:"top-content"},e.city_name,"-",e.locality," "),l.a.createElement("p",{className:"top-content"},e.address," "))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 col-md-6 col-lg-4 p-2"},l.a.createElement("div",{className:"property"},l.a.createElement("p",null,"Cuisines:"),l.a.createElement("p",null,"COST FOR TWO:"))),l.a.createElement("div",{className:"col-sm-7 col-md-6 col-lg-8 p-2"},l.a.createElement("div",{className:"value"},l.a.createElement("p",null,e.Cuisine.cuisine),l.a.createElement("p",null,"\u20b9 ",e.cost))))))),l.a.createElement("br",null))})):l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"d-message1"},"Sorry!"),l.a.createElement("h3",{className:"d-message2"},"This request cann't be completed")):l.a.createElement("div",{className:"loader"},l.a.createElement("img",{src:"../img/loader.gif",alt:"loaderImage"}))}(e)))}),y="https://edumato-app.herokuapp.com/restaurants",C=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).cuisineLogic=function(a){var t,n=sessionStorage.getItem("type");t=""==a.target.value?"".concat(y,"/").concat(n):"".concat(y,"/").concat(n,"?cuisine=").concat(a.target.value),g.a.get(t).then((function(a){e.props.datapercuisine(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container filter"},l.a.createElement("div",{className:"row ml-5 m-auto "},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("p",{className:"filter-heading"},"Filters"),l.a.createElement("p",{className:"filter-subheading"},"Select Location"),l.a.createElement("select",{className:"select",name:"city",id:"Select Location"},l.a.createElement("option",null,"Select Location"),l.a.createElement("option",{value:"city"},"Delhi"),l.a.createElement("option",{value:"city"},"Mumbai"),l.a.createElement("option",{value:"city"},"Agra"),l.a.createElement("option",{value:"city"},"Jaipur"),l.a.createElement("option",{value:"city"},"pune")))),l.a.createElement("div",{className:"row ml-5 m-auto"},l.a.createElement("div",{className:"col-sm-12",onChange:this.cuisineLogic},l.a.createElement("p",{className:"filter-subheading"},"Cuisine"),l.a.createElement("input",{type:"radio",id:"food",name:"cuisine",value:""}),l.a.createElement("label",{for:"food",className:"label"}," All "),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"food1",name:"cuisine",value:"1"}),l.a.createElement("label",{for:"food1",className:"label"}," North Indian "),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"food2",name:"cuisine",value:"2"}),l.a.createElement("label",{for:"food2"}," South Indian "),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"food3",name:"cuisine",value:"3"}),l.a.createElement("label",{for:"food3"}," Chinese "),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"food4",name:"cuisine",value:"4"}),l.a.createElement("label",{for:"food4"}," Fast Food "),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"food5",name:"cuisine",value:"5"}),l.a.createElement("label",{for:"food5"}," Street Food "),l.a.createElement("br",null)))))}}]),t}(n.Component),O="https://edumato-app.herokuapp.com/restaurants",j=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).filterCost=function(a){var t,n=sessionStorage.getItem("type"),l=a.target.value.split(","),r=l[0],c=l[1];t=" "==a.target.value||""==a.target.value?"".concat(O,"/").concat(n):"".concat(O,"/").concat(n,"?lcost=").concat(r,"&hcost=").concat(c),console.log(t),g.a.get(t).then((function(a){e.props.datapercost(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container filter"},l.a.createElement("div",{className:"row ml-5 m-auto "},l.a.createElement("div",{className:"col-sm-12",onChange:this.filterCost},l.a.createElement("p",{className:"filter-subheading"},"Cost For Two"),l.a.createElement("input",{type:"radio",id:"500",name:"price-selection",value:"100,500"}),l.a.createElement("label",{for:"500"},"less than \u20b9 500"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"500-1000",name:"price-selection",value:"500,1000"}),l.a.createElement("label",{for:"500-1000"},"\u20b9 500 to \u20b9 1000"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"1000-1500",name:"price-selection",value:"1000,1500"}),l.a.createElement("label",{for:"1000-1500"},"\u20b9 500 to \u20b9 1000"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"1500-2000",name:"price-selection",value:"1500,2000"}),l.a.createElement("label",{for:"1500-2000"},"\u20b9 500 to \u20b9 1000"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"2000+",name:"price-selection",value:"2000,5000"}),l.a.createElement("label",{for:"2000+"},"\u20b9 2000+"),l.a.createElement("br",null)))))}}]),t}(n.Component),k=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={restListing:""},n}return Object(i.a)(t,[{key:"setDataPerFilter",value:function(e){this.setState({restListing:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"main-heading"},"Breakfast places in Mumbai"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement(C,{datapercuisine:function(a){e.setDataPerFilter(a)}}),l.a.createElement(j,{datapercost:function(a){e.setDataPerFilter(a)}})),l.a.createElement("div",{className:"container col-md-8"},l.a.createElement(N,{restData:this.state.restListing}))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;sessionStorage.setItem("type",a),g.a.get("".concat("https://edumato-app.herokuapp.com/restaurants?mealtype=").concat(a)).then((function(a){e.setState({restListing:a.data})}))}}]),t}(n.Component),S=t(15),w=(t(66),t(67),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).onBack=function(){var e=sessionStorage.getItem("type");n.props.history.push("/list/".concat(e))},n.state={rest:{Cuisine:[{name:""},{name:""}]}},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.rest;return l.a.createElement("div",{className:"details-box"},l.a.createElement("div",{className:"image-container mt-0 mt-sm-0 "},l.a.createElement("img",{src:e.thumb,alt:""}),l.a.createElement("div",{className:"image-text"},l.a.createElement("a",{href:"#"},"Click to see Image Gallery"))),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"container-heading"},e.name)),l.a.createElement("div",{className:"conatainer"},l.a.createElement("div",{className:"tab"},l.a.createElement(S.d,null,l.a.createElement(S.b,null,l.a.createElement(S.a,null,"Overview"),l.a.createElement(S.a,null,"Contact")),l.a.createElement(S.c,null,l.a.createElement("div",{id:"Overview"},l.a.createElement("p",{className:"about-heading"},"About this place"),l.a.createElement("p",{className:"aboutSubHeading"},"Cuisine"),l.a.createElement("p",{className:"aboutSubHeading-content"},e.Cuisine[0].name," & ",e.Cuisine[1].name),l.a.createElement("p",{className:"aboutSubHeading"},"Average Cost"),l.a.createElement("p",{className:"aboutSubHeading-content"},"\u20b9 ",e.cost," for two people (approx..)"))),l.a.createElement(S.c,null,l.a.createElement("div",{id:"Contact"},l.a.createElement("p",{className:"contact-heading"},"Phone Number"),l.a.createElement("p",{className:"phone-number"},e.contact_number),l.a.createElement("p",{className:"contact-heading"},e.locality),l.a.createElement("p",{className:"address"},e.address)))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-lg back-btn",onClick:this.onBack},"Go Back"),l.a.createElement(o.b,{className:"btn btn-lg booking-btn",to:"/order/".concat(this.props.match.params.id)},"Place Order")))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;g.a.get("".concat("https://edumato-app.herokuapp.com/restaurantDetails","/").concat(a)).then((function(a){e.setState({rest:a.data[0]})}))}}]),t}(n.Component)),x=t(19),P=(t(68),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).handleChangeName=function(a){e.setState({user_name:a.target.value})},e.handleChangePhone=function(a){e.setState({phone:a.target.value})},e.handleChangeAddress1=function(a){e.setState({address1:a.target.value})},e.handleChangeAddress2=function(a){e.setState({address2:a.target.value})},e.handleChangePerson=function(a){e.setState({person:a.target.value})},e.handleChangeEmail=function(a){e.setState({email:a.target.value})},e.handleChangePincode=function(a){e.setState({pincode:a.target.value})},e.handleSubmit=function(){var a={_id:e.state.order_id,rest_name:e.state.rest_name,user_name:e.state.user_name,phone:e.state.phone,address1:e.state.address1,address2:e.state.address2,email:e.state.email,person:e.state.person,pincode:e.state.pincode};fetch("https://edumato-app.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then(e.props.history.push("/vieworder"))},e.state={order_id:Math.floor(1e4*Math.random()),rest_name:"",user_name:"",phone:"",address1:"",address2:"",email:"",person:"",pincode:""},e}return Object(i.a)(t,[{key:"render",value:function(){var e;return l.a.createElement("div",{className:"container-fluid form-bg content"},l.a.createElement("form",{autocomplete:"off",className:"container"},l.a.createElement("div",{className:"form-heading"},l.a.createElement("h3",null,"Place Order")),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputEmail4"},"Order Id:"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputEmail4",placeholder:"Order Id:",value:this.state.order_id})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputPassword4"},"Restaurant Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputPassword4",placeholder:"Restaurant Name",value:this.state.rest_name})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{type:"text",className:"form-control",id:"inputEmail4",placeholder:"User Name......",value:this.state.user_name,onChange:this.handleChangeName,required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{type:"phone",className:"form-control",id:"inputPassword4",placeholder:"Phone.........",value:this.state.phone,onChange:this.handleChangePhone,required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress",placeholder:"Address Lane 1.........",value:this.state.address1,onChange:this.handleChangeAddress1,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress2",placeholder:"Address lane 2...",value:this.state.address2,onChange:this.handleChangeAddress2,required:!0})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{type:"email",className:"form-control",id:"inputCity",placeholder:"Email.....",value:this.state.email,onChange:this.handleChangeEmail,required:!0})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("select",(e={id:"inputState",className:"form-control",value:this.state.person,onChange:this.handleChangePerson},Object(x.a)(e,"className","form-control"),Object(x.a)(e,"required",!0),e),l.a.createElement("option",{selected:!0}," Choose Person"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"))),l.a.createElement("div",{className:"form-group col-md-2"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Pin code",value:this.state.pincode,onChange:this.handleChangePincode}))),l.a.createElement("div",{className:"button"},l.a.createElement(o.b,{to:"/rest/".concat(this.props.match.params.id),className:"btn btn-cancel btn-form-submit"},"Cancel ")," \xa0",l.a.createElement("button",{className:"btn btn-booking btn-form-submit",onClick:this.handleSubmit},"Submit"))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;g.a.get("".concat("https://edumato-app.herokuapp.com/restaurantDetails","/").concat(a)).then((function(a){e.setState({rest_name:a.data[0].name})}))}}]),t}(n.Component)),_=t(20),D=t.n(_),F=t(34),A=(t(70),function(e){return l.a.createElement("div",{className:"order-list"},l.a.createElement("center",null,l.a.createElement("h3",null,"My Order's")),l.a.createElement("table",{className:"table .table-responsive{-sm|-md|-lg|-xl}"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Order Id"),l.a.createElement("th",null,"Restaurant Name"),l.a.createElement("th",null,"User Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Address 1"),l.a.createElement("th",null,"Address 2"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Person"),l.a.createElement("th",null,"Pincode"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,function(e){var a=e.orderdata;if(a)return a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.rest_name),l.a.createElement("td",null,e.user_name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.address1),l.a.createElement("td",null,e.address2),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.person),l.a.createElement("td",null,e.pincode),l.a.createElement("td",null,"Placed"))}))}(e)))))}),I=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={booking:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(A,{orderdata:this.state.booking}))}},{key:"componentDidMount",value:function(){var e=Object(F.a)(D.a.mark((function e(){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://edumato-app.herokuapp.com/orders"));case 2:a=e.sent,this.setState({booking:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),T=(t(31),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{autocomplete:"off",className:"base-container"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg",alt:""})),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{autocomplete:"off",type:"text",name:"username",placeholder:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"password"})))),l.a.createElement("div",{className:"login-button-box"},l.a.createElement("button",{type:"button",className:"btn login-btn"},"Login"))))}}]),t}(n.Component)),L=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"base-container"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg",alt:""})),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Usrname"),l.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email..."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"password"})))),l.a.createElement("div",{className:"footer"},l.a.createElement("button",{type:"button",className:"btn"},"Register"))))}}]),t}(n.Component),M=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(s.a,{exact:!0,path:"/",component:v}),l.a.createElement(s.a,{exact:!0,path:"/list/:id",component:k}),l.a.createElement(s.a,{exact:!0,path:"/rest/:id",component:w}),l.a.createElement(s.a,{exact:!0,path:"/order/:id",component:P}),l.a.createElement(s.a,{exact:!0,path:"/vieworder",component:I}),l.a.createElement(s.a,{exact:!0,path:"/login",component:T}),l.a.createElement(s.a,{exact:!0,path:"/register",component:L})))};c.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d3290352.chunk.js.map