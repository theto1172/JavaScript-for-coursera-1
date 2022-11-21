var myLinks = document.querySelectorAll('#tabs > ul > li > a');

for (var i=0;i<myLinks.length;i++){
	myLinks[i].addEventListener('click',slectTabs);
}

function slectTabs (event){
	event.preventDefault();
	for (var i=0;i<myLinks.length;i++){
		myLinks[i].removeAttribute('class');
	}
	event.target.className ='active';

	var thisTab = event.target.getAttribute('href');
	var thisContent = document.querySelector(thisTab);
	var oldContent = document.querySelector('.visible');

	oldContent.className = 'visuallyhidden';
	oldContent.addEventListener('transitioned',function(){
		oldContent.className = "hidden";
		thisContent.className = "visible visuallyhidden";
		setTimeout(function(){
			thisContent.classList.remove('visuallyhidden');
		},20);
	},{capture:false,once:true,passive:false});

}
