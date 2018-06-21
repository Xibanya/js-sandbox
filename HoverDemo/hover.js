/* Honestly, you can look up a ton of tutorials on how to do JavaScript but those
are tedious and you know you're not gonna do that anyway so fuck it, just crib
this shit.*/

/**************************** SHIT YOU SHOULD KNOW ************************
 * PRODUCTION
 *          Hey I keep talking about "production," what is that, what the hell even is that
 *          anyway?  Production is jargon for "the thing everybody sees."  NEVER DEVELOP IN PRODUCTION.
 *
 *          NEVER DEVELOP IN PRODUCTION
 *
 *          NEVER DEVELOP IN PRODUCTION
 *
 *          HOLY SHIT NEVER DEVELOP IN PRODUCTION
 *
 *          So on the dashboard of slamfighter.com, you know how you can go to Appearance --> Theme Editor?
 *          Well you can dick around with some of the scripts there without using FTP, so I thought I was
 *          hot shit and could make some tweaks from work.  Well I submitted changes to functions.php and I put
 *          one extra semicolon where there wasn't supposed to be one.  The entire site went down, including the
 *          dashboard, meaning I couldn't go back and take out the semicolon in the way that I stuck it in the code
 *          in the first place.
 *
 * http://i.imgur.com/rwpzVxj.png <----- LOOK AT THAT SHIT
 *
 *          So I had to be like "well, uh fuck," until I could get home to FTP in and fix the script that way.
 *
 * ******************************
 *  * Quiz time!
 *
 *      1. Should you develop in production?
 *          a. No
 *          b. I'm a fucking idiot.
 *
 * (correct answer: NEVER DEVELOP IN PRODUCTION)
 * ******************************
 *
 * VARIABLES
 *          what is a variable?  a miserible little pile of memory allocation.
 *          If you don't know what a variable is, close your browser window, turn off your
 *          computer, and reconsider your life choices.
 *
 * Some variables we'll be using in this script:
 *
 * STRING
 *          a string is a variable that's text, like words and shit. In
 *          JavaScript the value of a string has to be enclosed in single
 *          quotes (apostrophes.  You know, these things '''''''''''''')
 *
 * INTEGER
 *          a whole number.  When setting value, ''s aren't needed
 *
 * BOOL
 *          it's either true or false.
 *
 *********** OK yeah that's probably it for programming prerequisites. *********/

/*********************************************************************************/
/*                            HOLY SHIT FUNCTIONS!!!                             */
/*********************************************************************************
In JavaScript when you put "function" at the start of a line,
you're creating a new command. You're saying "hey browser, if someone puts
the name of this function, do this thing!"                                       */

/************************ HEY PAY ATTENTION **************************************
It's IMPORTANT to note that when you're making a new function, you're NOT
telling the browser to do anything.  You're telling the browser that IF the name
of the function comes up later, THEN do the thing
***************** OK YOU CAN STOP PAYING ATTENTION NOW **************************/

/*
The first thing I did here was create a new object
You can think of an object as being kinda like your hero in an RPG
You can assign whatever stats you want to whatever object you make
*/

function Character(id, fullName, stats, bio, voice, link) {
    this.id = id;
    this.fullName = fullName;
    this.stats = stats;
    this.bio = bio;
    this.voice = voice;
    this.link = link;
}
/* So if I told the browser when I write "muffins = Character(blah1, blah2, blah2...)" */
/* It should make a new object called "muffins" with parameters id = blah1,
fullname = blah2, stats = blah3, and so on */

var characters = [];
/* I just made an array */
/* An array is like a numbered list of stuff.  For historical reasons, they always start
counting at zero instead of one, like how Europeans and pretentious hotels number floors in buildings. */

characters[0] = new Character(
/* So I said in slot 0 of the array called "characters," put a new character object with the following parameters */
    'fumi',
    'Tatsufumi Kajikawa',

    '<strong>Age:</strong> 16<br>' +
    '<strong>Blood Type:</strong> B<br>' +
    '<strong>Likes:</strong> Smoking in school uniform<br>' +
    '<strong>Dislikes:</strong> Actually going to school',

    'Six months after putting a permanent end to The Prince of Dissness&apos;s Dozens of Evil, ' +
            /* Normally spaces and lines breaks don't mean anything in JavaScript, but they do if you're
            in the middle of defining a string for whatever reason.  I wanted to break these lines so
            that I wouldn't have to scroll left/right to read them, so every time I broke them I had to
            put the closing single quote then the + to tell the browser to join the strings. */

    'Tatsufumi learned of an even greater threat: The Philosopher&apos;s Burn. Its power too great ' +
                                                                /* I don't want to put an actual apostrophe
                                                                because then the browser would think I was done
                                                                entering the string. When the browser compiles the
                                                                code in the browser window, it will correctly
                                                                render &apos; as an apostrophe. */

    'for any mere mortal, Tatsufumi seeks to destroy it so that mankind will no longer live in ' +
    'the shadow of its shade.',

    'Christopher Lane Davis',
    'http://slamfighter.com/team-dogpit/cldavis/'
    );

characters[1] = new Character(
    'bunny',
    'Bunny Williams',

    '<strong>Age:</strong> 15<br>' +
    '<strong>Likes:</strong> Bunnies<br>' +
    '<strong>Dislikes:</strong> S-stupid Fumi-kun, it&apos;s not like I like you or anything...',

    'Bunny&apos;s older brother Wally was renowned as a master trashtalker whose intense and complex ' +
    'flows were universally recognized as dope. Bunny&apos;s life changed forever when B. Stag ' +
    'attacked their village. Wally took on B. Stag alone but was rendered catatonic by a single ' +
    'brutal read. Bunny plans to use the Philosopher&apos;s Burn on B. Stag to avenge her brother&apos;s ' +
    'street cred.',

    'Melanie Ehrlich',
    'http://slamfighter.com/team-dogpit/mehrlich/'
    );

characters[2] = new Character(
    'dietrich', /* sorry I fucking hate the "offical" spelling and I indulged Johnny for the project
                but I can barely force myself to type it anymore so if it's something on the back end
                like this then fuck ya Imma spell it Dietrich like God intended.  PS. I am God.*/
    'D-Trick Love',

    '<strong>Age:</strong> 19 (32 in anime years)<br>' +
    '<strong>Marital Status:</strong> Eligible Bachelor, Million dollar boat<br>' +
    '<strong>Eyebrows:</strong> On Fleek',

    'When Tatsufumi declined to take D-Trick&apos;s life after besting him in a no-holds-barred slam ' +
    'fight to the death, B. Stag threw his right-hand man off a cliff; his body was never recovered. ' +
    'Six months after his apparent demise, D-Trick contacted Tatsufumi to warn him of B. Stag&apos;s ' +
    'plan to obtain the Philosopher&apos;s Burn. He is aiding Tatsufumi in his quest to destroy it to ' +
    'atone for the countless innocents who got told as a result of his actions.',

    'Michael A. Zekas',
    'http://slamfighter.com/team-dogpit/mzekas/'
    );

characters[3] = new Character(
    'serghei',
    'Serghei Ionescu',

    '<strong>Height:</strong> 218cm<br>' +
    '<strong>Favorite Color:</strong> Red<br>' +
    '<strong>Likes:</strong> Working together<br>' +
    '<strong>Dislikes:</strong> Denatured alcohol',

    'A five-time winner of The People&apos;s Choice Awards (of Bucharest) and strongest man east of the Caucasus, ' +
    'Serghei is currently on retainer as B. Stag&apos;s hired muscle.  He aspires the one day bring the Philosopher&apos;s ' +
    'Burn to the common man, although he admits that due to Politburo rationing policy there may be some queuing involved.',

    'Michael A. Zekas',
    'http://slamfighter.com/team-dogpit/mzekas/'
    );

characters[4] = new Character(
    'fulana',
    'Do&ntilde;a Fulana L&oacute;pez Orozco Fern&aacute;ndez de Arroyo y Arranz',

    '<strong>Blood Type:</strong> &Ntilde;<br>' +
    '<strong>Likes:</strong> Having a relaxing cup of caf&eacute; con leche in Plaza Mayor<br>' +
    '<strong>Dislikes:</strong> Cost of billete sencillo',

    'B. Stag&apos;s favorite Pro-Domme, Do&ntilde;a Fulana is widely considered the shadiest bitch in The ' +
    'Autonomous Community of Madrid. Lately, however, she has had to deal sicker and sicker burns to have ' +
    'any kind of sensation at all.  She desires the Philosopher&apos;s Burn so that she can plunge the entire ' +
    'world into a hellscape of eternal smacktalk.',

    'Melanie Ehrlich',
    'http://slamfighter.com/team-dogpit/mehrlich/'
    );

characters[5] = new Character(
    'bstag',
    'Buck Stag',

    '<strong>Height:</strong> 183cm<br>' +
    '<strong>Weight:</strong> A lot<br>' +
    '<strong>Likes:</strong> Rasslin&apos;<br>' +
    '<strong>Dislikes:</strong> Tofurkey',

    'B. Stag is a wealthy Dallas oilman who lives by the words of Milton Friedman and the letters FYGM.  ' +
    'He plans to use the Philosopher&apos;s Burn to take over the world.  Stretch goals include sticking it ' +
    'to the Mexicans and anyone with a net worth of less than $10 million.',

    'Johnny Garza',
    'http://slamfighter.com/team-dogpit/jgarza/'
    );

/* OK, groovy!  So we have all the character bios stuck in the javascript,
but how do we make it so that clicking the picture makes their bio text show up? */

/* Well the obvious solution is to write a set of six functions, one per portrait
and say "if someone clicks Fumi's portrait, fire the "show Fumi's bio" function.
But if you do that, you'll be repeating a lot of code, and the longer the script,
the longer it takes the page to load.  Not to mention, what if we want to add new
characters later on?  We need to come up with a single function that could show
anybody's bio regardless of how many character bios there actually are. */

/* So let's tell the browser "whatever character is clicked, put their bio under the portraits" */

/* First let's make an object that represents the most recently selected character */
current = new Character();
/* any time a new Character object is created, it has the parameters id, fullname,
shortname, etc, but in this case I made a new character object without defining those things
What that means is that for the object called "current," those parameters are null (for the time being) */

/* Now I'll make a new command that tells the browser to put the current character's info under the portraits */
function SetBio() {
    document.querySelector('#bioDiv').innerHTML =
    /* Search the HTML for an element with the id "bioDiv."  Change the HTML inside of it to: */
    '<h3>' + current.fullName +
    '</h3><p>' + current.stats +
    '</p><p>' + current.bio +
    '</p><p>Voice of <a href="' + current.link +
    '" target="new">' + current.voice + '</a></p>';
}

/* Well that's great and all, but "current" doesn't have any data! */
/* So let's fix that! */

function Bio(n) {
            current = characters[n];
            SetBio();
}

/* So basically I'm saying to run this command correctly, I need an integer as input.
The command will go to the characters array and grab whatever is assigned to slot number (integer)
then copy everything from that over to "current."  Then, once that's done, run the SetBio() function.
Reminder: the parenthesis without anything in them mean that SetBio() doesn't require any input.*/

/* OK Groovy, this should work in theory, but before we get any farther, it's a good idea to
periodically check to make sure everything is working OK before you sink a ton of time into something
that's busted on a fundamental level, so before we hook up all the portraits and stuff, let's add a
button to the HTML that will call the function just we we know it's working.*/

/* And just to keep things simple, let's make it so that the debug function doesn't require any input.
So which profile should we use for debugging?  Well once this is hooked up we wouldn't want to have a
profile we want the user to be able to access pop up and make us think the whole thing is working fine
when actually it was only the debug event that was triggered, so the debug message should be an obvious one.*/

characters[6] = new Character(
  'debug',
  'Ioana Ionescu',

  '<strong>Age:</strong> almost 26<br><strong>Favorite Color:</strong> red<br><strong>Likes:</strong> terrible puns<br><strong>Dislikes:</strong> taking things seriously',
  'I like cats. I like every kind of cat. I just want to hug them all but I can&apos;t, can&apos;t hug every cat.',
  'Manuela Malasa&ntilde;a',
  'http://manuelamalasanya.wordpress.com'
  );

/* So now in slot 6 of the array (the 7th slot!) is this goofy debug profile.*/

function Debug() {
    Bio(6);
}
/* Literally all this function does is call bio(integer) with 6 as the input.  That means that
when this function is called, it shouldn't be possible for any profile except characters[6] to appear. */

/* So now we want to go to the HTML file and stick something like this anywhere:
<button onclick="Debug()">Hi I'm A Button</button>
*/

/* OK, that works!  Sweet!  */

/* So the next step is basically to turn each portrait into a button that triggers the Bio function
for the character it represents.  Go take a peek at the HTML file, I think it's pretty self-explanatory.*/

/* All right, yaaaaay it works!  Woo!  But wouldn't it be cool if when you moused over the characters
you got some visual feedback too, like when the character is highlighted in the game?  Of course it would be. */

/* There are a lot of ways to achieve this effect, but here's what I did.
I defined two different CSS classes for the elements that have the portraits, one with a red border that
looks like the frame in the actual game, and the other that has an invisible frame.  Why an invisible frame?
So that the portraits don't "jump around" when you mouse over them, as they would if you just went from frame
to no frame.
So when you mouse over a portrait element, we want the element's class to change to the one with the visible border
and then when your mouse cursor leaves the element, we want to change the class back to the one with the invisible
border.
*/

function change(x) {
    x.className = "border";
}

function back(x) {
    x.className = "hiddenborder";
}

/* Well, that was easy!
(For this to really make sense you have to look at the HTML file too, unlike the character
profile stuff, most of the heavy lifting is done there.) */


/* OK, great work everyone, that looks pretty cool! */

/* Man but..... don't you think...... it's.............. missing something? */
/* I mean if we wanted this to be a reasonable facimile of the character select screen, don't you think
it should have..... you know..... Serghei's alternate costume? */

/* I mean, of course it should! */

/* So here's how we're gonna do that! First, let's add the profile as if this were a new character. */

/* It's not, strictly speaking, necessary to do this since it's only the biography that's changing, but doing
it this way makes it easy to change the other stuff too if going forward I end up wanting the other parameters
to show something different as well. */

  characters[7] = new Character(
    'mihai',
    'Serghei Ionescu',

    '<strong>Height:</strong> 218cm<br>' +
    '<strong>Favorite Color:</strong> Red<br>' +
    '<strong>Likes:</strong> Working together<br>' +
    '<strong>Dislikes:</strong> Denatured alcohol',

    'Following the 1959 mission that made him the first human to ever journey into outer space, Serghei Ionescu, ' +
    'strongest man east of the Caucasus, was selected from an elite pool of candidates to become the Soviet Union&apos;s ' +
    'first chrononaut. On the time machine&apos;s maiden voyage, Serghei successfully travelled over fifty years ' +
    'into the future! Unfortunately due to a bureaucratic oversight, the time machine was never outfitted for ' +
    'travel back in time. Trapped in a confusing new world with no way home, nihilism set in and the former ' +
    'five-time winner of the People&apos;s Choice Awards (of Bucharest) now earns a living as the hired muscle ' +
    'of noted capitalist B. Stag.',

    'Michael A. Zekas',
    'http://slamfighter.com/team-dogpit/mzekas/'
    )

/* We want to set this up so that it's just like the character select screen, so if the costume is swapped
and the user looks at some other character's bio, we want that to be persistent. We also want to make it so that the
user can switch back and forth whenever they like. */

var sergheiAlt = false; /* Basically -- has the alt costume been activated? y/n */

var placeholder = new Character(); /* What is this for?  I'll explain below */

/* We're going to add an "eventlistener" to the ENTIRE page.  That means when the page loads, it's going to
be constantly monitoring for what we tell it to look out for.  The event we're looking for is a "keyup" event,
the moment the user releases a key on the keyboard that had been pressed down.  (I think that's more funny
than putting it on the "keydown" event, or the moment the key is pressed down.)
You'll notice that the event listener is set up slightly differently than the functions we set up before.
This function takes input (it's standard practice to call event input "e" but I could have called it anything.)
The input is whatever key causes the "keyup" event to be triggered.
That means that when the page is running, typing literally any key will trigger this function.
*/

document.addEventListener("keyup", function(e){
  if (e.keyCode == 88) /* keyCode 88 is "x," so if the released key was x,
                        do the stuff below, otherwise skip to the end of
                        this set of curly brackets */
  {
    if (current.id == characters[3].id && sergheiAlt === false)
                    /* if the ID of the most recently selected character is 'serghei'
                    and the alt costume is not currently active, then do the stuff
                    in the next set of curly brackets.  Otherwise skip all of the stuff
                    in the next set of curly brackets. */
    {
      document.querySelector('#serghei').style.backgroundImage = "url(http://i.imgur.com/CVJaZWw.png)";
                /* Find the element in the HTML with the ID 'serghei' and change its background image to this */
                /* All right since we don't want to change the ID of HTML elements since that could cause crashes
                in older browsers, we're going to swap the parameter values of item 3 and item 7 in the array.
                For that we'll need a throwaway placeholder. */

      placeholder = characters[3];
                /* store Serghei's vanilla bio in the placeholder */
      characters[3] = characters[7];
                /* overwrite the vanilla bio with the alt bio */
      characters[7] = placeholder;
                /* overwrite the alt bio with the vanilla bio! */
      sergheiAlt = true;
                /* Has the alt bio been activated?  Y*/
      Bio(3);
                /* Now show the alt bio. */
    }

    else if (current.id == characters[3].id && sergheiAlt === true)
                    /* ONLY if the above condition wasn't true, check and see if the ID of the most recently
                    selected character is 'serghei' AND if the alt costume is currently active.  If so,
                    do the stuff in the next set of curly brackets. */
    {
      document.querySelector('#serghei').style.backgroundImage = "url(http://i.imgur.com/tMFceli.gif)";
      placeholder = characters[3];
      characters[3] = characters[7];
      characters[7] = placeholder;
      sergheiAlt = false;
      Bio(3);
    }

    /* And if none of those conditions are true, don't do anything! */
    /* (Like if the user presses "x" when Fumi is selected or something.)*/
  }
});

/* Tadaa, hope that helped, give a shout if anything didn't make sense! */