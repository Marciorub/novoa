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

chapters_info = [
    {"num": 1, "title": "Os professores e os futuros da educação", "start_pdf": 11, "end_pdf": 20},
    {"num": 2, "title": "Professores: alargar as possibilidades de futuro", "start_pdf": 21, "end_pdf": 30},
    {"num": 3, "title": "A educação e os nossos futuros comuns", "start_pdf": 31, "end_pdf": 40},
    {"num": 4, "title": "Nada substitui um bom professor", "start_pdf": 41, "end_pdf": 50},
    {"num": 5, "title": "A liberdade como princípio e como fim", "start_pdf": 51, "end_pdf": 58},
    {"num": 6, "title": "O conhecimento profissional docente: consequências para a formação", "start_pdf": 59, "end_pdf": 78},
    {"num": 7, "title": "Jovens professores: o futuro da profissão", "start_pdf": 79, "end_pdf": 92},
    {"num": 8, "title": "Os professores depois da pandemia: a reinvenção do futuro", "start_pdf": 93, "end_pdf": 110},
    {"num": 9, "title": "E depois da pandemia? Recuperar ou transformar?", "start_pdf": 111, "end_pdf": 120},
    {"num": 10, "title": "Os professores e a mudança: que papel para a formação?", "start_pdf": 121, "end_pdf": 134}
]

output_file = r"C:\Users\marci\Desktop\site novoa\book_academic_analysis.md"

with open(output_file, "w", encoding="utf-8") as f:
    f.write("# Análise Acadêmica Detalhada: Professores: Libertar o Futuro (António Nóvoa, 2023)\n\n")
    f.write("Esta análise profunda foi extraída diretamente do texto do livro para alimentar a plataforma interativa com o máximo rigor epistemológico.\n\n")
    
    for chap in chapters_info:
        f.write(f"## Capítulo {chap['num']}: {chap['title']}\n")
        f.write(f"**Páginas PDF**: {chap['start_pdf']} a {chap['end_pdf']} | **Páginas Impressas**: {chap['start_pdf']-2} a {chap['end_pdf']-2}\n\n")
        
        chapter_text = ""
        for p in range(chap['start_pdf'] - 1, chap['end_pdf']):
            chapter_text += reader.pages[p].extract_text() + "\n"
        
        # Clean double spaces, newlines, etc.
        clean_text = re.sub(r'\s+', ' ', chapter_text)
        
        # Find some key quotes and terms
        f.write("### Conceitos-Chave e Citações Identificadas:\n")
        
        # Try to find citations in quotes or interesting concepts
        # Let's search for interesting sentences containing keywords
        keywords = ["escola", "professor", "futuro", "comum", "liberdade", "conhecimento", "formação", "pandemia", "celular", "terceiro", "pública", "trabalho"]
        found_sentences = []
        
        # Split by sentences (approximate)
        sentences = re.split(r'(?<=[.!?])\s+', chapter_text)
        for sent in sentences:
            sent_clean = sent.replace('\n', ' ').strip()
            if len(sent_clean) > 60 and len(sent_clean) < 300:
                # check if it contains keywords and capitalized names
                if any(kw in sent_clean.lower() for kw in ["metamorfose", "terceiro lugar", "pública ação", "comum", "contingente", "coletivo", "celular"]):
                    found_sentences.append(sent_clean)
                elif '"' in sent_clean or '“' in sent_clean or '”' in sent_clean or '«' in sent_clean or '»' in sent_clean:
                    found_sentences.append(sent_clean)
        
        # Deduplicate and limit
        found_sentences = list(dict.fromkeys(found_sentences))[:6]
        
        for s in found_sentences:
            f.write(f"- *\"{s}\"*\n")
            
        f.write("\n### Lentes de Discussão Crítica (Tensionamento):\n")
        f.write("1. **Articulação com outros pensadores**: Quais teóricos são explicitados ou implícitos no texto?\n")
        f.write("2. **Problemática Epistemológica**: Quais contradições estruturais o autor aponta?\n\n")
        f.write("---\n\n")

print(f"Academic analysis markdown written to: {output_file}")
