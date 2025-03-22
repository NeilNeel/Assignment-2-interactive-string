// DOM ELEMENTS
const DomElementBtnStringReverse = document.querySelector(
  ".btn-reverse-string"
);
const DomElementBtnCheckPalindrome = document.querySelector(
  ".btn-check-palindrome"
);
const DomElementBtnTotalBill = document.querySelector(".btn-total-bill");
const DomElementFunctionContainerReverse = document.querySelector(
  ".function-container--reverse"
);
const DomElementFunctionContainerPalindrome = document.querySelector(
  ".function-container--palindrome"
);
const DomElementFunctionContainerTotalBill = document.querySelector(
  ".function-container--total-bill"
);

// FUNCTION TOGGLE
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

DomElementBtnStringReverse.addEventListener("click", () => {
  toggleFunctionContainer(DomElementFunctionContainerReverse);
});

DomElementBtnCheckPalindrome.addEventListener("click", () => {
  toggleFunctionContainer(DomElementFunctionContainerPalindrome);
});

DomElementBtnTotalBill.addEventListener("click", () => {
  toggleFunctionContainer(DomElementFunctionContainerTotalBill);
});
