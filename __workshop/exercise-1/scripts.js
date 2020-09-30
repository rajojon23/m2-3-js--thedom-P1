// Add your code here!
window.onload = (event) => {
   console.log('page is fully loaded');
   
   let head =   document.querySelector('head');
   let link_style = document.createElement("link"); 
   link_style.href = "styles.css";
   link_style.rel = "stylesheet";

   head.appendChild(link_style);


   let main = document.querySelector('main');
   let new_h1 = document.createElement("h1"); 
   let h1_content = document.createTextNode( 'The best How I Met Your Mother episode (according to fans)'); 
   
   let p1 = document.createElement("p"); 
   let p1_content =  document.createTextNode( 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…'); 
 	
   let h2 = document.createElement("h2"); 
   let h2_content =  document.createTextNode( 'The Slap Bet (Season 2, Episode 9)'); 

   let p2 = document.createElement("p"); 
   let p2_content = document.createTextNode('IMDB Rating: 9.5');
 	
   let article_img = document.createElement("img"); 
	article_img.src = "images/robin-sparkles.jpg";
	article_img.alt = "Robin Sparkles";

   let p3 = document.createElement("p"); 
   let p3_content = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.");
 	
   let p4 = document.createElement("p"); 
   let p4_content = document.createTextNode("In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).");

   let source_a = document.createElement("a"); 
   let source_a_content = document.createTextNode("Source");
   source_a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
 	 	
 	new_h1.appendChild(h1_content); 
 	p1.appendChild(p1_content); 
 	h2.appendChild(h2_content);
 	p2.appendChild(p2_content); 
 	p3.appendChild(p3_content); 
 	p4.appendChild(p4_content); 
 	source_a.appendChild(source_a_content); 

   main.appendChild(new_h1);
   main.appendChild(p1);
   main.appendChild(h2);
   // main.appendChild(h2_content);
   main.appendChild(p2);
   main.appendChild(article_img);
   main.appendChild(p3);
   main.appendChild(p4);
   main.appendChild(source_a);





};