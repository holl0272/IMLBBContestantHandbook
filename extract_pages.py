import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
from PIL import Image
import fitz
import os

pdf_path = 'C:/IML Handbook project/2026 IMLBB Handbook.pdf'
doc = fitz.open(pdf_path)
img_path = 'C:/IML Handbook project/temp_page.png'

for page_idx in range(33, 55):  # pages 34-55 (0-indexed)
    page_num = page_idx + 1
    page = doc[page_idx]
    mat = fitz.Matrix(3, 3)  # ~216 dpi
    pix = page.get_pixmap(matrix=mat)
    pix.save(img_path)
    img = Image.open(img_path)
    text = pytesseract.image_to_string(img, config='--psm 6')
    print(f'=== PAGE {page_num} ===')
    print(text)
    print()

if os.path.exists(img_path):
    os.remove(img_path)

print('DONE')
