// JavaScript source code
function buttype(){
   let buttype = document.getElementById('solbuttype');
   buttype.innerHTML = "The default value for attribute type is \"submit\". If it is within a form element it it will try to submit the form.Hence button in Q1 will submit the form.<br> &lt;type=\"button\"&gt; means it is just a normal button and you have to bind click event to it to do some action.";

   let solbutreason =  document.getElementById('solbutreason');
   solbutreason.innerHTML = "Why should you always declare a type attribute?<br>1) Clear definition of what the button does.<br>When a button does not have a type attribute, its usage is unclear. It may be obvious to you when writing the code that the button submits the form. But part of being a good software developer is to write code that is easy to maintain and understand for others. By adding the type attribute, future developers or even Future You can quickly and easily work out the purpose of the button.<br>2) Avoid bugs<br>\"Why is that form submitting when I click this unrelated button?\" Follow this advice and you and anyone who works with your code will never have this bug again:For any button that doesn't submit or reset form data, add a type attribute of button. If everyone who wrote HTML understood that buttons act as submit buttons by default, then this advice wouldn't be necessary. Unfortunately not everyone does, so in the meantime, please declare a button type.";
}
