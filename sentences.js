var VNNumSents = 20;//number of sentences

var vocab = [    //array of sentences, note that part1 ends with space and part2 starts with a space
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful", explanation:"The correct answer is 'graceful'. We can't descibe Katie as a dancer by using the words 'run' or 'annoy'."},
    {part1:"The new car is very ", part2:".", w1:"rickety", w2:"broken", w3:"shiny", correct:"shiny", explanation: "The correct answer is 'shiny'. Key word in this sentence is 'new'. 'Broken' and 'rickety' are words that are opposite of 'new'."},
    {part1:"The cake at the store was so ", part2:", I bought another one.", w1:"expensive", w2:"cost", w3:"cheap", correct:"cheap", explanation: "The correct answer is 'cheap'. We wouldn't buy another cake if it is 'expensive'. We need an adjective here and not a verb, 'cost'."},
    {part1:"When we see dark clouds, we ", part2:" it to rain.", w1:"see", w2:"run", w3:"expect", correct:"expect", explanation: "The correct answer is 'expect'. When we see dark clouds, it's not raining yet so can't 'see' it but you know it's going to rain soon."},
    {part1:"Firefighters ", part2:" to their trucks when they hear the alarm.", w1:"crawl", w2:"talk", w3:"rush", correct:"rush", explanation: "The correct answer is 'rush'. An alarm can startle the firefighters and it's also a sign to tell them there's a fire they need to quickly put out."},
    {part1:"Katie is a ", part2:" dancer.", w1:"graceful", w2:"run", w3:"annoy", correct:"graceful", explanation:"The correct answer is 'graceful'. We can't descibe Katie as a dancer by using the words 'run' or 'annoy'."},
    {part1:"It is easy to ride a bicycle on the road that is ", part2:" or even.", w1:"rough", w2:"flat", w3:"bumpy", correct:"flat", explanation: "The correct answer is 'flat'. When riding a bicycle, it would be hard to ride it on a road that is 'rough or 'bumpy'."},
    {part1:"The sharp tip of the pencil that peter is using is ", part2:".", w1:"pointed", w2:"broken", w3:"dull", correct:"pointed", explanation: "The correct answer is 'pointed'. Key word in this sentence is 'sharp'. From the answer choices, 'pointed' is closely related."},
    {part1:"Jerry's clothes were ", part2:" when it rained.", w1:"dry", w2:"damp", w3:"ripped", correct:"damp", explanation: "The correct answer is 'damp'. We know that rain makes you wet. The word 'damp' is the closest word to wet."},
    {part1:"Can you ", part2:" me the good news?", w1:"yell", w2:"tell", w3:"spell", correct:"tell", explanation: "The correct answer is 'tell'. When we talk about news, we don't 'yell' or 'spell'."},
    {part1:"I've been ", part2:" why the sky is blue.", w1:"wishing", w2:"washing", w3:"wondering", correct:"wondering", explanation: "The correct answer is 'wondering'. The key word here is 'why'. The words 'wishing' or 'washing' does not work."},
    {part1:"I'm so tired, I have to catch up on ", part2:" this weekend.", w1:"exercise", w2:"sleep", w3:"chores", correct:"sleep", explanation: "The correct answer is 'sleep'. If we're tired, we would not want to 'exercise' or do 'chores'."},
    {part1:"How much do these shoes cost? What is the ", part2:"?", w1:"price", w2:"material", w3:"length", correct:"price", explanation: "The correct answer is 'price'. The key word here is 'cost'. 'Length' and 'material' are irrelevant to the word 'cost'."},
    {part1:"These pants are too ", part2:" I need a larger size.", w1:"tight", w2:"baggy", w3:"wide", correct:"tight", explanation: "The correct answer is 'tight'. If we need a larger size, then the pants were most likely the opposite of large."},
    {part1:"The weather changed so ", part2:" it went from sunny to rainy.", w1:"suddenly", w2:"naturally", w3:"smoothly", correct:"suddenly", explanation: "The correct answer is 'suddently'. Rainy and sunny are opposites so they would not go 'smoothly' or 'naturally'."},
    {part1:"I felt ", part2:" after finishing my difficult homework.", w1:"accomplished", w2:"sad", w3:"drowsy", correct:"accomplished", explanation: "The correct answer is 'accomplished'. If we 'finished' homework, we wouldn't feel 'sad' or 'drowsy' because we completed the homework."},
    {part1:"The performers felt ", part2:" once they saw the huge audience.", w1:"quiet", w2:"calm", w3:"anxious", correct:"anxious", explanation: "The correct answer is 'anxious'. When performers see a huge audience, they feel nervous. The closes word to this is 'anxious'."},
    {part1:"The boy smelled the sweet ", part2:" of cookies that his mom baked.", w1:"aroma", w2:"nose", w3:"sight", correct:"aroma", explanation: "The correct answer is 'aroma'. 'Aroma' means a good smell. They boy can't smell his 'nose' or 'sight'."},
    {part1:"Clothes are made from different ", part2:", such as cotton, leather, wool.", w1:"materials", w2:"length", w3:"sizes", correct:"materials", explanation: "The correct answer is 'material'. Given the examples, cotton, leather, and wool, these are not 'length' or 'sizes'."},
    {part1:"I like listening to different ", part2:" of music. My favorite are classical, pop, and jazz.", w1:"sounds", w2:"plays", w3:"genres", correct:"genres", explanation: "The correct answer is 'genre'. Given the examples, classical, pop, and jazz, these are not 'sounds' or 'plays'."}
    ];

var GNNumSents = 16;
var grammar = [
    {part1:"Tina ", part2:" her two pet dogs.", w1:"and", w2:"at", w3:"a", correct:"and", explanation: "The correct answer is 'and'. Dogs are not a place and there are more than one."}, 
    {part1:"The red apple is ", part2:" on that tree.", w1:"growing", w2:"grew", w3:"grow", correct:"growing", explanation: "The correct answer is 'growing'. The key word is 'is' it is in present tense."}, 
    {part1:"", part2:" late for class today.", w1:"Your", w2:"You're", w3:"You", correct:"You're", explanation: "The correct answer is 'You're'. 'You are' makes sense here because it is not possessive."},
    {part1:"", part2:" not your turn yet.", w1:"It's", w2:"Its", w3:"It", correct:"It's", explanation: "The correct answer is 'It's'. 'It is' makes sense here because it is not possessive."},
    {part1:"The cat was licking ", part2:" tail.", w1:"it is", w2:"it", w3:"its", correct:"its", explanaiton: "The correct answer is 'its'. The tail is the cat's tail so we need a possessive 'its'."},
    {part1:"I was jealous that David ", part2:" three balloons yesterday.", w1:"has", w2:"have", w3:"had", correct:"had", explanation: "The correct answer is 'had'. The key words are 'was' and 'yesterday'. We need a word for the past tense."},
    {part1:"She ", part2:" two toffees already.", w1:"had", w2:"has", w3:"have", correct:"had", explanation: "The correct answer is 'had'. The key word 'already'. We need a word for the past tense."},
    {part1:"I ", part2:" many colorful pencils for class today.", w1:"have", w2:"has", w3:"had", correct:"have", explanation: "The correct answer is 'have'. The key word is 'today'. We need a word for the present tense."},
    {part1:"She ", part2:" his offer to drive her home.", w1:"accepted", w2:"excepted", w3:"exempted", correct:"accepted", explanation: "The correct answer is 'accepted'. 'Excepted' and 'exempted' have different meanings."},
    {part1:"There was a big storm with thunder and ", part2:".", w1:"lighting", w2:"lightening", w3:"lightning", correct:"lightning", explanation: "The correct answer is 'lightning'. 'Lighting' and 'lightening' have different meanings."}
    {part1:"We ", part2:" on Thanksgiving Day.", w1:"feast", w2:"feasts", w3:"feastes", correct:"feast", explanation:"The correct answer is 'feast'. 'Feast' is the correct plural form of the noun."},
    {part1:"My mom made many apple ", part2:" !", w1:"pie", w2:"pies", w3:"piees", correct:"pies", explanation:"The correct answer is 'pies'. The correct plural form of the noun is 'pies'."},
    {part1:"We drove ", part2:" the concert hall.", w1:"too", w2:"two", w3:"to", correct:"to", explanation:"The correct answer is 'to'. These words are homonyms. 'To' is the correct use in this sentence."},
    {part1:"Sally and Charles each have a cookie. There are ", part2:" cookies.", w1:"two", w2:"too", w3:"to", correct:"two", explanation:"The correct answer is 'two'. These words are homonyms. 'Two' is the correct use in this sentence."},
    {part1:"Bring ", part2:" own pencil to class.", w1:"Your", w2:"You're", w3:"You", correct:"Your", explanation: "The correct answer is 'Your'. 'Your' makes sense here because it is possessive."},
    {part1:"I love dogs ", part2:" I hate cats.", w1:"but", w2:"and", w3:"or", correct:"but", explanation: "The correct answer is 'but'. 'Love' and 'hate' are opposites. The word 'but' is used to show something that is contrasting."}
    ];



