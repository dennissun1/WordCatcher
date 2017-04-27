var VNNumSents = 20;//number of sentences

var vocab = [    //array of sentences, note that part1 ends with space and part2 starts with a space
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful", explanation:"The correct answer is 'graceful'. When describing Katie as a dancer you need an adjective, 'graceful'. 'Run' and 'annoy' are verbs."},
    {part1:"The new car is very ", part2:".", w1:"rickety", w2:"broken", w3:"shiny", correct:"shiny", explanation: "The correct answer is 'shiny'. Key word in this sentence is 'new'. 'Broken' and 'rickety' are words that are opposite of 'new'."},
    {part1:"The cake at the store was so ", part2:", I bought another one.", w1:"expensive", w2:"cost", w3:"cheap", correct:"cheap", explanation: "The correct answer is 'cheap'. We wouldn't buy another cake if it is 'expensive'. We need an adjective here and not a verb, 'cost'."},
    {part1:"When we see dark clouds, we ", part2:" it to rain.", w1:"see", w2:"run", w3:"expect", correct:"expect", explanation: "The correct answer is 'expect'. When we see dark clouds, it's not raining yet so can't 'see' it but you know it's going to rain soon."},
    {part1:"Firefighters ", part2:" to their trucks when they hear the alarm.", w1:"crawl", w2:"talk", w3:"rush", correct:"rush"},
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful"},
    {part1:"It is easy to ride a bicycle on the road that is ", part2:" or even.", w1:"rough", w2:"flat", w3:"hard", correct:"flat"},
    {part1:"The sharp tip of the pencil that peter is using is ", part2:".", w1:"pointed", w2:"broken", w3:"dull", correct:"pointed"},
    {part1:"Jerry's clothes were ", part2:" when it rained.", w1:"dry", w2:"damp", w3:"ripped", correct:"damp"},
    {part1:"Can you ", part2:" me the good news?", w1:"yell", w2:"tell", w3:"spell", correct:"tell"},
    {part1:"I've been ", part2:" why the sky is blue.", w1:"wishing", w2:"washing", w3:"wondering", correct:"wondering"},
    {part1:"I'm so tired, I have to catch up on ", part2:" this weekend.", w1:"exercise", w2:"sleep", w3:"chores", correct:"sleep"},
    {part1:"How much do these shoes cost? What is the ", part2:"?", w1:"price", w2:"material", w3:"length", correct:"price"},
    {part1:"These pants are too ", part2:" I need a larger size.", w1:"tight", w2:"baggy", w3:"wide", correct:"tight"},
    {part1:"The weather changed so ", part2:" it went from sunny to rainy.", w1:"suddenly", w2:"naturally", w3:"smoothly", correct:"suddenly"},
    {part1:"I felt ", part2:" after finishing my difficult homework.", w1:"accomplished", w2:"sad", w3:"drowsy", correct:"accomplished"},
    {part1:"The performers felt ", part2:" once they saw the huge audience.", w1:"quiet", w2:"calm", w3:"anxious", correct:"anxious"},
    {part1:"The boy smelled the sweet ", part2:" of cookies that his mom baked.", w1:"aroma", w2:"nose", w3:"sight", correct:"aroma"},
    {part1:"Clothes are made from different ", part2:", such as cotton, leather, wool.", w1:"materials", w2:"length", w3:"sizes", correct:"material"},
    {part1:"I like listening to different ", part2:" of music. My favorite are classical, pop, and jazz.", w1:"sounds", w2:"plays", w3:"genres", correct:"genres"}
    ];

var GNNumSents = 10;
var grammar = [
    {part1:"Tina ", part2:" her two pet dogs.", w1:"and", w2:"at", w3:"a", correct:"and"}, 
    {part1:"The red apple is ", part2:" on that tree.", w1:"growing", w2:"grew", w3:"grow", correct:"growing"}, 

    {part1:"", part2:" late for class today.", w1:"Your", w2:"You're", w3:"You", correct:"You're"},
    {part1:"", part2:" not your turn yet.", w1:"It's", w2:"Its", w3:"It", correct:"It's"},
    {part1:"The cat was licking ", part2:" tail.", w1:"it is", w2:"it", w3:"its", correct:"its"},
 
    {part1:"I was jealous that David ", part2:" three balloons.", w1:"has", w2:"have", w3:"had", correct:"had"},
    {part1:"She ", part2:" two toffees already.", w1:"had", w2:"has", w3:"have", correct:"had"},
    {part1:"I ", part2:" many colorful pencils for class today.", w1:"have", w2:"has", w3:"had", correct:"have"},

    {part1:"She ", part2:" his offer to drive her home.", w1:"accepted", w2:"excepted", w3:"exempted", correct:"accepted"},
    {part1:"There was a big storm with thunder and ", part2:".", w1:"lighting", w2:"lightening", w3:"lightning", correct:"lightning"}

    ];



