//IIFE
(async () => {
    const corsProxy = "http://coranywhere.herokuapp.com/";
    const url = "https://openwhyd.org/adrien?format=json";
    const response = await fetch(`${corsProxy}${url}`)
    const posts = await response.json();
    console.log(posts);
})()