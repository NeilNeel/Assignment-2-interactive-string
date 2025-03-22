// **************************
// DOM ELEMENTS
// **************************
const DomElementBtnStringReverseNav = document.querySelector(
  ".btn-reverse-string"
);
const DomElementBtnCheckPalindromeNav = document.querySelector(
  ".btn-check-palindrome"
);
const DomElementBtnTotalBillNav = document.querySelector(".btn-total-bill");
const DomElementFunctionContainerReverse = document.querySelector(
  ".function-container--reverse"
);
const DomElementFunctionContainerPalindrome = document.querySelector(
  ".function-container--palindrome"
);
const DomElementFunctionContainerTotalBill = document.querySelector(
  ".function-container--total-bill"
);

// **************************
// ouptput elements
// **************************
const DomElementOutputStringReverse = document.querySelector(
  ".reverse-string-output"
);
const DomElementOutputCheckPalindrome = document.querySelector(
  ".palindrome-check-output"
);
const DomElementOutputTotalBill = document.querySelector(".total-bill-output");

// **************************
// INPUT ELEMENT
// **************************
const DomElementInputString = document.querySelector("#reverse-string-input");
const DomElementInputPalindrome = document.querySelector("#palindrome-check");
const DomElementInputTotalBill = document.querySelector("#total-bill");
const DomElementTipPercentage = document.querySelector("#tip-percentage");

const btnReverseString = document.querySelector(".btn--reverse");
const btnCheckPalindrome = document.querySelector(".btn--check-palindrome");
const btnTotalBill = document.querySelector(".btn--total-bill");

// **************************
// FUNCTION TOGGLE
// **************************
const toggleFunctionContainer = (container) => {
  const containers = [
    DomElementFunctionContainerReverse,
    DomElementFunctionContainerPalindrome,
    DomElementFunctionContainerTotalBill,
  ];

  containers.forEach((cont) => {
    if (cont !== container) {
      cont.classList.remove("function-container--active");
    }
  });

  container.classList.add("function-container--active");
};

DomElementBtnStringReverseNav.addEventListener("click", () => {
  toggleFunctionContainer(DomElementFunctionContainerReverse);
});

DomElementBtnCheckPalindromeNav.addEventListener("click", () => {
  toggleFunctionContainer(DomElementFunctionContainerPalindrome);
});

DomElementBtnTotalBillNav.addEventListener("click", () => {
  toggleFunctionContainer(DomElementFunctionContainerTotalBill);
});

// **************************
// FUNCTION TO REVERSE A STRING
// **************************
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const handleReverseString = () => {
  const inputString = DomElementInputString.value;
  DomElementOutputStringReverse.innerText = reverseString(inputString);
  DomElementInputString.value = "";
};

btnReverseString.addEventListener("click", handleReverseString);

// **************************
// FUNCTION TO CHECK PALINDROME
// **************************
const handleCheckPalindrome = () => {
  const inputNum = DomElementInputPalindrome.value;
  const reversedNum = reverseString(inputNum);
  if (inputNum === reversedNum) {
    DomElementOutputCheckPalindrome.innerText = "Palindrome";
  } else {
    DomElementOutputCheckPalindrome.innerText = "Not Palindrome";
  }
  DomElementInputPalindrome.value = "";
};

btnCheckPalindrome.addEventListener("click", handleCheckPalindrome);

// **************************
// FUNCTION TO Total BIll
// **************************
const handleTotalBill = () => {
  const inputSubTotal = Number(DomElementInputTotalBill.value);
  const tipPercentage = Number(DomElementTipPercentage.value);
  const tipAmount = (inputSubTotal * tipPercentage) / 100;
  const totalBill = inputSubTotal + tipAmount;
  DomElementOutputTotalBill.innerText = `Total Bill: $${totalBill.toFixed(2)}`;

  DomElementInputTotalBill.value = "";
  DomElementTipPercentage.value = "";
};

btnTotalBill.addEventListener("click", handleTotalBill);
