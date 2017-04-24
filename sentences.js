var VNNumSents = 32;//number of sentences

var vocabNorm = [    //array of sentences, note that part1 ends with space and part2 starts with a space
        //vocab easy?
    {part1:"Yesterday, the dog ", part2:" around in the park.", w1:"ran", w2:"barked", w3:"fluffy", correct:"ran"},
    {part1:"Tomorrow, I will ", part2:" all of my homework.", w1:"complicated", w2:"complete", w3:"compare", correct:"complete"},
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful"},
    {part1:"The children are ", part2:" in the playground.", w1:"eat", w2:"playing", w3:"sound", correct:"playing"},
    {part1:"The new car is very ", part2:".", w1:"rickety", w2:"broken", w3:"shiny", correct:"shiny"},
    {part1:"The cake at the store was so ", part2:", I bought another one.", w1:"expensive", w2:"cost", w3:"cheap", correct:"cheap"},
    {part1:"When we see dark clouds, we ", part2:" it to rain.", w1:"see", w2:"run", w3:"expect", correct:"expect"},
    {part1:"Firefighters ", part2:" to their trucks when they hear the alarm.", w1:"crawl", w2:"talk", w3:"rush", correct:"rush"},
    {part1:"The library has ", part2:" books to choose from.", w1:"many", w2:"up", w3:"ground", correct:"many"},
    {part1:"Our doctors encourage us to make ", part2:" choices, like brushing our teeth and eating vegetables.", w1:"smart", w2:"excuse", w3:"strength", correct:"smart"},
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful"},
    {part1:"It is easy to ride a bicycle on the road that is ", part2:" or even.", w1:"rough", w2:"flat", w3:"hard", correct:"flat"},
    {part1:"The sharp tip of the pencil that peter is using is ", part2:".", w1:"pointed", w2:"broken", w3:"dull", correct:"pointed"},
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful"},   
    {part1:"Jane wants a ", part2:" costume for the halloween party.", w1:"plain", w2:"ugly", w3:"scary", correct:"scary"},
    {part1:"Jerry's clothes were ", part2:" when it rained.", w1:"dry", w2:"damp", w3:"ripped", correct:"damp"},
    {part1:"Barnacle Bob was ", part2:" even though it was the middle of the night.", w1:"awake", w2:"shouting", w3:"snoring", correct:"awake"},
    {part1:"The poor woman said there is ", part2:" to eat today.", w1:"more", w2:"less", w3:"a lot", correct:"less"},
    {part1:"Everyone said Nancy's house was ", part2:" after her family painted it.", w1:"funny", w2:"fancy", w3:"busy", correct:"fancy"},
    {part1:"I ", part2:" a very interesting book at night.", w1:"read", w2:"threw", w3:"spoke", correct:"read"},
    {part1:"I heard John and Alex, ", part2:" of them, are going to the baseball game today.", w1:"all", w2:"both", w3:"he", correct:"both"},
    {part1:"I ", part2:" ten dollars in the couch.", w1:"found", w2:"like", w3:"bend", correct:"found"},
    {part1:"Can you ", part2:" me the good news?", w1:"yell", w2:"tell", w3:"spell", correct:"tell"},
    {part1:"It costs ", part2:" dollars to get a movie ticket.", w1:"five", w2:"free", w3:"little", correct:"five"},
    {part1:"Make sure to ", part2:" your name on the paper.", w1:"scrape", w2:"spill", w3:"write", correct:"write"},
    {part1:"I've been ", part2:" why the sky is blue.", w1:"wishing", w2:"washing", w3:"wondering", correct:"wondering"},
    {part1:"I had to ", part2:" a long time at the doctor's office.", w1:"wait", w2:"clean", w3:"entertain", correct:"wait"},
    {part1:"I'm so tired, I have to catch up on ", part2:" this weekend.", w1:"exercise", w2:"sleep", w3:"chores", correct:"sleep"},
    {part1:"How much do these shoes cost? What is the ", part2:"?", w1:"price", w2:"material", w3:"length", correct:"price"},
    {part1:"These pants are too ", part2:" I need a larger size.", w1:"tight", w2:"baggy", w3:"wide", correct:"tight"},
    //30
    {part1:"It's colder today than it was yesterday. You should wear something ", part2:" when you go outside.", w1:"thin", w2:"warm", w3:"light", correct:"warm"},
    {part1:"I like to watch Discovery Channel. It is my favorite ", part2:".", w1:"travelling", w2:"experience", w3:"TV channel", correct:"TV channel"}
    ];

var VHNumSents = 13;
var vocabHard = [
        //vocab hard?
    {part1:"The weather changed so ", part2:" it went from sunny to rainy.", w1:"suddenly", w2:"naturally", w3:"smoothly", correct:"suddenly"},
    {part1:"I felt ", part2:" after finishing my difficult homework.", w1:"accomplished", w2:"sad", w3:"drowsy", correct:"accomplished"},
    {part1:"The performers felt ", part2:" once they saw the huge audience.", w1:"quiet", w2:"calm", w3:"anxious", correct:"anxious"},
    {part1:"A frog will ", part2:" its legs when changing from a tadpole.", w1:"grow", w2:"buy", w3:"make", correct:"grow"},
    {part1:"The boy smelled the sweet ", part2:" of cookies that his mom baked.", w1:"aroma", w2:"nose", w3:"sight", correct:"aroma"},
    {part1:"The teacher was glad that her class was ", part2:" during recess since they are usually wild.", w1:"cooking", w2:"calm", w3:"escaping", correct:"calm"},
    {part1:"Jack wanted to ", part2:" with his friends about what to eat for lunch but they did not like the same food.", w1:"agree", w2:"force", w3:"make", correct:"agree"},
    {part1:"The kids thought it was more fun to ", part2:" the sand tower than to build it up.", w1:"destroy", w2:"explore", w3:"study", correct:"destroy"},
    {part1:"The highest point of a mountain is called the ", part2:".", w1:"top", w2:"reach", w3:"pinnacle", correct:"pinnacle"},
    {part1:"The archer's goal is to ", part2:" at the center.", w1:"aim", w2:"pin", w3:"kick", correct:"aim"},
    {part1:"Clothes are made from different ", part2:", such as cotton, leather, wool.", w1:"material", w2:"length", w3:"sizes", correct:"material"},
    {part1:"My sister likes to wear earrings, rings, and bracelets. She really likes ", part2:".", w1:"money", w2:"jewelry", w3:"buying", correct:"jewelry"},
    {part1:"I like listening to different ", part2:" of music. My favorite are classical, pop, and jazz.", w1:"sounds", w2:"plays", w3:"genres", correct:"genres"}
    ];

var GNNumSents = 3;
var grammarNorm = [
    {part1:"Tina ", part2:" her two pet dogs.", w1:"and", w2:"at", w3:"a", correct:"and"}, 
    {part1:"The red apple is ", part2:" on that tree.", w1:"growing", w2:"grew", w3:"grow", correct:"growing"}, 
    {part1:"", part2:" late for class today.", w1:"your", w2:"you're", w3:"you", correct:"you're"},

    ];

var GHNumSents = 3;
var grammarHard = [
    {part1:"I was jealous that David ", part2:" three balloons.", w1:"has", w2:"have", w3:"had", correct:"had"},
    {part1:"She ", part2:" two toffees already.", w1:"had", w2:"has", w3:"have", correct:"had"},
    {part1:"I ", part2:" many colorful pencils for class today.", w1:"have", w2:"has", w3:"had", correct:"have"},

    ];



