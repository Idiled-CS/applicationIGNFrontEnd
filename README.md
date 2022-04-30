# IGN Code Foo Front End Application

# Hisui’s New Power Plant(There is a PDF File Sent through Google Form Too):
Hisui’s New Power Plant:
	
Understanding What We Need to Find:
Let's see what the variables we have at our disposable, we have Julilife City and Voltorb. One approach to this problem would be simply to determine the amount of electricity one singular Voltorb generates and the amount of electricity need to power a Julilife City. Afterward, we will use mathematics to figure out the total amount of Voltorb that we need to catch to power Julilife City.

Figuring Julilife City’s needed Electricity:
We’ve been given only one piece of information and that is that the city is Julilife City, if we were to assume the rest of the problem is free for all in regards to the information we use then a quick google search will show that Julilife City’s population is 124. With that population in mind, we can then search up the average amount of electricity a single person uses. Again a quick google search tells us the average amount of electricity a single person uses is 10,715kWh Annually. With these numbers, we can safely conclude that it takes 550,188kWh annually to power Julilife City or 62kWh per hour to power the city

Figuring Out Voltorb’s Electric Output:
This is a tricky one, in physics the first thing we learn is the conservation of energy, which means that matter cannot be created nor destroyed. With that in mind, we can’t really say that Voltorb “generates” electricity. Doing a quick read on Voltorb I can conclude that Voltorb is more akin to the battery. It stores electricity from the things it eats, then discharges them. Needless to say, we need an electricity generator, not a battery, so the boring answer would be that we need to keep on catching new Voltorbs or at least switch out the Voltrobs to continue powering Julilife City as the old Voltorb would need to refuel up. However, let's modify the question a little bit to fit this scenario. How about instead of asking how many Voltorbs we need to power the city, we needed to find how long a single Voltorb can power the city before we need to switch it out? Well, we need to figure out the average amount of power a Voltorb can contain.

Finding out Voltorb’s capacity:
There is one move that every pokemon watcher can associate Voltorb with, and that is self-destructing. Now we need to know how much power a self-destructing Voltorb can provide. A google search saws self-destruct has a power of 200. What does that 200 translate to exactly though? Since we’re dealing with a Voltorb’s self-destruct we can probably safely assume that one Voltorb’s self-destructive power is roughly equivalent to 200 kW.

Putting it all Together 
With 200 kW from a Voltorb and 62kWh per hour, we basically need to put in a new Voltorb battery for the town every ~3 and 1/3rd hours. Assuming that we don’t suck the Voltorb dry and leave it 2kW to live on. If we were to have multiple Voltorb powering the city and switching out to eat electricity we can potentially not need to catch Voltorbs anymore after we reach a certain threshold amount, however, since we don’t know where the electricity the Voltorb is eating is coming from (could be from the same city) this is another question for another day.


# Front-End

# Important Thing Noted
-Calling to the API directly was not possible, therefore you need to start a proxy server to bypass the Cors for the API calls (Instructions will be given)

# Libraries installed
<br/> used Axios
<br/> used React-Player

# Instructions After Cloning Repo
<br/>1. cd applicationIGNFrontEnd/ignweb
<br/>2. npm install
<br/>3. cd servers
<br/>4. node servers
# The step above will run the proxy server, the next few steps will run the actual site
<br/>1. Make sure you're in the applicationIGNFrontEnd/ignweb path
<br/>2. npm start



