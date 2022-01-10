import { Chord, ChordFactory } from "../libs/Chord";
import { NoteName } from "../libs/constant";
import { ScaleType } from "../libs/Scale";

describe("ChordFactory", () => {
  test("getDiatonicChords", () => {
    let key: NoteName;
    let chords: Chord[];
    const factory = new ChordFactory();
    key = "C";
    chords = factory.getDiatonicChords(key, ScaleType.Major);
    expect(chords.map((chord) => chord.toString())).toEqual([
      "C",
      "Dm",
      "Em",
      "F",
      "G",
      "Am",
      "Bdim",
      "C",
    ]);
    key = "B";
    chords = factory.getDiatonicChords(key, ScaleType.Major);
    expect(chords.map((chord) => chord.toString())).toEqual([
      "B",
      "C#m",
      "D#m",
      "E",
      "F#",
      "G#m",
      "A#dim",
      "B",
    ]);
  });

  test("assemblies", () => {
    let key: NoteName;
    let chords: Chord[];
    const factory = new ChordFactory();
    key = "C";
    chords = factory.getDiatonicChords(key, ScaleType.Major);
    expect(chords[0].getAssemblies()).toBe("C, E, G");
    expect(chords[1].getAssemblies()).toBe("D, F, A");
    expect(chords[2].getAssemblies()).toBe("E, G, B");
    expect(chords[3].getAssemblies()).toBe("F, A, C");
    expect(chords[4].getAssemblies()).toBe("G, B, D");
    expect(chords[5].getAssemblies()).toBe("A, C, E");
    expect(chords[6].getAssemblies()).toBe("B, D, F");

    key = "A";
    chords = factory.getDiatonicChords(key, ScaleType.Minor);
    expect(chords[0].getAssemblies()).toBe("A, C, E");
    expect(chords[1].getAssemblies()).toBe("B, D, F");
    expect(chords[2].getAssemblies()).toBe("C, E, G");
    expect(chords[3].getAssemblies()).toBe("D, F, A");
    expect(chords[4].getAssemblies()).toBe("E, G, B");
    expect(chords[5].getAssemblies()).toBe("F, A, C");
    expect(chords[6].getAssemblies()).toBe("G, B, D");
  });
});
