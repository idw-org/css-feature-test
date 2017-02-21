function featureTest(property, value, { context = document } = {}) {
  let el = context.createElement("test");
  const cssText = ["-webkit-", "-moz-", "-ms-", "-o-", ""].map(
    x => `${property}:${x}${value};`
  );

  el.style.cssText = cssText.join("");
  return el.style.cssText;
}

module.exports = featureTest;
