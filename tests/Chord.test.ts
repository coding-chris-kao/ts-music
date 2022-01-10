import { Chord, ChordFactory } from "../libs/Chord";
import { ScaleType } from "../libs/Scale";

describe("ChordFactory", () => {
  test("getDiatonicChords", () => {
    let key: string;
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
    key = "E";
    chords = factory.getDiatonicChords(key, ScaleType.Minor);
    expect(chords.map((chord) => chord.toString())).toEqual([
      "Em",
      "F#dim",
      "G",
      "Am",
      "Bm",
      "C",
      "D",
      "Em",
    ]);
  });

  test("getDiatonicSeventhChords", () => {
    let key: string;
    let chords: Chord[];
    const factory = new ChordFactory();
    key = "C";
    chords = factory.getDiatonicSeventhChords(key, ScaleType.Major);
    expect(chords.map((chord) => chord.toString())).toEqual([
      "Cmaj7",
      "Dm7",
      "Em7",
      "Fmaj7",
      "G7",
      "Am7",
      "Bø7",
      "Cmaj7",
    ]);
    key = "B";
    chords = factory.getDiatonicSeventhChords(key, ScaleType.Major);
    expect(chords.map((chord) => chord.toString())).toEqual([
      "Bmaj7",
      "C#m7",
      "D#m7",
      "Emaj7",
      "F#7",
      "G#m7",
      "A#ø7",
      "Bmaj7",
    ]);
    key = "C";
    chords = factory.getDiatonicSeventhChords(key, ScaleType.Minor);
    expect(chords.map((chord) => chord.toString())).toEqual([
      "Cm7",
      "Dø7",
      "Ebmaj7",
      "Fm7",
      "Gm7",
      "Abmaj7",
      "Bb7",
      "Cm7",
    ]);
  });

  test("assemblies", () => {
    let key: string;
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
