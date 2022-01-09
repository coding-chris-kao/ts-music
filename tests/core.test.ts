import { Note } from "../libs/core";

describe("Note", () => {
  test("getNoteBySemitones", () => {
    const note = new Note("G");
    const res = note.getNoteBySemitones(5);
    expect(res.name).toBe("C");
  });

  test("getIntervalFrom", () => {
    const note1 = new Note("G");
    const note2 = new Note("C");
    const interval = note1.getIntervalFrom(note2);
    expect(interval).toBe(5);
  });
});
