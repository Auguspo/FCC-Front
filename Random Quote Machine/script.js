import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
{
  text: "Anyone, Who Truly Wants To Go To War, Has Truly Never Been There Before!",
  author: "Larry Reeves" },

{
  text: "Older Men Declare War. But It Is The Youth That Must Fight And Die.",
  author: "Herbert Hoover" },

{
  text: "Mankind Must Put An End To War, Or War Will Put An End To Mankind.",
  author: "John F. Kennedy" },

{
  text: "Battles are won by slaughter and maneuver. The greater the general, the more he contributes in maneuver, the less he demands in slaughter.",
  author: "Winston Churchill" }];





const QuoteBox = ({ quote, handleNewQuote }) => /*#__PURE__*/
React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
React.createElement("h2", { id: "author" }, quote.author), /*#__PURE__*/
React.createElement("div", { class: "actions" }, /*#__PURE__*/
React.createElement("button", {
  id: "new-quote",
  class: "button",
  onClick: handleNewQuote }, "New Quote"), /*#__PURE__*/



React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet",
  target: "_blank" }, "Tweet")));









const randomNumber = (max) =>
Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);


const App = () => {
  const [quote, setQuote] = React.useState(quoteData[randomNumber()]);

  const handleNewQuote = () => {
    setQuote(quoteData[randomNumber()]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(QuoteBox, { handleNewQuote: handleNewQuote, quote: quote })));


};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));