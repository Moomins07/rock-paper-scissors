# rock-paper-scissors

As part of the Odin Project curriculum, my task was to create a simple rock paper scissors game that would successfully run/play 5 rounds of RPS in the console and announce a winner at the end. It was quite a reality check, as after 10 hours of theory and reading before beginning the project, I found myself very quickly stumped as to how to start the project and the best way to reach a result.

I have improved my understanding of functions and the use of functions inside of other functions, arrays, switch/if statements and various methods such as prompt(). 

I had issues with keeping score as I did not refamiliarise myself with postfix and prefix operators. (++ & --). I was using ++ after the variable (variable++) and not before (++variable) which resulted in the variable value being returned pre-increment. I worked around this issue at the time by creating 2 functions that would both respectively increment and decrement the score; I made sure both functions were called before I logged the variable value. E.G:

``int i = 10; // (1) i === 10
int j = ++i;  // (2) j === 11
int k = i++;  // (3) i === 12 BUT the original value of i (which is 11) is copied into k. So k now equals 11.

So after running the code, i will be 12 but both j and k will be 11.``

I did not git commit often enough. I need to increase how often I commit and improve commit messages.

