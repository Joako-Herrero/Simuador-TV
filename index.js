//CANALES QUE CONTIENEN EPISODIOS
let seriesRetro = ["https://ok.ru/videoembed/2036279675566", "https://ok.ru/videoembed/2036295994030", "https://ok.ru/videoembed/2036300319406", "https://ok.ru/videoembed/2036298287790", "https://ok.ru/videoembed/2036305037998", "https://ok.ru/videoembed/2036312443566", "https://ok.ru/videoembed/2036308511406", "https://ok.ru/videoembed/2038015068846", "https://ok.ru/videoembed/2038570551982", "https://ok.ru/videoembed/2038561966766", "https://ok.ru/videoembed/2036317555374", "https://ok.ru/videoembed/2038693825198", "https://ok.ru/videoembed/2038567537326", "https://ok.ru/videoembed/2038557706926", "https://ok.ru/videoembed/2038038334126", "https://ok.ru/videoembed/2038113176238", "https://ok.ru/videoembed/2036310674094", "https://ok.ru/videoembed/2038679800494", "https://ok.ru/videoembed/2038654569134", "https://ok.ru/videoembed/2038645525166", "https://ok.ru/videoembed/2038612036270", "https://ok.ru/videoembed/2038576581294", "https://ok.ru/videoembed/2038574221998", "https://ok.ru/videoembed/2038045149870", "https://ok.ru/videoembed/2038689368750", "https://ok.ru/videoembed/2038660795054", "https://ok.ru/videoembed/2038598339246", "https://ok.ru/videoembed/2038685174446",/*Los Angeles De Charlie*/ "https://ok.ru/videoembed/1879697852998", "https://ok.ru/videoembed/1879697721926", "https://ok.ru/videoembed/1879697787462", "https://ok.ru/videoembed/1879697918534", "https://ok.ru/videoembed/1880616143430", "https://ok.ru/videoembed/1879748905542", "https://ok.ru/videoembed/1879748643398", "https://ok.ru/videoembed/1879748840006", "https://ok.ru/videoembed/1879846881862", "https://ok.ru/videoembed/1879748774470", "https://ok.ru/videoembed/1880552442438", "https://ok.ru/videoembed/1879847144006", "https://ok.ru/videoembed/1879847012934", "https://ok.ru/videoembed/1879748708934", "https://ok.ru/videoembed/1880552639046", "https://ok.ru/videoembed/1880552704582", "https://ok.ru/videoembed/1880552376902", "https://ok.ru/videoembed/1880665360966", "https://ok.ru/videoembed/1880616077894", "https://ok.ru/videoembed/1880616012358", "https://ok.ru/videoembed/1880552770118", "https://ok.ru/videoembed/1880552573510", "https://ok.ru/videoembed/1880552507974", "https://ok.ru/videoembed/1879846947398", "https://ok.ru/videoembed/1691710786242", "https://ok.ru/videoembed/1691709672130", "https://ok.ru/videoembed/1880665229894", "https://ok.ru/videoembed/1691709934274", "https://ok.ru/videoembed/1691710196418", "https://ok.ru/videoembed/1880771660358", "https://ok.ru/videoembed/1880699767366", "https://ok.ru/videoembed/1880699570758", "https://ok.ru/videoembed/1880665492038", "https://ok.ru/videoembed/1880665557574", "https://ok.ru/videoembed/1880665426502", "https://ok.ru/videoembed/1880616208966", "https://ok.ru/videoembed/1691709803202", "https://ok.ru/videoembed/1691710720706", "https://ok.ru/videoembed/1691710065346", "https://ok.ru/videoembed/1880771791430", "https://ok.ru/videoembed/1880771988038", "https://ok.ru/videoembed/1880771725894", "https://ok.ru/videoembed/1880771856966", "https://ok.ru/videoembed/1880771529286", "https://ok.ru/videoembed/1880771463750", "https://ok.ru/videoembed/1880771398214", "https://ok.ru/videoembed/1880699963974", "https://ok.ru/videoembed/1880699898438", "https://ok.ru/videoembed/1880699832902", "https://ok.ru/videoembed/1880699701830", "https://ok.ru/videoembed/1880665295430", "https://ok.ru/videoembed/1691710130882", "https://ok.ru/videoembed/1691710393026", "https://ok.ru/videoembed/1691710261954", "https://ok.ru/videoembed/1691710524098", "https://ok.ru/videoembed/1691710655170", "https://ok.ru/videoembed/1691710917314", "https://ok.ru/videoembed/1691711048386", "https://ok.ru/videoembed/1691710851778", "https://ok.ru/videoembed/1691709606594", "https://ok.ru/videoembed/1691710589634", "https://ok.ru/videoembed/1691710458562", "https://ok.ru/videoembed/1691709737666", "https://ok.ru/videoembed/1691709868738", "https://ok.ru/videoembed/1691710327490", "https://ok.ru/videoembed/1880771594822", "https://ok.ru/videoembed/1880699636294", "https://ok.ru/videoembed/1691709999810", "https://ok.ru/videoembed/1691710982850",/*NANI*/ "https://ok.ru/videoembed/618783967976", "https://ok.ru/videoembed/618790587112", "https://ok.ru/videoembed/618796092136", "https://ok.ru/videoembed/618796092136", "https://ok.ru/videoembed/618804546280", "https://ok.ru/videoembed/620733926120", "https://ok.ru/videoembed/620768529128", "https://ok.ru/videoembed/620803394280", "https://ok.ru/videoembed/620812372712", "https://ok.ru/videoembed/620817746664", "https://ok.ru/videoembed/620821547752", "https://ok.ru/videoembed/621829098216", "https://ok.ru/videoembed/621859965672", "https://ok.ru/videoembed/621873203944", "https://ok.ru/videoembed/622014499560", "https://ok.ru/videoembed/622014827240", "https://ok.ru/videoembed/622052903656", "https://ok.ru/videoembed/622053165800", "https://ok.ru/videoembed/622105594600", "https://ok.ru/videoembed/622105463528", "https://ok.ru/videoembed/622193674984", "https://ok.ru/videoembed/622299515624", "https://ok.ru/videoembed/622356269800", "https://ok.ru/videoembed/624431598312", "https://ok.ru/videoembed/624436644584", "https://ok.ru/videoembed/624440052456", "https://ok.ru/videoembed/624443591400", "https://ok.ru/videoembed/624445885160", "https://ok.ru/videoembed/624449555176", "https://ok.ru/videoembed/624453094120", "https://ok.ru/videoembed/624466004712", "https://ok.ru/videoembed/625535093480", "https://ok.ru/videoembed/625594993384", "https://ok.ru/videoembed/625595910888", "https://ok.ru/videoembed/625598139112", "https://ok.ru/videoembed/625600563944", "https://ok.ru/videoembed/625605872360", "https://ok.ru/videoembed/625609411304", "https://ok.ru/videoembed/625611246312", "https://ok.ru/videoembed/625615702760", "https://ok.ru/videoembed/625615702760", "https://ok.ru/videoembed/625618782952", "https://ok.ru/videoembed/625618782952", "https://ok.ru/videoembed/625650240232", "https://ok.ru/videoembed/625663740648", "https://ok.ru/videoembed/625673898728", "https://ok.ru/videoembed/625685105384"];
let peliculasMiEpoca = ["https://ok.ru/videoembed/2605585402550", "https://ok.ru/videoembed/4307121212012", "https://ok.ru/videoembed/4381161491109", "https://ok.ru/videoembed/420543072907", "https://ok.ru/videoembed/2567588809447", "https://ok.ru/videoembed/1750208350836", "https://ok.ru/videoembed/354451196490", "https://ok.ru/videoembed/3559203867268", "https://ok.ru/videoembed/890120440434", "https://ok.ru/videoembed/2749484960471", "https://ok.ru/videoembed/2121453996660", "https://ok.ru/videoembed/1144299457240"];
let cartoonNetwork=[/*MUCHA LUCHA CAPITULOS RANDOMS*/ "https://ok.ru/videoembed/1547210263113", "https://ok.ru/videoembed/1547210394185", "https://ok.ru/videoembed/1547210328649", "https://ok.ru/videoembed/1547210525257", "https://ok.ru/videoembed/1547210459721", "https://ok.ru/videoembed/1547210656329", "https://ok.ru/videoembed/1547210590793", "https://ok.ru/videoembed/1547210787401", "https://ok.ru/videoembed/1547210721865", "https://ok.ru/videoembed/1547210918473", "https://ok.ru/videoembed/1547210852937", "https://ok.ru/videoembed/1547211049545", "https://ok.ru/videoembed/1547210984009", "https://ok.ru/videoembed/1547211180617", "https://ok.ru/videoembed/1547211115081", "https://ok.ru/videoembed/1547211311689", "https://ok.ru/videoembed/1547211246153", "https://ok.ru/videoembed/1547211442761", "https://ok.ru/videoembed/1547211377225", /*BARBIE*/ "https://ok.ru/videoembed/702590356157", "https://ok.ru/videoembed/2843519421011", "https://ok.ru/videoembed/255576836628", "https://ok.ru/videoembed/215331965512", "https://ok.ru/videoembed/3142417451549", /*ISLA DEL DRAMA TEMP. 1*/ "https://ok.ru/videoembed/2587697678921", "https://ok.ru/videoembed/2587697613385", "https://ok.ru/videoembed/2587697547849", "https://ok.ru/videoembed/2587697482313", "https://ok.ru/videoembed/2587697416777", "https://ok.ru/videoembed/2587697351241", "https://ok.ru/videoembed/2587697285705", "https://ok.ru/videoembed/2587697220169", "https://ok.ru/videoembed/2587697154633", "https://ok.ru/videoembed/2587697089097", "https://ok.ru/videoembed/2587697023561", "https://ok.ru/videoembed/2587696958025", "https://ok.ru/videoembed/2587696892489", "https://ok.ru/videoembed/2587696826953", "https://ok.ru/videoembed/2587696761417", "https://ok.ru/videoembed/2587696695881", "https://ok.ru/videoembed/2587696630345", "https://ok.ru/videoembed/2587696564809", "https://ok.ru/videoembed/2587696499273", "https://ok.ru/videoembed/2587696433737", "https://ok.ru/videoembed/2587696368201", "https://ok.ru/videoembed/2587696302665", "https://ok.ru/videoembed/2587696237129", "https://ok.ru/videoembed/2587696171593", "https://ok.ru/videoembed/2587696106057", "https://ok.ru/videoembed/2587696040521", "https://ok.ru/videoembed/2587695974985", "https://ok.ru/videoembed/2587695909449", /*SCOOBY DOO S.A*/ "https://ok.ru/videoembed/29340404345", "https://ok.ru/videoembed/29359278713", "https://ok.ru/videoembed/29396896377", "https://ok.ru/videoembed/29372320377", "https://ok.ru/videoembed/29396830841", "https://ok.ru/videoembed/29359213177", "https://ok.ru/videoembed/29406988921", "https://ok.ru/videoembed/29391325817", "https://ok.ru/videoembed/29385099897", "https://ok.ru/videoembed/29340338809", "https://ok.ru/videoembed/29406923385", "https://ok.ru/videoembed/29344991865", "https://ok.ru/videoembed/29340273273", "https://ok.ru/videoembed/29372254841", "https://ok.ru/videoembed/29344926329", "https://ok.ru/videoembed/29352987257", "https://ok.ru/videoembed/29359147641", "https://ok.ru/videoembed/29377825401", "https://ok.ru/videoembed/29391260281", "https://ok.ru/videoembed/29359082105", "https://ok.ru/videoembed/29344860793", "https://ok.ru/videoembed/29396765305", "https://ok.ru/videoembed/29344795257", "https://ok.ru/videoembed/29385034361", "https://ok.ru/videoembed/29365045881"];
let disneyChannel=[/*LILO Y STICH RANDOMS*/ "https://ok.ru/videoembed/1770705586761", "https://ok.ru/videoembed/1763981724233", "https://ok.ru/videoembed/1763981658697", "https://ok.ru/videoembed/1763981593161", "https://ok.ru/videoembed/1763981527625", "https://ok.ru/videoembed/1763856878153", "https://ok.ru/videoembed/1763856812617", "https://ok.ru/videoembed/1763856878153",];


//LISTA DE CANALES
let canales= [seriesRetro, peliculasMiEpoca, cartoonNetwork, disneyChannel];

//POSICION DEL CANAL ACTUAL PARA PODER MANIPULARLO Y SUBIR O BAJAR
let canalActual = canales[Math.floor(Math.random() * canales.length)];

//CONTADOR
let contador=-1;

/*Esta funcion elije un episodio random del canal actual(canales[posicion del contador]) lo guarda en una variable,me 
muestra en consola el link del episodio que esta pasando, para luego cambiar el src del iframe y hacer que se 
autoreproduzca.*/
function encender(){	
	let episodio= canalActual[Math.floor(Math.random() * canalActual.length)];
	console.log(episodio);
	document.getElementById("video").src = episodio + "?autoplay=1";
};

/*En esta funcion al contador se le suma uno y se comprueba que sea menor que el length de canales para poner
canal actual(canales[posicion del contador]) lo guarda en una variable, me 
muestra en consola el link del episodio que esta pasando, para 
luego cambiar el src del iframe y hacer que se autoreproduzca.
si el contador es mayor o igual a la cantidad de canales (length) el contador se resetea a cero para poder poner
canal actual(canales[posicion del contador]) en una variable, me muestra en consola el link del episodio
que esta pasando, para luego cambiar el src del iframe y hacer que se autoreproduzca y asi dar toda
una vuelta a canales*/
function SubirCanales(ch){ 
	contador = contador + ch;//suma 1 al contador
	if(contador < canales.length){
		canalActual = canales[+contador];
		let episodio = canalActual[Math.floor(Math.random() * canalActual.length)];
		console.log(episodio);
		console.log(canalActual);

		document.getElementById("video").src = episodio + "?autoplay=1";
	}else if(contador => canales.length){
		contador = 0;
		canalActual = canales[+contador];
		let episodio = canalActual[Math.floor(Math.random() * canalActual.length)];
		console.log(episodio);
		console.log(canalActual);
		
		document.getElementById("video").src = episodio + "?autoplay=1";
	};

};

/*En esta funcion al contador se le resta uno, se comprueba que sea menor que el length de canales y que sea mayor
a cero para no tener valores negativos, luego selecciona un episodio de canal actual(canales[posicion del contador]) 
lo guarda en una variable, me muestra en consola el link del episodio que esta pasando, para 
luego cambiar el src del iframe y hacer que se autoreproduzca.
si el contador es es menor a cero (un numero negativo) contador se resetea al ultimo canal para poder poner
canal actual(canales[posicion del contador]) en una variable, me muestra en consola el link del episodio
que esta pasando, para luego cambiar el src del iframe y hacer que se autoreproduzca y asi dar toda
una vuelta a canales*/
function BajarCanales(ch){
	contador = contador - ch;//resta 1 al contador
	if(contador < canales.length && contador >= 0){
		canalActual = canales[+contador];
		let episodio = canalActual[Math.floor(Math.random() * canalActual.length)];
		console.log(episodio);
		console.log(canalActual);

		document.getElementById("video").src = episodio + "?autoplay=1";
	}else if(contador < 0 ){
		contador = canales.length - 1;
		canalActual = canales[contador];
		let episodio = canalActual[Math.floor(Math.random() * canalActual.length)];
		console.log(episodio);
		console.log(canalActual);

		document.getElementById("video").src = episodio + "?autoplay=1";
	};
};

//BOTON ENCENDIDO
let btnON = document.getElementById("encender");
btnON.addEventListener("click",encender);

//BOTON SUBIR CANAL
let btnCHUP = document.getElementById("CHUP");
btnCHUP.addEventListener("click", ()=>{ 
	SubirCanales(1)
});

//BOTON BAJAR CANAL
let btnCHDown = document.getElementById("CHDown");
btnCHDown.addEventListener("click", ()=>{ 
	BajarCanales(1)
});

//BOTON SALTAR EPISODIO
let btnSkip = document.getElementById("saltear");
btnSkip.addEventListener("click",encender);