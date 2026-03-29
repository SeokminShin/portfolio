import PyPDF2
import sys

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            for i in range(min(5, len(reader.pages))): # Read first 5 pages for the big picture
                page = reader.pages[i]
                text += page.extract_text() + '\n'
            print(text)
    except Exception as e:
        print(f'Error reading PDF: {e}')

if __name__ == '__main__':
    read_pdf(sys.argv[1])
