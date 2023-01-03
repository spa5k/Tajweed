import { describe, expect, it } from "vitest";
import { Tajweed } from "../src";

describe("Simple", () => {
  const tajweed = new Tajweed();
  it(`1.`, () => {
    expect(
      tajweed.parse("۞ ٱللَّهُ نُورُ [h:9421[ٱ][l[ل]سَّمَ[n[ـٰ]و[n[َٲ]"),
    ).toBe(
      "۞ ٱللَّهُ نُورُ <tajweed class=\"ham_wasl\" data-type=\"hamza-wasl\" data-description=\"Hamzat ul Wasl\" data-tajweed=\":9421\">ٱ</tajweed><tajweed class=\"slnt\" data-type=\"laam-shamsiyah\" data-description=\"Lam Shamsiyyah\" data-tajweed=\"\">ل</tajweed>سَّمَ<tajweed class=\"madda_normal\" data-type=\"madda-normal\" data-description=\"Normal Prolongation: 2 Vowels\" data-tajweed=\"\">ـٰ</tajweed>و<tajweed class=\"madda_normal\" data-type=\"madda-normal\" data-description=\"Normal Prolongation: 2 Vowels\" data-tajweed=\"\">َٲ</tajweed>",
    );
  });
  it(`1.`, () => {
    expect(tajweed.parse("[h:9421[ٱ]")).toBe(
      "<tajweed class=\"ham_wasl\" data-type=\"hamza-wasl\" data-description=\"Hamzat ul Wasl\" data-tajweed=\":9421\">ٱ</tajweed>",
    );
  });
});
