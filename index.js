<script type="text/javascript">
var p=0;
var n=0;
 function readSingleFile(evt) {
    var f = evt.target.files[0];

   var pos = {
"absolutely":true,"adorable":true,"accepted":true,"acclaimed":true,"accomplish":true,
"accomplishment":true,"achievement":true,"action":true,"megahit":true,"active":true,"admire":true,
"adventure":true,"affirmative":true,
"affluent":true,"agree":true,"agreeable":true,"amazing":true,
"angelic":true,"appealing":true,"approve":true,"aptitude":true,
"attractive":true,"awesome":true,"beaming":true,"beautiful":true,"believe":true,"beneficial":true,"bliss":true,
"bountiful":true,"bounty":true,"bravo":true,"brilliant":true,"celebrated":true,
"champ":true,"blockbuster":true,
"champion":true,"charming":true,"cheery":true,"choice":true,
"classic":true,"classical":true,
"clean":true,"commend":true,"composed":true,"congratulation":true,
"constant":true,"cool":true,"courageous":true,"creative":true,
"cute":true,"dazzling":true,"delight":true,"delightful":true,
"distinguished":true,"divine":true,"earnest":true,"easy":true,
"ecstatic":true,"effective":true,"effervescent":true,"efficient":true,
"effortless":true,"electrifying":true,"entertaining":true,"fabulous":true,
"fair":true,"familiar":true,"famous":true,"fantastic":true,
"favorable":true,"fetching":true,"fine":true,"fitting":true,
"flourishing":true,"feelings":true,"fresh":true,"friendly":true,
"fun":true,"funny":true,"elegant":true,"enchanting":true,
"encouraging":true,"endorsed":true,"energetic":true,
"energized":true,"engaging":true,"enthusiastic":true,
"essential":true,"esteemed":true,"ethical":true,"excellent":true,
"exciting":true,"exquisite":true,"generous":true,"genius":true,
"genuine":true,"glamorous":true,"glowing":true,
"good":true,"gorgeous":true,"handsome":true,
"happy":true,"harmonious":true,"healing":true,
"healthy":true,"hearty":true,"heavenly":true,
"honest":true,"honorable":true,
"honored":true,"hug":true,"graceful":true,
"great":true,"grin":true,"growing":true,"ideal":true,
"imaginative":true,"imagine":true,"impressive":true,
"independent":true,"innovate":true,"innovative":true,
"intellectual":true,"intelligent":true,
"inventive":true,"jovial":true,
"joy":true,"jubilant":true,"keen":true,
"kind":true,"knowing":true,"knowledgeable":true,"laugh":true,
"legendary":true,"learned":true,
"lively":true,"lovely":true,"lucid":true,
"lucky":true,"luminous":true,"marvelous":true,"masterful":true,
"meaningful":true,"merit":true,
"meritorious":true,"miraculous":true,"motivating":true,
"moving":true,"mature":true,"natural":true,"nice":true,
"nurturing":true,"nutritious":true,"okay":true,"open":true,
"optimistic":true,"paradise":true,"perfect":true,
"phenomenal":true,"pleasurable":true,"plentiful":true,
"pleasant":true,"poised":true,"polished":true,
"quality":true,"quick":true,"quiet":true,
"ready":true,"reassuring":true,
"refined":true,"refreshing":true,"rejoice":true,
"reliable":true,"remarkable":true,
"resounding":true,"respected":true,
"restored":true,"reward":true,"rewarding":true,
"right":true,"robust":true,
"popular":true,"positive":true,"powerful":true,
"prepared":true,"pretty":true,
"principled":true,"productive":true,
"progress":true,"prominent":true,"proud":true,
"safe":true,"satisfactory":true,
"secure":true,"seemly":true,"simple":true,
"skilled":true,"sad":true,"cry":true,
"creepy":true,"skillful":true,"smile":true,
"terrific":true,"thorough":true,"thrilling":true,"thriving":true,
"tops":true,"tranquil":true,"transformative":true,
"trusting":true,"truthful":true,"unwavering":true,
"up":true,"upbeat":true,
"upright":true,"upstanding":true,
"valued":true,"vibrant":true,"victorious":true,"victory":true,
"vigorous":true,"virtuous":true,
"vital":true,"vivacious":true,
"soulful":true,"sparkling":true,"special":true,"spirited":true,
"spiritual":true,"stirring":true,"stupendous":true,
"stunning":true,"success":true,
"wealthy":true,"welcome":true,"whole":true,
"wholesome":true,"willing":true,"wonderful":true,
"outstanding":true,"wondrous":true,
"worthy":true,"wow":true,"yummy":true,
"successful":true,"sunny":true,"superb":true,
"supporting":true,"surprising":true,
":-)":true,
":)":true,
"=)":true,
":D":true,
"XD":true
   };

var neg = {
"annoy":true,
"anxious":true,"ashamed":true,"apathy":true,
"appalling":true,"annoying":true,
"awful":true,"bad":true,"banal":true,
"barbed":true,"belligerent":true,"bemoan":true,"beneath":true,"boring":true,"broken":true,"callous":true,
"clumsy":true,"coarse":true,"cold":true,
"collapse":true,"confused":true,
"contradictory":true,"contrary":true,"corrosive":true,
"creepy":true,"dead":true,
"decaying":true,"damage":true,"damaging":true,
"dastardly":true,"deplorable":true,
"depressed":true,"deprived":true,"deformed":true,
"despicable":true,"detrimental":true,"dirty":true,
"disease":true,"disgusting":true,
"disheveled":true,"dishonest":true,"dishonorable":true,
"dismal":true,"distress":true,"dreadful":true,
"dreary":true,"enraged":true,"eroding":true,
"fail":true,"faulty":true,"feeble":true,
"filthy":true,"foul":true,"gawky":true,
"ghastly":true,"grimace":true,"gross":true,
"grotesque":true,"gruesome":true,
"guilty":true,"haggard":true,"hard":true,
"hard-hearted":true,"harmful":true,
"hideous":true,"homely":true,"horrendous":true,"horrible":true,
"hostile":true,"hurt":true,"hurtful":true,"icky":true,"ill":true,"worst":true,
"immature":true,"imperfect":true,"impossible":true,"inane":true,
"inelegant":true,"infernal":true,"injure":true,"injurious":true,
"insidious":true,"insipid":true,"junk":true,"junky":true,"lose":true,"lousy":true,
"lumpy":true,"malicious":true,"mean":true,"menacing":true,
"messy":true,"misshapen":true,"missing":true,"misunderstood":true,
"moan":true,"moldy":true,"monstrous":true,
"naive":true,"nasty":true,
"negate":true,
"negative":true,
"nobody":true,
"nondescript":true,
"nonsense":true,
"noxious":true,
"objectionable":true,
"odious":true,
"offensive":true,
"old":true,
"oppressive":true,
"petty":true,
"plain":true,
"poisonous":true,
"poor":true,"pathetic":true,
"prejudice":true,
"questionable":true,
"quirky":true,"quit":true,"reject":true,
"renege":true,"repellant":true,"reptilian":true,
"repulsive":true,"repugnant":true,"revenge":true,
"revolting":true,"scare":true,"scary":true,"crappiest":true,
"severe":true,"shoddy":true,"silly":true,
"shocking":true,"sick":true,"sickening":true,
"sinister":true,"slimy":true,"terrible":true,
"smelly":true,"sobbing":true,"sorry":true,
"spiteful":true,"shame":true,"stinky":true,
"stressful":true,"rocky":true,"rotten":true,
"rude":true,"ugly":true,"undermine":true,"unfavorable":true,
"unhappy":true,"unjust":true,"unpleasant":true,
"unsatisfactory":true,"unsightly":true,"untoward":true,
"unwanted":true,"unwelcome":true,"unwholesome":true,"unwieldy":true,
"unwise":true,"upset":true,"vice":true,
"vicious":true,"vile":true,"villainous":true,
"vindictive":true,"wary":true,"weary":true,
"woeful":true,"worthless":true,"yuck":true,
":-(":true,
":(":true,
"=(":true,
";(":true,
":|":true

};

   var intense = {"so":true, "very":true, "highly":true, "extremely":true, "too":true};
   var negation = {"not":true ,  "neither":true , "none":true};
    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
          var contents = e.target.result;
          var ct = r.result.toLowerCase();
          var words = ct.split(' ');

     for(i=0;i<words.length;i++)
       {

		  if(words[i] in negation)
		  {


		  var c=0;
		  var d=0;
		  var current_pos=i;
				 do
				  {  c++;
				     d++;
					 current_pos++;
					if(words[current_pos] in pos && c<4 )
					{n++; break }
					else if(words[current_pos] in neg && d<4 )
					{p++;break}
					}while(c<4||d<4 );



		  }//negation over
		  else if(words[i] in intense)
		  {
		  if(words[i+1] in pos)
		  {p=p+2;}
		  if(words[i+1] in neg)
		  {n=n+2;}
		  }//intense
		  else if(words[i] in pos)
		  {p++;}
		  else if(words[i] in neg)
		  {n++;}
		  }//for over
		  displayContents(ct);
		  alert("positive%="+(p/(p+n))*100);
		  alert("negative%="+(n/(p+n))*100);
		  displayresult(ct,((p/(p+n))*100),((n/(p+n))*100));
		 // displayPie(p/(p+n))*100),((n/(p+n))*100));
      }
      r.readAsText(f);

    } else {
      alert("Failed to load file");
    }

  }
  function displayContents(txt) {
        var el = document.getElementById('main');
        el.innerHTML = txt; //display output in DOM
    }


	 function displayresult(txt,c,b) {

		if(c>50)
		{
		var el = document.getElementById('res');
        el.innerHTML ="Comments :"+ txt + "<br>" +" CATEGORY :POSITIVE SENTIMENT"; //display output in DOM
		el.style.color = 'green';//positive
		}
		else if(c<50)
		{var el = document.getElementById('res');
        el.innerHTML = txt+" CATEGORY:NEGATIVE SENTIMENT"; //display output in DOM
		el.style.color = 'red';//negative
		}
		else if(c===0||c===50)
		{var el = document.getElementById('res');
        el.innerHTML = txt+" CATEGORY:NEUTRAL SENTIMENT"; //display output in DOM
		el.style.color = 'grey';//neutral
		}
		displayPie(c,b);
    }
	function displayPie(c,b) {
	var data = [
     {x: "Negative", value: b,
   normal:  {
      fill: "#FF0000",
      hatchFill: "percent50"
   },
   hovered: {
      fill: "#CD5C5C",
      hatchFill: "percent50",
      outline: {
        enabled: true,
        width: 6,
        fill: "#FF0000",
        stroke: null
      }
   },
   selected: {
      outline: {
        enabled: true,
        width: 6,
        fill: "#CD5C5C",
        stroke: null
      }
   }
  },
      {x: "Positive", value: c,
   normal:  {
      fill: "#00FF00",
      hatchFill: "percent50"
   },
   hovered: {
      fill: "#008000",
      hatchFill: "percent50",
      outline: {
        enabled: true,
        width: 6,
        fill: "#00FF00",
        stroke: null
      }
   },
   selected: {
      outline: {
        enabled: true,
        width: 6,
        fill: "#008000",
        stroke: null
      }
   }
  }

  ];

  // create the chart

  var chart = anychart.pie();


  // set the chart title
  chart.title("Positive and Negative Sentiment percentage In Pie Chart");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');

  chart.draw();

	}

function refreshPage(){
    window.location.reload();
}

document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
</script>
 <script src="https://cdn.anychart.com/js/8.0.1/anychart-core.min.js"></script>
 <script src="https://cdn.anychart.com/js/8.0.1/anychart-pie.min.js"></script>