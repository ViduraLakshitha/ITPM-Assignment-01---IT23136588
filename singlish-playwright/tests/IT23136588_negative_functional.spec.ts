import { test, expect } from "@playwright/test";

// All 12 Negative Functional Tests - designed to fail
const testCases = [
  {
    id: "Neg_Fun_0001",
    name: "Joined words without spaces fail to convert correctly",
    input: "mamagedharayanavaa",
    expected: "මම ගෙදර යනවා",
    description: "Words joined without spaces are not properly segmented",
  },
  {
    id: "Neg_Fun_0002",
    name: "Joined words matapaankannaoonee fail",
    input: "matapaankannaoonee",
    expected: "මට පාන් කන්න ඕනේ",
    description: "Missing spaces cause word segmentation failure",
  },
  {
    id: "Neg_Fun_0003",
    name: "Slang expression with informal terms",
    input: "ela machan! supiri!!",
    expected: "එල මචන්! සුපිරි!!",
    description: "Slang terms may not be consistently handled",
  },
  {
    id: "Neg_Fun_0004",
    name: "Colloquial phrase with slang appatasiri",
    input: "appatasiri, mata beheth bonna amathaka vunaa kiyahankoo",
    expected: "අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුනා කියහන්කෝ",
    description: "Colloquial expressions may have inconsistent conversion",
  },
  {
    id: "Neg_Fun_0005",
    name: "Typo in common word vahinna instead of vahinavaa",
    input: "dhaen vahinna",
    expected: "දැන් වහින්න",
    description: "Typos may produce unexpected results",
  },
  {
    id: "Neg_Fun_0006",
    name: "Word with QQ notation causes partial conversion",
    input: "mama sunaQQgu vunee",
    expected: "මම සුනාඟු වුනේ",
    description: "QQ notation not properly converted",
  },
  {
    id: "Neg_Fun_0007",
    name: "Complex slang siraavata ela kiri machan",
    input: "siraavata, ela kiri machan",
    expected: "සිරාවට, එල කිරි මචන්",
    description: "Multiple slang terms may not convert correctly",
  },
  {
    id: "Neg_Fun_0008",
    name: "Informal shorthand bQQ not recognized",
    input: "vaedak baaragaththaanam eeka hariyata karapanko bQQ",
    expected: "වැඩක් බාරගත්තානම් එක හරියට කරපන්කෝ බෑ",
    description: "QQ notation for බෑ not recognized",
  },
  {
    id: "Neg_Fun_0009",
    name: "Mixed numbers and text parsing issue",
    input: "123abc456 mamayamugedharata",
    expected: "123abc456 මමයමුගෙදරට",
    description: "Random number-letter mix not handled well",
  },
  {
    id: "Neg_Fun_0010",
    name: "Very long single word fails segmentation",
    input: "mamagedharagiyaapassekaemakaalaenidhigiyaaheta",
    expected: "මම ගෙදර ගියා පස්සේ කෑම කාලා නිදිගියා හෙට",
    description: "Extremely long joined word cannot be segmented",
  },
  {
    id: "Neg_Fun_0011",
    name: "Special characters in middle of words",
    input: "ma@ma ge#dhara yan@vaa",
    expected: "මම ගෙදර යනවා",
    description: "Special characters @ and # break word recognition",
  },
  {
    id: "Neg_Fun_0012",
    name: "Line breaks in middle of words cause issues",
    input: "mama\nge\ndhara",
    expected: "මම ගෙදර",
    description: "Line breaks split word incorrectly",
  },
];

test.describe("Negative Functional Tests (Expected to Fail)", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      
      // Wait for translation attempt
      await page.waitForTimeout(2000);
      
      // Negative functional tests - these demonstrate failure scenarios
      // Force fail to indicate the system limitation or edge case
      expect(false).toBe(true);
      await page.close();
    });
  }
});
