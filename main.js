// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState === 4 && xhr.status =="200"){
// 			callback(xhr.responseText);
// 		}
// };
// 	xhr.send(null);
// 
// 	var data= JSON.parse(text);}
// Loadjson("data.json",function(text){
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	education(data.education);
// 	technicalinfo(data.technicalskills);
// 	achievements(data.achievements);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
          }
          else{
          	reject(new Error('error'));
          }
		})
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
		console.log(data);
	basics(data.details);
	careerinfo(data.career);
	education(data.education);
	technicalinfo(data.technicalskills);
	achievements(data.achievements);
})
var left = document.querySelector(".left");
function basics(det){
	var img= document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name1= document.createElement("h3");
	name1.textContent=det.name;
	left.appendChild(name1);
	var phno=document.createElement("h3");
	phno.textContent=det.phoneno;
	left.appendChild(phno);
	var email=document.createElement("a");
	email.href="mailto:gowthamikavya99@gmail.com";
	email.textContent= det.email;
	left.appendChild(email);
	var add= document.createElement("h2");
	add.textContent ="address";
	left.appendChild(add);
	var add1=document.createElement("hr");
	left.appendChild(add1);
	var add2 = document.createElement("p");
	add2.textContent= det.address;
	left.appendChild(add2);
}
var right=document.querySelector(".right");
function careerinfo(info){
	var career= document.createElement("h2");
	career.textContent="career objective";
	right.appendChild(career);
	var career1=document.createElement("hr");
	right.appendChild(career1);
	var info1=document.createElement("phno");
	info1.textContent = info.info;
	right.appendChild(info1);
}
function education(education){
	var edu = document.createElement("h2");
	edu.textContent ="educationalqualification";
	right.appendChild(edu);
	var hr1 =document.createElement("hr");
	right.appendChild(hr1);
	var table1 =document.createElement("table");
	table1.border ="2";
	right.appendChild(table1);
	tabledata = "";
	for(i=0;i<education.length;i++){
		tabledata+="<tr><td>"+education[i].qualification+"</td><td>"+education[i].institute+"</td><td>"+education[i].year+"</td><td>"+education[i].percentage+"</td></tr>"
	}
	table1.innerHTML = tabledata;

}
function technicalinfo(tech){
	var tech1 = document.createElement("h2");
	tech1.textContent ="Technicalskills";
	right.appendChild(tech1);
	var h3=document.createElement("hr");
	right.appendChild(h3);
	for(i=0;i<tech.length;i++){
		var s=document.createElement("h3");
		s.textContent = tech[i].title;
		right.appendChild(s);
		var ul=document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = tech[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
	function achievements(ac){
		var a1= document.createElement("h3");
		a1.textContent = "Achievements";
		right.appendChild(a1);
		var h4 =document.createElement("hr");
		right.appendChild(h4);
		for(i=0;i<ac.length;i++){
			var ul =document.createElement("ul");
			var li=document.createElement("li");
			li.textContent = ac[i].title;
			ul.appendChild(li);
			right.appendChild(ul);
		}
}
function openpage(){
	window.open("resume.html", "_self",true);
}