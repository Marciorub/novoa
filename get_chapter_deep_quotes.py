import pypdf
import os
import sys
import re

# Set standard output encoding to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\marci\Desktop\site novoa\Professores_Libertar_Futuro (1).pdf"

if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
    sys.exit(1)

reader = pypdf.PdfReader(pdf_path)

chapters = [
    {"num": 1, "start_pdf": 11, "end_pdf": 20},
    {"num": 2, "start_pdf": 21, "end_pdf": 30},
    {"num": 3, "start_pdf": 31, "end_pdf": 40},
    {"num": 4, "start_pdf": 41, "end_pdf": 50},
    {"num": 5, "start_pdf": 51, "end_pdf": 58},
    {"num": 6, "start_pdf": 59, "end_pdf": 78},
    {"num": 7, "start_pdf": 79, "end_pdf": 92},
    {"num": 8, "start_pdf": 93, "end_pdf": 108},
    {"num": 9, "start_pdf": 111, "end_pdf": 120},
    {"num": 10, "start_pdf": 121, "end_pdf": 134}
]

print("=== DEEP PARAGRAPHS FROM EACH CHAPTER ===")

for chap in chapters:
    print(f"\n====================== CHAPTER {chap['num']} ======================")
    chapter_text = ""
    for p in range(chap['start_pdf'] - 1, chap['end_pdf']):
        chapter_text += reader.pages[p].extract_text() + "\n"
    
    # Let's extract 3 long paragraphs that have key educational concepts
    # Split text into paragraphs by double newlines or single newlines followed by indentation/capital letters
    paragraphs = re.split(r'\n(?=[A-Z])', chapter_text)
    
    count = 0
    for para in paragraphs:
        para_clean = para.replace('\n', ' ').strip()
        para_clean = re.sub(r'\s+', ' ', para_clean)
        
        # Check if this looks like a substantial academic paragraph
        if len(para_clean) > 300 and len(para_clean) < 1200:
            # Check if it has key words
            if any(kw in para_clean.lower() for kw in ["comum", "relação", "metamorfose", "terceiro", "formação", "isolamento", "pandemia", "digital", "tecnolog", "autoria", "escrita"]):
                print(f"\nParagraph (len={len(para_clean)}):")
                print(para_clean)
                count += 1
                if count >= 3:
                    break
