
let bgactive = document.getElementsByClassName('bgactive')

bgcolor=(a)=>{
	for(let i=0; i<bgactive.length; i++){

		bgactive[i].style.backgroundColor="";
		bgactive[i].style.color="white"

	}
	a.style.backgroundColor='white';
	a.style.color="black";
	
}

function opordpage(a){				// open order page
	
	document.getElementsByClassName('yurmain')[0].style.display='flex'	//block
	document.getElementsByClassName('menumain')[0].style.display='none'
	document.getElementsByClassName('contactmain')[0].style.display='none'
	document.getElementsByClassName('adpass')[0].style.display="none"
	document.getElementsByClassName('adminPage')[0].style.display="none"
	document.getElementsByClassName('section_1')[0].style.display='block'


}

function opmnupage(){				// open menu page

	document.getElementsByClassName('menumain')[0].style.display='block'
	document.getElementsByClassName('yurmain')[0].style.display='none'
	document.getElementsByClassName('contactmain')[0].style.display='none'
	document.getElementsByClassName('adpass')[0].style.display="none"
	document.getElementsByClassName('adminPage')[0].style.display="none"
	document.getElementsByClassName('section_1')[0].style.display='block'


}

function opconpage(){				// open menu page

	document.getElementsByClassName('contactmain')[0].style.display='block'
	document.getElementsByClassName('menumain')[0].style.display='none'
	document.getElementsByClassName('yurmain')[0].style.display='none'
	document.getElementsByClassName('adpass')[0].style.display="none"
	document.getElementsByClassName('adminPage')[0].style.display="none"
	document.getElementsByClassName('section_1')[0].style.display='block'

}


// <!-- ---------/////////// ----------->
	
	// <!----------- Tab pane  ---------------->

function opentab(t,a){				// t=  starters , main, dessert

	let tabopen =document.getElementsByClassName('tabopen')
	let tabbtn =document.getElementsByClassName('tabbtn')


	for(i=0; i<tabopen.length; i++){
		tabopen[i].style.display="none"
		tabbtn[i].style.backgroundColor=""
		tabbtn[i].style.color="black"
		

	}

	document.getElementById(t).style.display="block"
	a.style.backgroundColor="#001d3d"
	a.style.color="white"

		document.getElementById('starters').setAttribute('class','p-3 starter tabopen slide-in-left')
		document.getElementById('dessert').setAttribute('class','p-3 starter tabopen slide-in-right')

	if(t=='starters'){
			
		document.getElementById('main').setAttribute('class','p-3 starter tabopen slide-in-right')

			
	}
	else if(t=='dessert'){

		document.getElementById('main').setAttribute('class','p-3 starter tabopen slide-in-left')

	}


}


	let tblitname =document.getElementById('tblitname')

	let tr2 = document.createElement('tr')		// total price
		tr2.className="fw-bold text-center"

		td5 = document.createElement('td')		// Total
		td6 = document.createElement('td')		// price
		td6.colSpan =3

		let td5text = document.createTextNode("Total");

		let sum=0

		td5.appendChild(td5text)
		tr2.appendChild(td5)


		let td4
		let thpric

		
		function qty() {
			let qtinp1 = document.getElementsByClassName('qtinp')			// qty
			let dishbtn=  document.getElementsByClassName('dishbtn')		// button
			let vninp1=  document.getElementsByClassName('vninp1')			// name	input 
			let vpinp1=  document.getElementsByClassName('vpinp1')			// price input
			
			console.log(qtinp1.length)
			// console.log(vpinp1[0].value)

			console.log(vninp1.length)
			console.log(vpinp1.length)

			console.log(dishbtn.length)

			for(i=0; i<qtinp1.length; i++){
				
				dishbtn[i].setAttribute('onClick','addish1(this,'+"'"+vninp1[i].value+"'"+","+vpinp1[i].value+ ","+qtinp1[i].value+')');

			}


		}
	function addish1(t,n,p,q){		//this,name, price, qty     
	
		t.style.backgroundColor="#11529A"
		setTimeout(()=> {
			t.style.backgroundColor="#001d3d"
		  }, 500);
		

		let vsdish1=  document.getElementsByClassName('vsdish1')		// h4 name
		let dishp1=  document.getElementsByClassName('dishp1')		// p price
		let ord = document.getElementsByClassName('order')
		
		let cantxt	= document.getElementsByClassName('cantxt')	
			cantxt[0].style.display="block"
			cantxt[0].innerText="Cancel"
			let tr1 = document.createElement('tr')
				tr1.className="remrow"  

			let td1 = document.createElement('td')
				// td1.className="px-5"
			let td2 = document.createElement('td')
			let td3 = document.createElement('td')
				td4 = document.createElement('td')
				td4.className="p-2 reclbtn"

			let cbtn1 =  document.createElement("div")		//close btn
				cbtn1.className='rounded-circle bg-danger mx-auto p-2 d-flex justify-content-center align-item-center'
				cbtn1.setAttribute('style','height:25px;width:25px;cursor:pointer')
				cbtn1.setAttribute('onClick','close2(this)')
				cbtn1.innerHTML= '<img src="images/close.png" height="10px" width="10px">'

			
			let tdtext4 = document.createTextNode( cbtn1 );						// close btn

			let tdtext1 = document.createTextNode( n);						//name
			let tdtext2 = document.createTextNode( q);			//Qty
			let tdtext3 = document.createTextNode( p*q);

			thpric = document.getElementById('thpric')

			thpric.innerHTML='<i class="fa fa-inr" aria-hidden="true"></i> '+sum+'/-'


			td1.appendChild(tdtext1)
			td2.appendChild(tdtext2)
			td3.appendChild(tdtext3)
			td4.appendChild(cbtn1)

			tr1.appendChild(td1)
			tr1.appendChild(td2)
			tr1.appendChild(td3)
			tr1.appendChild(td4)

			if( q <=0){
				
				alert('Quantity should be greter than 0 ')
				
			}
			else if(q >15 ){
				alert('Quantity should be less than 15 ')

			}
			else{
				sum +=p*q				//  price*Qty add in sum

				thpric.innerHTML='<i class="fa fa-inr" aria-hidden="true"></i> '+sum+'/-'

				tblitname.appendChild(tr1)

			}

			
			if(sum >0){
				// document.getElementsByClassName('porderbtn')[0].style.display="block"		// place order btn div

				let remonclick =document.getElementsByClassName('remonclick')		// Your order div
				remonclick[1].setAttribute('onClick','opordpage(),bgcolor(this)')
			}

	}
		
		tr2.appendChild(td6)



	function close2(c){				// close table row
		c.parentNode.parentNode.remove()

		sum -=c.parentNode.parentNode.childNodes[2].innerText				// total sum - price of close button

		thpric.innerHTML='<i class="fa fa-inr" aria-hidden="true"></i> '+sum+'/-'

	}

	function pOrder(){				// place order btn
		if(sum==0){
			location.reload()
		}
		else{

		
			let reclbtn1 = document.getElementsByClassName('reclbtn')
				for(i=0; i<reclbtn1.length; i++){

					reclbtn1[i].style.display='none';
				}

			let canord = document.getElementById('canord')

				canord.innerHTML= "Bill"

				canord.className="btn btn-sm rounded-pill btn-primary shadow fs-6"
				canord.setAttribute('onClick','')

				canord.addEventListener("click", dismobname=>{						//bill btn
					document.getElementsByClassName('enmobilemain')[0].style.display="flex"
					
					let remonclick =document.getElementsByClassName('remonclick')

					for(j=0; j<remonclick.length; j++){
						remonclick[j].setAttribute('onClick','alert1()')

					}
				})

			}	

	}


	function alert1(){
		alert("Please pay bill...")
	}
	
	
	function alert2(){
		alert("Please select menu...")
	}

	
	function disbill(){				// Ok button  display bill 

		let billinp1 = document.getElementById('billinp1').value		// User name input
		let billinp2 = document.getElementById('billinp2').value		// User MOb. input
		var regName = /^[a-zA-Z]+$/;									// validation for name
		var phoneno = /^\d{10}$/;										// validation for mob. No.
		
		if(billinp1 !="" && billinp2 !="" && (billinp2.match(phoneno)) && (billinp1.match(regName) )){
			document.getElementsByClassName('enmobilemain')[0].style.display="none"

			document.getElementsByClassName('billpagemain')[0].style.display="flex"

			document.getElementsByClassName('yurmain')[0].style.display="none"
			document.getElementsByClassName('porderbtn')[0].style.display="none"


			let billpage= document.getElementsByClassName('billpage')
			let order = document.getElementsByClassName('order')

					
			billpage[0].innerHTML=order[0].innerHTML

			// console.log(tblitname.childNodes)

			

			let uname = document.getElementById('uname')					// User name 
			let umob = document.getElementById('umob')						// User MOb.

			uname.innerHTML=billinp1
			umob.innerHTML=billinp2

			let date1 = document.getElementById('date1')
			let time1 = document.getElementById('time1')


			let newDate = new Date();

			let todaySDate = newDate.getDate();
		    let month = newDate.getMonth() + 1;
			let year = newDate.getFullYear();
					    
			let hours = newDate.getHours();
			let minutes = newDate.getMinutes();
			let seconds = newDate.getSeconds();

			date1.innerHTML=todaySDate+'/'+month+'/'+year;
			time1.innerHTML=hours+':'+minutes+':'+seconds;

		}
		else if( billinp1 =="" && billinp2 ==""){
			alert("Please enter your Name & Mobile no.")

		}
		else if( billinp1 ==""){
			alert("Please enter your name")

		}
		else if( !billinp1.match(regName)){
			alert("Please enter valid name")

		}
		else if(billinp2 == ""){
			alert("Please enter your Mobile no.")

		}
		else if( !billinp2.match(phoneno)){
			alert("Please enter valid mobile number")

		}


	}

	function cOrder(){				// cancel btn
		
		location.reload();

	}

	

	function paybill(){			// pay now button
		document.getElementsByClassName('payoptmain')[0].style.display="block"
		let billpagemain = document.getElementsByClassName('billpagemain')
			billpagemain[0].className="billpagemain justify-content-evenly align-items-end"

	}
	function pament(o) {		// o= upi, card, cash

		document.getElementsByClassName('payoptmain')[0].style.display="none"
		
		document.getElementById(o).style.display="block"

	}

	function clspayment(c){
		document.getElementById(c).style.display="none"

		document.getElementsByClassName('payoptmain')[0].style.display="block"

	}

		

// <!-- ---------/////////// ----------->
	
	// <!----------- Admin Page ---------------->

	
	
	function opadpage(a){			// open admin page
		console.log(a.innerHTML)
		a.innerHTML="<img src='images/account.png' width='20px' height='20px'> Admin";
		
		if(document.getElementsByClassName('adminPage')[0].style.display!="block"){
			document.getElementsByClassName('adpass')[0].style.display="block"

		}	
		
		let str1
		let str2

		opchngpss=()=>{
			let op=document.getElementsByClassName('chngpass')[0]
			
			if(op.style.display=="none"){
				op.style.display="block"
			}
			else{
				op.style.display="none"

			}
		}

		chngpass=()=>{
			let chnginp1= document.getElementById('chnginp1')
			let chnginp2= document.getElementById('chnginp2')

			 str1 =	chnginp1.value
			 str2 = chnginp2.value

			

		}

		let chnginp1= document.getElementById('chnginp1')
		let chnginp2= document.getElementById('chnginp2')

		addpass=()=>{		// login button

			let passinp1= document.getElementById('passinp1')
			let passinp2= document.getElementById('passinp2')

		
			if(passinp1.value==chnginp1.value && passinp2.value==chnginp2.value ){
				document.getElementsByClassName('adminPage')[0].style.display="block"
				document.getElementsByClassName('section_1')[0].style.display='none'
				document.getElementsByClassName('adpass')[0].style.display="none"
				
			}
			else{
				alert('wrong password')
			}

			passinp1.value=""
			passinp2.value=""

			
		}


		canl1=()=>{
			document.getElementsByClassName('adpass')[0].style.display="none"
			passinp1.value=""
			passinp2.value=""
		}

	}

	function htname(){				// change hotel name

		let inp1=document.getElementById('inp1').value

		let logoname=document.getElementById('logoname')		// hotel name


		logoname.innerText=inp1
		document.getElementById('hbillnm').innerHTML=inp1	// bill hotel name

		document.getElementById('gpayhtname').innerHTML=inp1	// gpay hotel name


	}

	function admenu(){					//change menu

		

		let vsdish1=  document.getElementsByClassName('vsdish1')		// h4 name
		let dishp1=  document.getElementsByClassName('dishp1')			// p price

		let dishbtn=  document.getElementsByClassName('dishbtn')		// button
		let vninp1=  document.getElementsByClassName('vninp1')			// name	input 
		let vpinp1=  document.getElementsByClassName('vpinp1')			// price input
		let mainimg=  document.getElementsByClassName('mainimg')		// input type file main img
		let newimg=  document.getElementsByClassName('newimg')			// input type file chanhe img

		
		
		for(f=0; f<newimg.length; f++){
		
			newimg[f].files.length>0 ? mainimg[f].src=`images/${newimg[f].files[0].name}`: null

		}
		
				
		for(i=0; i<vninp1.length; i++){
			// console.log(vninp1.length)

				vsdish1[i].innerText=vninp1[i].value
				dishp1[i].innerText=" ₹"+ vpinp1[i].value	// add <i class="fa fa-inr" aria-hidden="true"></i>
				dishbtn[i].setAttribute('onClick','addish1(this,'+"'"+vninp1[i].value+"'"+","+vpinp1[i].value+","+1 +')');

			
		}

		
		
	}

	function additem1(a,t){				//add menu todolist


		let vegmenu =  document.getElementsByClassName('vegmenu')	//div

		let	adninp1 = t.parentNode.childNodes[3]		//name input
		let adpinp1 = t.parentNode.childNodes[5]		//price input
		let adimg = t.parentNode.childNodes[1]			//choose img 

			console.log(adimg.files.length)

		let nonvegmenu =  document.getElementsByClassName('non-vegmenu')	//div


		let	adninp2 = t.parentNode.childNodes[3]		//name input
		let adpinp2 = t.parentNode.childNodes[5]		//price input		
		

				/////------on admin page----/////

			if(((adninp1.value!="" && adpinp1.value!="") || (adninp2.value!="" && adpinp2.value!="")) && (adimg.files.length>0) ){
				// alert('not blank')
			let addimgname = adimg.files[0].name

				let d1 =  document.createElement("div")
				d1.className="d-flex border-top mt-3 ms-5 newitem"

								
				let p3 =  document.createElement("p")		//img
					p3.innerHTML=`${addimgname}`
					p3.className='mb-0 mx-4'
					// p3.type="file"
					// p3.style="width:15%;"

				let p1 =  document.createElement("input")				//name
					p1.type="text"
					p1.disabled=true
					p1.className="vninp1 mx-1 border-0"


				let p2 =  document.createElement("input")				//price
					p2.type="number"
					p2.disabled=true 
					p2.className="vpinp1 me-1 border-0"				
					p2.style="width:6%;"

				

				/////------on user page----/////

				let vegrows =  document.getElementsByClassName('vegrows')[0]		//div
				let nonvegrows =  document.getElementsByClassName('nonvegrows')[0]		//div



				let ud1 = document.createElement('div')
					ud1.className="col-sm-12 col-md-6 col-lg-3 canceldiv"

				let ud2 = document.createElement('div')
					ud2.className="items1 rounded shadow bg-white"

				let ud3 = document.createElement('div')
					ud3.className="imgdiv"

				let uimg1 = document.createElement('img')
					uimg1.src=`images/${addimgname}`
					uimg1.className="rounded-top"
					uimg1.alt="Image not avaliable"


				let ud4 = document.createElement('div')
					ud4.className="p-2  rounded-bottom"

				let ud5 = document.createElement('div')
					ud5.className="d-flex justify-content-between  align-items-center py-2"

				let uh1 = document.createElement('h4')
					uh1.className="mb-0 vsdish1"	
					// uh1.innerHTML=adninp1.value


				let ud6 = document.createElement('div')
					ud6.className="d-flex align-items-center"

				let up1 = document.createElement('p')
					up1.className="mb-0 fs-5 dishp1"


				let ud7 = document.createElement('div')
					ud7.className="quantity py-2"

				let ul1 = document.createElement('label')
					ul1.className="me-1 "
					ul1.innerHTML="Qty-"

				let ui1 = document.createElement('input')
					ui1.type="number"
					ui1.value="1"
					ui1.className="qtinp"
					

					qty1=(t,n,p)=> {		
						
						t.parentNode.parentNode.childNodes[2].childNodes[0].setAttribute('onClick',"addish1(this,"+"'"+n+"'"+","+ p+","+t.value +")")

					}
										
				let ud8 = document.createElement('div')
					ud8.className="text-center"

				let ub1 = document.createElement('button')
					ub1.className="btn btn-sm rounded dishbtn"
					ub1.style.backgroundColor='#001d3d'
					ub1.style.color='white'
					ub1.innerHTML="Add"



				ud3.appendChild(uimg1)
				ud2.appendChild(ud3)

				ud5.appendChild(uh1)

				ud6.appendChild(up1)
				ud5.appendChild(ud6)
				ud4.appendChild(ud5)

				ud7.appendChild(ul1)
				ud7.appendChild(ui1)
				ud4.appendChild(ud7)

				ud8.appendChild(ub1)
				ud4.appendChild(ud8)
				ud2.appendChild(ud4)
				ud1.appendChild(ud2)


				let vegmenu_main =  document.getElementsByClassName('vegmenu_main')			//div
				let nonvegmenumain =  document.getElementsByClassName('non-vegmenu_main')	//div
				let dessert_main =  document.getElementsByClassName('dessert_main')			//div


				let vegrowmain =  document.getElementsByClassName('vegrowmain')[0]			//div
				let nonvegrowmain =  document.getElementsByClassName('nonvegrowmain')[0]	//div
				let dessertrow =  document.getElementsByClassName('dessertrow')[0]			//div
				
				console.log('a -'+a)
				if(a=='additem_vegs'){
					
					p1.value=adninp1.value
					p2.value= adpinp1.value
					
					vegmenu[0].appendChild(d1)

					// user page

					uh1.innerHTML=adninp1.value

					up1.innerHTML='<span class="fs-6 me-1"><i class="fa fa-inr" aria-hidden="true"></i></span>'+adpinp1.value

					ub1.setAttribute('onClick',"addish1(this,"+"'"+adninp1.value+"'"+","+adpinp1.value+","+1 +")")

					ui1.setAttribute('onChange','qty1(this'+','+"'"+adninp1.value+"'"+','+ adpinp1.value+')')

					vegrows.appendChild(ud1)


				}
				else if(a=='additem_non-veg') {

					nonvegmenu[0].appendChild(d1)

					p1.value=adninp2.value
					p2.value= adpinp2.value

					// user page

					uh1.innerHTML=adninp2.value

					up1.innerHTML='<span class="fs-6 me-1"><i class="fa fa-inr" aria-hidden="true"></i></span>'+adpinp2.value

					ub1.setAttribute('onClick',"addish1(this,"+"'"+adninp2.value+"'"+","+adpinp2.value+","+1 +")")

					ui1.setAttribute('onChange','qty1(this'+','+"'"+adninp2.value+"'"+','+ adpinp2.value+')')

					nonvegrows.appendChild(ud1)

				}
				else if(a=='additem_vegmain'){

					p1.value=adninp1.value
					p2.value= adpinp1.value
					
					vegmenu_main[0].appendChild(d1)

					// user page

					uh1.innerHTML=adninp1.value

					up1.innerHTML='<span class="fs-6 me-1"><i class="fa fa-inr" aria-hidden="true"></i></span>'+adpinp1.value

					ub1.setAttribute('onClick',"addish1(this,"+"'"+adninp1.value+"'"+","+adpinp1.value+","+1 +")")

					ui1.setAttribute('onChange','qty1(this'+','+"'"+adninp1.value+"'"+','+ adpinp1.value+')')

					vegrowmain.appendChild(ud1)
				}
				else if(a=='additem_non-vegmain'){
					p1.value=adninp1.value
					p2.value= adpinp1.value
					
					nonvegmenumain[0].appendChild(d1)

					// user page

					uh1.innerHTML=adninp1.value

					up1.innerHTML='<span class="fs-6 me-1"><i class="fa fa-inr" aria-hidden="true"></i></span>'+adpinp1.value

					ub1.setAttribute('onClick',"addish1(this,"+"'"+adninp1.value+"'"+","+adpinp1.value+","+1 +")")

					ui1.setAttribute('onChange','qty1(this'+','+"'"+adninp1.value+"'"+','+ adpinp1.value+')')

					nonvegrowmain.appendChild(ud1)

				}
				else if(a=='additem_dessert'){
					p1.value=adninp1.value
					p2.value= adpinp1.value
					
					dessert_main[0].appendChild(d1)

					// user page

					uh1.innerHTML=adninp1.value

					up1.innerHTML='<span class="fs-6 me-1"><i class="fa fa-inr" aria-hidden="true"></i></span>'+adpinp1.value

					ub1.setAttribute('onClick',"addish1(this,"+"'"+adninp1.value+"'"+","+adpinp1.value+","+1 +")")

					ui1.setAttribute('onChange','qty1(this'+','+"'"+adninp1.value+"'"+','+ adpinp1.value+')')

					dessertrow.appendChild(ud1)

				}
					d1.appendChild(p3)
					d1.appendChild(p1)
					d1.appendChild(p2)
					

				adninp1.value=""
				adpinp1.value=""
				
			}
			else if(adimg.files.length==0){
				alert(' choose image ')

			}
			else if(adninp1.value=="" && adpinp1.value=="" ){
				alert(' Enter name & Price')

			}
			else if(adninp1.value==""){
				alert(' Enter name ')

			}
			else{
				alert(' Enter price ')

			}

			

		}