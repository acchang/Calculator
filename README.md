This is my solution to The Odin Project calculator project
https://www.theodinproject.com/courses/web-development-101/lessons/calculator

11/25/21
I refactored my calculator a bit.

* I can now change operator after entering. Before I had a "don't hit operator twice" error message.
* I used ToPrecision to limit the length of long numbers and round them. Previously I just turned them into strings and truncated them.
* I updated the evaluate function so that hitting "=" again just repeated the last operation. Before, it just didn't do anything.
* I updated how numbers behave. Before, it was more complex, if there was a decimal, it concatenated a new number and if no decimal it started again. Now it just starts again.


11/20/21
After a 9-month hiatus, I'm returning to tweak this and re-orient myself with JS.

I want the calculator to clear previous operator instead of giving an error message when a new operator is pressed.


For github pages, I got an email "No `/docs` folder was found to build GitHub Pages".

So I went to https://github.com/acchang/Calculator/settings/pages
And changed Branch: master / (root) from Branch: master / docs

The calculator worked both ways from https://acchang.github.io/
 

 