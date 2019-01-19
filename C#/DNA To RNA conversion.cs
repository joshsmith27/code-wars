// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells.RNA differs slightly from DNA its chemical structure and contains no Thymine.In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a funciton which translates a given DNA string into RNA.

// For example:

//     DNAtoRNA ("GCAT") returns ("GCAU")

using System;

namespace Converter {
    public class Converter {
        public string dnaToRna (string dna) {
            return dna.Replace ("T", "U");
        }
    }
}