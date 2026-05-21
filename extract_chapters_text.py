import pypdf
import os
import sys

# Set standard output encoding to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\marci\Desktop\site novoa\Professores_Libertar_Futuro (1).pdf"

if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
    sys.exit(1)

reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"Total pages in PDF: {total_pages}")

chapters_info = [
    {"num": 1, "title": "Os professores e os futuros da educação", "start": 9, "end": 18},
    {"num": 2, "title": "Professores: alargar as possibilidades de futuro", "start": 19, "end": 28},
    {"num": 3, "title": "A educação e os nossos futuros comuns", "start": 29, "end": 38},
    {"num": 4, "title": "Nada substitui um bom professor", "start": 39, "end": 48},
    {"num": 5, "title": "A liberdade como princípio e como fim", "start": 49, "end": 56},
    {"num": 6, "title": "O conhecimento profissional docente: consequências para a formação", "start": 57, "end": 76},
    {"num": 7, "title": "Jovens professores: o futuro da profissão", "start": 77, "end": 90},
    {"num": 8, "title": "Os professores depois da pandemia: a reinvenção do futuro", "start": 91, "end": 108},
    {"num": 9, "title": "E depois da pandemia? Recuperar ou transformar?", "start": 109, "end": 118},
    {"num": 10, "title": "Os professores e a mudança: que papel para a formação?", "start": 119, "end": 132}
]

# Let's write a file containing high-quality analysis of each chapter by scanning the pages!
print("Extracting summaries and key citations for each chapter...")

for chap in chapters_info:
    print(f"\n=== CHAPTER {chap['num']}: {chap['title']} (Pages {chap['start']} - {chap['end']}) ===")
    
    # We will search for all capitalized names (potential authors) and look at the actual text to find key citations
    chapter_text = ""
    # In PDF, page numbers in index are 1-based and correspond to printed pages, let's map them to 0-based index.
    # Note that in pypdf, reader.pages is 0-indexed. Let's find the page that starts with "Capítulo X" or similar, or use the page ranges.
    # Let's do a search on pages to find where "Capítulo X" appears, or use approximate page ranges (usually offset by some number of preface pages).
    # Let's inspect page content around those page numbers.
    
# Let's find the exact pages in the PDF for each chapter by searching for "Capítulo 1", "Capítulo 2", etc.
for idx, page in enumerate(reader.pages):
    text = page.extract_text()
    for chap in chapters_info:
        marker = f"Capítulo {chap['num']}"
        if marker.lower() in text.lower():
            print(f"Found '{marker}' at PDF Page {idx + 1}")
